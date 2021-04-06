import React from 'react';
import PropTypes from 'prop-types';

import { st, classes } from './SidebarDivider.st.css';
import Divider from '../Divider';
import { SidebarContext } from '../Sidebar/SidebarAPI';
import { sidebarSkins } from '../Sidebar/constants';
import { skins as dividerSkins } from '../Divider/constants';

/** A divider within the sidebar that supports inner and full mode */
class SidebarDivider extends React.PureComponent {
  static displayName = 'SidebarDivider';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    /** Indicates whether to remove the margin from sides */
    fullWidth: PropTypes.bool,
  };

  render() {
    const { dataHook, fullWidth } = this.props;

    return (
      <SidebarContext.Consumer>
        {context => {
          const skin = (context && context.getSkin()) || sidebarSkins.dark;

          return (
            <div
              data-hook={dataHook}
              data-full-width={fullWidth}
              className={st(classes.root, fullWidth ? classes.fullWidth : '')}
            >
              <Divider
                skin={
                  skin === sidebarSkins.light
                    ? dividerSkins.light
                    : dividerSkins.dark
                }
                className={classes.divider}
              />
            </div>
          );
        }}
      </SidebarContext.Consumer>
    );
  }
}

export default SidebarDivider;
