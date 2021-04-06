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
  columns,
  table,
} from 'wix-storybook-utils/Sections';

import LinkTo from '@storybook/addon-links/react';
import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import { Category } from '../../../stories/storiesHierarchy';
import * as examples from './examples';
import DropdownLayout from '..';
import { createOptions } from '../../../stories/utils/playgroundUtils.js';

const example = config => baseExample({ components: allComponents, ...config });

const options = createOptions(10);

const groupsOptions = [
  { id: 0, value: 'Title 1', title: true },
  { id: 1, value: 'Item 1' },
  { id: 2, value: 'Item 2' },
  { id: 3, value: 'Title 2', title: true },
  { id: 4, value: 'Item 3' },
  { id: 5, value: 'Item 4' },
];

const exampleOptions = [
  {
    label: 'Simple usage',
    value: options,
  },
  {
    label: 'Groups',
    value: groupsOptions,
  },
];

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: DropdownLayout,
  componentPath: '..',

  componentProps: {
    options: exampleOptions[0].value,
    inContainer: true,
    visible: true,
  },

  exampleProps: {
    options: exampleOptions,
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${DropdownLayout.displayName}`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                '`<DropdownLayout/>` is in internal component which wraps multiple options into a list. It’s used in various select components like dropdown, autocomplete or multiselect. Use it to set up and style a list of selectable dropdown options, like selecting a country or similar. Examples show available configurations for select components options. For creating dropdown like components, please refer to `<DropdownBase/>`.',
            }),
          ]),

          importExample(),

          divider(),

          columns([
            table({
              title: 'Related Components',
              rows: [
                [
                  <LinkTo
                    kind={Category.COMPONENTS}
                    story="DropdownBase"
                  >{`<DropdownBase/>`}</LinkTo>,
                  'A component with a list of items that opens when the user interacts with a trigger element.',
                ],
                [
                  <LinkTo
                    kind={Category.COMPONENTS}
                    story="ListItemSelect"
                  >{`<ListItemSelect/>`}</LinkTo>,
                  'A single option of any selectable component',
                ],
                [
                  <LinkTo
                    kind={Category.COMPONENTS}
                    story="ListItemSection"
                  >{`<ListItemSection/>`}</LinkTo>,
                  'An internal component which is used to build dropdown or menu like components.',
                ],
                [
                  <LinkTo
                    kind={Category.COMPONENTS}
                    story="ListItemAction"
                  >{`<ListItemAction/>`}</LinkTo>,
                  'An internal component which is used to build dropdown or menu like components.',
                ],
                [
                  <LinkTo
                    kind={Category.COMPONENTS}
                    story="ListItemEditable"
                  >{`<ListItemEditable/>`}</LinkTo>,
                  'An internal editable component which is used to build dropdown or menu like components.',
                ],
                [
                  <LinkTo
                    kind={Category.COMPONENTS}
                    story="BadgeSelectItem"
                  >{`<BadgeSelectItem/>`}</LinkTo>,
                  'An internal component which is used to build dropdown or menu like components.',
                ],
                [
                  <LinkTo
                    kind={Category.WIP}
                    story="AddressInputItem"
                  >{`<AddressInputItem/>`}</LinkTo>,
                  'An internal component which is used to build dropdown or menu like components.',
                ],
              ],
            }),
          ]),

          title('Examples'),

          example({
            title: 'Structure',
            text:
              'Dropdown layout’s option is an object with a unique id and a value. To have a disabled option, a property of `disabled: true` should be added to the option object.',
            source: examples.simple,
          }),

          example({
            title: 'Maximum Height',
            text:
              '`<DropdownLayout/>` can be set with max height using the `maxHeightPixels` prop.',
            source: examples.maxHeight,
          }),

          example({
            title: 'Fixed Header And Footer',
            text:
              '`<DropdownLayout/>` supports adding content to fixed header and footer. Use it to add actions like “see all options”.',
            source: examples.headerFooter,
          }),

          example({
            title: 'Lazy Loading',
            text:
              'When scrolled to the bottom of the list, `<DropdownLayout/>` can load more items using the `infiniteScroll`, `loadMore` and `hasMore` props.',
            source: examples.infiniteScroll,
          }),

          example({
            title: 'Grouped Options',
            text:
              '`<DropdownLayout/>` options can be grouped or categorised by having title and divider options. To display a title or a divider, please use the `listItemSectionBuilder`.',
            source: examples.groups,
          }),

          example({
            title: 'Controlled',
            text: '`<DropdownLayout/>` can be a controlled component',
            source: examples.controlled,
          }),

          example({
            title: 'Render Function Options',
            text:
              'Options can be render functions to create more complex items. You can use your own render function or use one of the library builder functions. Each render function gets out of the box `select`, `disabled` and `hovered` states.',
            source: examples.functionOptions,
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
