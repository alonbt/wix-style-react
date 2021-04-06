import React from 'react';
import { storiesOf } from '@storybook/react';
import { skins, contentOutlines } from '../constants';

import PreviewWidget from '../PreviewWidget';

import { Box, Text } from 'wix-style-react';

const defaultProps = {
  skin: 'neutral',
  contentOutline: 'shadow',
  height: '100%',
  width: '100%',
  children: <div />,
};

const childNode = (
  <Box padding="20px" backgroundColor="Y30">
    <Text>Content goes here</Text>
  </Box>
);

const childNodeLarge = (
  <Box padding="20px" backgroundColor="Y30">
    <Text>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
      enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
      felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
      elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo
      ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
      ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
      ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies
      nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
      rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
      libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit
      vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
      tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam
      quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
    </Text>
  </Box>
);

const tests = [
  {
    describe: 'Skins',
    its: [
      {
        it: skins.neutral,
        props: { skin: skins.neutral },
      },
      {
        it: skins.gradient,
        props: { skin: skins.gradient },
      },
      {
        it: skins.custom,
        props: {
          skin: skins.custom,
          backgroundColor: 'linear-gradient(#e66465, #9198e5)',
        },
      },
    ],
  },
  {
    describe: 'Content Outline',
    its: [
      {
        it: contentOutlines.shadow,
        props: { contentOutline: contentOutlines.shadow },
      },
      {
        it: contentOutlines.border,
        props: {
          contentOutline: contentOutlines.border,
          skin: skins.custom,
          backgroundColor: 'D80',
        },
      },
      {
        it: contentOutlines.none,
        props: { contentOutline: contentOutlines.none },
      },
    ],
  },
  {
    describe: 'Custom size',
    its: [
      {
        it: 'height',
        props: { height: '200px' },
      },
      {
        it: 'width',
        props: { width: '400px' },
      },
    ],
  },
  {
    describe: 'Scrollable',
    its: [
      {
        it: 'With scroll',
        props: { height: '200px', scrollable: true },
        children: childNodeLarge,
      },
      {
        it: 'Without scroll',
        props: { scrollable: false },
        children: childNodeLarge,
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, children = childNode }) => {
    storiesOf(`PreviewWidget${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <PreviewWidget {...defaultProps} {...props}>
          {children}
        </PreviewWidget>
      ),
    );
  });
});
