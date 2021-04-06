export const playground = `
<div>
<ThemeProvider theme={theme()}>
  <Layout cols={4} gap="10px" alignItems="center">
    <Box padding="3px" backgroundColor="D80">
      <Button size="small">Small</Button>
    </Box>
    <Box padding="3px" backgroundColor="D80">
      <Button size="medium">Medium</Button>
    </Box>
    <Box padding="3px" backgroundColor="D80">
      <Button priority="secondary" size="small">Secondary</Button>
    </Box>
    <Box padding="3px" backgroundColor="D80">
      <Button priority="secondary">Secondary</Button>
    </Box>
  </Layout>
  <Layout cols={4} gap="10px" alignItems="center">
    <Box padding="3px" backgroundColor="D80">
      <Button size="small" disabled>Small</Button>
    </Box>
    <Box padding="3px" backgroundColor="D80">
      <Button size="medium" disabled>Medium</Button>
    </Box>
    <Box padding="3px" backgroundColor="D80">
      <Button priority="secondary" size="small" disabled>Secondary</Button>
    </Box>
    <Box padding="3px" backgroundColor="D80">
      <Button priority="secondary" disabled>Secondary</Button>
    </Box>
  </Layout>
  <Layout cols={4} gap="10px" alignItems="center">
    <Box padding="3px" backgroundColor="D60">
      <Button size="small" skin="inverted">Inverted</Button>
    </Box>
    <Box padding="3px" backgroundColor="D60">
      <Button size="medium" skin="inverted">Medium</Button>
    </Box>
    <Box padding="3px" backgroundColor="D80">
      <Button size="small" skin="inverted" disabled>Small disabled</Button>
    </Box>
    <Box padding="3px" backgroundColor="D80">
      <Button size="medium" skin="inverted" disabled>Medium disabled</Button>
    </Box>
  </Layout>
  <Layout cols={4} gap="10px" alignItems="center">
    <Box padding="3px" backgroundColor="D80">
      <Button size="small" prefixIcon={<Icons.ChevronDownSmall />}>
        Prefix
      </Button>
    </Box>  
    <Box padding="3px" backgroundColor="D80">
      <Button priority="secondary" size="small" prefixIcon={<Icons.ChevronDownSmall />}>
        Prefix
      </Button>
    </Box>  
    <Box padding="3px" backgroundColor="D80">
      <Button size="small" suffixIcon={<Icons.ChevronDownSmall />}>
        Suffix
      </Button>
    </Box>  
    <Box padding="3px" backgroundColor="D80">
      <Button priority="secondary" size="small" suffixIcon={<Icons.ChevronDownSmall />}>
        Suffix
      </Button>
    </Box>  
  </Layout>
  <Layout cols={4} gap="10px" alignItems="center">
    <Box padding="3px" backgroundColor="D80">
      <Button size="small" disabled prefixIcon={<Icons.ChevronDownSmall />}>
        Prefix
      </Button>
    </Box>  
    <Box padding="3px" backgroundColor="D80">
      <Button priority="secondary" size="small" disabled prefixIcon={<Icons.ChevronDownSmall />}>
        Prefix
      </Button>
    </Box>
     <Box padding="3px" backgroundColor="D80">
      <Button size="small" disabled suffixIcon={<Icons.ChevronDownSmall />}>
        Suffix
      </Button>
    </Box>  
    <Box padding="3px" backgroundColor="D80">
      <Button priority="secondary" disabled size="small" suffixIcon={<Icons.ChevronDownSmall />}>
        Suffix
      </Button>
    </Box>  
  </Layout>
</ThemeProvider>
</div>
`;
