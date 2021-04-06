import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from './storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';
import { Button, TextButton } from '../../index';

import CopyClipboard from '..';

const example = config => baseExample({ components: allComponents, ...config });

const childrenExample = [
  {
    label: 'Button',
    value: ({ isCopied, copyToClipboard }) => (
      <Button onClick={() => copyToClipboard()}>
        {!isCopied ? 'Copy' : 'Copied!'}
      </Button>
    ),
  },
  {
    label: 'TextButton',
    value: ({ isCopied, copyToClipboard }) => (
      <TextButton onClick={() => copyToClipboard()}>
        {!isCopied ? 'Copy' : 'Copied!'}
      </TextButton>
    ),
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: CopyClipboard,
  componentPath: '..',

  componentProps: {
    value: 'https://www.wix-style-react.com',
    children: childrenExample[0].value,
    resetTimeout: 500,
  },

  exampleProps: {
    onCopy: () => {},
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${CopyClipboard.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'CopyClipboard is a function mechanism that wraps other components to provide copy/paste functionality. Use it to copy urls, code snippets or similar.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Structure',
            text:
              'Component accepts the children as a function. The copied value is taken from `value` prop',
            source: examples.structure,
          }),

          example({
            title: 'Usage',
            text:
              'Component can be used with an input with a button. Once the item is copied the interface should respond with a timeout message.',
            source: examples.usage,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        {
          title: 'Testkit',
          sections: [
            testkit(),
            divider(),
            title('Required polyfills for JSDom environment'),
            importExample(
              `import { selectionBehaviorPolyfill, rangePolyfill, execCommandBehaviorPolyfill } from 'wix-style-react/dist/testkit/polyfills';`,
            ),
          ],
        },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
