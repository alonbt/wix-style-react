import React from 'react';
import { storiesOf } from '@storybook/react';

import { MessageBoxMarketerialLayout } from '..';

const baseProps = {
  title: 'Looking good! Your site is on Google',
  content:
    'All of your pages are indexed and now come up as separate search results on Google. This is great for your visibility!',
  confirmText: 'Button',
  imageUrl:
    'https://static.wixstatic.com/media/9ab0d1_8f1d1bd00e6c4bcd8764e1cae938f872~mv1.png',
  theme: 'blue',
};

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: 'no buttons',
        props: {
          ...baseProps,
          primaryButtonLabel: 'Button',
          secondaryButtonLabel: 'Secondary action',
        },
      },
      {
        it: 'no buttons & no padding',
        props: {
          ...baseProps,
          removeButtonsPadding: true,
        },
      },
      {
        it: 'no buttons with padding',
        props: {
          ...baseProps,
        },
      },
      {
        it: 'Without header',
        props: {
          title: 'No Header',
          content: 'Some content to show you',
          theme: 'white',
          primaryButtonLabel: 'Button',
        },
      },
      {
        it: 'custom width',
        props: {
          title: 'Custom width',
          content: 'Some content to show you',
          theme: 'white',
          width: '800px',
          primaryButtonLabel: 'Button',
        },
      },
      {
        it: 'no body padding',
        props: {
          title: 'No Body Padding - long text in title',
          content:
            'Some content to show you Some content to show you Some content to show you',
          noBodyPadding: true,
          theme: 'white',
          primaryButtonLabel: 'Button',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `MessageBox/MarketrialLayout${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <MessageBoxMarketerialLayout {...props} />);
  });
});
