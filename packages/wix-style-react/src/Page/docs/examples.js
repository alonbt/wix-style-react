export const simple = `
<Page>
  <Page.Header title="Page Header"/>
  <Page.Content>
    Page Content
  </Page.Content>
</Page>
`;

export const fullSize = `
<Page height="40vh">
  <Page.Header title="Page Header"/>
  <Page.Content>
    Page Content
  </Page.Content>
</Page>
`;

export const gridOfCards = `
<Page height="40vh">
  <Page.Header title="Page Header" />
  <Page.Content>
    <Layout>
      <Cell span={6}>
        <Card>
          <Card.Header title="Card" />
          <Card.Divider />
          <Card.Content>Some content</Card.Content>
        </Card>
      </Cell>
    </Layout>
  </Page.Content>
</Page>
`;

export const header = `
<Page>
  <Page.Header title="Page Header" showBackButton onBackClicked={() => alert('cool')} actionsBar={<Button>Click me</Button>}/>
  <Page.Content>
    Page Content
  </Page.Content>
</Page>
`;

export const minimizedHeader = `
<Page height="40vh">
  <Page.Header title="Page Header" />
  <Page.Content>
    <Layout>
      <Cell span={8}>
        <Card>
          <Card.Content>
            <h3>Scroll Down</h3>
            {Array(20)
              .fill(' ')
              .map((item, i) => (
                <div key={'minimized-header-example-item-' + i}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Etiam facilisis molestie magna vitae pellentesque. Ut
                  elementum accumsan nibh, ut faucibus velit. Vestibulum at
                  mollis justo.
                </div>
              ))}
          </Card.Content>
        </Card>
      </Cell>
    </Layout>
  </Page.Content>
</Page>
`;

export const horizontalScroll = `
<Page height="40vh" horizontalScroll>
  <Page.Header title="Page Header" actionsBar={<Button>Click me</Button>}/>
  <Page.Content>
    <Box directon="horizontal">
      {
        Array.from(Array(7)).map((_, idx) =>
          <Box key={idx} backgroundColor="lightyellow" marginRight="12px" padding="12px" minWidth="200px" height="1000px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Box>
        )
      }
    </Box>
  </Page.Content>
</Page>
`;

export const verticalScroll = `
class ExampleVerticalScrollListeners extends React.Component {
  state = {
    verticalScrollArea: 'none',
    scrollTop: 0,
  };

  onScrollChanged = ({ target }) =>
    this.setState({ scrollTop: target.scrollTop });

  onScrollAreaChanged = ({ area }) =>
    this.setState({ verticalScrollArea: area.y });

  render() {
    return (
      <Page
        height="40vh"
        scrollProps={{
          onScrollChanged: this.onScrollChanged,
          onScrollAreaChanged: this.onScrollAreaChanged,
        }}
      >
        <Page.Header
          title={
            this.state.scrollTop === 0
              ? 'Scroll me down 👇'
              : 'See updated scroll values 👉'
          }
          actionsBar={
            <Box>
              <Text>Vertical Scroll Area:</Text>
              <Badge>{this.state.verticalScrollArea}</Badge>
              <Text style={{ marginLeft: '6px' }}>ScrollTop:</Text>
              <Badge>{this.state.scrollTop}</Badge>
            </Box>
          }
        />
        <Page.Content>
          {Array(40)
            .fill(' ')
            .map((item, i) => (
              <div key={'minimized-header-example-item-' + i}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                facilisis molestie magna vitae pellentesque. Ut elementum
                accumsan nibh, ut faucibus velit. Vestibulum at mollis justo.
              </div>
            ))}
        </Page.Content>
      </Page>
    );
  }
}
`;

export const headerTailElements = `
<Page height="40vh">
  <Page.Header title="Page Header" />
  <Page.Tail>
    <Tabs
      activeId={1}
      hasDivider={false}
      items={[{id: 1, title: 'item 1'}, {id: 2, title: 'item 2'}]}
    />
  </Page.Tail>
  <Page.Content>
    <Layout>
      <Cell span={8}>
        <Card>
          <Card.Content>
            {Array(20).fill(' ').map((item,i) =>
              (<div key={"header-tail-elements-example-item-"+ i}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                facilisis molestie magna vitae pellentesque. Ut elementum
                accumsan nibh, ut faucibus velit. Vestibulum at mollis justo.
              </div>)
              )
            }
          </Card.Content>
        </Card>
      </Cell>
    </Layout>
  </Page.Content>
</Page>
`;

export const stickyElements = `
<Page height="40vh">
  <Page.Header title="Page Header" />
  <Page.Content>
    <Layout>
      <Cell span={8}>
        <Card>
          <Card.Content>
            {Array(20).fill(' ').map((item,i) =>
              (<div key={"sticky-elements-example-item-"+i}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                facilisis molestie magna vitae pellentesque. Ut elementum
                accumsan nibh, ut faucibus velit. Vestibulum at mollis justo.
              </div>)
              )
            }
          </Card.Content>
        </Card>
      </Cell>
      <Cell span={4}>
        <Page.Sticky>
          <Card>
            <Card.Header title="Sticky" />
            <Card.Divider />
            <Card.Content>Some menu or other content</Card.Content>
          </Card>
        </Page.Sticky>
      </Cell>
    </Layout>
  </Page.Content>
</Page>
`;

export const complexStructures = `
class Example extends React.Component {
  render() {
    return (
      <Page height="372px">
        {renderPageHeader()}
        <Page.Content>
          <Layout>
            <Cell>
              <Card>
                <Card.Content>Some Content 1</Card.Content>
              </Card>
            </Cell>
            <Cell>{<ProductTable />}</Cell>

            <Cell>
              <Card>
                <Card.Content>Some Content 2</Card.Content>
              </Card>
            </Cell>
            <Cell>{<ProductTable />}</Cell>
          </Layout>
        </Page.Content>
      </Page>
    );
  }
}

class ProductTable extends React.Component {
  state = {
    data: allData,
    collectionId: 0,
    filterId: 0,
    searchTerm: '',
    inStock: false,
  };

  render() {
    const tableData = this.getFilteredData();
    return (
      <Table
        dataHook="story-table-example"
        data={tableData}
        itemsPerPage={20}
        columns={this.getColumns()}
        onSelectionChange={selectedIds =>
          console.log('Table.onSelectionChange(): selectedIds=', selectedIds)
        }
        showSelection
        showLastRowDivider
      >
        <Page.Sticky>
          <Card>
            <Table.ToolbarContainer>
              {() => this.renderMainToolbar()}
            </Table.ToolbarContainer>
            <Table.Titlebar />
          </Card>
        </Page.Sticky>
        <Card>
          <Table.Content titleBarVisible={false} />
        </Card>
      </Table>
    );
  }

  getColumns() {
    return [
      {
        title: 'Name',
        render: row => (
          <Highlighter match={this.state.searchTerm}>{row.name}</Highlighter>
        ),
        width: '30%',
      },
      {
        title: 'SKU',
        render: row => row.SKU,
        width: '20%',
      },
      {
        title: 'Price',
        render: row => row.price,
        width: '20%',
      },
      {
        title: 'Inventory',
        render: row => row.inventory,
        width: '20%',
      },
      {
        title: '',
        width: '40%',
        render: rowData => (
          <TableActionCell
            dataHook="action-cell-component-secondary"
            primaryAction={{
              text: 'Edit',
              skin: 'standard',
              onClick: () => window.alert(\`Row Data: \${JSON.stringify(rowData)}\`),
            }}
            secondaryActions={[
              {
                text: 'Star',
                icon: <Icons.Star />,
                onClick: () => window.alert(\`Starring \${rowData.name}\`),
              },
              {
                text: 'Download',
                icon: <Icons.Download />,
                onClick: () => window.alert(\`Downloading \${rowData.name}\`),
              },
              {
                text: 'Duplicate',
                icon: <Icons.Duplicate />,
                onClick: () => window.alert(\`Duplicating \${rowData.name}\`),
              },
              {
                text: 'Print',
                icon: <Icons.Print />,
                onClick: () => window.alert(\`Printing \${rowData.name}\`),
              },
            ]}
            numOfVisibleSecondaryActions={2}
            alwaysShowSecondaryActions={false}
          />
        ),
      },
    ];
  }

  renderMainToolbar() {
    const collectionOptions = [
      { id: 0, value: 'All' },
      { id: 1, value: 'Towels' },
      { id: 2, value: 'Slippers' },
    ];

    const filterOptions = [
      { id: 0, value: 'All' },
      { id: 1, value: 'Red' },
      { id: 2, value: 'Cyan' },
    ];

    return (
      <Card>
        <TableToolbar>
          <TableToolbar.ItemGroup position="start">
            <TableToolbar.Item>
              <FormField labelPlacement="left" label='Product'>
                <Dropdown
                  options={collectionOptions}
                  selectedId={this.state.collectionId}
                  onSelect={selectedOption => {
                    this.setState({ collectionId: selectedOption.id });
                  }}
                  roundInput
                />
              </FormField>
            </TableToolbar.Item>
            <TableToolbar.Item>
              <FormField labelPlacement="left" label='Color'>
                <Dropdown
                  options={filterOptions}
                  selectedId={this.state.filterId}
                  onSelect={selectedOption =>
                    this.setState({ filterId: selectedOption.id })
                  }
                  roundInput
                />
              </FormField>
            </TableToolbar.Item>
            <TableToolbar.Item>
              <Checkbox
                checked={this.state.inStock}
                onChange={e => this.setState({ inStock: e.target.checked })}
              >
                In Stock only
              </Checkbox>
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>
          <TableToolbar.ItemGroup position="end">
            <TableToolbar.Item>
              <Search
                onChange={e => this.setState({ searchTerm: e.target.value })}
                value={this.state.searchTerm}
              />
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>
        </TableToolbar>
      </Card>
    );
  }


  getFilteredData() {
    const { collectionId, filterId, searchTerm, inStock } = this.state;
    let { data } = this.state;

    if (collectionId > 0) {
      data = data.filter(row => row.collectionId === collectionId);
    }
    if (filterId > 0) {
      data = data.filter(row => row.filterId === filterId);
    }
    if (inStock) {
      data = data.filter(row => row.inventory === 'In stock');
    }
    if (searchTerm !== '') {
      data = data.filter(row =>
        row.name.toUpperCase().includes(searchTerm.toUpperCase()),
      );
    }
    return data;
  }
}

const createDataSet = setIndex => [
  {
    id: \`\${setIndex}-1\`,
    name: \`Apple Towels \${setIndex}\`,
    SKU: '111222',
    price: '$2.00',
    inventory: 'In stock',
    collectionId: 1,
  },
  {
    id: \`\${setIndex}-2\`,
    name: \`Cyan Towels \${setIndex}\`,
    SKU: '222333',
    price: '$2.00',
    inventory: 'In stock',
    collectionId: 1,
    filterId: 2,
  },
  {
    id: \`\${setIndex}-3\`,
    name: \`Marble Slippers \${setIndex}\`,
    SKU: '333444',
    price: '$14.00',
    inventory: 'In stock',
    collectionId: 2,
  },
  {
    id: \`\${setIndex}-4\`,
    name: \`Red Slippers \${setIndex}\`,
    SKU: '444555',
    price: '$14.00',
    inventory: 'Out of stock',
    collectionId: 2,
    filterId: 1,
  },
];

const allData = [1, 2, 3, 4, 5].reduce(
  (accum, index) => accum.concat(createDataSet(index)),
  [],
);

const renderPageHeader = () => {
  const ActionBar = () => {
    return (
      <Box>
        <Box>
          <PopoverMenu
            triggerElement={
              <IconButton skin="inverted">
                <Icons.More />
              </IconButton>
            }
            placement="bottom"
            textSize="medium"
            appendTo='parent'
          >
            <PopoverMenu.MenuItem onClick={() => {}} text="Refresh" />
            <PopoverMenu.MenuItem onClick={() => {}} text="Trash" />
          </PopoverMenu>
        </Box>
        <Box marginLeft="small" marginRight="small">
          <Button skin="light">Cancel</Button>
        </Box>
        <Box>
          <Button>Save</Button>
        </Box>
      </Box>
    );
  };

  return (
    <Page.Header
      title="Page Title"
      breadcrumbs={
        <Breadcrumbs
          items={[1, 2, 3].map(i => ({ id: \`\${i}\`, value: \`Page \${i}\` }))}
          activeId="3"
          size="medium"
          theme="onGrayBackground"
          onClick={() => {}}
        />
      }
      actionsBar={<ActionBar />}
    />
  );
};

render(Example);
`;

export const fullNotScrollableContent = `
class FullNotScrollableContent extends React.Component {
  state = {
    isModalOpened: false,
  };

  openModal = () => this.setState({ isModalOpened: true });

  closeModal = () => this.setState({ isModalOpened: false });

  render() {
    const { isModalOpened } = this.state;
    return (
      <Box>
        <Button onClick={this.openModal}>Open Page</Button>
        <Modal isOpen={isModalOpened} onRequestClose={this.closeModal}>
          <Page>
            <Page.Header
              title="Press Esc. to exit"
              subtitle="This is a nice subtitle"
            />
            <Page.Tail>
              <Tabs
                activeId={1}
                hasDivider={false}
                items={[
                  { id: 1, title: 'item 1' },
                  { id: 2, title: 'item 2' },
                ]}
              />
            </Page.Tail>
            <Page.Content>
              <Layout>
                <Cell>
                  <Card>
                    <Card.Header title="Card" />
                    <Card.Divider />
                    <Card.Content>Some content</Card.Content>
                  </Card>
                </Cell>
                <Cell span={6}>
                  <Card>
                    <Card.Header title="Card" />
                    <Card.Divider />
                    <Card.Content>Some content</Card.Content>
                  </Card>
                </Cell>
                <Cell span={6}>
                  <Card>
                    <Card.Header title="Card" />
                    <Card.Divider />
                    <Card.Content>Some content</Card.Content>
                  </Card>
                </Cell>
              </Layout>
            </Page.Content>

            <Page.FixedFooter>
              <PageFooter divider>
                <PageFooter.Start>
                  <Button size="medium" skin="inverted" prefixIcon={<Icons.ArrowLeft />}>
                    Go Back
                  </Button>
                </PageFooter.Start>
                <PageFooter.End>
                  <Box marginRight="SP2">
                    <Button size="medium" priority="secondary">
                      Skip
                    </Button>
                  </Box>
                  <Button size="medium">Go Next</Button>
                </PageFooter.End>
              </PageFooter>
            </Page.FixedFooter>
          </Page>
        </Modal>
      </Box>
    );
  }
}
`;

export const fullScrollableContent = `
class FullScrollableContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpened: false,
    };

    this.ref = React.createRef(null);
  }

  openModal = () => this.setState({ isModalOpened: true });

  closeModal = () => this.setState({ isModalOpened: false });

  onClick = top => this.ref.current.scrollTo({ top, behavior: 'smooth' });

  render() {
    const { isModalOpened } = this.state;
    return (
      <Box>
        <Button onClick={this.openModal}>Open Page</Button>
        <Modal isOpen={isModalOpened} onRequestClose={this.closeModal}>
          <Page ref={this.ref}>
            <Page.Header
              title="Press Esc. to exit"
              subtitle="This is a nice subtitle"
              actionsBar={<Button onClick={() => this.onClick(10000)}>Click here to scroll down!</Button>}
            />
            <Page.Tail>
              <Tabs
                activeId={1}
                hasDivider={false}
                items={[
                  { id: 1, title: 'item 1' },
                  { id: 2, title: 'item 2' },
                ]}
              />
            </Page.Tail>
            <Page.Content>
              <Card>
                <Card.Content>
                  {Array(100)
                    .fill(' ')
                    .map((item, i) => (
                      <div key={'sticky-elements-example-item-' + i}>
                        {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam facilisis molestie magna vitae pellentesque.
                        <br/>
                      </div>
                    ))}
                </Card.Content>
              </Card>
            </Page.Content>

            <Page.FixedFooter>
              <PageFooter divider>
                <PageFooter.Start>
                  <Button size="medium" skin="inverted" prefixIcon={<Icons.ArrowLeft />}>
                    Go Back
                  </Button>
                </PageFooter.Start>
                <PageFooter.End>
                  <Box marginRight="SP2">
                    <Button size="medium" priority="secondary">
                      Skip
                    </Button>
                  </Box>
                  <Button size="medium" onClick={() => this.onClick(0)}>Click here to scroll up!</Button>
                </PageFooter.End>
              </PageFooter>
            </Page.FixedFooter>
          </Page>
        </Modal>
      </Box>
    );
  }
}
`;
