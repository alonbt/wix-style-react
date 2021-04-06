import * as React from 'react';
import classnames from 'classnames';
import { visualize, snap } from 'storybook-snapper';
import { Text } from '../Text';
import { Card, CardRatioOptions } from './Card';
import { classes } from './docs/CardVisual.st.css';

const IMAGE_SRC =
  'https://static.wixstatic.com/media/dd7e03deffdd4267b75ef0a60d8510c7.jpg/v1/fill/w_791,h_317,al_c,q_80,usm_0.66_1.00_0.01/Gift%20Wrapped.jpg';

const CardVisual = (props) => {
  return (
    <Card
      className={classnames(classes.root, {
        [classes.override]: props.withOverride,
        [classes.stacked]: props.stacked,
      })}
      info={
        <>
          <Text>Info part</Text>
        </>
      }
      media={
        <img
          src={IMAGE_SRC}
          alt="My product"
          width={'100%'}
          height={'auto'}
          style={{ verticalAlign: 'middle', opacity: 0.5 }}
        />
      }
      {...props}
    />
  );
};

visualize('Deprecated Card', () => {
  snap('default', <CardVisual />);
  snap('with style overrides', <CardVisual withOverride />);
  snap('ratio', <CardVisual ratio={CardRatioOptions.RATIO_40_60} />);
  snap('stacked', <CardVisual stacked />);
  snap('stacked with style override', <CardVisual stacked withOverride />);
});
