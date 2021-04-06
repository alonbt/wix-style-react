/* eslint-disable */

() => {
  const filterOptions = [
    { id: 'In Stock, Out Of Stock', value: 'In Stock, Out Of Stock' },
    { id: 'In Stock', value: 'In Stock' },
    { id: 'Out Of Stock', value: 'Out Of Stock' },
  ];

  const [activeFilter, setActiveFilter] = React.useState(filterOptions[0].id);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [records, setRecords] = React.useState([
    {
      name: 'Red Slippers',
      SKU: '0231664667',
      price: '$14.00',
      inventory: 'In Stock',
    },
    {
      name: 'Velvet Hat',
      SKU: '0231664669',
      price: '$23.00',
      inventory: 'In Stock',
    },
    {
      name: 'Silver Jeans',
      SKU: '0231664667',
      price: '$69.00',
      inventory: 'In Stock',
    },
    {
      name: 'Orange Stocks',
      SKU: '0231664671',
      price: '$9.00',
      inventory: 'Out Of Stock',
    },
    {
      name: 'Black T-shirts',
      SKU: '0231664672',
      price: '$19.00',
      inventory: 'In Stock',
    },
  ]);

  const columns = [
    {
      title: 'Name',
      render: row => <Highlighter match={searchTerm}>{row.name}</Highlighter>,
      width: '30%',
    },
    {
      title: 'SKU',
      render: row => row.SKU,
      width: '20%',
    },
    {
      title: 'Price',
      render: row => row.price,
      width: '20%',
    },
    {
      title: 'Inventory',
      render: row => row.inventory,
      width: '20%',
    },
  ];

  const _getFilteredData = () => {
    let filteredData = records.concat(records);
    if (activeFilter !== 'In Stock, Out Of Stock') {
      filteredData = filteredData.filter(row => row.inventory === activeFilter);
    } 
    if (searchTerm !== '') {
      filteredData = filteredData.filter(row =>
        row.name.toUpperCase().includes(searchTerm.toUpperCase()),
      );
    }
    return filteredData;
  };

  const filteredData = _getFilteredData();

  const _clearSearch = () => {
    setSearchTerm('');
  };

  const _renderSearch = expandable => {
    return (
      <Search
        expandable={expandable}
        onChange={e => {
          setSearchTerm(e.target.value);
        }}
        value={searchTerm}
        onClear={_clearSearch}
      />
    );
  };

  const _renderEmptyState = () => (
    <Table.EmptyState
      title="You haven't added any items yet"
      subtitle="Add items to your website so people can buy them"
      image={
        <Box
          height={120}
          width={120}
          backgroundColor="#dfe5eb"
          borderRadius="50%"
        />
      }
    >
      <TextButton suffixIcon={<Icons.ExternalLink />}>
        Learn how to add items
      </TextButton>
    </Table.EmptyState>
  );

  const _renderMainToolbar = () => {
    return (
      <Card>
        <TableToolbar>
          <TableToolbar.ItemGroup position="start">
            <TableToolbar.Item>
              <TableToolbar.Label>
                Status
                <span style={{ width: '150px' }}>
                  <Dropdown
                    options={filterOptions}
                    selectedId={activeFilter}
                    onSelect={selectedOption => {
                      console.log(selectedOption);
                      setActiveFilter(selectedOption.value);
                    }}
                    roundInput
                  />
                </span>
              </TableToolbar.Label>
            </TableToolbar.Item>
            <TableToolbar.Item>
              <TableToolbar.Label>
                Category
                <span style={{ width: '150px' }}>
                  <Dropdown
                    options={[{ id: 0, value: 'All categories' }]}
                    selectedId={0}
                    roundInput
                  />
                </span>
              </TableToolbar.Label>
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>
          <TableToolbar.ItemGroup position="end">
            <TableToolbar.Item>{_renderSearch(false)}</TableToolbar.Item>
          </TableToolbar.ItemGroup>
        </TableToolbar>
      </Card>
    );
  };

  return (
    <Page height="600px">
      <Page.Header
        title="Products"
        actionsBar={
          <Box>
            <Box padding="SP1">
              <IconButton skin="inverted">
                <Icons.More />
              </IconButton>{' '}
            </Box>
            <Box padding="SP1">
              <Button prefixIcon={<Icons.Add />}>Add Product</Button>{' '}
            </Box>
          </Box>
        }
      />

      <Page.Content>
        <Table
          data={filteredData}
          columns={columns}
          onSelectionChange={selectedIds =>
            console.log('Table.onSelectionChange(): selectedIds=', selectedIds)
          }
          showSelection
        >
          <Page.Sticky>
            <Card>
              <Table.ToolbarContainer>
                {selectionContext =>
                  selectionContext.selectedCount === 0
                    ? _renderMainToolbar()
                    : this._renderActionsToolbar({ ...selectionContext })
                }
              </Table.ToolbarContainer>
              <Table.SubToolbar>
                <FormField label="Filtered by:" labelPlacement="left">
                  <TagList
                    tags={[
                      { id: '1', children: 'In Stock' },
                      { id: '2', children: 'Out Of Stock' },
                    ]}
                    maxVisibleTags={2}
                    actionButton={{ label: 'Clear All', onClick: () => {} }}
                  />
                </FormField>
              </Table.SubToolbar>
              {filteredData.length ? <Table.Titlebar /> : _renderEmptyState()}
            </Card>
          </Page.Sticky>
          <Card>
            <Table.Content titleBarVisible={false} />
          </Card>
        </Table>
      </Page.Content>
    </Page>
  );

  const _renderActionsToolbar = ({ selectedCount, getSelectedIds }) => {
    return (
      <TableToolbar>
        <TableToolbar.ItemGroup position="start">
          <TableToolbar.Item>
            <TableToolbar.SelectedCount>{`${selectedCount} Selected`}</TableToolbar.SelectedCount>
          </TableToolbar.Item>
        </TableToolbar.ItemGroup>
        <TableToolbar.ItemGroup position="end">
          <TableToolbar.Item layout="button">
            <Button
              skin="light"
              priority="primary"
              prefixIcon={<Icons.Upload />}
              onClick={() =>
                window.alert(`Exporting selectedIds=${getSelectedIds()}`)
              }
            >
              Export
            </Button>
          </TableToolbar.Item>
          <TableToolbar.Item layout="button">
            <Button
              skin="light"
              priority="primary"
              prefixIcon={<Icons.Duplicate />}
              onClick={() =>
                window.alert(`Duplicating selectedIds=${getSelectedIds()}`)
              }
            >
              Duplicate
            </Button>
          </TableToolbar.Item>
          <TableToolbar.Item layout="button">
            <Button
              skin="light"
              priority="primary"
              prefixIcon={<Icons.Edit />}
              onClick={() =>
                window.alert(`Editing selectedIds=${getSelectedIds()}`)
              }
            >
              Edit
            </Button>
          </TableToolbar.Item>
          <TableToolbar.Divider />
          <TableToolbar.Item>{this._renderSearch(true)}</TableToolbar.Item>
        </TableToolbar.ItemGroup>
      </TableToolbar>
    );
  };
};
