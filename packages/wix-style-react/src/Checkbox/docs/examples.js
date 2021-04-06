export const sizes = `
<Layout>
    <Cell>
        <Checkbox>Hello World!</Checkbox>
    </Cell>
    <Cell>
        <Checkbox size="small">Hello World!</Checkbox>
    </Cell>
</Layout>
`;

export const checkboxStates = `
<Layout>
    <Cell><Checkbox> Unchecked</Checkbox></Cell>
    <Cell><Checkbox checked> Checked</Checkbox></Cell>
    <Cell><Checkbox hasError tooltipContent="Oops!">Error</Checkbox></Cell>
    <Cell><Checkbox disabled>Disabled</Checkbox></Cell>
</Layout>
`;

export const selectionArea = `
<Card>
    <Card.Header title="Selection Area" />
    <Card.Divider />
    <Card.Content>
      <Layout>
        <Cell>
           <FormField label="None:" infoContent="No selection area" required>
               <Box padding="18px"><Checkbox>Option 1</Checkbox></Box>
               <Box padding="18px"><Checkbox>Option 2</Checkbox></Box>
               <Box padding="18px"><Checkbox>Option 3</Checkbox></Box>
           </FormField>
        </Cell>
        <Cell>
           <FormField label='Hover Filled:' infoContent="Selection area filled on hover" required>
              <Box direction="vertical" paddingBottom="6px">
                  <Checkbox selectionArea="hover">Option 1</Checkbox>
              </Box>
              <Box direction="vertical" paddingBottom="6px">
                  <Checkbox selectionArea="hover">Option 2</Checkbox>
              </Box>
              <Box direction="vertical">
                  <Checkbox selectionArea="hover">Option 3</Checkbox>
              </Box>
            </FormField>
          </Cell>
          <Cell>
           <FormField label='Always Filled:' infoContent="Always show selection area filled" required>
              <Box direction="vertical" paddingBottom="6px">
                  <Checkbox selectionArea="always">Option 1</Checkbox>
              </Box>
              <Box direction="vertical" paddingBottom="6px">
                  <Checkbox selectionArea="always">Option 2</Checkbox>
              </Box>
              <Box direction="vertical">
                  <Checkbox selectionArea="always">Option 3</Checkbox>
              </Box>
            </FormField>
          </Cell>
          <Cell>
             <FormField label='Hover Outlined:' infoContent="Selection area on hover outlined" required>
                <Box direction="vertical" paddingBottom="6px">
                    <Checkbox selectionArea="hover" selectionAreaSkin="outlined">Option 1</Checkbox>
                </Box>
                <Box direction="vertical" paddingBottom="6px">
                    <Checkbox selectionArea="hover" selectionAreaSkin="outlined">Option 2</Checkbox>
                </Box>
                <Box direction="vertical">
                    <Checkbox selectionArea="hover" selectionAreaSkin="outlined">Option 3</Checkbox>
                </Box>
              </FormField>
            </Cell>
            <Cell>
             <FormField label='Always Outlined:' infoContent="Always show selection area outlined" required>
                <Box direction="vertical" paddingBottom="6px">
                    <Checkbox selectionArea="always" selectionAreaSkin="outlined">Option 1</Checkbox>
                </Box>
                <Box direction="vertical" paddingBottom="6px">
                    <Checkbox selectionArea="always" selectionAreaSkin="outlined">Option 2</Checkbox>
                </Box>
                <Box direction="vertical">
                    <Checkbox selectionArea="always" selectionAreaSkin="outlined">Option 3</Checkbox>
                </Box>
              </FormField>
            </Cell>
       </Layout>
    </Card.Content>
</Card>
`;

export const controlledCheckbox = `
() => {
  const [checked , setChecked ] = React.useState(false);

  return <Checkbox checked={checked} onChange={() => setChecked(!checked)}>Hello World!</Checkbox>
}
`;

export const withTooltipProps = `
<Layout>
    <Cell>
        <Checkbox tooltipContent="My Tooltip Message">Hello World!</Checkbox>
    </Cell>
    <Cell>
        <Checkbox
            tooltipContent="My Tooltip Message"
            tooltipProps={{
                moveArrowTo: 100,
                enterDelay: 500,
                placement: 'bottom'
                }}>Hello World!
        </Checkbox>
    </Cell>
</Layout>
`;
