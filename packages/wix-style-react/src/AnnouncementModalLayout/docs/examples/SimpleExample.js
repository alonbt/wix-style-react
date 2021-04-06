/* eslint-disable */

() => {
  const [modalOpened, setModalOpened] = React.useState(false);
  const openModal = () => setModalOpened(true);
  const closeModal = () => setModalOpened(false);

  return (
    <Box>
      <Button onClick={openModal}>Open Announcement Modal</Button>
      <Modal
        isOpen={modalOpened}
        onRequestClose={closeModal}
        screen="desktop"
      >
        <AnnouncementModalLayout
          theme="premium"
          illustration={'generic_upgrade.svg'}
          title="Start Accepting Online Payments"
          primaryButtonText="Upgrade"
          linkText="Learn more"
          onCloseButtonClick={closeModal}
          primaryButtonOnClick={closeModal}
          linkOnClick={closeModal}
        >
          <Text>
            Upgrade your site with a business and ecommerce premium plan to
            start accepting payments.
          </Text>
        </AnnouncementModalLayout>
      </Modal>
    </Box>
  );
}