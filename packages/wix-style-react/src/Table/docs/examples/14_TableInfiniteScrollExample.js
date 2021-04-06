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

  return (
    <div ref={containerRef} style={{ maxHeight: '258px', overflow: 'auto' }}>
      <Table
        infiniteScroll
        hasMore={true}
        loadMore={fetchMoreData}
        itemsPerPage={20}
        scrollElement={container && container.current}
        data={data}
        columns={columns}
      >
        <Table.Content />
      </Table>
    </div>
  );
};
