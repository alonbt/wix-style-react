/* eslint-disable */

() => {
  const [modalOpened, setModalOpened] = React.useState(false);
  const openModal = () => setModalOpened(true);
  const closeModal = () => setModalOpened(false);

  return (
    <Box>
      <Button onClick={openModal}>Open Message Modal</Button>
      <Modal
        isOpen={modalOpened}
        onRequestClose={closeModal}
        screen="desktop"
      >
        <MessageModalLayout
          primaryButtonText="Discard"
          secondaryButtonText="Cancel"
          title="Discard changes"
          onCloseButtonClick={closeModal}
          primaryButtonOnClick={closeModal}
          secondaryButtonOnClick={closeModal}
        >
          <Text>
            Are you sure you want to leave this page without saving the
            changes?
          </Text>
        </MessageModalLayout>
      </Modal>
    </Box>
  );
}