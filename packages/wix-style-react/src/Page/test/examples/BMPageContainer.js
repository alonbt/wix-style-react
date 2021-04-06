import React from 'react';
import { classes } from './BMPageContainer.st.css';

/* This layout try to imitate the current BusinessManager's layout and styles. */

export const BMPageContainer = ({ children }) => (
  <div className={classes.root}>
    <div className={classes.header} />
    <div className={classes.body}>
      <div className={classes.sideBar}>
        <div className={classes.sideBarContent}>
          SideBar Which is 220px wide
        </div>
      </div>
      <div className={classes.rightSide}>
        <div className={classes.mainContentContainer}>
          <div className={classes.mainContent}>
            <div className={classes.withLoadingIndicatorWrapper}>
              <div className={classes.withLoadingIndicatorContainer}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
