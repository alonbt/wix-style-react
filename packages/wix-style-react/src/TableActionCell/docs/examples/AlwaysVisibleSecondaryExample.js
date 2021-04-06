import React from 'react';
import Duplicate from 'wix-ui-icons-common/Duplicate';
import Print from 'wix-ui-icons-common/Print';

import { classes } from '../TableActionCell.story.st.css';

import { TableActionCell } from 'wix-style-react';

const Example = () => (
  <div className={classes.exampleRow}>
    <TableActionCell
      dataHook="story-always-visible-secondary"
      secondaryActions={[
        {
          text: 'Duplicate',
          icon: <Duplicate />,
          onClick: () => window.alert('Duplicate action was triggered.'),
        },
        {
          text: 'Print',
          icon: <Print />,
          onClick: () => window.alert('Print action was triggered.'),
        },
      ]}
      numOfVisibleSecondaryActions={2}
      alwaysShowSecondaryActions
    />
  </div>
);

export default Example;
