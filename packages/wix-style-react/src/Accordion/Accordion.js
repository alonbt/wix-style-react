import React from 'react';
import PropTypes from 'prop-types';

import { st, classes } from './Accordion.st.css';
import AccordionItem from './AccordionItem';
import AccordionSectionItem from './AccordionSectionItem';

class Accordion extends React.Component {
  static displayName = 'Accordion';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used to create driver in testing */
    dataHook: PropTypes.string,

    /** allow multiple rows to be opened simultaneously */
    multiple: PropTypes.bool,

    /** Accordion skin color */
    skin: PropTypes.oneOf(['standard', 'light']),

    /** Hide Accordion shadow effect */
    hideShadow: PropTypes.bool,

    /** Change items size */
    size: PropTypes.oneOf(['small', 'large']),

    /** accordion items nodes */
    items: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.shape({
          render: PropTypes.func,
        }),
      ),
      PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.node,
          icon: PropTypes.node,
          children: PropTypes.node,
          expandLabel: PropTypes.node,
          collapseLabel: PropTypes.node,
          showLabel: PropTypes.oneOf(['hover', 'always']),
          buttonType: PropTypes.oneOf(['textButton', 'button', 'node']),
          disabled: PropTypes.bool,
          onToggle: PropTypes.func,
          onMouseEnter: PropTypes.func,
          onMouseleave: PropTypes.func,
          open: PropTypes.bool,
          initiallyOpen: PropTypes.bool,
        }),
      ),
    ]),
  };

  static defaultProps = {
    items: [],
    multiple: false,
    skin: 'standard',
    hideShadow: false,
    size: 'large',
  };

  _findOpenIndexes = (items, initial) =>
    items
      .map((item, index) =>
        (initial && item.initiallyOpen) || item.open ? index : null,
      )
      .filter(index => index !== null);

  constructor(props) {
    super(props);

    this.state = {
      openIndexes: this._findOpenIndexes(this.props.items, true),
    };
  }

  _compareOpenItems = (currentItems, prevItems) => {
    if (prevItems.length !== currentItems.length) {
      return false;
    }
    for (let i = 0; i < prevItems.length; i++) {
      if (prevItems[i].open !== currentItems[i].open) {
        return false;
      }
    }
    return true;
  };

  componentDidUpdate = prevProps => {
    if (!this._compareOpenItems(this.props.items, prevProps.items)) {
      this.setState({
        openIndexes: this._findOpenIndexes(this.props.items),
      });
    }
  };

  _toggle = index => () =>
    this.setState(({ openIndexes }) => ({
      openIndexes: openIndexes.includes(index)
        ? openIndexes.filter(i => i !== index)
        : this.props.multiple
        ? [...openIndexes, index]
        : [index],
    }));

  render() {
    const { openIndexes } = this.state;
    const { dataHook, items, skin, hideShadow, size } = this.props;

    return (
      <div data-hook={dataHook} className={classes.accordion}>
        {items.map((item, index, allItems) => {
          const uncontrolledProps = {
            onToggle: this._toggle(index),
            open: openIndexes.includes(index),
          };

          const last = index === allItems.length - 1;
          const internalProps = {
            className: st(classes.item, { last }),
            key: index,
            skin,
            hideShadow,
            size,
            last,
          };

          if (typeof item.render === 'function') {
            return item.render(uncontrolledProps, internalProps);
          } else {
            return (
              <AccordionItem
                {...uncontrolledProps}
                {...item}
                {...internalProps}
              />
            );
          }
        })}
      </div>
    );
  }
}

export const accordionItemBuilder = item => {
  return {
    ...item,
    render: (uncontrolledProps, internalProps) => (
      <AccordionItem {...uncontrolledProps} {...item} {...internalProps} />
    ),
  };
};

export const accordionSectionItemBuilder = item => {
  return {
    ...item,
    render: (uncontrolledProps, internalProps) => (
      <AccordionSectionItem
        {...uncontrolledProps}
        {...item}
        {...internalProps}
      />
    ),
  };
};

export default Accordion;
