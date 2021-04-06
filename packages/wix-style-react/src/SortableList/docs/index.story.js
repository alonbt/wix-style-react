import React from 'react';
import {
  tabs,
  tab,
  description,
  api,
  testkit,
  importExample,
  header,
  title,
  divider,
  playground,
  example as baseExample,
} from 'wix-storybook-utils/Sections';
import allComponents from '../../../stories/utils/allComponents';
import sortableItemsListExample from '!raw-loader!./examples/SortableItemsList';
import sortableItemsListWithDragHandleExample from '!raw-loader!./examples/SortableItemsListWithDragHandle';
import classNames from 'classnames';

import SortableList from '..';

import { storySettings } from './storySettings';

const example = config =>
  baseExample({ components: { ...allComponents, classNames }, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: SortableList,

  componentPath: '..',

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${SortableList.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            `SortableList is a mechanism intended to create complex drag and drop lists`,
          ),

          importExample("import { SortableList } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          example({
            title: 'Sortable Items List',
            text: 'You can simply create a sortable items list',
            source: sortableItemsListExample,
          }),
          example({
            title: 'Sortable Items List with a drag handle',
            text: 'Specify that only a specific part should be draggable',
            source: sortableItemsListWithDragHandleExample,
          }),
        ],
      }),

      tab({ title: 'API', sections: [api()] }),
      tab({ title: 'Testkit', sections: [testkit()] }),
      tab({ title: 'Playground', sections: [playground()] }),
    ]),
  ],
};
