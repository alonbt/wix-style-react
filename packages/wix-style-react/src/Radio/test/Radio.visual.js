import React from 'react';
import { snap, story, visualize } from 'storybook-snapper';
import Radio from '../Radio';

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'Unchecked',
        props: {},
      },
      {
        it: 'Checked',
        props: {
          checked: true,
        },
      },
      {
        it: 'With label',
        props: {
          label: 'Option',
        },
      },
      {
        it: 'Disabled and checked',
        props: {
          label: 'Option',
          checked: true,
          disabled: true,
        },
      },
      {
        it: 'Top align',
        props: {
          label: 'Option',
          alignItems: 'top',
        },
      },
    ],
  },
];

export const runTests = () => {
  visualize(Radio.displayName, () => {
    tests.forEach(({ describe, its }) => {
      story(describe, () => {
        its.map(({ it, props }) => snap(it, () => <Radio {...props} />));
      });
    });
  });
};
