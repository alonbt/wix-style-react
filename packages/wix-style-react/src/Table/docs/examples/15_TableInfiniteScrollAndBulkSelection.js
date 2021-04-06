/* eslint-disable */

() => {
  const containerRef = React.useRef(null);
  const [data, setData] = React.useState([]);
  const [container, setContainer] = React.useState(null);

  const fetchMoreData = () =>
    Promise.resolve(fetch(`/mockApi?items=${data.length + 5}`))
      .then(data => {
        setData(data);
      })
      .catch(e => console.error(e));

  React.useEffect(() => {
    setContainer(containerRef);
    fetchMoreData();
  }, []);

  const columns = [
    { title: 'First', render: row => row.firstName },
    { title: 'Last', render: row => row.lastName },
  ];

  const renderToolbar = selectionContext => {
    return (
      <TableToolbar>
        <TableToolbar.ItemGroup position="start">
          <TableToolbar.Item>
            <TableToolbar.SelectedCount>{`${selectionContext.selectedCount} Selected`}</TableToolbar.SelectedCount>
          </TableToolbar.Item>
        </TableToolbar.ItemGroup>
      </TableToolbar>
    );
  };

  return (
    <div ref={containerRef} style={{ maxHeight: '258px', overflow: 'auto' }}>
      <Card>
        <Table
          infiniteScroll
          loadMore={fetchMoreData}
          itemsPerPage={20}
          hasMore={true}
          scrollElement={container && container.current}
          totalSelectableCount={180}
          showSelection
          data={data}
          columns={columns}
        >
          <Table.ToolbarContainer>{renderToolbar}</Table.ToolbarContainer>
          <Table.Content />
        </Table>
      </Card>
    </div>
  );
};
