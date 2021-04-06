/* eslint-disable */
import React from 'react';
import { Modal, Button, Box, Checkbox } from 'wix-style-react';

class ModalExample extends React.Component {
  state = {
    isModalOpened: false,
  };

  openModal = () => this.setState({ isModalOpened: true });

  closeModal = () => this.setState({ isModalOpened: false });

  render() {
    const { isModalOpened } = this.state;
    return (
      <Box>
        <Button onClick={this.openModal}>Open Modal</Button>
        <Modal
          isOpen={isModalOpened}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick
          screen="desktop"
        >
          <CustomModalLayout
            width="1254px"
            primaryButtonText="Save"
            secondaryButtonText="Cancel"
            onCloseButtonClick={this.closeModal}
            title="Create New Coupon"
            subtitle="Make customers come back to your store with coupons"
            sideActions={<Checkbox>Checkbox</Checkbox>}
          >
            <Text>
              If you leave now, changes you have made here won't be saved. Are
              you sure you want to leave?
            </Text>
          </CustomModalLayout>
        </Modal>
      </Box>
    );
  }
}
