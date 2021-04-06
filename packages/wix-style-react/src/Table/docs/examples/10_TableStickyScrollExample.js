/* eslint-disable */

() => {
  const records = [
    {
      employee: 'Meghan Bishop',
      department: 'Berlin',
      email: 'meghan.bishop@gmail.com',
      phone: '+44757434323',
      startDate: '14 Jun 2019',
    },
    {
      employee: 'Sarah Porter',
      department: 'Hamburg',
      email: 's.porter@yahoo.com',
      phone: '+3330940343',
      startDate: '30 Dec 2009',
    },
    {
      employee: 'Luke Dallas',
      department: 'Berlin',
      email: 'lukematthewdallas@gmail.com',
      phone: '+44734349973',
      startDate: '17 Dec 2005',
    },
    {
      employee: 'Robert Thompson',
      department: 'Berlin',
      email: 'robthompson@hotmail.com',
      phone: '+47343635343',
      startDate: '21 Jun 2000',
    },
  ];

  const columnWidth = 300;

  const primaryAction = { text: 'Edit', onClick: () => {} };

  const secondaryActions = [
    {
      icon: <Icons.Star />,
      text: 'Star',
      onClick: () => {},
    },
  ];

  const columns = [
    {
      title: 'Employee',
      render: row => row.employee,
      width: columnWidth,
    },
    {
      title: 'Department',
      render: row => row.department,
      width: columnWidth,
    },
    {
      title: 'Email',
      render: row => row.email,
      width: columnWidth,
    },
    {
      title: 'Phone',
      render: row => row.phone,
      width: columnWidth,
    },
    {
      title: 'Start Date',
      render: row => row.startDate,
      width: columnWidth,
    },
    {
      render: () => (
        <TableActionCell
          primaryAction={primaryAction}
          secondaryActions={secondaryActions}
        />
      ),
      stickyActionCell: true,
      width: 30,
    },
  ];

  return (
    <Table horizontalScroll stickyColumns={1} data={records} columns={columns}>
      <Table.Content />
    </Table>
  );
};
