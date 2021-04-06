/* eslint-disable */
() => {
  const [isModalOpened, setModalOpened] = React.useState(false);

  openModal = () => setModalOpened(true);
  closeModal = () => setModalOpened(false);

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal
        isOpen={isModalOpened}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick
        screen="desktop"
      >
        <CustomModalLayout
          width="1254px"
          title={
            <CustomModalLayout.Title>
              Custom title
              <IconButton size="small">
                <Icons.More />
              </IconButton>
            </CustomModalLayout.Title>
          }
          removeContentPadding
          primaryButtonText="Save"
          primaryButtonOnClick={closeModal}
          secondaryButtonText="Cancel"
          secondaryButtonOnClick={closeModal}
          onCloseButtonClick={closeModal}
        >
          <Page sidePadding={30}>
            <Page.Content>
              <Box marginTop={5} display="block">
                <Layout>
                  {Array.from({ length: 3 }, (_, index) => (
                    <Cell key={index}>
                      <Card stretchVertically>
                        <Card.Header title={`Card ${index + 1}`} />
                        <Card.Divider />
                        <Card.Content>
                          <Text size="medium">Lorem ipsum dolor</Text>
                        </Card.Content>
                      </Card>
                    </Cell>
                  ))}
                </Layout>
              </Box>
            </Page.Content>
          </Page>
        </CustomModalLayout>
      </Modal>
    </>
  );
};
