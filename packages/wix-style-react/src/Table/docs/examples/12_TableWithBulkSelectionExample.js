/* eslint-disable */

() => {
  const records = [
    {
      name: 'Red Slippers',
      sku: 25232564,
      status: 'In Stock',
      price: '$14.00',
    },
    {
      name: 'Velvet Hat',
      sku: 35246432,
      status: 'In Stock',
      price: '$29.00',
    },
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
    { title: 'Price', render: row => row.price },
  ];

  const getCheckboxContent = (selectedCount, bulkSelectionState) => {
    switch (bulkSelectionState) {
      case 'ALL':
        return `All Elements Selected`;
      case 'NONE':
        return 'Select All';
      case 'SOME':
        return selectedCount === 1
          ? '1 Element Selected'
          : `${selectedCount} Elements Selected`;
    }
  };

  return (
    <Card>
      <Table
        showSelection
        hideBulkSelectionCheckbox
        data={records}
        columns={columns}
      >
        <Table.ToolbarContainer>
          {({ selectedCount, bulkSelectionState }) => (
            <TableToolbar>
              <TableToolbar.ItemGroup>
                <TableToolbar.Item>
                  <Table.BulkSelectionCheckbox>
                    <TableToolbar.SelectedCount>
                      {getCheckboxContent(selectedCount, bulkSelectionState)}
                    </TableToolbar.SelectedCount>
                  </Table.BulkSelectionCheckbox>
                </TableToolbar.Item>
              </TableToolbar.ItemGroup>
            </TableToolbar>
          )}
        </Table.ToolbarContainer>
        <Table.Content />
      </Table>
    </Card>
  );
};
