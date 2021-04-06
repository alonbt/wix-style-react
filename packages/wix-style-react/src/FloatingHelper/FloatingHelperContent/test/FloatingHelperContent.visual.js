import React from 'react';
import { storiesOf } from '@storybook/react';
import FloatingHelperContent from '../FloatingHelperContent';
import Box from '../../../Box';
import Text from '../../../Text';
import { actionButtonTheme } from '../constants';
import { floatingHelperAppearance } from '../../constants';
import Image from 'wix-ui-icons-common/Image';

const title = 'Don’t forget to setup payments';
const body =
  'In order to sell your music you need to choose a payment method. ';
const action = { actionText: 'Ok, Take Me There', onActionClick: () => null };
const image = <Image style={{ color: 'white' }} width="102" height="102" />;
const footer = (
  <Box align="center" verticalAlign="middle" backgroundColor="D10">
    <Text light>This is a footer with a dark background</Text>
  </Box>
);

const actionButtonThemes = Object.values(actionButtonTheme);
const appearances = Object.values(floatingHelperAppearance);

const defaultProps = {
  actionTheme: actionButtonTheme.white,
  appearance: floatingHelperAppearance.dark,
};

const requiredProps = { body };

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'default',
        props: {},
      },
    ],
  },
  {
    describe: 'title',
    its: [
      {
        it: 'enabled',
        props: { title },
      },
      {
        it: 'with action',
        props: { title, ...action },
      },
    ],
  },
  {
    describe: 'action button',
    its: [{ it: 'default', props: { title, ...action } }],
  },
  {
    describe: 'action button',
    its: actionButtonThemes.map(actionTheme => ({
      it: `${actionTheme}`,
      props: { title, ...action, actionTheme },
    })),
  },
  {
    describe: 'image',
    its: [
      {
        it: 'enabled',
        props: { image },
      },
      {
        it: 'with title & action',
        props: { title, ...action, image },
      },
    ],
  },
  {
    describe: 'appearance',
    its: appearances.map(appearance => ({
      it: `${appearance}`,
      props: { appearance },
    })),
  },
  {
    describe: 'footer',
    its: [
      { it: 'enabled', props: { footer } },
      {
        it: 'with title, action & image',
        props: { footer, title, ...action, image },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `FloatingHelperContent${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => (
      <div
        style={{
          padding: '20px',
          display: 'inline-block',
          backgroundColor: props.appearance === 'light' ? '#ffffff' : '#162d3d',
        }}
      >
        <FloatingHelperContent
          {...defaultProps}
          {...requiredProps}
          {...props}
        />
      </div>
    ));
  });
});
