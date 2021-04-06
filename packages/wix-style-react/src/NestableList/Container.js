import React, { Component } from 'react';
import classNames from 'classnames';
import Item from './Item';
import { getDepth } from './utils';

class Container extends Component {
  render() {
    const {
      items,
      parentPosition,
      childrenProperty,
      childrenStyle,
      renderAction,
      treeDepth,
      isParentLastItem = true,
      isRenderDraggingChildren,
      topLevel,
      theme,
    } = this.props;
    let containerClass;
    if (theme) {
      containerClass = (topLevel && theme.topContainer) || theme.container;
    }
    const classes = classNames(
      'nestable-container',
      {
        'nestable-top-container': topLevel,
      },
      containerClass,
    );
    return (
      <div className={classes} style={topLevel ? {} : childrenStyle}>
        {items.map((item, i) => {
          const position = parentPosition.concat([i]);
          const children = item[childrenProperty];
          const hasChildren = children && children.length;
          const isLastItem = items.length - 1 === i;
          const actionButton = renderAction({
            siblings: items,
            item,
            veryLastItem: isLastItem && isParentLastItem,
            depth: treeDepth,
          });
          const veryLastItem =
            isLastItem &&
            isParentLastItem &&
            (!hasChildren || item.isCollapsed) &&
            !actionButton;

          return (
            <Item
              id={item.id}
              key={item.id}
              item={item}
              index={i}
              isVeryLastItem={veryLastItem}
              siblings={items}
              isRenderDraggingChildren={isRenderDraggingChildren}
              position={position}
              depth={getDepth(item, childrenProperty)}
              theme={theme}
            >
              {!item.isCollapsed && (
                <div>
                  {hasChildren ? (
                    <WrappedContainer
                      isParentLastItem={
                        isLastItem && isParentLastItem && !actionButton
                      }
                      items={children}
                      renderAction={renderAction}
                      isRenderDraggingChildren={isRenderDraggingChildren}
                      parentPosition={position}
                      childrenProperty={childrenProperty}
                      childrenStyle={childrenStyle}
                      theme={theme}
                      treeDepth={treeDepth + 1}
                    />
                  ) : null}
                  {actionButton}
                </div>
              )}
            </Item>
          );
        })}
      </div>
    );
  }
}

class WrappedContainer extends React.PureComponent {
  render() {
    return <Container {...this.props} />;
  }
}

export default WrappedContainer;
