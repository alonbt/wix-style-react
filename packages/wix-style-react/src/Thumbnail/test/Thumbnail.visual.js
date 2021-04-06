import React from 'react';
import { visualize, snap, story } from 'storybook-snapper';
import Thumbnail from '../Thumbnail';

const title = 'Thumbnail title';
const description = 'Description about this thumbnail option goes here';
const image =
  'https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_234,h_72/c78d05b79ede429fb77c9d8ec4443b93.jpg';
const backgroundImage =
  'https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_500,h_500/c78d05b79ede429fb77c9d8ec4443b93.jpg';
const squareSize = {
  width: 200,
  height: 200,
};

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: 'Title, description and image',
        props: {
          title,
          description,
          image,
        },
      },
      {
        it: 'Selected',
        props: {
          selected: true,
          title,
          description,
          image,
        },
      },
      {
        it: 'Disabled',
        props: {
          disabled: true,
          title,
          description,
          image,
        },
      },
      {
        it: 'Selected and disabled',
        props: {
          disabled: true,
          selected: true,
          title,
          description,
          image,
        },
      },
      {
        it: 'Hide selected icon',
        props: {
          hideSelectedIcon: true,
          selected: true,
          title,
          description,
          image,
        },
      },
      {
        it: 'Width',
        props: {
          width: 250,
          selected: true,
          title,
          description,
          image,
        },
      },
      {
        it: 'Height',
        props: {
          height: 400,
          selected: true,
          title,
          description,
          image,
        },
      },
      {
        it: 'Content aligned to top',
        props: {
          height: 250,
          contentAlignment: 'top',
          selected: true,
          title,
          description,
          image,
        },
      },
      {
        it: 'Size',
        props: {
          size: 'tiny',
          title,
          description,
          image,
        },
      },
    ],
  },
  {
    describe: 'Background image',
    its: [
      {
        it: 'With long title',
        props: {
          backgroundImage,
          ...squareSize,
          title:
            'Thumbnail title that reaches out the boundaries of thumbnail component',
        },
      },
      {
        it: 'Selected',
        props: {
          selected: true,
          backgroundImage,
          ...squareSize,
          title,
        },
      },
      {
        it: 'Disabled',
        props: {
          disabled: true,
          backgroundImage,
          ...squareSize,
          title,
        },
      },
    ],
  },
  {
    describe: 'Custom children',
    its: [
      {
        it: 'With long title',
        props: {
          children: (
            <div
              style={{ backgroundColor: 'rgba(255,0,11,0.6)', padding: '15px' }}
            >
              Custom element
            </div>
          ),
          title:
            'Thumbnail title that reaches out the boundaries of thumbnail component',
        },
      },
      {
        it: 'Selected',
        props: {
          selected: true,
          children: (
            <div
              style={{ backgroundColor: 'rgba(255,0,11,0.6)', padding: '15px' }}
            >
              Custom element
            </div>
          ),
        },
      },
      {
        it: 'Disabled',
        props: {
          disabled: true,
          children: (
            <div
              style={{ backgroundColor: 'rgba(255,0,11,0.6)', padding: '15px' }}
            >
              Custom element
            </div>
          ),
        },
      },
    ],
  },
];

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  visualize(
    `${themeName ? `${themeName}|` : ''}${Thumbnail.displayName}`,
    () => {
      tests.forEach(({ describe, its }) => {
        story(describe, () => {
          its.forEach(({ it, props }) =>
            snap(it, () =>
              testWithTheme(
                <div style={{ width: '300px', padding: '15px' }}>
                  <Thumbnail {...props} />
                </div>,
              ),
            ),
          );
        });
      });
    },
  );
};
