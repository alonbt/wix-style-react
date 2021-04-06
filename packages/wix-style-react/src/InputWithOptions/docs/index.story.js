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

import { storySettings } from './storySettings';
import allComponents from '../../../stories/utils/allComponents';

import InputWithOptions from '..';
import testkitDesc from './testkit.md';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: InputWithOptions,
  componentPath: '..',

  componentProps: {},

  exampleProps: {},

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${InputWithOptions.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: 'options component for Input',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple example with compact preview',
            source: `
<InputWithOptions options={[
  { id: 0, value: 'First option' },
  { id: 1, value: 'Unselectable option', unselectable: true },
  { id: 2, value: 'Third option' },
  { id: 3, value: <span style={{ color: 'red' }}>Node option</span> },
  { id: 4, value: '-' },
  {
    id: 5,
    value:
      'Very long option text jldlkasj ldk jsalkdjsal kdjaklsjdlkasj dklasj',
  },
]}/>
`,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [description(testkitDesc)] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
