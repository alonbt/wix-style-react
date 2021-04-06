/* eslint-disable */
class ExampleSplitLayout extends React.Component {
  renderHeader() {
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
            items={[1, 2, 3].map(i => ({ id: `${i}`, value: `Page ${i}` }))}
            activeId="3"
            size="medium"
            theme="onGrayBackground"
            onClick={() => {}}
          />
        }
        actionsBar={<ActionBar />}
      />
    );
  }

  render() {
    const ExampleLongContent = () => <div style={{ height: '550px' }} />;
    const ExampleShortContent = () => <div style={{ height: '250px' }} />;

    return (
      <Page height="372px">
        {this.renderHeader()}
        <Page.Content>
          <Layout>
            <Cell span={8}>
              <Card>
                <Card.Header title="Card Title" />
                <Card.Content>
                  <ExampleLongContent />
                </Card.Content>
              </Card>
            </Cell>
            <Cell span={4}>
              <Card stretchVertically>
                <Card.Content>
                  <ExampleShortContent />
                </Card.Content>
              </Card>
            </Cell>
          </Layout>
        </Page.Content>
      </Page>
    );
  }
}

export default ExampleSplitLayout;
