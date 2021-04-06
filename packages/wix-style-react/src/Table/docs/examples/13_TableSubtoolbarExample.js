/* eslint-disable */

() => {
  const filterOptions = [
    { id: 'In Stock', children: 'In Stock' },
    { id: 'Out Of Stock', children: 'Out Of Stock' },
  ];

  const [records, setRecords] = React.useState([
    {
      name: `Red Slippers`,
      SKU: '0231664667',
      price: '$14.00',
      inventory: 'In Stock',
    },
    {
      name: `Velvet Hat`,
      SKU: '0231664669',
      price: '$23.00',
      inventory: 'In Stock',
    },
    {
      name: `Silver Jeans`,
      SKU: '0231664667',
      price: '$69.00',
      inventory: 'In Stock',
    },
    {
      name: `Orange Stocks`,
      SKU: '0231664671',
      price: '$9.00',
      inventory: 'Out Of Stock',
    },
    {
      name: `Black T-shirts`,
      SKU: '0231664672',
      price: '$19.00',
      inventory: 'In Stock',
    },
  ]);

  const [activeFilters, setActiveFilter] = React.useState(filterOptions);

  const columns = [
    {
      title: 'Name',
      render: row => row.name,
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
    let filteredData = records;
    if (activeFilters.length === 1) {
      filteredData = filteredData.filter(
        row => row.inventory === activeFilters[0].id,
      );
    }
    return filteredData;
  };

  const filteredRecords = _getFilteredData();

  // MainToolBar
  const MainToolBar = React.useMemo(
    () => () => {
      const onFilterSelect = selected => {
        return selected.id === options[0].id
          ? setActiveFilter(filterOptions)
          : setActiveFilter([{ id: selected.id, children: selected.value }]);
      };
      const selectedId =
        activeFilters.length === 2 ? filterOptions[0].id : activeFilters[0].id;
      return (
        <Table.ToolbarContainer>
          {() => (
            <Card>
              <TableToolbar>
                <TableToolbar.ItemGroup position="start">
                  <TableToolbar.Item>
                    <TableToolbar.Title>Products</TableToolbar.Title>
                  </TableToolbar.Item>
                </TableToolbar.ItemGroup>
              </TableToolbar>
            </Card>
          )}
        </Table.ToolbarContainer>
      );
    },
    [activeFilters],
  );

  // SubToolBar
  const onTagRemove = tagId => {
    if (activeFilters.length === 2)
      setActiveFilter(
        tagId === 'In Stock' ? [filterOptions[1]] : [filterOptions[0]],
      );
    else setActiveFilter(filterOptions);
  };

  const actionButtonParams = {
    label: 'Clear All',
    onClick: () => {
      setActiveFilter(filterOptions);
    },
  };

  const SubToolBar = React.useMemo(
    () => () => (
      <Table.SubToolbar>
        <FormField label="Filtered by:" labelPlacement="left">
          <TagList
            tags={activeFilters}
            maxVisibleTags={2}
            actionButton={actionButtonParams}
            onTagRemove={onTagRemove}
          />
        </FormField>
      </Table.SubToolbar>
    ),
    [activeFilters],
  );

  //TitleBar
  const TitleBar = React.useMemo(
    () => () =>
      records.length ? (
        <Table.Titlebar />
      ) : (
        <Table.EmptyState
          title="You haven't added any items yet"
          subtitle="Add items to your website so people can buy them"
          image={<Image height={120} width={120} borderRadius="50%" />}
        >
          <TextButton suffixIcon={<Icons.ExternalLink />}>
            Learn how to add items
          </TextButton>
        </Table.EmptyState>
      ),
    [records],
  );
  return (
    <Page height="400px">
      <Page.Content>
        <Table showSelection data={filteredRecords} columns={columns}>
          <Page.Sticky>
            <Card>
              <MainToolBar />
              <SubToolBar />
              <TitleBar />
            </Card>
          </Page.Sticky>
          <Card>
            <Table.Content titleBarVisible={false} />
          </Card>
        </Table>
      </Page.Content>
    </Page>
  );
}; 
