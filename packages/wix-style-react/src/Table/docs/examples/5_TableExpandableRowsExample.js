/* eslint-disable */

() => {
  const records = [
    {
      task: 'Upload New Collection Products',
      date: '23 Sep 2020',
      expandable: true,
      expanded: false,
    },
    { task: 'Q3 Sales Results Doc', date: '31 Oct 2020', expandable: false },
    {
      task: 'Staff Performace Reviews',
      date: '12 Oct 2020',
      expandable: true,
      expanded: false,
    },
    {
      task: 'Budget Planning',
      date: '24 Nov 2020',
      expandable: true,
      expanded: false,
    },
  ];

  const renderRowDetails = row => {
    if (row.expandable) {
      return (
        <Box padding="20px">
          <Text>
            {`This is an expandable space where you see the row details for ${row.task} with a due date of ${row.date}.`}
          </Text>
        </Box>
      );
    }
  };

  const columns = [
    { title: 'Task', render: row => row.task },
    { title: 'Due Date', render: row => row.date },
    {
      render: row =>
        row.expandable ? (
          <TableActionCell
            primaryAction={{
              text: !row.expanded ? 'Expand' : 'Collapse',
              skin: 'inverted',
              onClick: (row.expanded = !row.expanded),
            }}
          />
        ) : (
          ''
        ),
    },
  ];

  return (
    <Table
      rowDetails={row => renderRowDetails(row)}
      data={records}
      columns={columns}
    >
      <Table.Content />
    </Table>
  );
};
