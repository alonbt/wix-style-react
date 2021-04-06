export const structure = `
() => {
  const [isModalOpened, setModalOpened] = React.useState(false);

  const openModal = () => setModalOpened(true);
  const closeModal = () => setModalOpened(false);
  
  const renderModalContent = () => (
    <StorybookComponents.Placeholder
      skin="light"
      width="600px"
      height="600px"
    >
      <StorybookComponents.Stack flexDirection="column" alignItems="center" padding="30px">
        <Text light>Modal Content goes here</Text>
        <TextButton onClick={closeModal} underline="always" skin="light">
          Close Modal
        </TextButton>
      </StorybookComponents.Stack>
    </StorybookComponents.Placeholder>
  );

  return (
    <StorybookComponents.Stack>
      <Button onClick={openModal} prefixIcon={<Icons.OpenModal />}>
        Open Modal
      </Button>
      <Modal isOpen={isModalOpened} onRequestClose={closeModal}>
        {renderModalContent()}
      </Modal>
    </StorybookComponents.Stack>
  );
};
`;

export const sideMargins = `
() => {
  const [isModalOpened, setModalOpened] = React.useState(false);
  const [currentScreen, setCurrentScreen] = React.useState(null);

  const openModal = screen => {
    setCurrentScreen(screen);
    setModalOpened(true);
  };
  const closeModal = () => setModalOpened(false);

  const renderModalContent = () => (
    <StorybookComponents.Placeholder skin="light">
      <StorybookComponents.Stack padding="30px">
        <TextButton onClick={closeModal} underline="always" skin="light">
          Close Modal
        </TextButton>
      </StorybookComponents.Stack>
    </StorybookComponents.Placeholder>
  );

  return (
    <StorybookComponents.Stack>
      <Button
        prefixIcon={<Icons.FullScreen />}
        onClick={() => openModal('full')}
      >
        Full
      </Button>
    
      <Button
        prefixIcon={<Icons.Desktop />}
        onClick={() => openModal('desktop')}
      >
        Desktop
      </Button>
    
      <Button
        prefixIcon={<Icons.Mobile />}
        onClick={() => openModal('mobile')}
      >
        Mobile
      </Button>
      <Modal
        screen={currentScreen}
        isOpen={isModalOpened}
        onRequestClose={closeModal}
      >
        {renderModalContent()}
      </Modal>
   </StorybookComponents.Stack>
  );
};
`;

export const modalWithForm = `
() => {
  const [isModalOpened, setModalOpened] = React.useState(false);

  const openModal = () => setModalOpened(true);
  const closeModal = () => setModalOpened(false);

  const renderForm = () => (
    <Layout>
      <Cell span={6}>
        <FormField label="Title">
          <Input />
        </FormField>
      </Cell>
      <Cell span={6}>
        <FormField label="Value">
          <Input type="number" prefix={<Input.Affix>$</Input.Affix>} />
        </FormField>
      </Cell>
      <Cell>
        <FormField label="Valid until">
          <DatePicker
            popoverProps={{ appendTo:"window", zIndex: 5000 }}
            value={new Date('April 1, 2022')}
            width="100%"
            onChange={() => {}}
          />
        </FormField>
      </Cell>
    </Layout>
  );

  const renderModalContent = () => (
    <CustomModalLayout
      primaryButtonText="Create"
      secondaryButtonText="Cancel"
      onCloseButtonClick={closeModal}
      primaryButtonOnClick={closeModal}
      secondaryButtonOnClick={closeModal}
      title="Create a coupon"
      width="600px"
    >
      {renderForm()}
    </CustomModalLayout>
  );

  return (
    <Box direction="vertical">
      <Card>
        <Card.Header
          title="Gift coupons"
          subtitle="Create your first coupon to let customers buy it for a gift."
          suffix={
            <Button
              size="small"
              prefixIcon={<Icons.AddSmall />}
              onClick={openModal}
            >
              Create a coupon
            </Button>
          }
        />
      </Card>
      <Modal
        isOpen={isModalOpened}
        onRequestClose={closeModal}
        screen="desktop"
      >
        {renderModalContent()}
      </Modal>
    </Box>
  );
}
`;
