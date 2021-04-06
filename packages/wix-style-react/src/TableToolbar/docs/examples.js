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

export const filtersToolbarExample = `
    <Card>
      <TableToolbar>
        <TableToolbar.ItemGroup position="start">
          <TableToolbar.Item>
            <TableToolbar.Title>My Table</TableToolbar.Title>
          </TableToolbar.Item>
          <TableToolbar.Item>
            <TableToolbar.Label>
              <FormField labelPlacement="left" label='Collection'>
                  <Dropdown
                    options={${JSON.stringify(collectionOptions)}}
                    selectedId={0}
                    roundInput
                  />
                </FormField>
            </TableToolbar.Label>
          </TableToolbar.Item>
          <TableToolbar.Item>
            <TableToolbar.Label>
              <FormField labelPlacement="left" label='Filter By'>
                <Dropdown options={${JSON.stringify(
                  filterOptions,
                )}} selectedId={0} roundInput />
              </FormField>
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
`;

export const bulkActionsToolbarExample = `
<Card>
    <TableToolbar>
      <TableToolbar.ItemGroup position="start">
        <TableToolbar.Item>
          <TableToolbar.SelectedCount>{\`12 Selected\`}</TableToolbar.SelectedCount>
        </TableToolbar.Item>
      </TableToolbar.ItemGroup>
      <TableToolbar.ItemGroup position="end">
        <TableToolbar.Item layout="button">
          <Button
            skin="light"
            prefixIcon={<Icons.Upload />}
          >
            Export
          </Button>
        </TableToolbar.Item>
        <TableToolbar.Item layout="button">
          <Button
            skin="light"
            prefixIcon={<Icons.Duplicate />}
          >
            Duplicate
          </Button>
        </TableToolbar.Item>
        <TableToolbar.Item layout="button">
          <Button
            skin="light"
            prefixIcon={<Icons.Edit />}
          >
            Edit
          </Button>
        </TableToolbar.Item>
        <TableToolbar.Divider />
        <TableToolbar.Item>
          <Search
            expandable
          />
        </TableToolbar.Item>
      </TableToolbar.ItemGroup>
    </TableToolbar>
</Card>
`;
