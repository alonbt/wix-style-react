import * as React from 'react';
import { ShareButton } from '../';
import { classes } from './ShareButtonExtended.st.css';

export const ShareButtonPerf = () => {
  return (
    <ShareButton
      withIcon
      shareData={{
        title: 'Share title',
        url: 'https://wix.com',
      }}
      onClick={() => {}}
      text="Share"
      className={classes.root}
    />
  );
};
