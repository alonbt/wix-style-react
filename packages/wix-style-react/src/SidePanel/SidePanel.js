import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './SidePanel.st.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Divider from './Divider';
import { SidePanelContext } from './SidePanelAPI';

class SidePanel extends React.PureComponent {
  static displayName = 'SidePanel';

  static propTypes = {
    /** Define styles through a classname */
    className: PropTypes.string,

    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,

    /** Callback for close button */
    onCloseButtonClick: PropTypes.func,

    /** SidePanel.Header, SidePanel.Content, SidePanel.Footer, SidePanel.Divider or Any element to be rendered inside */
    children: PropTypes.node,
  };

  static defaultProps = {
    onCloseButtonClick: () => null,
  };

  sidePanelContext = {
    onCloseButtonClick: this.props.onCloseButtonClick,
  };

  render() {
    const { dataHook, children, className } = this.props;
    return (
      <SidePanelContext.Provider value={this.sidePanelContext}>
        <div className={st(classes.root, className)} data-hook={dataHook}>
          {children}
        </div>
      </SidePanelContext.Provider>
    );
  }
}

SidePanel.Header = Header;
SidePanel.Content = Content;
SidePanel.Footer = Footer;
SidePanel.Divider = Divider;

export default SidePanel;
