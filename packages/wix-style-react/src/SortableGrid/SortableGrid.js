import React from 'react';
import PropTypes from 'prop-types';
import Container from '../DragAndDrop/Draggable/components/Container';
import { Draggable } from '../DragAndDrop/Draggable';
import withDNDContext from './withDNDContext';
import { st, classes } from './SortableGrid.st.css';
import { dataHooks, StripPosition } from './constants';

/** component allow you to implement drag and drop in grid layout */
class SortableGrid extends React.PureComponent {
  static defaultProps = {
    animationDuration: 0,
    animationTiming: '',
    droppable: true,
    insertPosition: 'any',
  };

  state = {
    items: this.props.items || [],
    animationShifts: {},
    draggedId: null,
    indexToInsert: null,
    originalIndex: null,
  };

  wrapperNodes = [];

  setWrapperNode = (node, index, item) => {
    this.wrapperNodes[index] = { node, index, item };
  };

  reSetAnimationState = (overrides = {}) => {
    this.setState({ animationShifts: {}, draggedId: null, ...overrides });
  };

  UNSAFE_componentWillReceiveProps({ items }) {
    // We clear state on drag end if element was dragged from another list,
    // `onDragEnd` will be called on "source" list, not "target" one.
    this.reSetAnimationState({ items: items ? items : this.state.items });
  }

  handleMoveOut = id => {
    this.reSetAnimationState({
      items: this.state.items.filter(it => it.id !== id),
    });
    this.wrapperNodes = this.wrapperNodes.filter(({ item }) => item.id !== id);
  };

  getInsertionIndex = (addedIndex, item) => {
    const { insertPosition } = this.props;
    const { items } = this.state;

    if (insertPosition === 'start') {
      return 0;
    }

    if (insertPosition === 'end') {
      return items.includes(item) ? items.length - 1 : items.length;
    }

    return addedIndex;
  };

  /**
   * Called when DragSource (list item) is hovered over DragTarget (other list item)
   * Calculates animation shifts & adds new element if it was dragged from another list
   *
   * @param {object} prop Prop
   * @param {number} prop.addedIndex Index to where dragged element should be added
   * @param {number} prop.removedIndex Index from where dragged element was removed
   * @param {number|string} prop.id item's `id`
   * @param {object} prop.item item from `items` prop that is being dragged
   * */
  handleHover = prop => {
    const { addedIndex, item } = prop;

    const indexToInsert = this.getInsertionIndex(addedIndex, item);
    const originalIndex = this.state.items.findIndex(
      ({ id }) => id === item.id,
    );

    this.setState(() => ({
      indexToInsert,
      originalIndex,
    }));
  };

  handleDrop = ({
    payload,
    addedIndex,
    removedIndex,
    addedToContainerId,
    removedFromContainerId,
  }) => {
    const index = this.getInsertionIndex(addedIndex, payload);
    this.reSetAnimationState();
    this.changeItemPlace(payload, index); // put element at right place after drop
    this.props.onDrop({
      payload,
      addedIndex: index,
      removedIndex,
      addedToContainerId,
      removedFromContainerId,
    });
  };

  changeItemPlace = (item, index) => {
    const items = [...this.state.items];
    const originalIndex = items.indexOf(item);
    if (originalIndex !== -1) {
      items.splice(originalIndex, 1);
    }
    items.splice(index, 0, item);
    this.setState({ items });
  };

  handleDragStart = data => {
    this.reSetAnimationState({ draggedId: data.id });
    if (this.props.onDragStart) {
      this.props.onDragStart(data);
    }
    this.setState({ indexToInsert: null });
  };

  handleDragEnd = data => {
    this.reSetAnimationState();
    if (this.props.onDragEnd) {
      this.props.onDragEnd(data);
    }
    this.setState({ indexToInsert: null });
  };

  renderPreview() {
    const { className, contentClassName, renderItem } = this.props;
    return (
      <div className={className}>
        <div className={contentClassName}>
          {this.state.items.map((item, index) => (
            <div key={`${item.id}-${index}-${this.props.containerId}`}>
              {renderItem({
                item,
                id: item.id,
                isPlaceholder: false,
                isPreview: false,
              })}
            </div>
          ))}
        </div>
      </div>
    );
  }

  renderItem = args => {
    const dropped = this.context.dragDropManager.monitor.didDrop();
    const dragging = this.context.dragDropManager.monitor.isDragging();

    return this.props.renderItem({
      ...args,
      isListInDragState: dragging && !dropped,
    });
  };

  render() {
    const {
      dataHook,
      className,
      contentClassName,
      groupName,
      dragPreview,
      containerId,
      withHandle,
      usePortal,
      animationDuration,
      animationTiming,
      droppable,
      startFixedElement,
      endFixedElement,
    } = this.props;
    const {
      items,
      animationShifts,
      draggedId,
      indexToInsert,
      originalIndex,
    } = this.state;
    const common = {
      groupName,
      droppable,
      containerId,
      onHover: this.handleHover,
      onMoveOut: this.handleMoveOut,
    };

    if (dragPreview) {
      return this.renderPreview();
    }

    return (
      <Container
        dataHook={dataHook}
        className={className}
        onDrop={this.handleDrop}
        total={this.state.items.length}
        {...common}
      >
        <div className={st(classes.sortableGridContent, contentClassName)}>
          {startFixedElement && (
            <div data-hook={dataHooks.START_FIXED_ELEMENT}>
              {startFixedElement}
            </div>
          )}

          {items.map((item, index) => {
            const isInitialPositionToDrop = indexToInsert === originalIndex;

            /**
             * define the strip position: in case when item is moved before the initial index, then
             * the strip between the grid items must be appeared on the right side of hovered item. Otherwise, strip
             * is on the left side of hovered item
             * */
            const stripPosition =
              indexToInsert < originalIndex
                ? StripPosition.RIGHT
                : StripPosition.LEFT;

            return (
              <Draggable
                key={`${item.id}-${containerId}`}
                shift={animationShifts[index]}
                hasDragged={!!draggedId && draggedId !== item.id}
                setWrapperNode={this.setWrapperNode}
                animationDuration={animationDuration}
                animationTiming={animationTiming}
                {...common}
                id={item.id}
                index={index}
                item={item}
                renderItem={this.renderItem}
                withHandle={withHandle}
                usePortal={usePortal}
                onDrop={this.handleDrop}
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                canDrag={this.props.canDrag}
                delay={this.props.delay}
                withStrip={
                  !isInitialPositionToDrop &&
                  index === indexToInsert &&
                  stripPosition
                }
                isInitialPositionToDrop={isInitialPositionToDrop}
                listOfPropsThatAffectItems={
                  this.props.listOfPropsThatAffectItems
                }
              />
            );
          })}

          {endFixedElement && (
            <div data-hook={dataHooks.END_FIXED_ELEMENT}>{endFixedElement}</div>
          )}
        </div>
      </Container>
    );
  }
}

SortableGrid.displayName = 'SortableGrid';

SortableGrid.contextTypes = {
  dragDropManager: PropTypes.object,
};

SortableGrid.propTypes = {
  /** indicates if user can drop item in the list by default it's true */
  droppable: PropTypes.bool,
  ...Draggable.propTypes,
  /** function that specifying where the item can be inserted */
  insertPosition: PropTypes.oneOf(['start', 'end', 'any']),
  /** in case of wrong position of item during drag you can force SortableList to use portals */
  usePortal: PropTypes.bool,
  /**
   if you are having nested SortableLists,
   list that you are currently dragging need to be marked as dragPreview
   inside of renderItem callback
   */
  dragPreview: PropTypes.bool,
  /** list of items with {id: any} */
  items: PropTypes.array,
  /** callback for drag start */
  onDragStart: PropTypes.func,
  /** callback for drag end */
  onDragEnd: PropTypes.func,
  /** className of the root container */
  className: PropTypes.string,
  /** className of the first items parent container */
  contentClassName: PropTypes.string,
  /** animation duration in ms, default = 0 - disabled */
  animationDuration: PropTypes.number,
  /** animation timing function, default = '' (ease) */
  animationTiming: PropTypes.string,
  /** callback that could prevent item from dragging */
  canDrag: PropTypes.func,
  /** number in seconds to add delay between initial mouseDown and drag start  */
  delay: PropTypes.number,
  /**
   In case that you are using some external props inside of renderItems method,
   you need to define them here.

   renderItem = ({ item }) => <div key={item.id}>{this.props.myAwesomeProp}</div>

   render() {
      return (
        <SortableList
          ...
          listOfPropsThatAffectItems={[this.props.myAwesomeProp]}
        />
      )
    }
   */
  listOfPropsThatAffectItems: PropTypes.array,
  /** Node which will be rendered before draggable items and this element won't be draggable */
  startFixedElement: PropTypes.node,
  /** Node which will be rendered after draggable items and this element won't be draggable */
  endFixedElement: PropTypes.node,
};

SortableGrid.defaultProps = {};

export default withDNDContext(SortableGrid);
