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

import AddressInputItem from '..';
import * as examples from './examples';
import ToolBoxIcon from 'wix-ui-icons-common/Location';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: AddressInputItem,
  componentPath: '..',

  componentProps: {
    mainLabel: 'main label',
    secondaryLabel: 'secondary label',
    suffix: 'suffix',
    prefix: <ToolBoxIcon />,
    optionLayout: 'single-line',
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${AddressInputItem.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'This component is used to display an address item mainly in the `<AddressInput/>` component.',
          }),

          importExample(`
// Use directly
import { AddressInputItem } from 'wix-style-react';
// Or use a builder
import { addressInputItemBuilder } from 'wix-style-react';`),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A basic example',
            source: examples.basicExample,
          }),

          example({
            title: 'Option Layout',
            text:
              'Addresses can be displayed as a single line (default) or double lines',
            source: examples.optionLayout,
          }),

          example({
            title: 'Affixes',
            text:
              'Component has prefix and suffix areas. Default prefix is location icon.',
            source: examples.Affixes,
          }),

          example({
            title: 'Advanced example',
            text:
              'All properties work together and can be combined in various ways. It can be rendered as standalone or as part of dropdown using builders.',
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
