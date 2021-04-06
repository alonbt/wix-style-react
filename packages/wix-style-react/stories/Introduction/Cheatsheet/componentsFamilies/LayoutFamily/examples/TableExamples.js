/* eslint-disable no-console */
import React, { Component } from 'react';
import { SingleComponentStacked, Preview } from '../../../sharedComponents';
import { createLinkedComponentsNames } from '../../../sharedComponents/utils';

import { layoutSymbolsToComponents } from '../../../../../symbolsComponentsMapping/families/layoutFamily';
import { layoutSymbols } from '../../../../../symbolsComponentsMapping/symbols';

import Star from 'wix-ui-icons-common/Star';
import {
  Table,
  TableActionCell,
  Card,
  Search,
  Avatar,
  TableToolbar,
} from 'wix-style-react';

class TablePageExample extends Component {
  state = {
    data: [
      {
        name: 'Red Slippers',
        SKU: '111222',
        price: '$14.00',
        inventory: 'In stock',
      },
      {
        name: 'Blue Slippers',
        SKU: '222333',
        price: '$14.00',
        inventory: 'Out of stock',
      },
      {
        name: 'Grey Slippers',
        SKU: '333444',
        price: '$14.00',
        inventory: 'In stock',
      },
      {
        name: 'Green Slippers',
        SKU: '444555',
        price: '$14.00',
        inventory: 'Out of stock',
      },
    ],
  };

  render() {
    const { data } = this.state;
    return (
      <Table
        data={data}
        columns={[
          {
            title: '',
            width: '10%',
            minWidth: '50px',
            render: () => <Avatar size="size60" />,
          },
          { title: 'Name', render: row => row.name },
          { title: 'SKU', render: row => row.SKU },
          { title: 'Price', render: row => row.price },
          { title: 'Inventory', render: row => row.inventory },
          {
            title: '',
            render: rowData => (
              <TableActionCell
                primaryAction={{
                  onClick: () => console.log('primaryAction'),
                  text: 'Edit',
                  skin: 'standard',
                }}
                secondaryActions={[
                  {
                    text: 'Star',
                    icon: <Star />,
                    onClick: () => window.alert(`Starring ${rowData.name}`),
                  },
                ]}
                numOfVisibleSecondaryActions={0}
                alwaysShowSecondaryActions={false}
              />
            ),
          },
        ]}
        showSelection
      >
        <Table.ToolbarContainer>
          {() => <TableToolbarExample />}
        </Table.ToolbarContainer>
        <Table.Content />
      </Table>
    );
  }
}

const TableToolbarExample = () => (
  <Card>
    <TableToolbar>
      <TableToolbar.ItemGroup position="start">
        <TableToolbar.Item>
          <TableToolbar.Title>Table title</TableToolbar.Title>
        </TableToolbar.Item>
      </TableToolbar.ItemGroup>
      <TableToolbar.ItemGroup position="end">
        <TableToolbar.Item>
          <Search placeholder="Search..." />
        </TableToolbar.Item>
      </TableToolbar.ItemGroup>
    </TableToolbar>
  </Card>
);

const TableExamples = () => {
  const symbol = layoutSymbols.tableLayout;
  const components = layoutSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview>
        <TablePageExample />
      </Preview>
    </SingleComponentStacked>
  );
};

export default TableExamples;
