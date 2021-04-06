import React from 'react';
import { storiesOf } from '@storybook/react';
import HorizontalTimeline from '../HorizontalTimeline';

const tests = [
  {
    describe: 'items',
    its: [
      {
        it: 'defaults',
        props: {
          items: [
            { label: 'Instructions completed' },
            { label: 'Domain check' },
            { label: 'Site is live worldwide' },
          ],
        },
      },
      {
        it: 'should have custom width for items',
        props: {
          items: [
            { label: 'Instructions completed', width: '50px' },
            { label: 'Domain check' },
            { label: 'Site is live worldwide', width: '5%' },
          ],
        },
      },
      {
        it: 'should have different icons and skins for each item',
        props: {
          items: [
            {
              label: 'Instructions completed',
              skin: 'dark',
              icon: <HorizontalTimeline.CompleteIcon />,
            },
            {
              label: 'Domain check',
              skin: 'dark',
              icon: <HorizontalTimeline.ActiveIcon />,
            },
            {
              label: 'Domain connecting',
              icon: <HorizontalTimeline.DefaultIcon />,
            },
            {
              label: 'Site is live worldwide',
              icon: <HorizontalTimeline.DestructiveIcon />,
            },
          ],
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${HorizontalTimeline.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <HorizontalTimeline {...props} />);
  });
});
