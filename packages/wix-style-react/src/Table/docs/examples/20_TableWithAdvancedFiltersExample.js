/* eslint-disable */

() => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [right, setRight] = React.useState(-440);
  const [display, setDisplay] = React.useState('none');
  const [records, setRecords] = React.useState([
    {
      name: `Adidas Sleek Shoes`,
      SKU: 'BP063001',
      price: '$78',
      inventory: 16,
    },
    {
      name: `Stan Smith Shoes`,
      SKU: 'BP063001',
      price: '$112',
      inventory: 32,
    },
    {
      name: `Nite Jogger Shoes`,
      SKU: 'BP063001',
      price: '$89',
      inventory: 23,
    },
    {
      name: `Nizza Platform Shoes`,
      SKU: 'BP063001',
      price: '$45',
      inventory: 102,
    },
    {
      name: `QT Races 2.0 Shoes`,
      SKU: 'BP063001',
      price: '$96',
      inventory: 4,
    },
    {
      name: `NMD R1 Shoes`,
      SKU: 'BP063001',
      price: '$104',
      inventory: 45,
    },
  ]);

  const columns = [
    {
      title: 'Name',
      render: row => (
        <Layout>
          <Cell span={3}>
            <Image height={30} width={30} borderRadius="30px" />
          </Cell>
          <Cell span={6} vertical>
            <Highlighter match={searchTerm}>{row.name}</Highlighter>
          </Cell>
        </Layout>
      ),
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
    {
      render: row => (
        <TableActionCell
          numOfVisibleSecondaryActions={2}
          alwaysShowSecondaryActions
          secondaryActions={[
            {
              icon: <Icons.Hidden />,
            },
            {
              icon: <Icons.More />,
            },
          ]}
        />
      ),
    },
  ];

  const openPanel = () => {
    setRight(0);
    setDisplay('block');
  };

  const closePanel = () => {
    setRight(-440);
    setDisplay('none');
  };

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

  const _renderMainToolbar = () => {
    const collectionOptions = [
      { id: 0, value: 'All' },
      { id: 1, value: 'New' },
    ];

    const filterOptions = [
      { id: 0, value: 'All' },
      { id: 1, value: 'Adidas' },
    ];

    return (
      <Card>
        <TableToolbar>
          <TableToolbar.ItemGroup position="start">
            <TableToolbar.Item>
              <TableToolbar.Label>Products</TableToolbar.Label>
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>
          <TableToolbar.ItemGroup position="end">
            <TableToolbar.Item>
              <Button
                priority="secondary"
                prefixIcon={<Icons.ContentFilter />}
                onClick={openPanel}
              >
                Add filter
              </Button>
            </TableToolbar.Item>
            <TableToolbar.Item>{_renderSearch(false)}</TableToolbar.Item>
          </TableToolbar.ItemGroup>
        </TableToolbar>
      </Card>
    );
  };

  const _getFilteredData = () => {
    let data = records;

    if (searchTerm !== '') {
      data = data.filter(row =>
        row.name.toUpperCase().includes(searchTerm.toUpperCase()),
      );
    }

    return data;
  };

  const filteredData = _getFilteredData();

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
          <TableToolbar.Item>{_renderSearch(true)}</TableToolbar.Item>
        </TableToolbar.ItemGroup>
      </TableToolbar>
    );
  };

  _renderEmptyState = () => (
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

  return (
    <Page height="600px">
      <Page.Header
        title="Products"
        actionsBar={
          <Box>
            <Box padding="SP1">
              <IconButton skin="inverted">
                <Icons.Download />
              </IconButton>
            </Box>
            <Box padding="SP1">
              <Button prefixIcon={<Icons.Add />}>New Product</Button>{' '}
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
                    : _renderActionsToolbar({ ...selectionContext })
                }
              </Table.ToolbarContainer>
              {filteredData.length ? <Table.Titlebar /> : _renderEmptyState()}
            </Card>
          </Page.Sticky>
          <Card>
            <Table.Content titleBarVisible={false} />
          </Card>
        </Table>
        <Box>
          <div
            style={{
              position: 'fixed',
              top: 0,
              right: `${right}px`,
              display: display,
              height: '100%',
              boxShadow:
                '0 3px 24px 0 rgba(22, 45, 61, 0.18), 0 8px 8px 0 rgba(22, 45, 61, 0.12)',
              zIndex: 9999,
              transition: 'right 0.4s ease 0s',
              overflow: 'hidden',
            }}
          >
            <SidePanel title="Filters Panel" onCloseButtonClick={closePanel}>
              <SidePanel.Header title="Filters" />
              <Accordion
                items={[
                  accordionItemBuilder({
                    title: 'Inventory',
                    children: (
                      <RadioGroup value={1}>
                        <RadioGroup.Radio value={1}>In stock</RadioGroup.Radio>
                        <RadioGroup.Radio value={2}>
                          Out of stock
                        </RadioGroup.Radio>
                      </RadioGroup>
                    ),
                  }),
                  accordionItemBuilder({
                    title: 'Type',
                    children: (
                      <RadioGroup value={1}>
                        <RadioGroup.Radio value={1}>All</RadioGroup.Radio>
                        <RadioGroup.Radio value={2}>Physical</RadioGroup.Radio>
                        <RadioGroup.Radio value={2}>Digital</RadioGroup.Radio>
                      </RadioGroup>
                    ),
                  }),
                  accordionItemBuilder({
                    title: 'Visibility',
                    children: (
                      <RadioGroup value={1}>
                        <RadioGroup.Radio value={1}>All</RadioGroup.Radio>
                        <RadioGroup.Radio value={2}>Shown</RadioGroup.Radio>
                        <RadioGroup.Radio value={2}>Hiden</RadioGroup.Radio>
                      </RadioGroup>
                    ),
                  }),
                ]}
              />
              <SidePanel.Footer>
                <Layout rowHeight="30px" gap="12px">
                  <Cell span={4}>
                    <Text size="small">No filters applied</Text>
                  </Cell>
                  <Cell span={1}>
                    <TextButton size="small" disabled>
                      Clear all filters
                    </TextButton>
                  </Cell>
                </Layout>
                <Button onClick={closePanel} fullWidth>
                  Close Filters
                </Button>
              </SidePanel.Footer>
            </SidePanel>
          </div>
        </Box>
      </Page.Content>
    </Page>
  );
};
