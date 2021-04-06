/* eslint-disable */

() => {
  const records = [
    {
      name: 'Sara Porter',
      country: 'Canada',
      orders: 2,
      lastActivity: 'Sep 9, 2020',
    },
    {
      name: 'Michael Baldwin',
      country: 'Germany',
      orders: 43,
      lastActivity: 'Sep 7, 2020',
    },
    {
      name: 'Alex Halifax',
      country: 'United Kingdom',
      orders: 12,
      lastActivity: 'Jun 30, 2020',
    },
    {
      name: 'Paul Sheffield',
      country: 'US',
      orders: 0,
      lastActivity: 'Sep 18, 2019',
    },
  ];

  const primaryAction = {
    text: 'Edit',
    onClick: () => {},
  };

  const columns = [
    { title: 'Name', render: row => row.name, important: true },
    { title: 'Country', render: row => row.country },
    { title: 'Orders', render: row => row.orders },
    { title: 'Last Activity', render: row => row.lastActivity },
    {
      render: () => <TableActionCell primaryAction={primaryAction} />,
    },
  ];

  return (
    <Table data={records} columns={columns}>
      <Table.Content />
    </Table>
  );
};
