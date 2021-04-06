import React from 'react';
import PropTypes from 'prop-types';
import SideContent from './core/SideContent';
import TabItems from './core/TabItems';
import { classes, st } from './Tabs.st.css';

class Tabs extends React.Component {
  static displayName = 'Tabs';

  static defaultProps = {
    hasDivider: true,
    size: 'medium',
  };

  _getTabItemsProps = () => {
    /* eslint-disable no-unused-vars */
    const { sideContent, dataHook, ...tabItemsProps } = this.props;
    return tabItemsProps;
  };

  render() {
    const { sideContent, hasDivider, dataHook, size, className } = this.props;
    const tabItemsProps = this._getTabItemsProps();

    return (
      <div
        data-divider={hasDivider}
        data-hook={dataHook}
        className={st(
          classes.container,
          {
            hasDivider,
            size,
          },
          className,
        )}
      >
        <TabItems {...tabItemsProps} />
        <SideContent content={sideContent} />
      </div>
    );
  }
}

Tabs.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** A selected tab id */
  activeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Places a divider on bottom */
  hasDivider: PropTypes.bool,

  /** An array of tabs
   | propName | propType | isRequired | description |
   |----------|----------|------------|-------------|
   | id | string or number| + | Item id |
   | title | node | + | Tab title |
   | dataHook | string | - | Datahook |
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.node,
      dataHook: PropTypes.string,
    }),
  ).isRequired,

  /** A minimum width of the container */
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** One of: '', compact, compactSide, uniformSide, uniformFull */
  type: PropTypes.oneOf([
    '',
    'compact',
    'compactSide',
    'uniformSide',
    'uniformFull',
  ]),

  /** One of: medium, small*/
  size: PropTypes.oneOf(['medium', 'small']),

  /** Can be either string or renderable node */
  sideContent: PropTypes.node,

  /** A specific width of a tab (only for uniformSide type) */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Click event handler  */
  onClick: PropTypes.func,
};

export default Tabs;
