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
  columns,
} from 'wix-storybook-utils/Sections';

import { storySettings } from './storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';
import Range from '..';
import DatePicker from '../../DatePicker';
import Input from '../../Input';

const example = config => baseExample({ components: allComponents, ...config });

const dataHooks = {
  firstItem: 'first-item',
  lastItem: 'last-item',
};

const datePickerChildren = [
  <DatePicker
    dataHook={dataHooks.firstItem}
    onChange={() => null}
    placeholderText="From"
    id="fromDate"
  />,
  <DatePicker
    dataHook={dataHooks.lastItem}
    onChange={() => null}
    placeholderText="To"
    id="toDate"
  />,
];

const inputsChildren = [
  <Input dataHook={dataHooks.firstItem} />,
  <Input dataHook={dataHooks.lastItem} />,
];

const componentProps = {
  children: datePickerChildren,
};

const exampleProps = {
  children: [
    {
      label: 'Date Picker Range',
      value: datePickerChildren,
    },
    {
      label: 'Inputs Range',
      value: inputsChildren,
    },
  ],
};

export default {
  category: storySettings.category,
  storyName: storySettings.story,
  component: Range,
  componentPath: '..',
  componentProps,
  exampleProps,

  sections: [
    header({
      title: '<Range/>',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/Range.js',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'Range component allows users to input values within a specific range. It can accept a range of values (min/max) or dates range .',
            }),
          ]),

          columns([
            importExample("import Range from 'wix-style-react/Range';"),
          ]),

          divider(),

          title('Examples'),

          example({
            title: 'Inputs example',
            source: examples.inputExample,
          }),

          example({
            title: 'Date Picker example',
            source: examples.datePickerExample,
          }),

          example({
            title: 'Error state example',
            source: examples.errorState,
          }),

          example({
            title: 'Disabled state example',
            source: examples.disabledState,
          }),
        ],
      }),

      tab({ title: 'API', sections: [api()] }),
      tab({ title: 'Testkit', sections: [testkit()] }),
      tab({ title: 'Playground', sections: [playground()] }),
    ]),
  ],
};
