import React from 'react';
import Star from 'wix-ui-icons-common/Star';
import DownloadImportSmall from 'wix-ui-icons-common/DownloadImportSmall';
import DuplicateSmall from 'wix-ui-icons-common/DuplicateSmall';
import PrintSmall from 'wix-ui-icons-common/PrintSmall';

import { classes } from '../TableActionCell.story.st.css';

import { TableActionCell } from 'wix-style-react';

const Example = () => (
  <div className={classes.exampleRow}>
    <TableActionCell
      size="small"
      dataHook="story-small-buttons"
      alwaysShowSecondaryActions
      primaryAction={{
        text: 'Edit',
        skin: 'inverted',
        onClick: () => window.alert('Primary action was triggered!'),
      }}
      secondaryActions={[
        {
          text: 'Star',
          icon: <Star size="small" />,
          onClick: () => window.alert('Star action was triggered.'),
        },
        {
          text: 'Download',
          icon: <DownloadImportSmall />,
          onClick: () => window.alert('Download action was triggered.'),
        },
        {
          text: 'Duplicate',
          icon: <DuplicateSmall />,
          onClick: () => window.alert('Duplicate action was triggered.'),
        },
        {
          text: 'Print',
          icon: <PrintSmall />,
          onClick: () => window.alert('Print action was triggered.'),
        },
      ]}
      numOfVisibleSecondaryActions={2}
    />
  </div>
);

export default Example;
