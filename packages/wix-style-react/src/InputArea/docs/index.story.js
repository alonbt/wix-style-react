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
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

import InputArea from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

const exampleStatus = [
  {
    label: 'Error',
    value: 'error',
  },
  {
    label: 'Warning',
    value: 'warning',
  },
  {
    label: 'Loading',
    value: 'loading',
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: InputArea,
  componentPath: '..',

  componentProps: {
    status: undefined,
    hasCounter: false,
    resizable: false,
    disabled: false,
    statusMessage: 'This is a message!',
  },

  exampleProps: {
    status: exampleStatus,
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${InputArea.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: 'A multi-line text input component',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Standard',
            text: 'A simple use with a placeholder',
            source: examples.standard,
          }),
          example({
            title: 'Letter counting',
            text:
              'InputArea can indicate how many letters was typed, in order to show the counter you should set both `maxLength` and `hasCounter`.',
            source: examples.letterCounting,
          }),
          example({
            title: 'Disabled and Read only',
            text: 'InputArea supports `disabled` and `readOnly` states',
            source: examples.disabledReadOnly,
          }),
          example({
            title: 'With status',
            text: 'InputArea supports `error`, `warning`, and `loading` status',
            source: examples.status,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
