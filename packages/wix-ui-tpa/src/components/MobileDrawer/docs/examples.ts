export const importExample = `import { MobileDrawer } from 'wix-ui-tpa/MobileDrawer';`;

const buildExample = (content: string) => `
class ModalExample extends React.Component {
  state = {
    isOpen: false,
  };

  onOpenDialogButtonClick = () => this.setState({ isOpen: true });

  onClickOutOfModal = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;

    return (
      ${content}
    );
  }
}
`;

export const simpleExample = buildExample(`
  <MobileExample>
    <Button upgrade onClick={this.onOpenDialogButtonClick}>Open MobileDrawer</Button>
      <MobileDrawer isOpen={isOpen} onRequestClose={this.onClickOutOfModal}> 
        <div
            style={{
              width: '100%',
              height: '320px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
        >
          This is the content!
        </div>
      </MobileDrawer>
  </MobileExample>
 `);

export const socialMenuExample = buildExample(`
  <MobileExample>
    <Button upgrade onClick={this.onOpenDialogButtonClick}>Open MobileDrawer</Button>
      <MobileDrawer isOpen={isOpen} onRequestClose={this.onClickOutOfModal}> 
        <div style={{
            width: '100%', height: '146px', textAlign: 'center', padding: '36px 24px'}}>
          <Text typography="smallTitle">
            Share
          </Text>
          <SocialBar>
            <SocialBar.Icon icon={<Icons.Facebook/>} />
            <SocialBar.Icon icon={<Icons.Instagram/>} />
            <SocialBar.Icon icon={<Icons.Twitter/>} />
          </SocialBar>
        </div>
      </MobileDrawer>
  </MobileExample>
 `);

export const actionMenuExample = buildExample(`
  <MobileExample>
    <Button upgrade onClick={this.onOpenDialogButtonClick}>Open MobileDrawer</Button>
      <MobileDrawer isOpen={isOpen} onRequestClose={this.onClickOutOfModal}> 
        <div style={{ width: '100%' }}>
          <ActionsMenuLayout>
            <ActionsMenuLayout.Item
              onClick={() => console.log('List Item 1 clicked')}
              content="List Item 1"
              prefixIcon={<Icons.Heart />}
            />
            <ActionsMenuLayout.Item
              onClick={() => console.log('List Item 2 clicked')}
              content="List Item 2"
              prefixIcon={<Icons.Heart />}
            />
            <ActionsMenuLayout.Divider />
            <ActionsMenuLayout.Item
              onClick={this.onClickOutOfModal}
              content="Close"
              prefixIcon={<Icons.Close />}
              />
          </ActionsMenuLayout>
        </div>
      </MobileDrawer>
  </MobileExample>
 `);
