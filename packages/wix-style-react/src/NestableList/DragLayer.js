import React, { Component } from 'react';
import classNames from 'classnames';
import { DragLayer } from 'react-dnd';
import itemTypes from './itemTypes';
import { Portal } from 'react-portal';

const defaultLayerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  left: 0,
  top: 0,
};

function getItemStyles(props, clientRect, handleOffset) {
  const { initialOffset, currentOffset } = props;
  if (!initialOffset || !currentOffset) {
    return { display: 'none' };
  }

  const x = currentOffset.x - handleOffset.x;
  const y = currentOffset.y - handleOffset.y;
  const { width, height } = clientRect;
  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform,
    WebkitTransform: transform,
    width,
    height,
  };
}

const defaultConnectDragSource = el => el;

class CustomDragLayer extends Component {
  renderChildren = (items, depth) => {
    const { renderItem, childrenProperty, childrenStyle, theme } = this.props;

    if (!items || !items.length) {
      return null;
    }

    const classes = classNames(
      'nestable-item',
      'dragging-nestable-item',
      theme && theme.item,
    );
    return (
      <div style={childrenStyle}>
        {items.map((item, i) => (
          <div className={classes} data-hook="dragging-nestable-item" key={i}>
            {renderItem({
              item,
              isPlaceholder: false,
              isPreview: true,
              depth,
              connectDragSource: defaultConnectDragSource,
            })}
            {!item.isCollapsed &&
              this.renderChildren(
                item[childrenProperty],
                depth + 1,
                item.isCollapsed,
              )}
          </div>
        ))}
      </div>
    );
  };

  render() {
    const {
      item,
      itemType,
      renderItem,
      isPlaceholder,
      childrenProperty,
      isRenderDraggingChildren,
      theme,
      dragLayerZIndex,
    } = this.props;

    if (!isPlaceholder || itemType !== itemTypes.nestedItem) {
      return null;
    }

    const classes = classNames(
      'nestable-item',
      'dragging-nestable-item',
      theme && theme.item,
    );
    // portal is used because of position fixed and transform issue
    return (
      <Portal>
        <div style={{ ...defaultLayerStyles, zIndex: dragLayerZIndex }}>
          <div
            className={classes}
            style={getItemStyles(
              this.props,
              item.clientRect,
              item.handleOffset,
            )}
          >
            {renderItem({
              item: item.data,
              isPlaceholder: false,
              isPreview: true,
              depth: 1,
              connectDragSource: defaultConnectDragSource,
            })}
            {isRenderDraggingChildren &&
              !item.data.isCollapsed &&
              this.renderChildren(item.data[childrenProperty], 2)}
          </div>
        </div>
      </Portal>
    );
  }
}

class PureDragLayer extends React.PureComponent {
  render() {
    return <CustomDragLayer {...this.props} />;
  }
}

export default DragLayer(monitor => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isPlaceholder: monitor.isDragging(),
}))(PureDragLayer);
