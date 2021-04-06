import React, { useEffect } from 'react';
import { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import Table from '..';
import { tablePrivateDriverFactory } from '../Table.private.driver';
import Card from '../../Card';
import Checkbox from '../../Checkbox';
import ToggleSwitch from '../../ToggleSwitch';
import range from '../../utils/operators/range';
import { storySettings } from '../docs/storySettings';
import {
  ToolbarExample,
  ToolbarWithBulSelectionCheckboxExample,
  EmptyStateExample,
} from './testExamples';
import { visualize, snap } from 'storybook-snapper';
import WixStyleReactProvider from '../../WixStyleReactProvider';

const { dataHook } = storySettings;

const data = [
  {
    name: 'Apple Towels',
    SKU: '111222',
    price: '$2.00',
    inventory: 'In stock',
  },
  { name: 'Cyan Towels', SKU: '222333', price: '$2.00', inventory: 'In stock' },
  {
    name: 'Marble Slippers',
    SKU: '333444',
    price: '$14.00',
    inventory: 'In stock',
  },
  {
    name: 'Red Slippers',
    SKU: '444555',
    price: '$14.00',
    inventory: 'Out of stock',
  },
];

const columns = [
  {
    title: 'Name',
    render: row => <span>{row.name}</span>,
    width: '30%',
    infoTooltipProps: { content: 'This is the name column' },
  },
  {
    title: 'SKU',
    render: row => <span>{row.SKU}</span>,
    width: '20%',
  },
  {
    title: 'Price',
    render: row => <span>{row.price}</span>,
    width: '20%',
  },
  {
    title: 'Inventory',
    render: row => <span>{row.inventory}</span>,
    width: '20%',
  },
];

const tablePrivateTestkitFactory = testkitFactoryCreator(
  tablePrivateDriverFactory,
);
const createDriver = () =>
  tablePrivateTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

const getHorizontalScrollColumnContent = (columnIndex, rowIndex) =>
  columnIndex === 1 && rowIndex === 2
    ? 'A very long column text that should span multiple lines and grow the row height.'
    : `Value ${columnIndex + 1}-${rowIndex + 1}`;
const horizontalScrollColumnCount = 20;
const horizontalScrollRowCount = 4;
const horizontalScrollData = range(0, horizontalScrollRowCount).map(rowIndex =>
  range(0, horizontalScrollColumnCount).reduce(
    (rows, columnIndex) => ({
      ...rows,
      [`value${columnIndex + 1}`]: getHorizontalScrollColumnContent(
        columnIndex,
        rowIndex,
      ),
    }),
    {},
  ),
);
const horizontalScrollColumns = range(0, horizontalScrollColumnCount).map(
  columnIndex => ({
    title: `Column ${columnIndex + 1}`,
    render: row => row[`value${columnIndex + 1}`],
    width: 150,
    infoTooltipProps: {
      content: 'Tooltip!',
    },
  }),
);

const rowVerticalPaddingTests = ['large', 'medium', 'small', 'tiny'].map(
  rowVerticalPadding => ({
    it: `Should display the table row with "${rowVerticalPadding}" rowVerticalPadding`,
    props: {
      data,
      columns,
      rowVerticalPadding,
    },
  }),
);

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: 'Should display the table with data',
        props: {
          data,
          columns,
        },
      },
      {
        it: 'Should display the table with "standard" skin',
        props: {
          data,
          columns,
        },
      },
      {
        it: 'Should display the table with "neutral" skin',
        props: {
          data,
          columns,
          skin: 'neutral',
        },
      },
      {
        it: 'Should display the table with aligned columns',
        props: {
          data: [
            {
              name: 'Apple Towels',
              visible: true,
              onSale: false,
              price: '$22.99',
            },
            {
              name: 'Cyan Towls',
              visible: false,
              onSale: false,
              price: '$145.99',
            },
            {
              name: 'Marble Slippers',
              visible: false,
              onSale: false,
              price: '$125,265.00',
            },
            {
              name: 'Red Slippers',
              visible: false,
              onSale: false,
              price: '$1,265.69',
            },
          ],
          columns: [
            {
              title: 'Name',
              render: row => <span>{row.name}</span>,
              width: '30%',
            },
            {
              title: 'Visibility',
              render: row => (
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <ToggleSwitch checked={row.visible} />
                  <span style={{ marginLeft: 12 }}>
                    {row.visible ? 'Visible' : 'Hidden'}
                  </span>
                </span>
              ),
              width: '20%',
              align: 'start',
            },
            {
              title: 'On Sale',
              render: () => <Checkbox />,
              width: '20%',
              align: 'center',
              infoTooltipProps: {
                content: 'I am a Tooltip!',
              },
            },
            {
              title: 'Price',
              render: row => <span>{row.price}</span>,
              width: '20%',
              align: 'end',
            },
          ],
        },
      },
      {
        it: 'Should display the table with selection',
        props: {
          data,
          columns,
          showSelection: true,
        },
      },
      {
        it: 'Should display the table with selection with unselectable row',
        props: {
          data: [
            ...data,
            {
              name: 'Unselectable Product',
              SKU: '123123',
              price: '$6.00',
              inventory: 'In stock',
              unselectable: true,
            },
          ],
          columns,
          showSelection: true,
        },
      },
      {
        it:
          'Should display the table with selection but without Select All column title',
        props: {
          data,
          columns,
          showSelection: true,
          hideBulkSelectionCheckbox: true,
        },
      },
      {
        it: 'Should display the table with disabled selection',
        props: {
          data,
          columns,
          showSelection: true,
          selectionDisabled: true,
        },
      },
      {
        it:
          'Should display the table with disabled selection but without Select All column title',
        props: {
          data,
          columns,
          showSelection: true,
          hideBulkSelectionCheckbox: true,
          selectionDisabled: true,
        },
      },
      {
        it: 'Should display the table without column titles',
        props: {
          data,
          columns,
          children: <Table.Content titleBarVisible={false} />,
        },
      },
      ...rowVerticalPaddingTests,
    ],
  },
  {
    describe: 'Toolbar',
    its: [
      {
        it: 'Should display the table with toolbar',
        props: {
          data,
          columns,
          showSelection: true,
          children: [
            <Table.ToolbarContainer>
              {() => <ToolbarExample />}
            </Table.ToolbarContainer>,
            <Table.Content />,
          ],
        },
      },
      {
        it:
          'Should display the table with toolbar with bulk selection checkbox',
        props: {
          data,
          columns,
          showSelection: true,
          hideBulkSelectionCheckbox: true,
          children: [
            <Table.ToolbarContainer>
              {() => <ToolbarWithBulSelectionCheckboxExample />}
            </Table.ToolbarContainer>,
            <Table.Content />,
          ],
        },
      },
      {
        it: 'Should display the table with toolbar and without column titles',
        props: {
          data,
          columns,
          children: [
            <ToolbarExample key="toolbar" />,
            <Table.Content key="content" titleBarVisible={false} />,
          ],
        },
      },
    ],
  },
  {
    describe: 'EmptyState',
    its: [
      {
        it: 'Should display the table with EmptyState',
        props: {
          data,
          columns,
          showSelection: true,
          children: <EmptyStateExample />,
        },
      },
      {
        it: 'Should display the table with toolbar and EmptyState',
        props: {
          data,
          columns,
          showSelection: true,
          children: [
            <ToolbarExample key="toolbar" />,
            <EmptyStateExample key="emptystate" />,
          ],
        },
      },
    ],
  },
  {
    describe: 'Sticky and Horizontal Scroll',
    its: [
      {
        it: 'Should display the table with horizontal scroll',
        props: {
          horizontalScroll: true,
          data: horizontalScrollData,
          columns: horizontalScrollColumns,
        },
      },
      {
        it: 'Should show left shadow on scroll',
        props: {
          horizontalScroll: true,
          data: horizontalScrollData,
          columns: horizontalScrollColumns,
        },
        componentDidMount: done => {
          createDriver().scrollHorizontallyTo(250);
          done();
        },
      },
      {
        it: 'Should hide right shadow on end of scroll',
        props: {
          horizontalScroll: true,
          data: horizontalScrollData,
          columns: horizontalScrollColumns,
        },
        componentDidMount: done => {
          createDriver().scrollHorizontallyTo(99999);
          done();
        },
      },
      {
        it: 'Should sticky first bulk selection column',
        props: {
          horizontalScroll: true,
          showSelection: true,
          stickyColumns: 1,
          data: horizontalScrollData,
          columns: horizontalScrollColumns,
        },
        componentDidMount: done => {
          createDriver().scrollHorizontallyTo(200);
          done();
        },
      },
      {
        it: 'Should sticky first two columns',
        props: {
          horizontalScroll: true,
          showSelection: true,
          stickyColumns: 2,
          data: horizontalScrollData,
          columns: horizontalScrollColumns,
        },
        componentDidMount: done => {
          createDriver().scrollHorizontallyTo(200);
          done();
        },
      },
      {
        it: 'Should support selection and highlight with sticky columns',
        props: {
          horizontalScroll: true,
          showSelection: true,
          stickyColumns: 2,
          data: horizontalScrollData,
          columns: horizontalScrollColumns,
          isRowHighlight: (_, rowNum) => rowNum % 2 === 0,
        },
        componentDidMount: done => {
          const driver = createDriver();
          driver.scrollHorizontallyTo(200);
          driver.clickRowCheckbox(1);
          done();
        },
      },
      {
        it:
          'Should sticky columns when table content and titlebar are rendered separately',
        props: {
          horizontalScroll: true,
          stickyColumns: 2,
          data: horizontalScrollData,
          columns: horizontalScrollColumns,
          children: [
            <Table.Titlebar key="titlebar" />,
            <Table.Content key="content" titleBarVisible={false} />,
          ],
        },
        componentDidMount: done => {
          createDriver().scrollHorizontallyTo(200);
          done();
        },
      },
    ],
  },
];

const TableWrapper = ({ props, componentDidMount, done }) => {
  useEffect(() => {
    componentDidMount && componentDidMount(done);
  }, [componentDidMount, done]);

  return (
    <div style={{ backgroundColor: '#DFE5EB', padding: '20px' }}>
      <Card>
        <Table
          dataHook={dataHook}
          {...props}
          componentDidMount={componentDidMount}
        />
      </Card>
    </div>
  );
};

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    visualize(`Table/${describe}`, () => {
      snap(it, done => (
        <TableWrapper
          props={props}
          componentDidMount={componentDidMount}
          done={done}
        />
      ));
    });
  });
});

rowVerticalPaddingTests.forEach(({ it, props }) => {
  visualize(`Layout And Spacing| Table/Basic`, () => {
    snap(it, done => (
      <WixStyleReactProvider
        features={{ reducedSpacingAndImprovedLayout: true }}
      >
        <TableWrapper props={props} done={done} />
      </WixStyleReactProvider>
    ));
  });
});
