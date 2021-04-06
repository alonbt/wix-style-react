/* eslint-disable */

() => {
  const [count, setCount] = React.useState(1000);

  const records = [
    { firstName: 'Meghan', lastName: 'Bishop' },
    { firstName: 'Sara', lastName: 'Porter' },
    { firstName: 'Deborah', lastName: 'Rhodes' },
    { firstName: 'Walter', lastName: 'Jenning' },
  ];

  const columns = [
    { title: 'First', width: '50%', render: row => row.firstName },
    { title: 'Last', width: '50%', render: row => row.lastName },
  ];

  _generateData = count => {
    let data = [];

    for (let i = 0; i < count; i++) {
      data = data.concat(records);
    }

    return data;
  };

  return (
    <Table
      virtualized
      virtualizedLineHeight={60}
      virtualizedTableHeight={258}
      data={_generateData(count)}
      columns={columns}
    >
      <Table.Content titleBarVisible={false} />
    </Table>
  );
};
