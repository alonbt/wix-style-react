import React from 'react';
import { storySettings } from './storySettings';
import allComponents from '../utils/allComponents';
import {
  header,
  title,
  description,
  table,
  importExample,
  columns,
  example as baseExample,
} from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';
import * as examples from './examples';

import { Category } from '../storiesHierarchy';

import { Input, FormField } from 'wix-style-react';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    header({
      component: (
        <div style={{ width: '50%' }}>
          <FormField label="Text Input">
            <Input placeholder="Placeholder" />
          </FormField>
        </div>
      ),
    }),

    columns([
      description({
        title: 'Description',
        text: `Text Input is a composition of 2 individual components – &lt;FormField/&gt; and &lt;Input /&gt;. This composition is used to build various forms.`,
      }),
    ]),

    columns([
      table({
        title: 'Included Components',
        rows: [
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="FormField"
            >{`<FormField/>`}</LinkTo>,
            'Layout component for form elements',
          ],
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="Input"
            >{`<Input/>`}</LinkTo>,
            'Component that receives data',
          ],
        ],
      }),
    ]),

    importExample(examples.importExample),

    title('Examples'),

    example({
      title: 'Size',
      text: 'Text Input supports 3 sizes',
      source: examples.sizes,
    }),

    example({
      title: 'Affix',
      text: 'Text Input has additional container in prefix and suffix area',
      source: examples.affix,
    }),

    example({
      title: 'Char limit',
      text: 'It is allowed to set maximum number of characters',
      source: examples.charLimit,
    }),

    example({
      title: 'Required Info',
      text: 'You can add an asterisk if the field is required',
      source: examples.required,
    }),

    example({
      title: 'Label Position',
      text:
        'Text Input’s label can be position on top, left or can be hidden. Additional properties behave accordingly.',
      source: examples.position,
    }),
  ],
};
