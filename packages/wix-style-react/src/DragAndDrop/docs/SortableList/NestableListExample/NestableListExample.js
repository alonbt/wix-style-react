import React from 'react';
import classNames from 'classnames';

import {
  dndStyles as defaultDndStyles,
  NestableList,
  DragDropContextProvider,
} from 'wix-style-react';
import { classes } from './NestableList.st.css';

export default class NestableListExample extends React.Component {
  state = {
    items: [
      { id: 1, text: 'Item #1', children: [] },
      { id: 2, text: 'Item #2', children: [] },
      { id: 3, text: 'Item #3', children: [] },
      {
        id: 4,
        text: 'Item #4',
        children: [
          {
            id: 5,
            text: 'Item #5',
            children: [
              {
                id: 6,
                text: 'Item #6',
              },
            ],
          },
        ],
      },
    ],
  };

  onUpdate = ({ items }) => {
    this.setState({
      items: items,
    });
  };

  renderHandle({ id, isPlaceholder }) {
    return (
      <div
        className={classes.handle}
        style={{ opacity: isPlaceholder ? 0 : 1 }}
        data-hook={`card-${id}-handle`}
      >
        Drag Handle
      </div>
    );
  }

  renderItem = ({
    isPlaceholder,
    depth,
    isPreview,
    connectDragSource,
    item,
  }) => {
    const _classes = classNames(
      classNames(defaultDndStyles.item, classes.itemCss),
      {
        [classNames(
          defaultDndStyles.itemPlaceholder,
          classes.placeholder,
        )]: isPlaceholder,
        [classNames(defaultDndStyles.itemPreview, classes.preview)]: isPreview,
      },
    );

    return (
      <div className={_classes} data-hook={`item-${item.id}-${depth}`}>
        {item.text}
        {connectDragSource(this.renderHandle({ id: item.id, isPlaceholder }))}
      </div>
    );
  };

  render() {
    return (
      <DragDropContextProvider>
        <div className={classes.root}>
          <h3 className={classes.title}>Draggable Area</h3>
          <NestableList
            theme={classes}
            useDragHandle
            items={this.state.items}
            renderItem={this.renderItem}
            onUpdate={this.onUpdate}
            maxDepth={2}
            threshold={30}
            childrenStyle={stylesExp.children}
            childrenProperty={'children'}
            isRenderDraggingChildren={false}
          />
        </div>
      </DragDropContextProvider>
    );
  }
}

const stylesExp = {
  children: {
    marginLeft: 50,
  },
};
