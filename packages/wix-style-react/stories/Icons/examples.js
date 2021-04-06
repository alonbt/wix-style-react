export const colorsExample = `<Layout>
                        <Cell>
                          <Layout justifyItems="center" cols="4">
                             <Box  direction="vertical" align="center" >
                                <Box color="D80" backgroundColor="D10">
                                  <Icons.Duplicate />
                                </Box>
                                  <Text>Light</Text><Text size="tiny">D80</Text>
                              </Box>
                              <Box color="B10" direction="vertical" align="center">
                                 <Icons.Duplicate /><Text>Standard</Text><Text size="tiny">B10</Text>
                              </Box>
                              <Box color="D10" direction="vertical" align="center">
                                <Icons.Duplicate /><Text>Dark</Text><Text size="tiny">D10</Text>
                              </Box>
                              <Box color="R10" direction="vertical" align="center">
                               <Icons.Duplicate/><Text>Destructive</Text><Text size="tiny">R10</Text>
                              </Box>
                           </Layout>
                        </Cell>
                        <Cell>
                          <Layout justifyItems="center" cols="4">
                            <Box direction="vertical" align="center">
                               <Icons.Duplicate style={{ color: 'rgba(22,45,61,0.3)'}} /><Text>Disabled</Text><Text size="tiny">D10-30</Text>
                            </Box>
                            <Box color="P10" direction="vertical" align="center">
                               <Icons.Duplicate /><Text>Premium</Text><Text size="tiny">P10</Text>
                            </Box>
                            <Box color="G10" direction="vertical" align="center">
                               <Icons.Duplicate /><Text>Success</Text><Text size="tiny">G10</Text>
                            </Box>
                           </Layout>
                        </Cell>
            </Layout>`;

export const sizesExample = `<Layout cols="8">
                        <Icons.CropRotateSmall />
                        <Icons.CropRotate />
                    </Layout>
                   `;

export const usageExample = `<Layout>
<Cell>
  <Layout cols="4">
    <Text>Icon Prefix</Text>
    <Button prefixIcon={<Icons.Edit />}>Edit Item</Button>
    <Button prefixIcon={<Icons.Edit />} priority="secondary">Edit Item</Button>
  </Layout>
</Cell>
<Cell>
  <Layout cols="4">
   <Text>Icon Suffix</Text>
    <Button suffixIcon={<Icons.ChevronDownSmall />}>Actions</Button>
    <Button suffixIcon={<Icons.ChevronDownSmall />} priority="secondary">Edit Item</Button>
  </Layout>
</Cell>
<Cell>
  <Layout cols="4">
    <Text>Icon Only</Text>
    <IconButton><Icons.More /></IconButton>
    <IconButton priority="secondary"><Icons.More /></IconButton>
  </Layout>
</Cell>
<Cell>
  <Layout cols="4">
     <Text>Text Button</Text>
     <TextButton prefixIcon={<Icons.Add/>}>Add Item</TextButton>
     <TextButton suffixIcon={<Icons.ChevronDownSmall />}>Actions</TextButton>
  </Layout>
</Cell>
<Cell>
  <Layout cols="4">
    <Text>Inputs</Text>
    <FormField label="Date:">
        <Input
      value="Aug 29, 2006"
      prefix={
        <Input.IconAffix>
          <Icons.Date />
        </Input.IconAffix>
      }
    />
    </FormField>
  </Layout>
</Cell>
</Layout>`;
