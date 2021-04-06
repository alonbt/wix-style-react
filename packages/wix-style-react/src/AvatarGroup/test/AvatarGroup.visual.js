import React from 'react';
import { snap, story, visualize } from 'storybook-snapper';
import AvatarGroup from '../AvatarGroup';

const commonProps = {
  items: [
    { name: 'first user', color: 'A1' },
    { name: 'second user', color: 'A2' },
    { name: 'third avatar', color: 'A3' },
    { name: 'fourth avatar', color: 'A4' },
    { name: 'fifth avatar', color: 'A5' },
    { name: 'sixth avatar', color: 'A6' },
    { name: 'seventh avatar', color: 'A1' },
    { name: 'eighth avatar', color: 'A2' },
    { name: 'ninth avatar', color: 'A3' },
  ],
  // use for repeated props across the tests (e.g. {buttonText: 'example'})
};

const tests = [
  {
    describe: 'sanity', // prop name (e.g. size)
    its: [
      {
        it: 'default', // prop variation (e.g. small)
        props: {},
      },
    ],
  },
  {
    describe: 'divider',
    its: [
      {
        it: 'should render with divider',
        props: {
          showDivider: true,
        },
      },
      {
        it: 'should render with divider with condensed grouping',
        props: {
          type: 'condensed',
          showDivider: true,
        },
      },
      {
        it: 'should not render if has less than two avatar',
        props: {
          showDivider: true,
          items: [{ name: 'first user', color: 'A1' }],
        },
      },
    ],
  },
  {
    describe: 'size',
    its: [
      {
        it: 'should render as medium by default',
        props: {},
      },
      {
        it: 'should render as medium by prop',
        props: {
          size: 'medium',
        },
      },
      {
        it: 'should render as small',
        props: {
          size: 'small',
        },
      },
    ],
  },
  {
    describe: 'grouping type',
    its: [
      {
        it: 'should render as condensed grouping',
        props: {
          type: 'condensed',
        },
      },
      {
        it: 'should render as stretched grouping',
        props: {
          type: 'stretched',
        },
      },
    ],
  },
];

export const runTests = () => {
  visualize(AvatarGroup.displayName, () => {
    tests.forEach(({ describe, its }) => {
      story(describe, () => {
        its.map(({ it, props }) =>
          snap(it, () => <AvatarGroup {...commonProps} {...props} />),
        );
      });
    });
  });
};
