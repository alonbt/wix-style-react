export const playground = `
  <ThemeProvider theme={theme()}>
    <Box inline>
      <Tooltip exitDelay={999999} content="tooltip contents">
        <TextButton>medium tooltip</TextButton>
      </Tooltip>
    </Box>
    <Box inline marginLeft="24px">
      <Tooltip size="small" exitDelay={999999} content="tooltip contents">
        <TextButton>small tooltip</TextButton>
      </Tooltip>
    </Box>
  </ThemeProvider>
`;
