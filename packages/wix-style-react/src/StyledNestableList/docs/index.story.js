import React from 'react';
import {
  api,
  description,
  divider,
  example as baseExample,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import StyledNestableList from '..';
import { getCollapsedExampleSource, getSource } from './getExampleSource';
import { getSimpleExampleItems } from './examplesConstants';
import SectionHelper from '../../SectionHelper';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: StyledNestableList,
  componentPath: '..',

  componentProps: {
    items: getSimpleExampleItems({
      draggable: true,
    }),
    withBottomBorder: false,
    preventChangeDepth: false,
    addItemLabel: 'Add item',
    onChange(data) {
      // eslint-disable-next-line no-console
      console.log(data);
    },
    onAddItem(data) {
      // eslint-disable-next-line no-console
      console.log(data);
    },
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${StyledNestableList.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: 'A styled list with drag and drop and nesting capabilities.',
          }),

          importExample(),

          divider(),

          description({
            text: (
              <SectionHelper title="WARNING">
                This component is work in progress, please don't use this
                component unless you were instructed to by wsr team. <br />
                Note that API is not stable and can change anytime!
              </SectionHelper>
            ),
          }),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple example with compact preview',
            source: getSource({
              preventChangeDepth: false,
              items: getSimpleExampleItems({ draggable: true }),
            }),
          }),
          example({
            title: 'Max depth',
            text: 'You can specify max depth of the three',
            source: getSource({
              preventChangeDepth: false,
              maxDepth: 2,
              items: getSimpleExampleItems({ draggable: true }),
            }),
          }),
          example({
            title: 'Add new item to the root',
            text: 'This component has build in add new item button.',
            source: getSource({
              preventChangeDepth: false,
              addItemLabel: 'Add New Node To The Root',
              maxDepth: 2,
              items: getSimpleExampleItems({
                draggable: true,
              }),
            }),
          }),
          example({
            title: 'Add new item to the nodes',
            text: 'This component has build in add new item button.',
            source: getSource({
              preventChangeDepth: false,
              addItemLabel: 'Add New Node To The Root',
              items: getSimpleExampleItems({
                draggable: true,
                addItemLabel: 'Add New Item',
              }),
            }),
          }),
          example({
            title: "Prevent change node's depth",
            text:
              "In some cases you might be want to prevent change nodes depth level. For instance if you have carts and products you don't want to put cart into product",
            source: getSource({
              preventChangeDepth: true,
              items: getSimpleExampleItems({ draggable: true }),
            }),
          }),
          example({
            title: 'Prevent nodes from dragging',
            text:
              'In some cases you need to prevent some nodes from being dragging',
            source: getSource({
              items: getSimpleExampleItems({
                draggable: false,
              }),
            }),
          }),
          example({
            title: 'Read only mode',
            text: 'When items cannot be editable for ever use readOnly mode ',
            source: getSource({
              readOnly: true,
            }),
          }),
          example({
            title: 'Collapse items',
            text: 'You might want to collapse descendant nodes',
            source: getCollapsedExampleSource(),
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
