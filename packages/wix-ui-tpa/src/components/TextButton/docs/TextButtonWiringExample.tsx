import * as React from 'react';
import { TextButton } from '../TextButton';
import { classes } from './TextButtonWiringExample.st.css';
import { ReactComponent as Heart } from '../../../assets/icons/Heart.svg';
import { ReactComponent as Share } from '../../../assets/icons/Share.svg';

export const TextButtonWiringExample = () => (
  <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
    <TextButton className={classes.root}>Some text</TextButton>
    <TextButton
      prefixIcon={<Heart />}
      suffixIcon={<Share />}
      className={classes.root}
    >
      Text with suffix and prefix
    </TextButton>
  </div>
);
