/* eslint-disable react/jsx-no-undef */
import React from 'react';

import { SortableList, Box, Text } from 'wix-style-react';

class SortableItemsListWithDragHandle extends React.Component {
  state = {
    items: new Array(5)
      .fill()
      .map((x, i) => ({ id: `example2-${i}`, text: `Item ${i}` })),
  };

  _itemStyleProps = {
    common: {
      boxSizing: 'border-box',
      width: '240px',
      height: '36px',
      backgroundColor: 'WHITE',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'B20',
      borderRadius: '6px',
      verticalAlign: 'middle',
      paddingLeft: '12px',
      marginBottom: '12px',
    },
    regular: {
      backgroundColor: 'WHITE',
    },
    placeholder: {
      borderStyle: 'none',
      backgroundColor: 'B50',
    },
    preview: {
      backgroundColor: 'B50',
    },
  };

  _handleDrop = ({ removedIndex, addedIndex }) => {
    const nextItems = [...this.state.items];
    nextItems.splice(addedIndex, 0, ...nextItems.splice(removedIndex, 1));
    this.setState({
      items: nextItems,
    });
  };

  _renderItem = ({ isPlaceholder, isPreview, item, connectHandle }) => {
    let styles = {};
    if (isPlaceholder) {
      styles = this._itemStyleProps.placeholder;
    } else if (isPreview) {
      styles = this._itemStyleProps.preview;
    } else {
      styles = this._itemStyleProps.regular;
    }

    return (
      <div>
        <Box {...this._itemStyleProps.common} {...styles}>
          {connectHandle(
            <div>
              <Box marginRight="12px" opacity={isPlaceholder ? 0 : 1}>
                <SystemIcons.DragAndDropSmall />
              </Box>
            </div>,
          )}
          {!isPlaceholder && <Text>{item.text}</Text>}
        </Box>
      </div>
    );
  };

  render() {
    return (
      <SortableList
        withHandle
        containerId="single-area-2"
        items={this.state.items}
        renderItem={this._renderItem}
        onDrop={this._handleDrop}
      />
    );
  }
}
