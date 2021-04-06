import React from 'react';

import {
  header,
  tabs,
  tab,
  description,
  playground,
  api,
  testkit,
  importExample,
  divider,
  example as baseExample,
  title,
} from 'wix-storybook-utils/Sections';

import * as examples from './examples';

import allComponents from '../../../stories/utils/allComponents';

import { storySettings } from './storySettings';

import SelectorList from '..';

const example = config => baseExample({ components: allComponents, ...config });

const dataSource = (searchQuery, offset, limit) =>
  new Promise(resolve =>
    setTimeout(() => {
      const items = Array(50)
        .fill(0)
        .map((_, i) => ({
          id: i,
          title: `Title ${i}`,
          subtitle: `Subtitle ${i}`,
          extraText: `Extra Text ${i}`,
          disabled: !(i % 2),
          image: (
            <img
              width="100%"
              height="100%"
              src="http://via.placeholder.com/100x100"
            />
          ),
        }));

      const filtered = items.filter(({ title }) =>
        title.toLowerCase().startsWith(searchQuery.toLowerCase()),
      );

      resolve({
        items: filtered.slice(offset, offset + limit),
        totalCount: filtered.length,
      });
    }, 2000),
  );

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: SelectorList,
  componentPath: '..',
  componentProps: {
    dataHook: 'storybook-selector-list',
    height: '540px',
    itemsPerPage: 4,
    imageSize: 'large',
    withSearch: true,
    searchDebounceMs: 150,
    dataSource,
  },

  sections: [
    header({}),
    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            'SelectorList is a set of selectable items. The component can enforce single and multi selection, as well as the ability to filter items by search.',
          ),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Basic usage',
            source: examples.single,
            description: `You can render the SelectorList component inside a CustomModalLayout to show a list of selectable items.\n
In order for the infinite scroll to work, the SelectorList must be height limited,\n
by default SelectorList takes 100% of its parent's height,\n
so the element wrapping SelectorList must have a height other than \`auto\`.`,
          }),

          example({
            title: 'Advanced example',
            source: examples.multi,
            description: `When using the \`multiple\` prop, several items can be selected.
In order to use a \`toggleAll\` checkbox as part of the modal, the component can be used with a render function as a child.
The render function receives:
- \`renderList\` - a function that renders the SelectorList
- \`renderToggleAllCheckbox\` - a function that renders a checkbox to toggle all selected items\n
- \`selectedItems\` - an array of selected items`,
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
