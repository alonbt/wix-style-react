import React from 'react';
import PropTypes from 'prop-types';

import { classes as theme } from './NestableListTheme.st.css';
import { classes, st } from './StyledNestableList.st.css';
import NestableList from '../NestableList';
import TableListItem from '../TableListItem';
import Box from '../Box';

import { Arrow } from './Arrow';
import { TextButton } from '../index';
import Add from 'wix-ui-icons-common/Add';
import {
  isFistItem,
  isLastItem,
  isRootItem,
  moveItemOutsideOfTheParent,
  moveItemToTheChildOfPrevSibling,
  moveItemVertically,
  setCollapse,
  VerticalMovementDirection,
} from '../NestableList/utils';

/** A styled list with drag and drop and nesting capabilities. */
class StyledNestableList extends React.PureComponent {
  state = {
    movedItem: null,
    backup: null,
    isDragging: false,
    isInternalStateUpdate: false,
    items: this.props.items,
  };
  // according to make possible use setState along with getDerivedStateFromProps
  // https://stackoverflow.com/questions/51019936/why-getderivedstatefromprops-is-called-after-setstate
  _setStateDecorator = state => {
    this.setState({
      ...state,
      isInternalStateUpdate: true,
    });
  };

  static getDerivedStateFromProps = (props, state) => {
    if (state.isInternalStateUpdate) {
      return {
        ...state,
        isInternalStateUpdate: false,
      };
    }
    return {
      items: props.items,
    };
  };

  _renderArrow = ({
    isLastChild = false,
    isPreview = false,
    isPlaceholder,
  } = {}) => {
    return (
      <Box
        className={classes.arrowContainer}
        backgroundColor={isPlaceholder ? 'D60' : undefined}
        direction={'vertical'}
      >
        <div
          className={st(classes.arrow, {
            lastChild: isLastChild,
            preview: isPreview,
            placeholder: isPlaceholder,
          })}
        >
          <Arrow className={classes.horizontalArrow} />
        </div>
      </Box>
    );
  };

  _renderAction = data => {
    const label = data.isRootAction
      ? this.props.addItemLabel
      : data.item.addItemLabel;

    if (!label || this.props.maxDepth <= data.depth) {
      return;
    }
    return (
      <Box
        direction={'vertical'}
        className={st(
          classes.item,
          {
            rootAction: data.isRootAction,
            dragging: this.state.isDragging,
            withoutBottomBorder:
              !this.props.withBottomBorder &&
              ((data.veryLastItem && !data.addItemLabel) || data.isRootAction),
          },
          classes.actionItem,
        )}
      >
        <TableListItem
          onClick={() => this.props.onAddItem(data.item)}
          options={[
            {
              value: (
                <Box>
                  <TextButton size={'small'} prefixIcon={<Add />}>
                    {label}
                  </TextButton>
                </Box>
              ),
            },
          ]}
        />
      </Box>
    );
  };

  _renderPrefix = data => {
    if (
      data.isPreview ||
      isLastItem(data.siblings, data.item) ||
      isRootItem(data.depth)
    ) {
      return null;
    }
    return <div className={classes.childArrow} />;
  };

  _renderItem = options => {
    const {
      isPlaceholder,
      depth,
      isPreview,
      isVeryLastItem,
      siblings,
      item,
    } = options;
    const { id, children, isCollapsed, draggable = true, ...rest } = item;
    const isLastChild = isLastItem(siblings, item);
    const focused = this.state.movedItem && id === this.state.movedItem.id;
    return (
      <Box position={'relative'}>
        {!isRootItem(depth) &&
          this._renderArrow({
            isLastChild,
            isPreview,
            isPlaceholder,
          })}
        <div
          className={st(classes.item, {
            root: isRootItem(depth),
            firstSibling: isFistItem(siblings, item),
            placeholder: isPlaceholder,
            preview: isPreview,
            focused,
            dragging: this.state.isDragging || focused,
            withoutBottomBorder:
              isVeryLastItem &&
              !this.props.withBottomBorder &&
              !this.props.addItemLabel,
          })}
        >
          <TableListItem
            {...rest}
            focused={focused}
            onBlur={this._onBlur}
            onKeyUp={e => this._moveItemViaKeyboard(e, options)}
            showDivider={false}
            dragging={isPreview || focused}
            dragDisabled={!draggable && !this.props.readOnly}
            draggable={!this.props.readOnly}
            options={rest.options ? rest.options : []}
          />
        </div>
      </Box>
    );
  };

  _onBlur = () => {
    this._releaseItems();
  };

  _moveItemViaKeyboard = (e, itemOptions) => {
    const left = 'ArrowLeft';
    const top = 'ArrowUp';
    const right = 'ArrowRight';
    const bottom = 'ArrowDown';
    const enter = 'Enter';
    const esc = 'Escape';
    // start dragend-drop
    if (e.key === enter && !this.state.movedItem) {
      this._setStateDecorator({
        backup: this.state.items,
        movedItem: itemOptions.item,
        items: setCollapse(this.state.items, itemOptions.item.id, true),
      });
    }

    if (!this.state.movedItem) {
      return;
    }

    switch (e.key) {
      case esc:
        this._setStateDecorator({
          items: this.state.backup,
          backup: null,
          movedItem: null,
        });
        break;
      case left:
        if (!this.props.preventChangeDepth) {
          this._setStateDecorator({
            items: moveItemOutsideOfTheParent(
              this.state.items,
              itemOptions.item,
            ),
          });
        }
        break;
      case right:
        if (!this.props.preventChangeDepth) {
          this._setStateDecorator({
            items: moveItemToTheChildOfPrevSibling(
              this.state.items,
              itemOptions.item,
            ),
          });
        }
        break;
      case top:
        this._setStateDecorator({
          items: moveItemVertically(
            this.state.items,
            itemOptions.item,
            VerticalMovementDirection.top,
          ),
        });
        break;
      case bottom:
        this._setStateDecorator({
          items: moveItemVertically(
            this.state.items,
            itemOptions.item,
            VerticalMovementDirection.bottom,
          ),
        });
        break;
      default:
      case enter:
        this._releaseItems();
        break;
    }
  };

  _releaseItems() {
    if (this.state.movedItem) {
      const releaseItems = setCollapse(
        this.state.items,
        this.state.movedItem.id,
        this.state.movedItem.isCollapsed,
      );
      this.props.onChange({
        items: releaseItems,
        item: this.state.movedItem,
      });
      this._setStateDecorator({
        movedItem: null,
        backup: null,
        items: releaseItems,
      });
    }
  }

  _onDragEnd = () => {
    this._setStateDecorator({
      isDragging: false,
    });
  };

  _onDragStart = () => {
    this._setStateDecorator({
      isDragging: true,
    });
  };

  render() {
    const {
      dataHook,
      className,
      maxDepth,
      onChange,
      preventChangeDepth,
    } = this.props;

    return (
      <div data-hook={dataHook} className={st(classes.root, {}, className)}>
        <NestableList
          items={this.state.items}
          renderItem={this._renderItem}
          renderPrefix={this._renderPrefix}
          renderAction={this._renderAction}
          onDragEnd={this._onDragEnd}
          onDragStart={this._onDragStart}
          onUpdate={({ items, item }) => {
            this._setStateDecorator({
              items: items,
            });
            onChange({ items, item: item.data });
          }}
          maxDepth={maxDepth}
          threshold={84}
          theme={theme}
          readOnly={this.props.readOnly}
          preventChangeDepth={preventChangeDepth}
          childrenStyle={{
            position: 'relative',
            marginLeft: '84px',
          }}
          childrenProperty={'children'}
          isRenderDraggingChildren={false}
        />
        {this.props.addItemLabel &&
          this._renderAction({
            depth: 0,
            isRootAction: true,
          })}
      </div>
    );
  }
}

StyledNestableList.displayName = 'StyledNestableList';

const Node = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isCollapsed: PropTypes.bool,
  addItemLabel: PropTypes.string,
  ...TableListItem.propTypes,
};

const NodeShape = PropTypes.shape(Node);
Node.children = PropTypes.arrayOf(NodeShape);

StyledNestableList.propTypes = {
  /** Add bottom border to the last node default is false*/
  withBottomBorder: PropTypes.bool,
  /** Prevents item from being dragging and removes draggable or dragDisabled icon */
  readOnly: PropTypes.bool,
  /** label for add new item button */
  addItemLabel: PropTypes.string,
  /** triggers in case when add new item button is clicked */
  onAddItem: PropTypes.func,
  /** triggers when order or nesting is changed */
  onChange: PropTypes.func,
  /** Maximum depth of the node three */
  maxDepth: PropTypes.number,
  /** Allow drop node only on it's own depth */
  preventChangeDepth: PropTypes.bool,
  /**
   * * __id__ - Specifies the item id
   * * __addItemLabel__ - Show add button with given label
   * * __isCollapsed__ - Whether to render the items children
   * * __children__ - A list of children of type item
   * * __draggable__ - turns on/off dragging ability
   * * All other TableListItem props
   */
  items: PropTypes.arrayOf(NodeShape),
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,
  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
};

StyledNestableList.defaultProps = {
  maxDepth: 10,
  withBottomBorder: false,
  preventChangeDepth: false,
  items: [],
  onAddItem: () => {},
};

export default StyledNestableList;
