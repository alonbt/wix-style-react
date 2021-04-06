import React from 'react';
import Download from 'wix-ui-icons-common/Download';
import Edit from 'wix-ui-icons-common/Edit';
import Star from 'wix-ui-icons-common/Star';
import Duplicate from 'wix-ui-icons-common/Duplicate';
import Print from 'wix-ui-icons-common/Print';

import { classes } from '../TableActionCell.story.st.css';

import { TableActionCell } from 'wix-style-react';

const Example = () => (
  <div className={classes.exampleRow}>
    <TableActionCell
      dataHook="story-disabled-secondary"
      secondaryActions={[
        {
          text: 'Download',
          icon: <Download />,
          onClick: () => window.alert('Download action was triggered.'),
          tooltipProps: {
            maxWidth: 250,
            content:
              'Clicking this icon will start the download process of the selected asset',
          },
        },
        {
          text: 'Edit',
          icon: <Edit />,
          onClick: () => window.alert('Edit action was triggered.'),
          disabled: true,
          disabledDescription: 'You are not allowed to Edit!',
        },
        {
          text: 'Star',
          icon: <Star />,
          onClick: () => window.alert('Star action was triggered.'),
          disabled: true,
          disabledDescription: '',
        },
        {
          text: 'Duplicate',
          icon: <Duplicate />,
          onClick: () => window.alert('Duplicate action was triggered.'),
          disabled: true,
        },
        {
          text: 'Print',
          icon: <Print />,
          onClick: () => window.alert('Print action was triggered.'),
          disabled: true,
          disabledDescription:
            'This description will not be displayed, as this secondary action is hidden',
        },
      ]}
      numOfVisibleSecondaryActions={4}
    />
  </div>
);

export default Example;
