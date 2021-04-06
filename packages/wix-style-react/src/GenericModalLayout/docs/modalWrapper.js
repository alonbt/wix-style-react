import React from 'react';
import { Button, Modal } from 'wix-style-react';

export class ModalWrapper extends React.Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div>
        <Button dataHook="open-modal-button" onClick={this.openModal}>
          Open Layout in Modal
        </Button>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          contentLabel="Generic Modal layout"
          shouldDisplayCloseButton
        >
          {this.props.children}
        </Modal>
      </div>
    );
  }
}
