export const playground = `
<ThemeProvider theme={theme()}>
  <Layout cols={2} gap="10px" justifyItems="center">
    <Cell>
      <CircularProgressBar showProgressIndication label="5/5" value={100} />
      <CircularProgressBar showProgressIndication label="2/5" value={40} />
    </Cell>
  </Layout>
</ThemeProvider>
`;
