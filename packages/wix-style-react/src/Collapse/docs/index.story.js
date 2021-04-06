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
import FormField from '../../FormField';
import Input from '../../Input';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

import Collapse from '..';

const exampleChildren = [
  { label: 'Simple text', value: 'Lorem perferendis sapiente quas facilis!' },
  {
    label: 'FormField with Input',
    value: (
      <FormField label="Enter your name">
        <Input />
      </FormField>
    ),
  },
];

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Collapse,
  componentPath: '..',

  componentProps: {
    children: 'Example text as a collapsible content',
    open: true,
  },

  exampleProps: {
    children: exampleChildren,
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${Collapse.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'Collapse component is used to make content collapsible.<br/> Easily create accordions or within `<Card/>` to collapse its `<Card.Content/>`.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text:
              'A simple example with compact preview. Children of the component become collapsible.',
            source: examples.simple,
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
