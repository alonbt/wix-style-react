import React from 'react';
import Download from 'wix-ui-icons-common/Download';
import Duplicate from 'wix-ui-icons-common/Duplicate';
import { TableActionCell } from 'wix-style-react';
import { classes } from '../TableActionCell.story.st.css';

const Example = () => (
  <div className={classes.exampleRow}>
    <TableActionCell
      secondaryActions={[
        {
          text: 'Download',
          icon: <Download />,
          onClick: () => window.alert('Download action was triggered.'),
        },
        {
          divider: true,
        },
        {
          text: 'Duplicate',
          icon: <Duplicate />,
          onClick: () => window.alert('Duplicate action was triggered.'),
        },
      ]}
      numOfVisibleSecondaryActions={0}
    />
  </div>
);

export default Example;
