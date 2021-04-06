export const playground = `
  <ThemeProvider theme={theme()}>
    <PopoverMenu
      textSize="small"
      triggerElement={
        <IconButton priority="secondary">
          <Icons.More />
        </IconButton>
      }
    >
      <PopoverMenu.MenuItem text="Add" prefixIcon={<Icons.Edit />} />
      <PopoverMenu.Divider />
      <PopoverMenu.MenuItem text="Edit" disabled />
      <PopoverMenu.Divider />
      <PopoverMenu.MenuItem text="Delete" />
    </PopoverMenu>
  </ThemeProvider>
`;
