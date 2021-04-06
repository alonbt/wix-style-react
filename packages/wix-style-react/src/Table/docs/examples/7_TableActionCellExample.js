/* eslint-disable */

() => {
  const records = [
    { member: 'Meghan Bishop', email: 'meghan.bishop@gmail.com' },
    { member: 'Sara Porter', email: 's.porter@yahoo.com' },
    { member: 'Deborah Rhodes', email: 'deborahmariarhodes@gmail.com' },
    { member: 'Walter Jenning', email: 'walter.jenning@carrental.com' },
  ];

  const primaryAction = {
    text: 'Edit',
    skin: 'standard',
    onClick: () => {},
  };

  const secondaryActions = [
    {
      text: 'Star',
      icon: <Icons.Star />,
      onClick: () => {},
    },
    {
      text: 'Duplicate',
      icon: <Icons.Duplicate />,
      onClick: () => {},
    },
    {
      text: 'Download',
      icon: <Icons.Download />,
      onClick: () => {},
    },
    {
      text: 'Print',
      icon: <Icons.Print />,
      onClick: () => {},
    },
  ];

  const columns = [
    { title: 'Member', render: row => row.member },
    { title: 'Email', render: row => row.email },
    {
      render: rowData => (
        <TableActionCell
          upgrade
          primaryAction={primaryAction}
          secondaryActions={secondaryActions}
          numOfVisibleSecondaryActions={2}
        />
      ),
    },
  ];

  return (
    <Table data={records} columns={columns}>
      <Table.Content />
    </Table>
  );
};
