import React from 'react';
import PropTypes from 'prop-types';
import VerticalTabsItem from '../VerticalTabsItem';
import VerticalTabsContext from './VerticalTabsContext';

/** Vertical tabs navigation panel. */
const Footer = ({ children }) => (
  <VerticalTabsItem type="action">{children}</VerticalTabsItem>
);

const TabsGroup = ({ title, children }) => (
  <>
    <VerticalTabsItem type="title">{title}</VerticalTabsItem>
    {children}
  </>
);
TabsGroup.propTypes = {
  title: PropTypes.string,
};
TabsGroup.defaultProps = {
  title: '',
};

class VerticalTabs extends React.Component {
  render() {
    const { dataHook, children, size, activeTabId, onChange } = this.props;
    return (
      <VerticalTabsContext.Provider value={{ size, activeTabId, onChange }}>
        <div data-hook={dataHook}>{children}</div>
      </VerticalTabsContext.Provider>
    );
  }
}

VerticalTabs.displayName = 'VerticalTabs';

VerticalTabs.propTypes = {
  /** Text Size (small, medium) */
  size: PropTypes.oneOf(['small', 'medium']),

  /** Current selected tab id */
  activeTabId: PropTypes.number,

  /** Callback function called on tab selection change with the following parameters<code>(id)</code> */
  onChange: PropTypes.func,

  /** Child nodes of this component must be of type <code><VerticalTabs.TabsGroup></code> or <code><VerticalTabs.Footer></code>*/
  children: PropTypes.arrayOf(PropTypes.node),

  /** Data attribute for testing purposes */
  dataHook: PropTypes.string,
};
VerticalTabs.defaultProps = {
  size: 'medium',
  onChange: () => {},
};

VerticalTabs.TabsGroup = TabsGroup;
VerticalTabs.TabItem = VerticalTabsItem;
VerticalTabs.Footer = Footer;

export default VerticalTabs;
