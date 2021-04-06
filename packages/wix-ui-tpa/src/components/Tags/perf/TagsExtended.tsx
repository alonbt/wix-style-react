import * as React from 'react';
import { Tags } from '../';
import { classes } from './TagsExtended.st.css';

export const TagsPerf = () => {
  return (
    <Tags
      items={[
        {
          title: 'Title',
          checked: true,
          value: 'Value',
        },
      ]}
      onClick={() => {}}
      className={classes.root}
    />
  );
};
