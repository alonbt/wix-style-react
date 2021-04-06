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

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import { TYPES } from '../constants';
import SelectableAccordion from '..';
import * as examples from './examples';
import FormField from '../../FormField';
import Dropdown from '../../Dropdown';

const example = config => baseExample({ components: allComponents, ...config });

const item = config => ({
  title: 'Item',
  subtitle: 'Subtitle',
  content: 'Content',
  ...config,
});

const exampleItems = [
  {
    label: 'Simple Example',
    value: [item({ initiallyOpen: true }), item()],
  },
  {
    label: 'Advanced Example',
    value: [
      item({
        initiallyOpen: true,
        title: 'Free Plan',
        subtitle: 'Offer this plan free of charge',
        content: (
          <FormField label="Length of Plan" required>
            <Dropdown
              placeholder="Select"
              options={[{ id: 0, value: '1 Month' }]}
            />
          </FormField>
        ),
      }),
      item({
        title: 'One-time Payment',
        subtitle: 'Charge a single upfront fee',
      }),

      item({
        title: 'Recurring Payments',
        subtitle: 'Charge a weekly, monthly or yearly fee',
      }),
    ],
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: SelectableAccordion,
  componentPath: '..',

  componentProps: {
    items: exampleItems[0].value,
  },

  exampleProps: {
    items: exampleItems,
    type: Object.values(TYPES),
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${SelectableAccordion.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'Selectable Accordion is a list of collapsible content that shows up when the controller is clicked. It supports three types of controllers — radio, checkbox, toggle. Use it to list selectable features which have more controls when they are enabled.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Structure',
            text:
              '`<SelectableAccordion/>` consists of list items with the clickable header, and content area.',
            source: examples.structure,
          }),

          example({
            title: 'Type',
            text:
              '`<SelectableAccordion/>` supports three types of controllers— `radio` (default), `checkbox` and `toggle`. Use a radio when a user has to select one option. Use a checkbox when a user has to include options from the list. Use a toggle when a user has to enable features.',
            source: examples.typesExample,
          }),

          example({
            title: 'Subtitle',
            text:
              '`<SelectableAccordion/>` item header can have a subtitle. Use it to explain the options.',
            source: examples.subtitle,
          }),

          example({
            title: 'Initially Active / Open',
            text:
              '`<SelectableAccordion/>` items can load open by setting `initiallyOpen` to `true`.',
            source: examples.initiallyOpen,
          }),

          example({
            title: 'Disabled',
            text:
              '`<SelectableAccordion/>` items can be disabled by setting `disabled` to `true`.',
            source: examples.disabledState,
          }),

          example({
            title: 'Advanced Example',
            text:
              'This example shows how it can be applied to a real case scenario while using it with other components.',
            source: examples.advancedExample,
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
