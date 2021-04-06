import React, { Component } from 'react';
import { Button, Modal } from 'wix-style-react';

export class ModalWrapperExample extends Component {
  state = {
    isModalOpen: false,
  };

  render() {
    return (
      <div>
        <Button onClick={this.openModal}>Open Mobile Modal</Button>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          contentLabel="Mobile modal example"
          scrollable={false}
          scrollableContent
        >
          {this.props.children({ closeModal: this.closeModal })}
        </Modal>
      </div>
    );
  }
  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
}
