import React from 'react';
import {
  header,
  tabs,
  tab,
  title,
  description,
  importExample,
  divider,
  example as baseExample,
  api,
  testkit,
  playground,
} from 'wix-storybook-utils/Sections';
import InfoCircle from 'wix-ui-icons-common/InfoCircle';

import { storySettings } from './storySettings';
import Accordion, { accordionItemBuilder } from '..';
import RichTextInputArea from '../../RichTextInputArea';
import { buttonTypes } from '../constants';

import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

const item = config =>
  accordionItemBuilder({
    title: 'Item',
    icon: <InfoCircle />,
    expandLabel: 'See More',
    collapseLabel: 'Less',
    children: examples.text,
    ...config,
  });

const exampleItems = [
  {
    label: 'Two Rows',
    value: [
      item({
        title: 'First Row',
      }),
      item({
        title: 'Second Row',
      }),
    ],
  },

  {
    label: 'Three Rows having a button',
    value: [
      item({
        title: 'First Row',
      }),
      item({
        title: 'Second Row',
      }),

      item({
        title: 'Third Row With Editor',
        buttonType: buttonTypes.button,
        expandLabel: 'Show Editor',
        collapseLabel: 'Hide Editor',
        children: <RichTextInputArea />,
      }),
    ],
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Accordion,
  componentPath: '..',

  componentProps: {
    itemsHook: storySettings.itemsHook,
    items: exampleItems[0].value,
    multiple: false,
    skin: 'standard',
    size: 'large',
  },

  exampleProps: {
    items: exampleItems,
  },

  sections: [
    header(),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description('Accordion is a list of expandable/collapsible items.'),

          importExample(`
import {
  Accordion,
  accordionItemBuilder,
  accordionSectionItemBuilder,
} from 'wix-style-react';
          `),

          divider(),

          title('Examples'),

          example({
            title: 'Using item builders',
            text: `
Accordion is composed from a list of items that share expand/collapse functionality.\n
As a best practice, we recommend using the builder pattern in order to create accordion items.
            `,
            source: examples.simple,
          }),
          example({
            title: 'Using section item',
            text: `
Accordion may have sections to separate and organize lists of items.\n
            `,
            source: examples.withSection,
          }),
          example({
            title: 'Multiple with Initially Open',
            text: `
By default, all accordion items are closed initially and only one can be opened at the same time.\n
Using the \`multiple\` prop, open items will not close when other items are opened.\n
When the component is uncontrolled, use the \`initiallyOpen\` prop of an accordion item in order for it to be open when the component mounts.
            `,
            source: examples.multiple,
          }),
          example({
            title: 'Expand/collapse button',
            text: `
<b>Button type</b>\n

The expand/collapse button can be one of the following:
- textButton
- button
- node

<b>Expand/Collapse label</b>
- textButton - can be with or without label
- button - must be with label
- node - can be with or without label

<b>Show label</b>\n
The label can be shown \`always\` or on \`hover\`
- textButton - hover by default (only for the label, the chevron will always be shown)
- button - always by default
- node - hover by default
            `,
            source: examples.withButton,
          }),
          example({
            title: 'Disabled Accordion Rows',
            text:
              'Disabled rows cannot be expand/collapsed by the user nor they can focus the expand/collapsed button.',
            source: examples.disabled,
          }),
          example({
            title: 'Skins',
            text: `
Skin is global prop that affect all accordion items together.
It is applied only on the accordion item content.\n
            `,
            source: examples.skins,
          }),
          example({
            title: 'Sizes',
            text: `
Size is global prop that affect all accordion items together.
It is applied only on the accordion item header.\n
            `,
            source: examples.sizes,
          }),
          example({
            title: 'Backward compatibility',
            text: `
Before the builders pattern, accordion items were plain objects.\n
In order not to break old behavior, it can still be used until we decide to deprecate it.
            `,
            source: examples.backwardCompatibility,
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
