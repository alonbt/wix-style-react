import React from 'react';
import {
  header,
  tabs,
  tab,
  code as baseCode,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
  doDont,
} from 'wix-storybook-utils/Sections';
import * as examples from './examples';
import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import TextButton from '../../TextButton';
import { Add } from 'wix-ui-icons-common';
import PageSection from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: PageSection,
  componentPath: '..',

  componentProps: {
    title: 'Section Title',
    subtitle: 'I am a relatively long subtitle to fill this space',
    showDivider: true,
  },

  exampleProps: {
    actionsBar: [
      {
        label: 'Add Item',
        value: <TextButton prefixIcon={<Add />}>Add Item</TextButton>,
      },
    ],
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${PageSection.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Design',
        sections: [
          description({
            title: 'Usage',
            text:
              'PageSection is a standalone element that divides content of a page into multiple sections.',
          }),
          doDont({
            do: {
              list: [
                'Divide content into sections on a page.',
                'Group grid layouts visually.',
              ],
            },
            dont: {
              list: ['Divide content into sections inside of a card.'],
            },
          }),

          importExample(),

          divider(),

          title('Variations'),

          example({
            title: 'Structure',
            text:
              'Component consists of a title area and actions bar (optional). Actions bar can contain any number of actions.',
            source: examples.structure,
          }),

          example({
            title: 'Subtitle',
            text: 'Use subtitle to provide more context about section content',
            source: examples.subtitle,
          }),

          example({
            title: 'Divider',
            text:
              'Use divider to visually merge elements into one entity when section content is built using grid layout.',
            source: examples.divider,
          }),

          example({
            title: 'Text Overflow',
            text:
              'Both title and subtitle are limited to a single line of text. Longer values will be truncated and displayed in a tooltip on a hover.',
            source: examples.textOverflow,
          }),

          divider(),

          code({
            title: 'Common Use Cases',
            description:
              'Use PageSection to group elements into sections inside of a page',
            compact: true,
            source: examples.commonUseCases,
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
