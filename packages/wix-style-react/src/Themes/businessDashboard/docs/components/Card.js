export const playground = `
<ThemeProvider theme={theme()}>
  <Card>
    <Card.Header
      title="Card title"
      subtitle={<Text size="tiny">Subtitle text</Text>}
      suffix={<TextButton size="tiny" weight="normal">See all suggestions</TextButton>}
    />
    <Card.Content>
      card content
    </Card.Content>
  </Card>
</ThemeProvider>
`;
