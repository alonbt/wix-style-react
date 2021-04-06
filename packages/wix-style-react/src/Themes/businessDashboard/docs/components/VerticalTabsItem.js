export const playground = `
<ThemeProvider theme={theme({})}>
  <VerticalTabs activeTabId={1}>
    <VerticalTabs.TabItem id={1} type="title" prefixIcon={<Checkbox checked />}>
      <Text size="small">Vertical Tab</Text>
    </VerticalTabs.TabItem>
    <VerticalTabs.TabItem type="title" prefixIcon={<Checkbox checked />}>
      <Box direction="vertical">
        <Text size="small">Vertical Tab</Text>
        <Text size="tiny" skin="primary" weight="normal">
          Label
        </Text>
      </Box>
    </VerticalTabs.TabItem>
  </VerticalTabs>
</ThemeProvider>;
`;
