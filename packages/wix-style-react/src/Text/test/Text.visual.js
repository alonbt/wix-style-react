import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../Text';
import { SIZES, SKINS, WEIGHTS } from '../constants';
import { Layout, Cell } from 'wix-style-react';
import Box from '../../Box';

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'secondary',
        props: { secondary: true },
      },
      {
        it: 'light',
        props: { light: true },
        backgroundColor: 'black',
      },
      {
        it: 'link',
        props: { children: <a>Link text</a> },
      },
      {
        it: 'list',
        props: {
          children: (
            <ul style={{ width: 200 }}>
              <li>first list item with some text to span multiple lines</li>
              <li>
                second list item
                <ul>
                  <li>sub list item 1</li>
                  <li>sub list item 2</li>
                </ul>
              </li>
              <li>third list item</li>
            </ul>
          ),
        },
      },
      {
        it: 'list - circle',
        props: {
          listStyle: 'circle',
          children: (
            <ul style={{ width: 200 }}>
              <li>first list item with some text to span multiple lines</li>
              <li>
                second list item
                <ul>
                  <li>sub list item 1</li>
                  <li>sub list item 2</li>
                </ul>
              </li>
              <li>third list item</li>
            </ul>
          ),
        },
      },
      {
        it: 'tagName',
        props: { tagName: 'div' },
      },
    ],
  },
  {
    describe: 'skins',
    its: Object.keys(SKINS).map(skin => ({
      it: skin,
      props: { skin },
    })),
  },
  {
    describe: 'long text',
    its: [
      {
        it: 'line breaks',
        props: {
          ellipsis: false,
          children:
            'This is a very very very very long text that will *not* be cropped by ellipsis at some point',
        },
      },
      {
        it: 'ellipsis',
        props: {
          ellipsis: true,
          children:
            'This is a very very very very long text that will be cropped by ellipsis at some point',
        },
      },
      {
        it: 'maxLines',
        props: {
          maxLines: 2,
          ellipsis: true,
          children:
            'This is a very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long that will be cropped by ellipsis at some point',
        },
      },
    ],
  },
];

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  tests.forEach(({ describe, its }) => {
    its.forEach(({ it, props, backgroundColor }) => {
      const testStories = [];
      Object.keys(SIZES).forEach(size => {
        Object.keys(WEIGHTS).forEach(weight => {
          testStories.push(
            <Cell span={4} key={testStories.length}>
              <Box>
                <Text
                  size={size}
                  weight={weight}
                  children={'ABCDEFGHIJKLMNOPQRSTUVWXYZ'}
                  {...props}
                />
              </Box>
              {!props.children && (
                <Box>
                  <Text
                    size={size}
                    weight={weight}
                    children={'abcdefghijklmnopqrstuvwxyz'}
                    {...props}
                  />
                </Box>
              )}
            </Cell>,
          );
        });
      });

      storiesOf(
        `${themeName ? `${themeName}|` : ''}Text${
          describe ? '/' + describe : ''
        }`,
        module,
      ).add(it, () =>
        testWithTheme(
          <div style={{ backgroundColor: backgroundColor }}>
            <Layout>{testStories}</Layout>
          </div>,
        ),
      );
    });
  });
};
