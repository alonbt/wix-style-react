/* eslint-disable */
class ExampleGalleryLayout extends React.Component {
  renderHeader() {
    const ActionBar = () => {
      return <Button>Save</Button>;
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

  renderCardGalleryItem() {
    const backgroundImageUrl = 'example.jpg';

    return (
      <CardGalleryItem
        title={'Card Title'}
        subtitle={'Card subtitle'}
        primaryActionProps={{
          label: 'Button',
          onClick: () => {
            alert('Primary action clicked');
          },
        }}
        secondaryActionProps={{
          label: 'Text link',
          onClick: () => {
            alert('Secondary action clicked');
          },
        }}
        backgroundImageUrl={backgroundImageUrl}
        data-hook="storybook-card-gallery-item"
      />
    );
  }

  render() {
    return (
      <Page height="372px">
        {this.renderHeader()}
        <Page.Content>
          <Layout>
            {Array.from(Array(6).keys()).map(cellKey => (
              <Cell key={cellKey} span={4}>
                {this.renderCardGalleryItem()}
              </Cell>
            ))}
            <Cell span={4}>
              {/* We use <Proportion/> to stretch <AddItem/> vertically (it doesn't stretch automatically because its height is 100%, whereas the row doesn't have a defined height) */}
              <Proportion>
                <AddItem>Add Item</AddItem>
              </Proportion>
            </Cell>
          </Layout>
        </Page.Content>
      </Page>
    );
  }
}

export default ExampleGalleryLayout;
