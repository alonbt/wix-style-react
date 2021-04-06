import React from 'react';
import classNames from 'classnames';
import {
  dndStyles as defaultDndStyles,
  SortableList,
  DragDropContextProvider,
} from 'wix-style-react';
import { classes } from './MultiAreaListWithSortableColumns.st.css';

const generateStateForContainer = (length, startIndex) => {
  const res = [];
  for (let i = 0; i < length; i++) {
    res.push({
      id: 'item-new' + (startIndex + i),
      text: `Drag object ${startIndex + i}`,
    });
  }
  return res;
};

const copy = value => JSON.parse(JSON.stringify(value));

/**
 * An example multi list dnd.
 */
export default class MultiAreaListWithSortableColumns extends React.Component {
  state = {
    columns: [
      {
        id: 'multiArea1',
        items: generateStateForContainer(4, 1),
        width: 250,
      },
      {
        id: 'multiArea2',
        items: generateStateForContainer(4, 5),
        width: 300,
      },
    ],
  };

  handleDropCell = ({
    removedIndex,
    addedIndex,
    removedFromContainerId,
    addedToContainerId,
    payload,
  }) => {
    const nextState = copy(this.state);
    nextState.columns
      .find(li => li.id === removedFromContainerId)
      .items.splice(removedIndex, 1);
    nextState.columns
      .find(li => li.id === addedToContainerId)
      .items.splice(addedIndex, 0, payload);

    this.setState({ ...nextState });
  };

  handleDropColumn = ({ removedIndex, addedIndex, payload }) => {
    const nextState = copy(this.state);
    nextState.columns.splice(removedIndex, 1);
    nextState.columns.splice(addedIndex, 0, payload);

    this.setState({ ...nextState });
  };

  renderCell = ({
    isPlaceholder,
    isPreview,
    id,
    item,
    previewStyles,
    isListInDragState,
  }) => {
    const _classes = classNames(
      {
        [classNames(
          defaultDndStyles.itemPlaceholder,
          classes.itemPlaceholder,
        )]: isPlaceholder,
        [classNames(
          defaultDndStyles.itemPreview,
          classes.itemPreview,
        )]: isPreview,
        [classes.isListInDragState]: isListInDragState,
      },
      classNames(defaultDndStyles.item, classes.item),
    );

    return (
      <div className={_classes} style={previewStyles} data-hook={`item-${id}`}>
        {item.text}
      </div>
    );
  };

  renderColumn = ({ isPlaceholder, isPreview, item, id, previewStyles }) => {
    const _classes = classNames(
      {
        [classNames(
          defaultDndStyles.itemPlaceholder,
          classes.columnPlaceholder,
        )]: isPlaceholder,
        [classNames(defaultDndStyles.itemPreview)]: isPreview,
      },
      classNames(defaultDndStyles.item),
    );

    const { width, items } = item;

    return (
      <div
        className={_classes}
        style={{ ...previewStyles, width }}
        data-hook={`column-${id}`}
      >
        <SortableList
          dragPreview={isPreview}
          className={classNames(defaultDndStyles.list, classes.column)}
          dataHook={`column-${id}`}
          groupName="multi-area"
          containerId={id}
          items={items}
          renderItem={this.renderCell}
          onDrop={this.handleDropCell}
        />
      </div>
    );
  };

  render() {
    return (
      <DragDropContextProvider>
        <div className={classes.root}>
          <SortableList
            className={classNames(defaultDndStyles.list, classes.table)}
            contentClassName={classes.content}
            dataHook="draggable-column-multi-area"
            containerId="multiArea"
            items={this.state.columns}
            renderItem={this.renderColumn}
            onDrop={this.handleDropColumn}
          />
        </div>
      </DragDropContextProvider>
    );
  }
}
