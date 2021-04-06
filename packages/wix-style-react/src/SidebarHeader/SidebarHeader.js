import React from 'react';
import PropTypes from 'prop-types';

import { st, classes } from './SidebarHeader.st.css';
import { dataHooks } from './constants';
import Text from '../Text';
import { SidebarContext } from '../Sidebar/SidebarAPI';
import { sidebarSkins } from '../Sidebar/constants';
import Box from '../Box';

/** A header within the sidebar with title, subtitle and custom content at the bottom. */
class SidebarHeader extends React.PureComponent {
  static displayName = 'SidebarHeader';

  static propTypes = {
    /** Applied as data-hook HTML attribute that can be used in the tests */
    dataHook: PropTypes.string,
    /** A text to show as the header title */
    title: PropTypes.string,
    /** A text to show as the header subtitle */
    subtitle: PropTypes.string,
    /** A custom node to render from the bottom */
    children: PropTypes.node,
  };

  render() {
    const { dataHook, title, subtitle, children } = this.props;

    return (
      <SidebarContext.Consumer>
        {context => {
          const skin = (context && context.getSkin()) || sidebarSkins.dark;

          return (
            <div data-hook={dataHook} className={st(classes.root, { skin })}>
              {title && (
                <Box>
                  <Text
                    dataHook={dataHooks.title}
                    className={classes.title}
                    size="medium"
                    weight="bold"
                    ellipsis
                    light={skin === sidebarSkins.dark}
                  >
                    {title}
                  </Text>
                </Box>
              )}
              {subtitle && (
                <Box>
                  <Text
                    dataHook={dataHooks.subtitle}
                    className={classes.subtitle}
                    size="tiny"
                    weight="thin"
                    ellipsis
                    light={skin === sidebarSkins.dark}
                  >
                    {subtitle}
                  </Text>
                </Box>
              )}
              {children && <div data-hook={dataHooks.children}>{children}</div>}
            </div>
          );
        }}
      </SidebarContext.Consumer>
    );
  }
}

export default SidebarHeader;
