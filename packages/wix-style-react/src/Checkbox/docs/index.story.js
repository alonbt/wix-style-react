import React from 'react';
import Checkbox from '..';
import { Languages } from 'wix-ui-icons-common';

import { storySettings } from './storySettings';
import {
  description,
  api,
  divider,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
  example as baseExample,
  code as baseCode,
} from 'wix-storybook-utils/Sections';
import * as examples from './examples';
import allComponents from '../../../stories/utils/allComponents';

const example = config => baseExample({ components: allComponents, ...config });

const code = config =>
  baseCode({
    components: allComponents,
    ...config,
  });

const labelExamples = [
  { label: 'Simple string', value: 'Hello World!' },
  {
    label: 'Component',
    value: (
      <span key={0}>
        Hello <strong>World!</strong>
      </span>
    ),
  },
  {
    label: 'Component with icon',
    value: (
      <span key={1}>
        Hello <Languages />
      </span>
    ),
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: Checkbox,
  componentPath: '..',

  componentProps: setState => ({
    children: labelExamples[0].value,
    onChange: ({ target: { checked } }) => setState({ checked }),
    errorMessage: '',
    hasError: false,
    disabled: false,
    checked: false,
    size: 'medium',
  }),

  exampleProps: {
    children: labelExamples,
    onChange: ({ target: { checked } }) => (checked ? 'Checked' : 'Unchecked'),
  },

  hiddenProps: ['id', 'hover'],

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/Checkbox',
      component: <Checkbox>Hello World!</Checkbox>,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'Checkbox allows the user to select one or more items from a set.',
          }),

          importExample("import { Checkbox } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          example({
            title: 'Sizes',
            text: 'Checkbox has two sizes: `medium` (default) and `small`.',
            source: examples.sizes,
          }),

          example({
            title: 'Checkbox States',
            text:
              'Checkbox can be either checked, unchecked, has error or disabled.',
            source: examples.checkboxStates,
          }),

          example({
            title: 'Selection Area',
            text:
              'A selection area makes is easier to select the checkbox, with a background or a border as an indicator to the click area',
            source: examples.selectionArea,
          }),

          example({
            title: 'Controlled checkbox',
            source: examples.controlledCheckbox,
          }),
          example({
            title: 'Checkbox with tooltip props',
            source: examples.withTooltipProps,
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
