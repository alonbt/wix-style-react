import React from 'react';
import {
  addToTree,
  generateUniqueGroupId,
  getDropParent,
  removeFromTree,
} from './utils';

import CustomDragLayer from './DragLayer';
import Container from './Container';
import { NestableListContext } from './NestableListContext';

import withDNDContext from './withDNDContext';

function replaceNegativeIndex(items, nextPosition, childrenProperty) {
  let currItems = items;

  return nextPosition.map(nextIndex => {
    if (nextIndex !== -1) {
      currItems = currItems[nextIndex][childrenProperty] || [];
      return nextIndex;
    }

    return currItems.length;
  });
}

// fixing a bug where the new path is increased in nesting
// and the first position jumps too far by 2, and that's why it decreased by 1
// need to check if the jump can become more severe
function getRealNextPosition(prev, next) {
  // moving up a level
  if (prev.length < next.length) {
    return next.map((nextIndex, i) => {
      if (typeof prev[i] !== 'number') {
        return nextIndex;
      }
      return nextIndex > prev[i] ? nextIndex - 1 : nextIndex;
    });
  }

  return next;
}

class NestableList extends React.PureComponent {
  static defaultProps = {
    items: [],
    isRenderDraggingChildren: false,
    childrenProperty: 'children',
    childrenStyle: {},
    renderPrefix: () => null,
    renderAction: () => null,
    onUpdate: () => {},
    useDragHandle: false,
    preventChangeDepth: false,
    maxDepth: Infinity,
    threshold: 30,
    dragLayerZIndex: 100,
  };

  // tried to use getDerivedStateFromProps but encounter an issue where the state was
  // updated internally but props items stayed the same and it caused the new state to be
  // overridden with the old state
  // can be done if component is controlled but requires refactor
  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.items !== this.state.items) {
      this.setState({ items: newProps.items });
    }
  }

  state = {
    items: this.props.items,
    dragging: false,
  };
  // drag and drop between multiple nestable lists is not supported
  // according to prevent it for now was created groupName - unique value for every nestable list
  // somethings similar exists in SortableList component.
  groupName = generateUniqueGroupId();

  moveItem = ({ dragItem, prevPosition, nextPosition }) => {
    const { childrenProperty, preventChangeDepth, items } = this.props;
    let newItems = this.state.items.slice();

    if (preventChangeDepth && nextPosition.length > 1) {
      const parent = getDropParent(items, nextPosition, childrenProperty);
      if (!parent) {
        return prevPosition;
      }
    }

    // the remove action might affect the next position,
    // so update next coordinates accordingly
    let realNextPosition = getRealNextPosition(prevPosition, nextPosition);

    if (realNextPosition[realNextPosition.length - 1] === -1) {
      realNextPosition = replaceNegativeIndex(
        newItems,
        realNextPosition,
        childrenProperty,
      );
    }

    newItems = removeFromTree(newItems, prevPosition, childrenProperty);
    newItems = addToTree(
      newItems,
      dragItem,
      realNextPosition,
      childrenProperty,
    );

    this.setState({ items: newItems });

    return realNextPosition;
  };

  dropItem = item => {
    this.props.onUpdate &&
      this.props.onUpdate({ items: this.state.items, item });
  };

  onDragStart = itemProps => {
    this.props.onDragStart && this.props.onDragStart(itemProps);
    this.setState({
      dragging: true,
    });
  };

  onDragEnd = itemProps => {
    this.props.onDragEnd && this.props.onDragEnd(itemProps);
    this.setState({
      dragging: false,
    });
  };

  render() {
    const { items } = this.state;
    const {
      dataHook,
      renderItem,
      readOnly,
      childrenProperty,
      childrenStyle,
      renderAction,
      isRenderDraggingChildren,
      useDragHandle,
      maxDepth,
      preventChangeDepth,
      threshold,
      theme,
      renderPrefix,
      dragLayerZIndex,
    } = this.props;
    return (
      <div data-hook={dataHook}>
        <NestableListContext.Provider
          value={{
            groupName: this.groupName,
            useDragHandle,
            maxDepth,
            preventChangeDepth,
            threshold,
            readOnly,
            renderItem,
            renderPrefix,
            moveItem: this.moveItem,
            dropItem: this.dropItem,
            onDragStart: this.onDragStart,
            onDragEnd: this.onDragEnd,
          }}
        >
          <div>
            <Container
              treeDepth={1}
              items={items}
              renderAction={renderAction}
              parentPosition={[]}
              childrenProperty={childrenProperty}
              childrenStyle={childrenStyle}
              isRenderDraggingChildren={isRenderDraggingChildren}
              topLevel
              theme={theme}
            />
            {this.state.dragging && (
              <CustomDragLayer
                isRenderDraggingChildren={isRenderDraggingChildren}
                renderItem={renderItem}
                childrenProperty={childrenProperty}
                childrenStyle={childrenStyle}
                theme={theme}
                dragLayerZIndex={dragLayerZIndex}
              />
            )}
          </div>
        </NestableListContext.Provider>
      </div>
    );
  }
}

export default withDNDContext(NestableList);
