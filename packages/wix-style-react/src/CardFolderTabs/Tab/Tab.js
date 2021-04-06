import React from 'react';
import PropTypes from 'prop-types';

class Tab extends React.PureComponent {
  static propTypes = {
    /** A unique id to differentiate between tabs */
    id: PropTypes.string.isRequired,

    /** Any content to be rendered as the tab itself */
    children: PropTypes.node.isRequired,

    /** The title of the tab */
    name: PropTypes.node.isRequired,

    /** Makes the tab unselectable */
    disabled: PropTypes.bool,
  };

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Tab;
