export const structure = `
<Box>
  <StorybookComponents.Placeholder>
    Content
  </StorybookComponents.Placeholder>
</Box>;
`;

export const dimensions = `
<StorybookComponents.Stack flexDirection="column">
  <Box width="100%" height="100px">
    <StorybookComponents.Placeholder>Width 100%, Height 100px</StorybookComponents.Placeholder>
  </Box>
  <Box width="50%" height="50px">
    <StorybookComponents.Placeholder>Width 50%, Height 50px</StorybookComponents.Placeholder>
  </Box>
</StorybookComponents.Stack>;
`;

export const direction = `
<StorybookComponents.Stack flexDirection="column">
  <Box direction="horizontal">
    <StorybookComponents.Placeholder>Horizontal</StorybookComponents.Placeholder>
    <StorybookComponents.Placeholder>Horizontal</StorybookComponents.Placeholder>
    <StorybookComponents.Placeholder>Horizontal</StorybookComponents.Placeholder>
  </Box>
  <Box direction="vertical">
    <StorybookComponents.Placeholder>Vertical</StorybookComponents.Placeholder>
    <StorybookComponents.Placeholder>Vertical</StorybookComponents.Placeholder>
    <StorybookComponents.Placeholder>Vertical</StorybookComponents.Placeholder>
  </Box>
</StorybookComponents.Stack>;
`;

export const gap = `
<StorybookComponents.Stack flexDirection="column">
  <Box gap="SP1">
    <StorybookComponents.Placeholder>6px gap</StorybookComponents.Placeholder>
    <StorybookComponents.Placeholder>6px gap</StorybookComponents.Placeholder>
    <StorybookComponents.Placeholder>6px gap</StorybookComponents.Placeholder>
  </Box>
  <Box gap="48px">
    <StorybookComponents.Placeholder>48px gap</StorybookComponents.Placeholder>
    <StorybookComponents.Placeholder>48px gap</StorybookComponents.Placeholder>
    <StorybookComponents.Placeholder>48px gap</StorybookComponents.Placeholder>
  </Box>
</StorybookComponents.Stack>;
`;

export const horizontalAlignment = `
<StorybookComponents.Stack>
  <StorybookComponents.Placeholder>
    <Box align="left">Left</Box>
  </StorybookComponents.Placeholder>
  <StorybookComponents.Placeholder>
    <Box align="center">Center</Box>
  </StorybookComponents.Placeholder>
  <StorybookComponents.Placeholder>
    <Box align="right">Right</Box>
  </StorybookComponents.Placeholder>
  <StorybookComponents.Placeholder>
    <Box align="space-between">
      <Box>Space</Box>
      <Box>Between</Box>
    </Box>
  </StorybookComponents.Placeholder>
</StorybookComponents.Stack>;
`;

export const verticalAlignment = `
<StorybookComponents.Stack>
  <StorybookComponents.Placeholder height="50px">
    <Box verticalAlign="top" height="100%">Top</Box>
  </StorybookComponents.Placeholder>
  <StorybookComponents.Placeholder height="50px">
    <Box verticalAlign="middle" height="100%">Middle</Box>
  </StorybookComponents.Placeholder>
  <StorybookComponents.Placeholder height="50px">
    <Box verticalAlign="bottom" height="100%">Bottom</Box>
  </StorybookComponents.Placeholder>
  <StorybookComponents.Placeholder height="50px">
    <Box verticalAlign="space-between" direction="vertical" height="100%">
      <Box>Space</Box>
      <Box>Between</Box>
    </Box>
  </StorybookComponents.Placeholder>
</StorybookComponents.Stack>;
`;

export const padding = `
<StorybookComponents.Stack>
  <StorybookComponents.Placeholder>
    <Box padding="SP4">Equal Padding</Box>
  </StorybookComponents.Placeholder>
  <StorybookComponents.Placeholder>
    <Box
      paddingTop="SP2"
      paddingRight="SP10"
      paddingBottom="SP2"
      paddingLeft="SP10"
    >
      Different Side Paddings
    </Box>
  </StorybookComponents.Placeholder>
  <StorybookComponents.Placeholder>
    <Box>No Padding</Box>
  </StorybookComponents.Placeholder>
</StorybookComponents.Stack>;
`;

export const margin = `
<StorybookComponents.Stack>
  <StorybookComponents.Placeholder>
    <Box>No margin</Box>
  </StorybookComponents.Placeholder>
  <StorybookComponents.Placeholder>
    <Box margin="SP4">With Margin</Box>
  </StorybookComponents.Placeholder>
</StorybookComponents.Stack>;
`;

export const color = `
<StorybookComponents.Stack>
  <Box padding="SP4" margin="SP2" backgroundColor="D80" color="D10">Dark Text</Box>
  <Box padding="SP4" margin="SP2" backgroundColor="D10" color="D80">Light Text</Box>
  <Box padding="SP4" margin="SP2" backgroundColor="B10" color="D80">Light Text</Box>
  <Box padding="SP4" margin="SP2" backgroundColor="G10" color="D80">Light Text</Box>
  <Box padding="SP4" margin="SP2" backgroundColor="Y10" color="D10">Dark Text</Box>
</StorybookComponents.Stack>;
`;

export const border = `
<StorybookComponents.Stack>
  <Box padding="SP6" margin="SP1" border="1px solid" borderColor="D50" borderRadius={0}></Box>
  <Box padding="SP6" margin="SP1" border="2px dotted" borderColor="D40" borderRadius={6}></Box>
  <Box padding="SP6" margin="SP1" border="3px dashed" borderColor="D30" borderRadius={12}></Box>
  <Box padding="SP6" margin="SP1" border="6px solid" borderColor="D20" borderRadius={72}></Box>
</StorybookComponents.Stack>;
`;

export const inline = `
<StorybookComponents.Stack flexDirection="column">
  <Text>
    This is a sentence with an action at the end of it.
    <Box>
      <TextButton>Link added in a default box</TextButton>
    </Box>
  </Text>
  <Text>
    This is a sentence with an action at the end of it.
    <Box inline>
      <TextButton>Link added in an inline box</TextButton>
    </Box>
  </Text>
</StorybookComponents.Stack>;
`;

export const eventItem = `
() => {
  const renderImage = () => (
    <Box
      align="center"
      verticalAlign="middle"
      width={230}
      backgroundColor="B40"
    >
      <Box padding={2} backgroundColor="B50" borderRadius="50%">
        <Icons.Image />
      </Box>
    </Box>
  );
  
  const renderContent = () => (
    <Box
      direction="vertical"
      verticalAlign="space-between"
      padding="24px 29px 27px"
      backgroundColor="D80"
      flexGrow={1}>
        <Box direction="vertical">
          <Text weight="bold">FED for BED (3)</Text>
          <Text size="tiny" weight="thin" secondary light>
            Jan 20, 2021, 10:00 AM, Location will be announced later
          </Text>
        </Box>
        <Box align="space-between">
          <Box verticalAlign="middle">
            <Icons.Hint />
            <Box marginLeft={1}>Event location is TBD</Box>
          </Box>
          <Box align="space-between" verticalAlign="middle" minWidth={115}>
            <IconButton priority="secondary" size="small">
              <Icons.More />
            </IconButton>
            <Button priority="secondary" size="small">
              Edit
            </Button>
          </Box>
        </Box>
      </Box>
  );
  
  return (
    <Box minHeight={200}>
      {renderImage()}
      {renderContent()}
    </Box>)
  }
`;

export const listItems = `
() => {
  const options = [
    {
      value: (
        <Box verticalAlign="middle">
          <Image width="48px" height="48px" />
          <Box marginLeft="SP3" direction="vertical">
            <Heading appearance="H4">Structured Data</Heading>
            <Text size="small" secondary>
              Make you product eligible for rich results in search engines.
            </Text>
          </Box>
        </Box>
      ),
      width: '80%',
    },
    {
      value: (
        <IconButton skin="inverted">
          <Icons.ChevronDown />
        </IconButton>
      ),
      align: 'right',
    },
  ];
    
  return (
    <TableListItem options={options} />
  );
}
`;
