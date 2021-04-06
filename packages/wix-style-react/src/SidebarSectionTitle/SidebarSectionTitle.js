import React from 'react';
import PropTypes from 'prop-types';

import { st, classes } from './SidebarSectionTitle.st.css';
import Text from '../Text';
import { SidebarContext } from '../Sidebar/SidebarAPI';
import { sidebarSkins } from '../Sidebar/constants';

/** A title for the section within the sidebar */
class SidebarSectionTitle extends React.PureComponent {
  static displayName = 'SidebarSectionTitle';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    /** Usually plain text, but could be any renderable node */
    children: PropTypes.node.isRequired,
  };

  render() {
    const { dataHook, children } = this.props;

    return (
      <SidebarContext.Consumer>
        {context => {
          const skin = (context && context.getSkin()) || sidebarSkins.dark;

          return (
            <Text
              dataHook={dataHook}
              className={st(classes.root, { skin })}
              size="tiny"
              weight="bold"
            >
              {children}
            </Text>
          );
        }}
      </SidebarContext.Consumer>
    );
  }
}

export default SidebarSectionTitle;
