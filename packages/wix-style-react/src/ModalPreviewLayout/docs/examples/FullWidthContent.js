/* eslint-disable */
import React from 'react';

import ModalPreviewLayout from '../..';

import { Modal, Box, Button, TextButton, IconButton } from 'wix-style-react';

class FullWidthContentExample extends React.Component {
  state = {
    isModalOpened: false,
  };

  openModal() {
    this.setState({ isModalOpened: true });
  }

  closeModal() {
    this.setState({ isModalOpened: false });
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.openModal()}>Open</Button>
        <Modal isOpen={this.state.isModalOpened}>
          <ModalPreviewLayout
            title="Modal with Full-Width Content"
            actions={
              <Box verticalAlign="middle">
                <Box marginRight={2}>
                  <TextButton size="small" skin="light" prefixIcon={<Icons.Print />}>
                    Print
                  </TextButton>
                </Box>
                <Box marginRight={2}>
                  <Button priority="secondary" size="small" skin="light">
                    Send
                  </Button>
                </Box>
                <IconButton priority="secondary" size="small" skin="light">
                  <Icons.More />
                </IconButton>
              </Box>
            }
            onClose={() => this.closeModal()}
          >
            <Box verticalAlign="middle" height="100%">
              <img src="https://i.ibb.co/C8HHTJx/rectangle-2x.png" width="100%" height="550px" />
            </Box>
          </ModalPreviewLayout>
        </Modal>
      </div>
    );
  }
}
