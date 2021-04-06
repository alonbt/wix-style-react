export const playground = `
<div>
  <ThemeProvider theme={theme()}>
  <Box padding="10px" align="center">
    <EmptyState
      theme={'page-no-border'}
      image={<div style={{ height: 120, width: 120, backgroundColor: '#dfe5eb', borderRadius: '50%', lineHeight: '120px' }}>120x120</div>}
      title="You don't have any items yet"
      subtitle='Create your product item in an easy & fast way to display it on your site'
    />
  </Box>
  <Divider/>
    <Box padding="10px" align="center">
    <EmptyState
      theme={'page-no-border'}
      image={<div style={{ height: 60, width: 60, backgroundColor: '#dfe5eb', borderRadius: '50%', lineHeight: '60px' }}>60x60</div>}
      title="You don't have any items yet"
      subtitle='Create your product item in an easy & fast way to display it on your site'
    />
  </Box>
  <Divider/>
  <Box padding="10px" align="center">
    <EmptyState
      theme={'section'}
      title="Section Theme"
      subtitle='Create your product item in an easy & fast way to display it on your site' />
  </Box>
  <Divider/>
  <Box padding="10px" align="center">
    <EmptyState
      theme={'page-no-border'}
      title="You don't have any items yet"
    >
      {<Button priority="secondary" prefixIcon={<Icons.Add />}>New Item</Button>}
    </EmptyState>
  </Box>
  <Divider/>
  <Box padding="10px" align="center">
    <EmptyState
      theme={'section'}
      subtitle="You don't have any items yet"
    >
      {<TextButton size="tiny" weight="normal" priority="secondary" prefixIcon={<Icons.Add />}>Add New Item</TextButton>}
    </EmptyState>
  </Box>
  </ThemeProvider>
</div>
`;
