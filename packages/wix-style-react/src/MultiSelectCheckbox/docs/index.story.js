import React from 'react';
import { storySettings } from './storySettings';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  playground,
  api,
  testkit,
  example as baseExample,
} from 'wix-storybook-utils/Sections';
import allComponents from '../../../stories/utils/allComponents';
import MultiSelectCheckbox from '..';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: MultiSelectCheckbox,
  componentPath: '..',

  componentProps: (setState, getState) => ({
    options: examples.options,
    selectedOptions: [],
    onDeselect: selectedOption => {
      setState({
        selectedOptions: getState().selectedOptions.filter(
          val => val !== selectedOption,
        ),
      });
    },
    onSelect: selectedOption => {
      setState({
        selectedOptions: [...getState().selectedOptions, selectedOption],
      });
    },
  }),

  exampleProps: {
    options: [
      { label: 'One option', value: [{ id: 0, value: 'Just me here' }] },
      { label: `${examples.options.length} options`, value: examples.options },
    ],
    onClickOutside: () => 'I was called!',
  },

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/MultiSelectCheckbox/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'MultiSelectCheckbox component can select multiple values through checkbox',
            }),
          ]),
          importExample(
            "import { MultiSelectCheckbox } from 'wix-style-react';",
          ),

          divider(),

          title('Examples'),

          example({
            title: 'Simple usage',
            text: 'Simple usage of object options.',
            source: examples.simple,
          }),

          example({
            title: 'Using builders',
            text:
              'Use the Multi-selection dropdown behavior using the predefined list items',
            source: examples.usingBuilders,
          }),

          example({
            title: 'Controlled',
            text: 'Use the `value` prop to control the input text',
            source: examples.controlled,
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
