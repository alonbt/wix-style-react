import React from 'react';
import Star from 'wix-ui-icons-common/Star';
import Download from 'wix-ui-icons-common/Download';
import Duplicate from 'wix-ui-icons-common/Duplicate';
import Print from 'wix-ui-icons-common/Print';

import { classes } from '../TableActionCell.story.st.css';

import { TableActionCell } from 'wix-style-react';

const Example = () => (
  <div className={classes.exampleRow}>
    <TableActionCell
      dataHook="story-popover-menu-props"
      primaryAction={{
        text: 'Edit',
        skin: 'standard',
        onClick: () => window.alert('Primary action was triggered!'),
      }}
      secondaryActions={[
        {
          text: 'Star',
          icon: <Star />,
          onClick: () => window.alert('Star action was triggered.'),
        },
        {
          text: 'Download',
          icon: <Download />,
          onClick: () => window.alert('Download action was triggered.'),
        },
        {
          text: 'Duplicate Duplicate',
          icon: <Duplicate />,
          onClick: () => window.alert('Duplicate action was triggered.'),
        },
        {
          text: 'A very long option name',
          icon: <Print />,
          onClick: () => window.alert('Print action was triggered.'),
        },
      ]}
      numOfVisibleSecondaryActions={0}
      popoverMenuProps={{
        placement: 'bottom',
      }}
    />
  </div>
);

export default Example;
