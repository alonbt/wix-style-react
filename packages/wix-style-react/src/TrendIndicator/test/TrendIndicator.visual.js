import React from 'react';
import { snap, story, visualize } from 'storybook-snapper';
import TrendIndicator from '../TrendIndicator';
import { Cell, Layout } from '../../Layout';
import Box from '../../Box';

const commonProps = {};

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'sanity',
        props: {},
      },
      {
        it: 'inverted',
        props: {
          inverted: true,
        },
      },
    ],
  },
];

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  visualize(
    `${themeName ? `${themeName}|` : ''}${TrendIndicator.displayName}`,
    () => {
      tests.forEach(({ describe, its }) => {
        story(describe, () => {
          its.map(({ it, props }) =>
            snap(it, () =>
              testWithTheme(
                <Box width="200">
                  <Layout cols={3} alignItems="center" justifyItems="center">
                    <Cell span={1}>
                      <TrendIndicator {...commonProps} {...props} value={-10} />
                    </Cell>
                    <Cell span={1}>
                      <TrendIndicator {...commonProps} {...props} value={0} />
                    </Cell>
                    <Cell span={1}>
                      <TrendIndicator {...commonProps} {...props} value={10} />
                    </Cell>
                  </Layout>
                </Box>,
              ),
            ),
          );
        });
      });
    },
  );
};
