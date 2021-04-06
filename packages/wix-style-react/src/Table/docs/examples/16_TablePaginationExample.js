/* eslint-disable */

() => {
  const [activeSearch, setActiveSearch] = React.useState('');
  const [selectedPage, setSelectedPage] = React.useState(8);

  const records = [
    {
      name: 'Red Slippers',
      sku: 25232564,
      status: 'In Stock',
      price: '$14.00',
    },
    { name: 'Velvet Hat', sku: 35246432, status: 'In Stock', price: '$29.00' },
    {
      name: 'Silver Jeans',
      sku: 4864310,
      status: 'Out Of Stock',
      price: '$69.00',
    },
    {
      name: 'Orange Socks',
      sku: 125156422,
      status: 'In Stock',
      price: '$7.00',
    },
  ];

  const columns = [
    { title: 'Name', render: row => row.name },
    { title: 'SKU', render: row => row.sku },
    { title: 'Status', render: row => row.status },
    { title: 'Status', render: row => row.price },
  ];

  const _generateData = count => {
    let generatedData = [];

    for (let i = 0; i < count; i++) {
      generatedData = records.concat(records.sort(() => Math.random() - 0.5));
    }

    return generatedData;
  };

  const _getFilteredData = () => {
    return _generateData(2).filter(({ name, sku, status, price }) => {
      const searchData = [name, sku, status, price].join(' ').toLowerCase();

      const searchQuery = activeSearch.trim().toLowerCase();

      if (searchQuery && searchData.indexOf(searchQuery) === -1) {
        return false;
      }

      return true;
    });
  };

  const _handleChange = ({ page, event }) => {
    event.preventDefault();
    setSelectedPage(page);
  };

  const _renderMainToolbar = () => {
    return (
      <TableToolbar>
        <TableToolbar.ItemGroup position="start">
          <TableToolbar.Item>
            <TableToolbar.Title>My Table</TableToolbar.Title>
          </TableToolbar.Item>
        </TableToolbar.ItemGroup>
        <TableToolbar.ItemGroup position="end">
          <TableToolbar.Item>
            <Box width="200">
              <Search
                value={activeSearch}
                onChange={event => setActiveSearch(event.target.value)}
              />
            </Box>
          </TableToolbar.Item>
        </TableToolbar.ItemGroup>
      </TableToolbar>
    );
  };

  const _renderActionsToolbar = ({ selectedCount, getSelectedIds }) => (
    <TableToolbar>
      <TableToolbar.ItemGroup position="start">
        <TableToolbar.Item>
          <TableToolbar.SelectedCount>{`${selectedCount} Selected`}</TableToolbar.SelectedCount>
        </TableToolbar.Item>
      </TableToolbar.ItemGroup>
      <TableToolbar.ItemGroup position="end">
        <TableToolbar.Item layout="button">
          <Button skin="light" prefixIcon={<Icons.Upload />} onClick={() => {}}>
            Export
          </Button>
        </TableToolbar.Item>
        <TableToolbar.Item layout="button">
          <Button
            skin="light"
            prefixIcon={<Icons.Duplicate />}
            onClick={() => {}}
          >
            Duplicate
          </Button>
        </TableToolbar.Item>
        <TableToolbar.Item layout="button">
          <Button skin="light" prefixIcon={<Icons.Edit />} onClick={() => {}}>
            Edit
          </Button>
        </TableToolbar.Item>
        <TableToolbar.Divider />
        <TableToolbar.Item>
          <Search
            expandable
            value={activeSearch}
            onChange={event => setActiveSearch(event.target.value)}
          />
        </TableToolbar.Item>
      </TableToolbar.ItemGroup>
    </TableToolbar>
  );

  return (
    <Layout justifyItems="center">
      <Cell>
        <Card>
          <Table data={_getFilteredData()} columns={columns} showSelection>
            <Table.ToolbarContainer>
              {selectionContext =>
                selectionContext.selectedCount === 0
                  ? _renderMainToolbar()
                  : _renderActionsToolbar({ ...selectionContext })
              }
            </Table.ToolbarContainer>
            <Table.Content />
            {!records.length && (
              <Table.EmptyState
                subtitle={
                  <Text>
                    {'There are no search results matching '}
                    <Text weight="normal">{`"${activeSearch}"`}</Text>
                  </Text>
                }
              />
            )}
          </Table>
        </Card>
      </Cell>
      <Cell>
        <Pagination
          currentPage={selectedPage}
          totalPages={14}
          onChange={_handleChange}
        />
      </Cell>
    </Layout>
  );
};
