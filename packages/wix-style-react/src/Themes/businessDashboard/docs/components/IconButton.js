export const playground = `
<div>
  <ThemeProvider theme={theme()}> 
    <Layout cols={5} gap={0} justifyItems="center" alignItems="center">
      <Box padding={1}></Box>
      <Box padding={1}></Box>
      <Box padding={1}>Disabled</Box>
      <Box padding={1}>Inverted</Box>
      <Box padding={1}>Inverted,Disabled</Box>
    </Layout>
    <Layout cols={5} gap={0} justifyItems="center" alignItems="center">
      <Box>Primary small</Box>
      <Box padding={1} backgroundColor="D80">
        <IconButton size="small">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="D80">
        <IconButton size="small" disabled>
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="small" skin="inverted">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="small" skin="inverted" disabled>
          <Icons.More />
        </IconButton>
      </Box>
    </Layout>
    <Layout cols={5} gap={0} justifyItems="center" alignItems="center">
      <Box>Primary tiny</Box>
      <Box padding={1} backgroundColor="D80">
        <IconButton size="tiny">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="D80">
        <IconButton size="tiny" disabled>
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="tiny" skin="inverted">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="tiny" skin="inverted" disabled>
          <Icons.More />
        </IconButton>
      </Box>
    </Layout>
    <Layout cols={5} gap={0} justifyItems="center" alignItems="center">
      <Box>Secondary small</Box>
      <Box padding={1} backgroundColor="D80">
        <IconButton size="small" priority="secondary">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="D80">
        <IconButton size="small" priority="secondary" disabled>
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="small" priority="secondary" skin="inverted">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="small" priority="secondary" skin="inverted" disabled>
          <Icons.More />
        </IconButton>
      </Box> 
    </Layout> 
    <Layout cols={5} gap={0} justifyItems="center" alignItems="center">
      <Box>Secondary tiny</Box>
      <Box padding={1} backgroundColor="D80">
        <IconButton size="tiny" priority="secondary">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="D80">
        <IconButton size="tiny" priority="secondary" disabled>
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="tiny" priority="secondary" skin="inverted">
          <Icons.More />
        </IconButton>
      </Box>
      <Box padding={1} backgroundColor="B40">
        <IconButton size="tiny" priority="secondary" skin="inverted" disabled>
          <Icons.More />
        </IconButton>
      </Box> 
    </Layout> 
  </ThemeProvider>
</div>
`;
