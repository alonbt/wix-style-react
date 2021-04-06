const header = `<div style={{ backgroundColor: '#ccbcbc' }}>header</div>`;
const content = `<div style={{ backgroundColor: '#fbfba1', minHeight: '100%' }}>content</div>`;
const footer = `<div style={{ backgroundColor: '#a6a6ab' }}>footer</div>`;

export const simple = `
class ExampleStandard extends React.Component {
  constructor() {
    super();

    this.state = {
      isModalOpened: false,
    };
  }

  openModal() {
    this.setState({
      isModalOpened: true,
    });
  }

  closeModal() {
    this.setState({
      isModalOpened: false,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.openModal()}>
          Open Layout in Modal
        </Button>

        <Modal
          isOpen={this.state.isModalOpened}
          onRequestClose={() => this.closeModal()}
          contentLabel="Generic Modal Layout"
          shouldDisplayCloseButton
        >
          <GenericModalLayout
            header={${header}}
            content={${content}}
            footer={${footer}}
          />
        </Modal>
      </div>
    );
  }
}`;

export const fullscreen = `
class ExampleFullscreen extends React.Component {
  constructor() {
    super();

    this.state = {
      isModalOpened: false,
    };
  }

  openModal() {
    this.setState({
      isModalOpened: true,
    });
  }

  closeModal() {
    this.setState({
      isModalOpened: false,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.openModal()}>
          Open Layout in Modal
        </Button>

        <Modal
          isOpen={this.state.isModalOpened}
          onRequestClose={() => this.closeModal()}
          contentLabel="Fullscreen generic modal layout"
          shouldDisplayCloseButton
        >
          <GenericModalLayout
            header={${header}}
            content={${content}}
            footer={${footer}}
            fullscreen
          />
        </Modal>
      </div>
    );
  }
}
`;
