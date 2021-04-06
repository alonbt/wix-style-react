/* eslint-disable */

() => {
  const records = [
    { item: 'Item 1' },
    { item: 'Item 2' },
    { item: 'Item 3' },
    { item: 'Item 4' },
  ];

  const columns = Array(4).fill({
    title: 'Column Name',
    render: row => row.item,
  });

  return (
    <Card>
      <Table data={records} columns={columns}>
        <TableToolbar>
          <TableToolbar.Title>Toolbar</TableToolbar.Title>
        </TableToolbar>
        <Table.SubToolbar>Sub Toolbar</Table.SubToolbar>
        <Table.Content />
      </Table>
    </Card>
  );
};
