/* eslint-disable */
import React from 'react';

import ModalPreviewLayout from '../..';

import { Modal, Box, Button, TextButton, IconButton } from 'wix-style-react';

class MultipleContentExample extends React.Component {
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
    const { isModalOpened } = this.state;
    const prevButtonProps = { tooltipText: 'Previous', onClick: i => console.log('index ', i)};
    const nextButtonProps = { tooltipText: 'Next', onClick: i => console.log('index ', i)};
    return (
      <div>
        <Button onClick={() => this.openModal()}>Open</Button>
        <Modal isOpen={isModalOpened}>
          <ModalPreviewLayout
            closeButtonTooltipText='Close'
            prevButtonProps={prevButtonProps}
            nextButtonProps={nextButtonProps}
            title="Modal with Multiple Content"
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
            {['first', 'second', 'third'].map((ordinalNum, i)=>
              <Box
                key={`content-page-${i}`}
                align="center"
                verticalAlign="middle"
                backgroundColor="D80"
                width="60vw"
                height="90vh"
                children={`This is the ${ordinalNum} page`}
              />)}
          </ModalPreviewLayout>
        </Modal>
      </div>
    );
  }
}
