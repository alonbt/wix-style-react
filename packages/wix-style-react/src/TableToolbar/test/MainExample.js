import React from 'react';
import { TableToolbar, Card, Search, Dropdown } from 'wix-style-react';

export default class MainExample extends React.Component {
  render() {
    const collectionOptions = [
      { id: 0, value: 'All Products' },
      { id: 1, value: 'Towels' },
      { id: 2, value: 'Slippers' },
    ];

    const filterOptions = [
      { id: 0, value: 'All' },
      { id: 1, value: 'Red' },
      { id: 2, value: 'Cyan' },
    ];

    return (
      <Card>
        <TableToolbar>
          <TableToolbar.ItemGroup position="start">
            <TableToolbar.Item>
              <TableToolbar.Title>My Table</TableToolbar.Title>
            </TableToolbar.Item>
            <TableToolbar.Item>
              <TableToolbar.Label>
                Collection
                <span style={{ width: '150px' }}>
                  <Dropdown
                    options={collectionOptions}
                    selectedId={0}
                    roundInput
                  />
                </span>
              </TableToolbar.Label>
            </TableToolbar.Item>
            <TableToolbar.Item>
              <TableToolbar.Label>
                Filter By
                <span style={{ width: '86px' }}>
                  <Dropdown options={filterOptions} selectedId={0} roundInput />
                </span>
              </TableToolbar.Label>
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>
          <TableToolbar.ItemGroup position="end">
            <TableToolbar.Item>
              <Search />
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>
        </TableToolbar>
      </Card>
    );
  }
}
