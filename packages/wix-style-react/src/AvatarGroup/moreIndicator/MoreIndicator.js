import React from 'react';
import Text from '../../Text';
import { classes } from '../AvatarGroup.st.css';
import { dataHooks } from '../constants';

const MoreIndicator = ({ className, text }) => {
  return (
    <div data-hook={dataHooks.avatarGroupMoreItem} className={className}>
      <Text secondary weight={'normal'} className={classes.moreItemText}>
        {text}
      </Text>
    </div>
  );
};

export default MoreIndicator;
