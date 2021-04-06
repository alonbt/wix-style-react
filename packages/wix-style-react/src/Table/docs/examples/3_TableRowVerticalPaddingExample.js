/* eslint-disable */

() => {
  const generateRecords = item => [
    { item: item },
    { item: item },
    { item: item },
  ];
  const columns = [{ title: 'Column Name', render: row => row.item }];

  return (
    <Layout>
      <Cell span={4}>
        <Table
          rowVerticalPadding="small"
          data={generateRecords('Small')}
          columns={columns}
        >
          <Table.Content />
        </Table>
      </Cell>
      <Cell span={4}>
        <Table
          rowVerticalPadding="medium"
          data={generateRecords('Medium')}
          columns={columns}
        >
          <Table.Content />
        </Table>
      </Cell>
      <Cell span={4}>
        <Table
          rowVerticalPadding="large"
          data={generateRecords('Large')}
          columns={columns}
        >
          <Table.Content />
        </Table>
      </Cell>
    </Layout>
  );
};
