/* eslint-disable */
import React from 'react';

import ModalPreviewLayout from '../..';

import { Modal, Box, Button, TextButton, IconButton } from 'wix-style-react';

class SimpleExample extends React.Component {
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
            title="Simple Modal"
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
            <Box
              align="center"
              verticalAlign="middle"
              backgroundColor="D80"
              padding={3}
              borderRadius={3}
            >
              This is an inner content!
            </Box>
          </ModalPreviewLayout>
        </Modal>
      </div>
    );
  }
}
