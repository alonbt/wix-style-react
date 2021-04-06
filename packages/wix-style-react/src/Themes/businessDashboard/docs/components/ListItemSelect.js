export const playground = `
  <ThemeProvider theme={theme()}>
    <Layout cols={1}>
      <ListItemSelect title="List item" />
      <ListItemSelect prefix={<Box><Icons.Edit size="18" /></Box>} title="List item with icon" />
      <ListItemSelect selected title="List item selected" />
      <ListItemSelect disabled title="List item disabled" />
    </Layout>
  </ThemeProvider>
`;
