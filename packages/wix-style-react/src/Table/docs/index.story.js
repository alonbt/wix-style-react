import {
  tabs,
  tab,
  api,
  divider,
  header,
  title,
  code as baseCode,
  importExample,
  playground,
  testkit,
  description,
} from 'wix-storybook-utils/Sections';

import { Table } from '..';
import { storySettings } from './storySettings';
import allComponents from '../../../stories/utils/allComponents';
import { createFetchEndpoint } from '../../../stories/utils/createFetchEndpoint';
import compoundReadmeApi from './COMPOUND_README.API.md';
import contextReadmeApi from './CONTEXT_README.API.md';
import testkitReadme from './README.TESTKIT.md';

import TableStructureExample from '!raw-loader!./examples/1_TableStructureExample';
import TableSkinExample from '!raw-loader!./examples/2_TableSkinExample';
import TableRowVerticalPaddingExample from '!raw-loader!./examples/3_TableRowVerticalPaddingExample';
import TableHighlightedRowsExample from '!raw-loader!./examples/4_TableHighlightedRowsExample';
import TableExpandableRowsExample from '!raw-loader!./examples/5_TableExpandableRowsExample';
import TableWithUnselectableRowsExample from '!raw-loader!./examples/6_TableWithUnselectableRowsExample';
import TableActionCellExample from '!raw-loader!./examples/7_TableActionCellExample';
import TableColumnAlignmentAndWidthExample from '!raw-loader!./examples/8_TableColumnAlignmentAndWidthExample';
import TableImportantColumnExample from '!raw-loader!./examples/9_TableImportantColumnExample';
import TableStickyScrollExample from '!raw-loader!./examples/10_TableStickyScrollExample';
import TableToolbarExample from '!raw-loader!./examples/11_TableToolbarExample';
import TableWithBulkSelectionExample from '!raw-loader!./examples/12_TableWithBulkSelectionExample';
import TableSubtoolbarExample from '!raw-loader!./examples/13_TableSubtoolbarExample';
import TableInfiniteScrollExample from '!raw-loader!./examples/14_TableInfiniteScrollExample';
import TableInfiniteScrollAndBulkSelection from '!raw-loader!./examples/15_TableInfiniteScrollAndBulkSelection';
import TablePaginationExample from '!raw-loader!./examples/16_TablePaginationExample';
import TableEmptyStateExample from '!raw-loader!./examples/17_TableEmptyStateExample';
import TableVerticalCellAlignmentExample from '!raw-loader!./examples/18_TableVerticalCellAlignmentExample';
import TableStickyToolbarExample from '!raw-loader!./examples/19_TableStickyToolbarExample.js';
import TableWithAdvancedFiltersExample from '!raw-loader!./examples/20_TableWithAdvancedFiltersExample';
import TableVirtualizationExample from '!raw-loader!./examples/21_TableVirtualizationExample';

const code = config =>
  baseCode({
    components: {
      ...allComponents,
      fetch: createFetchEndpoint('/mockApi', data, [
        { firstName: 'Meghan', lastName: 'Bishop' },
        { firstName: 'Sara', lastName: 'Porter' },
        { firstName: 'Deborah', lastName: 'Rhodes' },
        { firstName: 'Walter', lastName: 'Jenning' },
      ]),
    },
    ...config,
  });

const data = [
  { firstName: 'Meghan', lastName: 'Bishop' },
  { firstName: 'Sara', lastName: 'Porter' },
  { firstName: 'Deborah', lastName: 'Rhodes' },
  { firstName: 'Walter', lastName: 'Jenning' },
];

const dataLong = [1, 2, 3, 4, 5].reduce(accum => accum.concat(data), []);

const columnsOption1 = [
  { title: 'First', width: '30%', render: row => row.firstName },
  { title: 'Last', width: '30%', render: row => row.lastName },
];

const columnsOption2 = [
  { title: 'Row Num', render: (row, rowNum) => rowNum },
  { title: 'First', render: row => row.firstName },
  { title: 'Last', render: row => row.lastName },
  { title: 'Full', render: row => row.firstName + row.lastName },
];

const componentExplanation = `
Technically, the following optional children are accepted:

1. \`<Table.Content/>\` - the actual content
2. \`<Table.ToolbarContainer/>\` - a container for the toolbar. It's also a consumer of the SelectionContext (see Context API)
3. \`<Table.SubToolbar/>\` - a container for the sub-toolbar
4. \`<Table.Titlebar/>\` -  the header of the table, which means, a row with the names of the columns. By default, \`<Table.Content/>\` is rendered with the header. It's mostly useful when setting \`titleBarVisible\` to false, so we can render the title bar independently
5. \`<Table.EmptyState/>\` - a wrapper of the \`<EmptyState/>\` component for usage within the table
`;

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Table,
  componentPath: '..',

  componentProps: {
    id: 'id',
    data,
    columns: columnsOption1,
    showSelection: true,
  },

  exampleProps: {
    columns: [
      { label: '2 columns example', value: columnsOption1 },
      { label: '4 columns example', value: columnsOption2 },
    ],
    data: [
      { label: '4 rows', value: data },
      { label: '40 rows', value: dataLong },
    ],
  },

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl: 'https://github.com/wix/wix-style-react/tree/master/src/Table',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'Table is a component for displaying data in structure of rows and columns. It might be included within `<Card/>` or `<Page/>` and supports a custom toolbar, sorting, infinite scrolling, virtualization and even more.',
          }),

          description(componentExplanation),

          importExample("import { Table } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Structure',
              description:
                '`<Table/>` consists of three main areas: toolbar, subtoolbar (optional) and list of items.',
              source: TableStructureExample,
              compact: true,
            },
            {
              title: 'Skin',
              description:
                'Component supports two skins: standard and neutral.',
              source: TableSkinExample,
              compact: true,
            },
            {
              title: 'Row Vertical Padding',
              description:
                'Supports `small`, `medium` (default) and `large` padding sizes. Large padding should be used for short lists only.',
              source: TableRowVerticalPaddingExample,
              compact: true,
            },
            {
              title: 'Highlighted Rows',
              description:
                'Rows can be highlighted to draw attention to i.e. status change, new items on the list, etc.',
              source: TableHighlightedRowsExample,
              compact: true,
            },
            {
              title: 'Expandable Rows',
              description:
                'Make the row expandable using `renderRowDetails` prop.',
              source: TableExpandableRowsExample,
              compact: true,
            },
            {
              title: 'Unselectable Rows',
              description:
                'Restrict row selection by using `unselectable` prop.',
              source: TableWithUnselectableRowsExample,
              compact: true,
            },
            {
              title: 'Action Cell',
              description:
                'Use `<TableActionCell/>` to add actions to the last column of a row. Primary actions are displayed as buttons, whereas secondary actions as icon buttons. Use `numOfVisibleSecondaryActions` to limit the amount of visible actions. Hidden ones will appear inside a popover menu. See `<TableActionCell/>` for more details.',
              source: TableActionCellExample,
              compact: true,
            },
            {
              title: 'Column Alignment & Width',
              description: `
Each column width and alignment can be customised. Set column width in percentage or pixels. Align cell content horizontally with align prop (start, center or end).\n
In case of vertical alignment of content within cell - it should be done within the render method explicitly.
              `,
              source: TableColumnAlignmentAndWidthExample,
              compact: true,
            },
            {
              title: 'Important Column',
              description:
                'Main column can be highlighted with an increased size text.',
              source: TableImportantColumnExample,
              compact: true,
            },
            {
              title: 'Sticky Columns and Horizontal Scroll',
              description:
                'Enable horizontal scroll with `horizontalScroll` prop. Be aware that in order it to work as expected each column must have a specific width set. Combined column width should exceed table width. In addition, you can have a number of “sticky” columns pinned to the left side of a table using `stickyColumns` prop. Sticky columns will keep their original position and will not scroll with the rest of table columns.',
              source: TableStickyScrollExample,
              compact: true,
            },
            {
              title: 'Toolbar',
              description:
                'Add a toolbar to the table using `<Table.ToolbarContainer/>`. Pass `SelectionContext` in order to enable selection. There are two types of a toolbar: main and actions toolbar. See `<TableToolbar/>` for more details.',
              source: TableToolbarExample,
              compact: true,
            },
            {
              title: 'Toolbar with Custom Bulk Selection Checkbox',
              description:
                'Bulk selection can be removed from the sorting header area with `hideBulkSelectionCheckbox` prop. This selection checkbox can be added to a toolbar using `<Table.BulkSelectionCheckbox/>` component.',
              source: TableWithBulkSelectionExample,
              compact: true,
            },
            {
              title: 'Sub-Toolbar',
              description:
                'Additional area to store content related to main toolbar actions. For example, a list of active filters.',
              source: TableSubtoolbarExample,
              compact: true,
            },
            {
              title: 'Infinite Scroll',
              description:
                'Use `infiniteScroll` prop to load data to the table gradually. New pages are loaded automatically when the scrollbar reaches the end. Notice that the infinite scroll should listen to some scroll events (in order to determine when to render new items). In this example, we pass a container with limited height - but it could be any element that triggers scroll events.',
              source: TableInfiniteScrollExample,
              compact: true,
            },
            {
              title: 'Infinite Scroll and Bulk Selection',
              description:
                'Sample table below has infiniteScroll and showSelection set. If user clicks the bulk selection checkbox when the data is not fully loaded yet (hasMore is true) only loaded items are selected by default. If user clicks the bulk selection checkbox when the data is not fully loaded yet, but the table has a `totalSelectableCount` set, then the grid enters an “infinite bulk selection” mode. It assumes all items are selected, and it only keeps track of the items manually unselected by the user. Newly loaded items are being selected by default. `SelectionContext.selectedCount` will be updated based on the `totalSelectableCount` prop.',
              source: TableInfiniteScrollAndBulkSelection,
              compact: true,
            },
            {
              title: 'Pagination',
              description:
                'Add `<Pagination/>` to the table to split up a large data set across multiple pages.',
              source: TablePaginationExample,
              compact: true,
            },
            {
              title: 'Empty State',
              description:
                'This example shows the usage for displaying an empty state message. Notice that `<Card/>` and `<TableToolbar/>` are optional - we should use them as necessary.',
              source: TableEmptyStateExample,
              compact: true,
            },
            {
              title: 'Vertical Alignment in a Cell',
              description:
                'If we want to align cell content vertically it should be done within the render method explicitly.',
              source: TableVerticalCellAlignmentExample,
              compact: true,
            },
            {
              title: 'Sticky Toolbar & Sub-toolbar',
              description:
                'This example demonstrates how to render a table with a sticky title and toolbar within `<Page/>`. Notice that `<Page/>` is practically responsible to render the title, using `<Page.Header/>` whereas titleBarVisible is false. Moreover, we use `<Page.Sticky/>` in order to stick the toolbar and sub-toolbar to the top while scrolling.',
              source: TableStickyToolbarExample,
              compact: true,
            },
            {
              title: 'Table with Advanced Filters',
              description:
                'When there are more than 3 filter options transfer them outside to a `<SidePanel/>`. Add a button to a toolbar which calls out that panel.',
              source: TableWithAdvancedFiltersExample,
              compact: true,
            },
          ].map(code),

          divider(),

          title('Table with Virtualization - Experimental'),

          tabs([
            tab({
              title: 'Description',
              sections: [
                description(
                  "Virtualization is a technique to optimize the performance when it comes in a large collection of items. In practice it means we render a limited number of items at a time - when we scroll, the appropriate hidden items are added to the DOM whereas the irrelevant items are removed from the DOM. Also, it implements infinite scroll behavior by default, so we don't need to use `infiniteScroll`, `hasMore`, `loadMore` and so on. Notice that when using the `virtualized` prop, we must define `width` for the columns and provide the `virtualizedLineHeight` and `virtualizedTableHeight` props. In addition, `titleBarVisible` must be false (because a title bar is appended automatically).",
                ),
              ],
            }),
            tab({
              title: 'Example',
              sections: [
                ...[
                  {
                    source: TableVirtualizationExample,
                    compact: true,
                  },
                ].map(code),
              ],
            }),
          ]),
        ],
      }),

      ...[
        { title: 'Table API', sections: [api()] },
        {
          title: 'Compound Components API',
          sections: [description(compoundReadmeApi)],
        },
        { title: 'Context API', sections: [description(contextReadmeApi)] },
        { title: 'Playground', sections: [playground()] },
        { title: 'Testkit', sections: [testkit(), description(testkitReadme)] },
      ].map(tab),
    ]),
  ],
};
