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
import { FormField, RichTextInputArea } from 'wix-style-react';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    header({
      component: (
        <div style={{ width: '50%' }}>
          <FormField label="Rich Text Area">
            <RichTextInputArea placeholder="Placeholder" />
          </FormField>
        </div>
      ),
    }),

    description(
      'A rich text area can be used to allow for extended and formated user input.',
    ),

    columns([
      table({
        title: 'Included Components',
        rows: [
          [
            <LinkTo
              kind="Components"
              story="FormField"
            >{`<FormField/>`}</LinkTo>,
            'Layout component for form elements',
          ],
          [
            <LinkTo
              kind="Components"
              story="RichTextInputArea"
            >{`<RichTextInputArea/>`}</LinkTo>,
            'Component that receives rich data',
          ],
        ],
      }),
    ]),

    importExample(examples.importExample),

    title('Examples'),

    example({
      title: 'Plain Example',
      text: 'Default Rich text area setup.',
      source: examples.basicExample,
    }),

    example({
      title: 'Char Limit',
      text:
        'This component allows to limit number of characters can be inserted.',
      source: examples.charLimitExample,
    }),

    example({
      title: 'Resizable Height',
      text: 'It is allowed to make text area resizable.',
      source: examples.resizableHeightExample,
    }),

    example({
      title: 'Label Position',
      text: `Text Area's label can be position on top, left or can be hidden. Additional properties behave accordingly.`,
      source: examples.positionExample,
    }),
  ],
};
