/* eslint-disable */

() => {
  const records = [
    { name: 'Red Slippers', sku: 25232564, inStock: true, price: '$14.00' },
    { name: 'Velvet Hat', sku: 35246432, inStock: true, price: '$29.00' },
    { name: 'Silver Jeans', sku: 4864310, inStock: false, price: '$69.00' },
    { name: 'Orange Socks', sku: 125156422, inStock: true, price: '$7.00' },
  ];

  const Status = ({ isInStock }) => (
    <Badge size="small" skin={isInStock ? 'success' : 'outlined'}>
      {isInStock ? 'In Stock' : 'Out Of Stock'}
    </Badge>
  );

  const secondaryAction = [
    {
      icon: <Icons.Duplicate />,
      text: 'Duplicate',
      onClick: () => {},
    },
    {
      icon: <Icons.Delete />,
      text: 'Delete',
      onClick: () => {},
    },
  ];

  const columns = [
    {
      title: 'Name',
      render: row => row.name,
      width: '50%',
    },
    {
      title: 'SKU',
      render: row => row.sku,
      width: '10%',
      align: 'start',
    },
    {
      title: 'Stock',
      render: row => <Status isInStock={row.inStock} />,
      width: '20%',
      align: 'center',
    },
    {
      title: 'Price',
      render: row => row.price,
      width: '10%',
      align: 'end',
    },
    {
      render: row => <TableActionCell secondaryActions={secondaryAction} />,
      width: '10%',
    },
  ];

  return (
    <Table data={records} columns={columns}>
      <Table.Content />
    </Table>
  );
};
