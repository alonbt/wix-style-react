import React from 'react';
import { storiesOf } from '@storybook/react';
import { visualize, snap, story } from 'storybook-snapper';
import EmptyState from '../EmptyState';
import ImagePlaceholder from '../../../stories/utils/ImagePlaceholder';
import { RTLWrapper } from '../../../stories/utils/RTLWrapper';

const commonProps = {
  title: "You don't have any items yet",
  subtitle:
    'Create your product item in an easy & fast way to display it on your site',
  image: <ImagePlaceholder />,
  theme: 'page',
};

const children =
  'Consectetur tenetur enim impedit facilis assumenda Illum laborum delectus';

const tests = [
  {
    describe: 'theme',
    its: [
      {
        it: 'page',
        props: {
          theme: 'page',
        },
      },
      {
        it: 'page-no-border',
        props: {
          theme: 'page-no-border',
        },
      },
      {
        it: 'section',
        props: {
          theme: 'section',
        },
      },
    ],
  },
  {
    describe: 'sanity',
    its: [
      {
        it: 'no Title',
        props: {
          title: '',
        },
      },
      {
        it: 'no Subtitle',
        props: {
          subtitle: '',
        },
      },
      {
        it: 'no image',
        props: {
          image: '',
        },
      },
    ],
  },
  {
    describe: 'alignment',
    its: [
      {
        it: 'start',
        props: {
          align: 'start',
        },
      },
      {
        it: 'center',
        props: {
          align: 'center',
        },
      },
      {
        it: 'end',
        props: {
          align: 'end',
        },
      },
    ],
  },
  {
    describe: 'with children',
    its: [
      {
        it: 'start',
        props: {
          align: 'start',
          children,
        },
      },
      {
        it: 'center',
        props: {
          align: 'center',
          children,
        },
      },
      {
        it: 'end',
        props: {
          align: 'end',
          children,
        },
      },
    ],
  },
];

const rtlTests = [
  {
    describe: 'rtl',
    its: [
      {
        it: 'start',
        props: {
          align: 'start',
          children,
        },
      },
      {
        it: 'center',
        props: {
          align: 'center',
          children,
        },
      },
      {
        it: 'end',
        props: {
          align: 'end',
          children,
        },
      },
    ],
  },
];

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  visualize(`${themeName ? `${themeName}|` : ''}EmptyState`, () => {
    tests.forEach(({ describe, its }) => {
      its.forEach(({ it, props }) => {
        story(describe, () => {
          snap(it, testWithTheme(<EmptyState {...commonProps} {...props} />));
        });
      });
    });

    rtlTests.forEach(({ describe, its }) => {
      its.forEach(({ it, props }) => {
        story(describe, () => {
          snap(
            it,
            testWithTheme(
              <RTLWrapper rtl>
                <EmptyState {...commonProps} {...props} />
              </RTLWrapper>,
            ),
          );
        });
      });
    });
  });
};
