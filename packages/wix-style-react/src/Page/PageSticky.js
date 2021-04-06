import React from 'react';
import PropTypes from 'prop-types';

import { PageContext } from './PageContext';
import { st, classes } from './Page.st.css';

export const PageSticky = ({ children, className, style, ...props }) => {
  return (
    <PageContext.Consumer>
      {({ stickyStyle }) => {
        let result;
        if (typeof children === 'function') {
          result = children({ style: style, className: classes.sticky });
        } else {
          result = (
            <div
              className={st(classes.sticky, {}, className)}
              style={{ ...stickyStyle, ...style }}
              {...props}
            >
              {children}
            </div>
          );
        }

        return result;
      }}
    </PageContext.Consumer>
  );
};

PageSticky.displayName = 'Page.Sticky';
PageSticky.propTypes = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
};
