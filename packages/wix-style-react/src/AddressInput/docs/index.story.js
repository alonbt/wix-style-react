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
import LinkTo from '@storybook/addon-links/react';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

import AddressInput from '..';
import { addressInputItemBuilder } from '../../AddressInputItem';
import { Category } from '../../../stories/storiesHierarchy';

const predictions = [
  {
    id: 0,
    displayLabel: 'First option',
    mainLabel: 'First',
    secondaryLabel: 'option',
  },
  {
    id: 1,
    displayLabel: 'Second option',
    mainLabel: 'Second',
    secondaryLabel: 'option',
  },
];
const options = predictions.map(addressInputItemBuilder);

const example = config =>
  baseExample({
    components: {
      ...allComponents,
      options,
    },
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: AddressInput,
  componentPath: '..',

  componentProps: {
    size: 'medium',
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${AddressInput.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: [
              'An address search component, requires an address provider.',
              <br />,
              'You can see how to customize options using the ',
              <LinkTo kind={Category.COMPONENTS} story="AddressInputItem">
                {`<AddressInputItem/>`}
              </LinkTo>,
              ' component.',
            ],
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple example.',
            source: examples.simple,
          }),

          example({
            title: 'Sizes',
            text:
              'You can set the size of the input to be `small`, `medium` or `large` (default: `medium`)',
            source: examples.sizes,
          }),

          example({
            title: 'Shape',
            text:
              'AddressInput can be either `round` or `standard` (rectangular) depending on the `border` prop (default: `round`).',
            source: examples.shape,
          }),

          example({
            title: 'Clear button',
            text:
              'A clear button can be displayed using the `clearButton` prop (default: `true`).',
            source: examples.clearButton,
          }),

          example({
            title: 'States',
            text: `AddressInput is either disabled, loading, showing results or is empty.\n
Click on each input to see dropdown differences.`,
            source: examples.states,
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
