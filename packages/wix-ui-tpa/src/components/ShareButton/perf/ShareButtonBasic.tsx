import * as React from 'react';
import { ShareButton } from '../';

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
    />
  );
};
