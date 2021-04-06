export const playground = `
<ThemeProvider theme={theme()}>
  <Layout>
    <Cell>
      <Input size="small" />
    </Cell>
    <Cell>
      <Input size="small" placeholder="some placeholder text" />
    </Cell>
    <Cell>
      <Input size="small" forceHover />
    </Cell>
    <Cell>
      <Input 
        size="small" 
        forceFocus 
        clearButton
        value="Media" />
    </Cell>
    <Cell>
      <Input
        size="small"
        value="Media"
        clearButton
      />
    </Cell>
    <Cell>
      <Input 
        size="small" 
        disabled
        placeholder="some placeholder text" />
    </Cell>
    <Cell>
      <Input 
        size="small" 
        disabled
        value="Media" />
    </Cell>
  </Layout>
</ThemeProvider>
`;
