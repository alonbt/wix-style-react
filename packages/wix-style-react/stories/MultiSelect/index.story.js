import React from 'react';
import MultiSelect from '../../src/MultiSelect';

import {
  header,
  title,
  description,
  divider,
  table,
  importExample,
  columns,
  example as baseExample,
} from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';
import * as examples from './examples';

import { storySettings } from './storySettings';
import { Category } from '../storiesHierarchy';
import allComponents from '../utils/allComponents';

import { Layout, Cell, FormField } from 'wix-style-react';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  sections: [
    header({
      component: (
        <Layout>
          <Cell span={6}>
            <FormField label="Tag Input">
              <MultiSelect
                tags={[
                  { id: '1', label: 'tag 1' },
                  { id: '2', label: 'tag 2' },
                ]}
              />
            </FormField>
          </Cell>
        </Layout>
      ),
    }),

    columns([
      description({
        title: 'Description',
        text:
          'Tag Input is a composition of 2 individual components – `<FormField/>` and `<MultiSelect/>`. Use it when site owner needs to enter multiple keywords. A component for selecting/creating multiple values, and displaying them as tags.',
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
          ],
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="Multiselect"
            >{`<MultiSelect/>`}</LinkTo>,
          ],
          [<LinkTo kind={Category.COMPONENTS} story="Tag">{`<Tag/>`}</LinkTo>],
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="TextButton"
            >{`<TextButton/>`}</LinkTo>,
          ],
          [
            <LinkTo
              kind={Category.COMPONENTS}
              story="Avatar"
            >{`<Avatar/>`}</LinkTo>,
          ],
        ],
      }),
    ]),

    importExample(examples.importExample),

    divider(),

    title('Examples'),

    example({
      title: 'Size',
      text: 'Tag input can appear in 3 sizes – `small`, `medium` and `large`.',
      source: examples.size,
    }),

    example({
      title: 'Select Mode',
      text: 'Tag Input has two select modes – select and type with a keyboard.',
      source: examples.mode,
    }),

    example({
      title: 'Custom Values',
      text:
        'Tag Input can be set to allow only predefined values, custom values or both.',
      source: examples.customValues,
    }),

    example({
      title: 'Action',
      text: 'Encourage user interaction by displaying the call to action.',
      source: examples.action,
    }),

    example({
      title: 'Required',
      text: 'You can add an asterisk if the field is required.',
      source: examples.required,
    }),

    example({
      title: 'Label Position',
      text:
        'Tag Input’s label can be position on top, left or can be hidden. Additional properties behave accordingly.',
      source: examples.labelPosition,
    }),

    divider(),

    title('Advanced Examples'),

    example({
      title: 'Reordering Tags',
      text: 'You can allow reodering tags using drag and drop functionality.',
      source: examples.reordable,
    }),

    example({
      title: 'Customizing list',
      text:
        'You can customize options by adding `<ListItemSelect/>` props – size, prefix, suffix and subtitle.',
      source: examples.customList,
    }),
  ],
};
