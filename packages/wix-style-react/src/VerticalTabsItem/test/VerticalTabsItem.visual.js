import React from 'react';
import { storiesOf } from '@storybook/react';
import Add from 'wix-ui-icons-common/Add';
import VerticalTabsItem from '../VerticalTabsItem';

const tests = [
  {
    describe: 'type',
    its: [
      {
        it: 'tab',
        props: {
          type: 'tab',
        },
      },
      {
        it: 'action',
        props: {
          type: 'action',
        },
      },
      {
        it: 'title',
        props: {
          type: 'title',
        },
      },
    ],
  },
  {
    describe: 'disabled',
    its: [
      {
        it: 'true',
        props: {
          disabled: true,
        },
      },
      {
        it: 'false',
        props: {
          disabled: false,
        },
      },
    ],
  },
  {
    describe: 'prefixIcon',
    its: [
      {
        it: 'prefixIcon',
        props: {
          prefixIcon: <Add />,
        },
      },
    ],
  },
  {
    describe: 'suffixIcon',
    its: [
      {
        it: 'suffixIcon',
        props: {
          suffixIcon: <Add />,
        },
      },
    ],
  },
];

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  tests.forEach(({ describe, its }) => {
    its.forEach(({ it, props }) => {
      storiesOf(
        `${themeName ? `${themeName}|` : ''}VerticalTabsItem${
          describe ? '/' + describe : ''
        }`,
        module,
      ).add(it, () =>
        testWithTheme(<VerticalTabsItem {...props}>Tab Item</VerticalTabsItem>),
      );
    });
  });
};
