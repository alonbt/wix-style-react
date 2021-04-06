/* eslint-disable */

() => {
  const records = [
    {
      order: '#10003',
      date: 'Jul 31, 2020, 3:59 PM',
      total: '$23.00',
      fulfilled: false,
    },
    {
      order: '#10002',
      date: 'Jul 3, 2020, 5:55 PM',
      total: '$123.50',
      fulfilled: false,
    },
    {
      order: '#10001',
      date: 'Jul 3, 2020, 4:52 PM',
      total: '$7.00',
      fulfilled: true,
    },
    {
      order: '#09999',
      date: 'Jun 30, 2020, 11:52 PM',
      total: '$56.00',
      fulfilled: true,
    },
    {
      order: '#09998',
      date: 'Jun 27, 2020, 5:36 PM',
      total: '$87.00',
      fulfilled: true,
    },
  ];

  const Status = ({ fullfilled }) => (
    <Badge size="small" skin={fullfilled ? 'success' : 'warning'}>
      {fullfilled ? 'Fullfilled' : 'Unfullfilled'}
    </Badge>
  );

  const columns = [
    { title: 'Order', render: row => row.order },
    { title: 'Date', render: row => row.date },
    { title: 'Total', render: row => row.total },
    {
      title: 'Status',
      render: row => <Status fullfilled={row.fulfilled} />,
    },
  ];

  return (
    <Table
      isRowHighlight={rowData => !rowData.fulfilled}
      data={records}
      columns={columns}
    >
      <Table.Content />
    </Table>
  );
};
