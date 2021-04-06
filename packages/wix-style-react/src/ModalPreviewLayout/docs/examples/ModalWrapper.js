import React, { Component } from 'react';
import { Button, Modal } from 'wix-style-react';

export class ModalWrapperExample extends Component {
  constructor() {
    super();
    this.state = {
      isOpenFullScreenModal: false,
    };
  }

  render() {
    const setState = state => () => this.setState(state);
    const closePreviewModal = setState({ isOpenFullScreenModal: false });
    const openPreviewModal = setState({ isOpenFullScreenModal: true });
    return (
      <div>
        <Button dataHook="open-preview-modal-button" onClick={openPreviewModal}>
          Open Preview Modal
        </Button>
        <Modal
          isOpen={this.state.isOpenFullScreenModal}
          onRequestClose={closePreviewModal}
          contentLabel="Preview modal example"
          scrollable={false}
          scrollableContent={false}
        >
          {this.props.children({ onClose: closePreviewModal })}
        </Modal>
      </div>
    );
  }
}
