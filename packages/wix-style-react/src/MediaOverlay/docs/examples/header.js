import React from 'react';
import RefreshIcon from 'wix-ui-icons-common/Refresh';
import DeleteIcon from 'wix-ui-icons-common/Delete';

import Proportion from '../../../Proportion';
import IconButton from '../../../IconButton';
import MediaOverlay from '../..';

export default () => (
  <Proportion aspectRatio={1.8}>
    <MediaOverlay hoverSkin="dark" media="example.jpg">
      <MediaOverlay.Content visible="hover">
        <IconButton priority="secondary" skin="inverted">
          <RefreshIcon />
        </IconButton>
        <IconButton priority="secondary" skin="inverted">
          <DeleteIcon />
        </IconButton>
      </MediaOverlay.Content>
    </MediaOverlay>
  </Proportion>
);
