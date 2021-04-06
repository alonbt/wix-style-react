export const playground = `
<ThemeProvider theme={theme()}>
  <Layout>
    <Cell>
      <Search
        size="small"
        value="Option a"
        options={Array(26)
          .fill(0)
          .map((_, id) => ({
            id,
            value: 'Option ' + String.fromCharCode(97 + id),
          }))}
      />
    </Cell>
    <Cell>
      <Search size="small" />
    </Cell>
    <Cell>
      <Search size="small" forceHover />
    </Cell>
    <Cell>
      <Search size="small" disabled />
    </Cell>
    <Cell>
      <Search size="small" value="Media" />
    </Cell>
    <Cell>
      <Search size="small" forceFocus value="Media" />
    </Cell>
    <Cell>
      <Search size="small" disabled value="Media" />
    </Cell>
  </Layout>
</ThemeProvider>
`;
