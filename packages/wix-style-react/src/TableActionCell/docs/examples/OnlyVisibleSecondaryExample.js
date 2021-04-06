import React from 'react';
import Download from 'wix-ui-icons-common/Download';
import Duplicate from 'wix-ui-icons-common/Duplicate';

import { classes } from '../TableActionCell.story.st.css';

import { TableActionCell } from 'wix-style-react';

const Example = () => (
  <div className={classes.exampleRow}>
    <TableActionCell
      dataHook="story-only-visible-secondary"
      secondaryActions={[
        {
          text: 'Download',
          icon: <Download />,
          onClick: () => window.alert('Download action was triggered.'),
        },
        {
          text: 'Duplicate',
          icon: <Duplicate />,
          onClick: () => window.alert('Duplicate action was triggered.'),
        },
      ]}
      numOfVisibleSecondaryActions={2}
    />
  </div>
);

export default Example;
