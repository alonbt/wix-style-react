import React from 'react';
import BadgeSelectItem from '../BadgeSelectItem';
import Box from '../../Box';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  example as baseExample,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,
  component: BadgeSelectItem,
  componentPath: '..',

  componentProps: {
    text: 'Badge select item title',
    subtitle: 'Badge select item subtitle',
    skin: 'warning',
  },

  sections: [
    header({
      component: (
        <Box
          width="500px"
          backgroundColor="#f0f4f7"
          padding="25px"
          border="1px solid #e5e5e5"
        >
          <BadgeSelectItem text="Badge select item" suffix="Suffix" />
        </Box>
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'An option builder for the `<DropdownLayout/>` component and its consumers.',
            }),
          ]),

          importExample(
            `
// Use directly
import { BadgeSelectItem } from 'wix-style-react';
// Or use a builder
import { badgeSelectItemBuilder } from 'wix-style-react';
              `,
          ),

          divider(),

          title('Examples'),

          example({
            title: 'Skin',
            text:
              "The component supports 13 different skins. Each skin represents a different status like warning or success. They are reflected in item's prefix.",
            source: examples.skins,
          }),

          example({
            title: 'Subtitle',
            text:
              'Additional information, like user email or address can be inserted to subtitle area.',
            source: examples.subtitleExample,
          }),

          example({
            title: 'Suffix',
            text:
              'Component has a suffix area. If plain text or icon is inserted, component automatically inverts the color when selected.',
            source: examples.suffix,
          }),

          example({
            title: 'Sizes',
            text:
              'The component supports 2 text sizes - medium (default) and small.',
            source: examples.sizes,
          }),

          example({
            title: 'Text cropping',
            text:
              'By default component wraps the text. If needed it can be configured to show ellipsis and display full value on hover.',
            source: examples.textCropping,
          }),

          example({
            title: 'Advanced Example',
            text:
              'All properties work together and can be combined in various ways. It can be rendered as standalone or as part of dropdown.',
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
