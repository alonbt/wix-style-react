import React from 'react';
import PropTypes from 'prop-types';

import SelectableAccordionItem from './Item';

import { st, classes } from './SelectableAccordion.st.css';

/** SelectableAccordion */
class SelectableAccordion extends React.PureComponent {
  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,

    /** A css class to be applied to the component's root element */
    className: PropTypes.string,

    /** A type can be ether radio, checkbox, or toggle, which will effect the way an accordion item is selected */
    type: PropTypes.oneOf(['radio', 'checkbox', 'toggle']),

    /** An array of Accordion items:
     * - `title`: A title of the item
     * - `subtitle`: An optional second row of the header
     * - `content`: A content of the item
     * - `initiallyOpen`: Whether the item is initially open
     * - `disabled`: Whether the item is disabled
     * */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.node,
        subtitle: PropTypes.node,
        content: PropTypes.node,
        initiallyOpen: PropTypes.bool,
        disabled: PropTypes.bool,
      }),
    ),

    /** Extra space on top and bottom of selectable accordion item */
    verticalPadding: PropTypes.oneOf(['medium', 'small', 'tiny']),

    /** A callback which is invoked every time the selection is changed */
    onSelectionChanged: PropTypes.func,
  };

  static defaultProps = {
    type: 'radio',
    items: [],
    verticalPadding: 'medium',
  };

  static displayName = 'SelectableAccordion';

  state = {
    openIndices: this._populateInitiallyOpenIndices(),
  };

  _populateInitiallyOpenIndices() {
    const { items } = this.props;

    return items
      .map((item, index) => (item.initiallyOpen ? index : null))
      .filter(index => index !== null);
  }

  _onItemChanged = (idx, open) => {
    const { type, onSelectionChanged } = this.props;
    let openIndices;

    if (open) {
      if (type === 'radio') {
        openIndices = [idx];
      } else {
        openIndices = [...this.state.openIndices, idx];
      }
    } else {
      openIndices = [...this.state.openIndices].filter(
        openIndex => idx !== openIndex,
      );
    }

    this.setState(
      { openIndices },
      () => onSelectionChanged && onSelectionChanged(openIndices),
    );
  };

  render() {
    const { dataHook, className, items, verticalPadding, type } = this.props;
    const { openIndices } = this.state;

    return (
      <div className={st(classes.root, className)} data-hook={dataHook}>
        {items.map((item, idx) => (
          <SelectableAccordionItem
            key={idx}
            idx={idx}
            type={type}
            verticalPadding={verticalPadding}
            onChange={this._onItemChanged}
            {...item}
            open={openIndices.includes(idx)}
          />
        ))}
      </div>
    );
  }
}

export default SelectableAccordion;
