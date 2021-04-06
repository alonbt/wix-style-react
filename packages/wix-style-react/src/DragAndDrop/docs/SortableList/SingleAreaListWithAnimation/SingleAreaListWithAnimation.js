import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { stVars } from '../../../../Foundation/stylable/easing.st.css';
import { dndStyles as defaultDndStyles, SortableList } from 'wix-style-react';
import { classes } from './SingleAreaListWithAnimation.st.css';

const generateId = () => Math.floor(Math.random() * 100000);

export default class SingleAreaListWithAnimation extends React.Component {
  static propTypes = {
    withHandle: PropTypes.bool,
  };

  state = {
    items: [
      {
        id: generateId(),
        text: 'Item 1',
      },
      {
        id: generateId(),
        text: 'Item 2',
      },
      {
        id: generateId(),
        text: 'Item 3',
      },
      {
        id: generateId(),
        text: 'Item 4',
      },
      {
        id: generateId(),
        text: 'Item 5',
      },
    ],
  };

  handleDrop = ({ removedIndex, addedIndex }) => {
    const nextItems = [...this.state.items];
    nextItems.splice(addedIndex, 0, ...nextItems.splice(removedIndex, 1));
    this.setState({
      items: nextItems,
    });
  };

  renderHandle({ connectHandle, id, isPlaceholder }) {
    return connectHandle(
      <div
        className={classes.handle}
        style={{ opacity: isPlaceholder ? 0 : 1 }}
        data-hook={`card-${id}-handle`}
      >
        Drag Handle
      </div>,
    );
  }

  renderItem = ({ isPlaceholder, isPreview, id, connectHandle, item }) => {
    const _classes = classNames(
      classNames(defaultDndStyles.item, classes.item),
      {
        [classNames(
          defaultDndStyles.itemPlaceholder,
          classes.placeholder,
        )]: isPlaceholder,
        [classNames(defaultDndStyles.itemPreview, classes.preview)]: isPreview,
      },
    );

    return (
      <div className={_classes} data-hook={`item-${id}`}>
        {item.text}
        {this.props.withHandle
          ? this.renderHandle({ connectHandle, id, isPlaceholder })
          : null}
      </div>
    );
  };

  render() {
    return (
      <div className={classes.root}>
        <h3 className={classes.title}>Draggable Area</h3>
        <SortableList
          withHandle={this.props.withHandle}
          className={classes.sortableList}
          containerId="single-area-1"
          dataHook="list-single-area"
          items={this.state.items}
          renderItem={this.renderItem}
          onDrop={this.handleDrop}
          animationDuration={500}
          animationTiming={stVars['ease-7']}
        />
      </div>
    );
  }
}
