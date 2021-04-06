import React from 'react';
import { storiesOf } from '@storybook/react';
import LinearProgressBar from '../LinearProgressBar';
import { SKINS } from '../constants';
import { Layout, Cell } from '../../Layout';
import Box from '../../Box';

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default render',
        props: { value: 20 },
      },
    ],
  },
  {
    describe: 'progress indication',
    its: [
      {
        it: 'shown',
        props: { value: 20, showProgressIndication: true },
      },
      {
        it: 'hidden',
        props: { value: 20 },
      },
      {
        it: 'success icon is shown when progress is 100%',
        props: { value: 100, showProgressIndication: true },
      },
      {
        it: 'error icon is shown when there is an error',
        props: {
          value: 20,
          showProgressIndication: true,
          error: true,
          errorMessage: 'Some error',
        },
      },
    ],
  },
  {
    describe: 'theme',
    its: [
      {
        it: 'light regular',
        props: { value: 20, light: true },
      },
      {
        it: 'light with an error',
        props: { value: 20, light: true, error: true },
      },
      {
        it: 'light with a progress indication',
        props: { value: 20, light: true, showProgressIndication: true },
      },
      {
        it: 'light with an error and progress indication',
        props: {
          value: 20,
          light: true,
          showProgressIndication: true,
          error: true,
        },
      },
    ],
  },
  {
    describe: 'error',
    its: [
      {
        it: 'exists',
        props: { value: 20, error: true },
      },
      {
        it: 'does not exist',
        props: { value: 20, error: false },
      },
      {
        it: 'display an error icon',
        props: {
          value: 20,
          showProgressIndication: true,
          error: true,
          errorMessage: 'Some error',
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
        `${themeName ? `${themeName}|` : ''}LinearProgressBar${
          describe ? '/' + describe : ''
        }`,
        module,
      ).add(it, () =>
        testWithTheme(
          <Box
            backgroundColor={props.light ? 'D10' : 'D80'}
            align="center"
            verticalAlign="middle"
            padding="40px"
          >
            <Layout>
              <Cell>
                <LinearProgressBar {...props} />
              </Cell>
              <Cell>
                <LinearProgressBar {...props} skin={SKINS.success} />
              </Cell>
            </Layout>
          </Box>,
        ),
      );
    });
  });
};
