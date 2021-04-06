/* eslint-disable */

() => {
  const [records, setRecords] = React.useState([
    { name: 'Apple Towels', visible: true, onSale: false, price: '$22.99' },
    { name: 'Cyan Towls', visible: false, onSale: false, price: '$145.99' },
    {
      name: 'Marble Slippers',
      visible: false,
      onSale: false,
      price: '$125,265.00',
    },
    {
      name: 'Red Slippers',
      visible: false,
      onSale: false,
      price: '$1,265.69',
    },
  ]);

  const _updateRow = (rowNum, newData) => {
    setRecords(
      records.map((row, index) => {
        if (index !== rowNum) {
          return { ...row };
        }

        return {
          ...row,
          ...newData,
        };
      }),
    );
  };

  const columns = [
    {
      title: 'Name',
      render: row => <span>{row.name}</span>,
      width: '40%',
    },
    {
      title: 'Visibility',
      render: (row, rowNum) => (
        <Box inline verticalAlign="middle">
          <ToggleSwitch
            checked={row.visible}
            onChange={() => _updateRow(rowNum, { visible: !row.visible })}
          />
          <Box marginLeft={3}>{row.visible ? 'Visible' : 'Hidden'}</Box>
        </Box>
      ),
      width: '20%',
      align: 'start',
    },
    {
      title: 'On Sale',
      render: (row, rowNum) => (
        <Checkbox
          checked={row.onSale}
          onChange={() => _updateRow(rowNum, { onSale: !row.onSale })}
        />
      ),
      width: '20%',
      infoTooltipProps: {
        content: 'I am a Tooltip!',
      },
      align: 'center',
    },
    {
      title: 'Price',
      render: row => <span>{row.price}</span>,
      width: '20%',
      align: 'end',
    },
  ];

  return (
    <Table data={records} columns={columns}>
      <Table.Content />
    </Table>
  );
};
