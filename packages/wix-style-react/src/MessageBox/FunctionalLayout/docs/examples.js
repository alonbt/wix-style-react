export const anAlertModal = `
<MessageBoxFunctionalLayout
  title="Interruption Message"
  confirmText="Approve"
  cancelText="Cancel"
  theme="blue"
>
  This is a generic message. No harm done, but really needed to interrupt you.
</MessageBoxFunctionalLayout>`;

export const anAlertModalInteraction = `
class FullScreenModal extends React.Component {
  constructor() {
    super();
    this.state = {
      isFullScreenModalOpen: false,
      isModalOpen: false,
    };
  }

  render() {
    return (
      <Layout>
        <Cell>
          <Button onClick={() => this.setState({ isModalOpen: true })}>
            Open Alert Modal
          </Button>
        </Cell>
        <Cell>
          <Button
            onClick={() => this.setState({ isFullScreenModalOpen: true })}
          >
            Open Full Screen Modal
          </Button>
        </Cell>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={() => this.setState({ isModalOpen: false })}
          contentLabel="Full screen modal example"
        >
          <MessageBoxFunctionalLayout
            confirmText="OK"
            onOk={() => this.setState({ isModalOpen: false })}
            onClose={() => this.setState({ isModalOpen: false })}
            title="regular modal"
          >
            I am an alert modal
          </MessageBoxFunctionalLayout>
        </Modal>
        <Modal
          isOpen={this.state.isFullScreenModalOpen}
          onRequestClose={() => this.setState({ isFullScreenModalOpen: false })}
          contentLabel="Full screen modal example"
        >
          <MessageBoxFunctionalLayout
            confirmText="OK"
            fullscreen
            onOk={() => this.setState({ isFullScreenModalOpen: false })}
            onClose={() => this.setState({ isFullScreenModalOpen: false })}
            title="Full screen modal"
          >
            I am a full screen modal
          </MessageBoxFunctionalLayout>
        </Modal>
      </Layout>
    );
  }
}`;

export const themes = `
<Layout>
  <Cell>
    <MessageBoxFunctionalLayout
      title="Blue"
      confirmText="Approve"
      theme="blue"
    />
  </Cell>
  <Cell>
    <MessageBoxFunctionalLayout
      title="Red"
      confirmText="Delete"
      theme="red"
    />
  </Cell>
  <Cell>
    <MessageBoxFunctionalLayout
      title="Purple"
      confirmText="Upgrade"
      theme="purple"
    />
  </Cell>
</Layout>`;

export const scrollbar = `
<MessageBoxFunctionalLayout
  title="Interruption Message"
  confirmText="Approve"
  maxHeight="100px"
>
  some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text some long text
</MessageBoxFunctionalLayout>`;

export const emptyState = `
<MessageBoxFunctionalLayout
    title="Choose Your Favorites"
    confirmText="Select"
    withEmptyState
  >
  <EmptyState
    title="You don't have any favorites yet"
    subtitle="Go back and add some items to your favorites' list"
  />
</MessageBoxFunctionalLayout>`;

export const image = `
  <MessageBoxFunctionalLayout
    title="Interruption Message"
    confirmText="Main"
    image={<img src="https://picsum.photos/126/126?blur&image=0" />}
  >
    This is a generic message. No harm done, but really needed to interrupt you.
  </MessageBoxFunctionalLayout>
`;

export const footnote = `
<MessageBoxFunctionalLayout
    title="More info"
    confirmText="Main"
    footerBottomChildren={
      <div>
        <Text size="small">By sending an invite, you agree to the </Text>
        <TextButton size="small">Wix Terms of Use.</TextButton>
      </div>
    }
  >
    This is a generic message. No harm done, but really needed to interrupt you.
  </MessageBoxFunctionalLayout>
`;

export const sideActions = `
<MessageBoxFunctionalLayout
    title="More Info"
    confirmText="Main"
    sideActions={
      <FormField
        label="Please don't show me this again"
        labelPlacement="right"
        >
          <Checkbox/>
        </FormField>
    }
  >
    This is a generic message. No harm done, but really needed to interrupt you.
  </MessageBoxFunctionalLayout>
`;
