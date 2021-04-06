import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  code as baseCode,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import * as examples from './examples';

import { TableToolbar } from '..';
import API from '!raw-loader!./README.md';
import Box from '../../Box';
import SectionHelper from '../../SectionHelper';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: TableToolbar,
  componentPath: '..',

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/TableToolbar/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              "TableToolbar is a (dumb) layout component for creating the Table's Toolbar.\n" +
              ' It supports one line of items, divided into 2 groups according to alignment.',
          }),

          <Box marginBottom="50px">
            <SectionHelper
              appearance="danger"
              title="Note"
              children="The white background is not part of the Toolbar, it is coming from the `<Card/>` which the Table sits in."
            />
          </Box>,

          importExample("import { TableToolbar } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          description({
            title: 'Filters Toolbar',
            text:
              'By default table toolbar can show table title, search, filters or all together. It can contain up to two filters.',
          }),

          code({
            compact: true,
            source: examples.filtersToolbarExample,
          }),

          description({
            title: 'Bulk Actions Toolbar',
            text:
              'When table items are selected, table toolbar enables bulk actions. It can contain up to 3 bulk actions: <br/>' +
              '1.  A selection count (`<TableToolbar.SelectedCount> 2 Selected </TableToolbar.SelectedCount>`)<br/>' +
              '2.  Action Buttons: `<Button/>` (with prefix) , `<TextButton/>` or `<IconButton/>` . All Buttons should have `skin="light"`. <br/>' +
              '3.  A collapsed Search input box (`<Search expandable/>`)',
          }),

          code({
            compact: true,
            source: examples.bulkActionsToolbarExample,
          }),
        ],
      }),

      ...[
        {
          title: 'API',
          sections: [
            description({
              text: API,
            }),
          ],
        },
      ].map(tab),
    ]),
  ],
};
