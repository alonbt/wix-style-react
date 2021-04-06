import * as React from 'react';
import { classes } from './BusinessDashboard.st.css';
import FontUpgrade from '../../FontUpgrade';
import { CircleLoaderCheck } from './icons';

export default ({ active } = {}) => ({
  className: active === false ? '' : classes.root,
  icons: {
    CircularProgressBar: {
      small: CircleLoaderCheck,
      medium: CircleLoaderCheck,
      large: CircleLoaderCheck,
    },
  },
  componentWrapper: ({ children }) => (
    <FontUpgrade active={active}>{children}</FontUpgrade>
  ),
});
