export const playground = `
<div>
  <ThemeProvider theme={theme()}>
    <Box padding="3px">
      <TextButton skin="destructive">Destructive skin</TextButton>
    </Box>
    <Box padding="3px">
      <TextButton size="tiny">Standard thin</TextButton>
    </Box>
    <Box padding="3px">
      <TextButton size="tiny" weight="normal">Standard normal</TextButton>
    </Box>
    <Box padding="3px">
      <TextButton size="tiny" disabled>Standard disabled</TextButton>
    </Box>
    <Box backgroundColor="D10" padding="3px">
      <TextButton size="tiny" skin="light">Light</TextButton>
    </Box>
    <Box backgroundColor="D10" padding="3px">
      <TextButton size="tiny" skin="light" disabled>Light disabled</TextButton>
    </Box>
    <Box padding="3px">
      <TextButton size="tiny" skin="dark">Dark thin</TextButton>
    </Box>
    <Box padding="3px">
      <TextButton weight="normal" size="tiny" skin="dark">Dark normal</TextButton>
    </Box>
    <Box padding="3px">
      <TextButton size="tiny" skin="dark" disabled>Dark disabled</TextButton>
    </Box>
    <Box padding="3px">
      <TextButton size="tiny">Tiny</TextButton>
    </Box>
    <Box padding="3px">
      <TextButton size="small">Small</TextButton>
    </Box>
    <Box padding="3px">
      <TextButton size="tiny" prefixIcon={<Icons.ChevronDownSmall />}>
        Tiny with prefix
      </TextButton>
    </Box>
    <Box padding="3px">
      <TextButton size="tiny" suffixIcon={<Icons.ChevronDown />}>
        Tiny with suffix
      </TextButton>
    </Box>
    <Box padding="3px">
      <TextButton size="small" prefixIcon={<Icons.ChevronDownSmall />}>
        Small with prefix
      </TextButton>
    </Box>
    <Box padding="3px">
      <TextButton size="small" suffixIcon={<Icons.ChevronDown />}>
        Small with suffix
      </TextButton>
    </Box>
    <Box padding="3px">
      <TextButton size="tiny" underline="always">With underline</TextButton>
    </Box>
    <Box padding="3px">
      <TextButton size="tiny" skin="premium">Premium thin</TextButton>
    </Box>
    <Box padding="3px">
      <TextButton size="tiny" weight="normal" skin="premium">Premium normal</TextButton>
    </Box>
    <Box padding="3px">
      <TextButton size="tiny" disabled skin="premium">Premium disabled</TextButton>
    </Box>
  </ThemeProvider>
</div>
`;
