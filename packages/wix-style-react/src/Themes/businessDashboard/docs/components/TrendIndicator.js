export const playground = `
  <ThemeProvider theme={theme()}>
    <Layout cols={3}>
      <Cell span={1}>
        <TrendIndicator value={21} />
      </Cell>
      <Cell span={1}>
        <TrendIndicator value={0} />
      </Cell>
      <Cell span={1}>
        <TrendIndicator value={-11} />
      </Cell>
    </Layout>
  </ThemeProvider>
`;
