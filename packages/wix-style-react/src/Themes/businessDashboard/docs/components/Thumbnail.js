export const playground = `
  <ThemeProvider theme={theme()}>
    <Layout cols={2}>
      <Cell span={2}>
        <Thumbnail size="small" title="Thumbnail 1" />
      </Cell>
      <Cell span={2}>
        <Thumbnail size="small" selected title="Selecetd 2" />
      </Cell>
      <Cell span={2}>
        <Thumbnail size="small" disabled title="Disabled 3" />
      </Cell>
    </Layout>
  </ThemeProvider>
`;
