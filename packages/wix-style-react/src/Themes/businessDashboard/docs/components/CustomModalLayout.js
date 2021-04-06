export const playground = `
<ThemeProvider theme={theme()}>
  <CustomModalLayout
    primaryButtonText="Save"
    secondaryButtonText="Cancel"
    onCloseButtonClick={() => {}}
    title="The title of CustomModalLayout"
    subtitle="This is the text of the subtitle in this CustomModalLayout."
    sideActions={<Checkbox>Checkbox</Checkbox>}
    height={300}>
      <Text>
        {new Array(100)
          .fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do')
          .join(' ')}
      </Text>
  </CustomModalLayout>
</ThemeProvider>
`;
