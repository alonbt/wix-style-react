/* eslint-disable */
class ExampleEmptyState extends React.Component {
  renderHeader() {
    const ActionBar = () => {
      return (
        <Button prefixIcon={<Icons.Add />}>
          New Item
        </Button>
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
    return (
      <Page>
        {this.renderHeader()}
        <Page.Content>
          <EmptyState
            image={
              <div
                style={{
                  height: 120,
                  width: 120,
                  backgroundColor: '#dfe5eb',
                  borderRadius: '50%',
                }}
              />
            }
            subtitle="Create your product item in an easy & fast way to display it on your site"
            theme="page"
            title="You don't have any items yet"
          >
            <TextButton prefixIcon={<Icons.Add />}>New Item</TextButton>
          </EmptyState>
        </Page.Content>
      </Page>
    );
  }
}

export default ExampleEmptyState;
