import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading, { APPEARANCES } from '..';
import WixStyleReactProvider from '../../WixStyleReactProvider';

const defaultProps = {
  light: false,
  appearance: 'H1',
  children: 'Hey there, good looking',
};

const tests = [
  {
    describe: 'basic',
    its: [
      ...Object.values(APPEARANCES).map(appearance => ({
        it: `appearance prop ${appearance}`,
        props: {
          appearance,
        },
      })),
      {
        it: 'light prop - dark',
      },
      {
        it: 'light prop - light',
        props: {
          light: true,
        },
      },
    ],
  },
  {
    describe: 'ellipsis',
    its: [
      {
        it: 'with',
        props: {
          ellipsis: true,
          children: 'very very long text',
        },
        container: {
          style: { width: '267px' },
        },
      },
    ],
  },
];

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  tests.forEach(({ describe, its }) => {
    its.forEach(({ it, props, container }) => {
      storiesOf(
        `${themeName ? `${themeName}|` : ''}Heading${
          describe ? '/' + describe : ''
        }`,
        module,
      ).add(it, () =>
        testWithTheme(
          <div {...container}>
            <Heading {...defaultProps} {...props} />
          </div>,
        ),
      );
    });
  });
};

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, container }) => {
    storiesOf('Layout And Spacing| Heading', module).add(it, () => (
      <WixStyleReactProvider
        features={{ reducedSpacingAndImprovedLayout: true }}
      >
        <div {...container}>
          <Heading {...defaultProps} {...props} />
        </div>
      </WixStyleReactProvider>
    ));
  });
});
