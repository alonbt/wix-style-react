export const playground = `
  class ModalWithCloseButton extends React.Component {
    state = {
      isModalOpened: false,
    };
  
    openModalWithCloseButton = () => this.setState({ isModalOpened: true });
  
    closeModalWithCloseButton = () => this.setState({ isModalOpened: false });
  
    render() {
      const { isModalOpened } = this.state;
      return (
        <ThemeProvider theme={theme()}>
          <Button onClick={this.openModalWithCloseButton}>
            Open Modal With Close Button
          </Button>
          <Modal
            isOpen={isModalOpened}
            onRequestClose={this.closeModalWithCloseButton}
            shouldDisplayCloseButton
            shouldCloseOnOverlayClick
          >
            <Box verticalAlign="middle" width={960} height={540}>
              <img
                src="https://i.ibb.co/C8HHTJx/rectangle-2x.png"
                width="100%"
                height="540px"
              />
            </Box>
          </Modal>
        </ThemeProvider>
      );
    }
  }
`;
