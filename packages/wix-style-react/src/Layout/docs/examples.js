export const basic = `
<Layout>
  <Cell>
    <Input value="12/12 (default)" />
  </Cell>
  <Cell span={6}>
    <Input value="6/12" />
  </Cell>
  <Cell span={6}>
    <Input value="6/12" />
  </Cell>
  <Cell span={4}>
    <Input value="4/12" />
  </Cell>
  <Cell span={4}>
    <Input value="4/12" />
  </Cell>
  <Cell span={4}>
    <Input value="4/12" />
  </Cell>
  <Cell span={3}>
    <Input value="3/12" />
  </Cell>
  <Cell span={3}>
    <Input value="3/12" />
  </Cell>
  <Cell span={3}>
    <Input value="3/12" />
  </Cell>
  <Cell span={3}>
    <Input value="3/12" />
  </Cell>
  <Cell span={2}>
    <Input value="2/12" />
  </Cell>
  <Cell span={2}>
    <Input value="2/12" />
  </Cell>
  <Cell span={2}>
    <Input value="2/12" />
  </Cell>
  <Cell span={2}>
    <Input value="2/12" />
  </Cell>
  <Cell span={2}>
    <Input value="2/12" />
  </Cell>
  <Cell span={2}>
    <Input value="2/12" />
  </Cell>
</Layout>
`;

export const height = `
<Layout rowHeight="1fr">
  <Cell span={4}>
    <Box backgroundColor="lightgreen">
      The Life and Strange Surprizing Adventures of Robinson Crusoe, Of York,
      Mariner: Who lived Eight and Twenty Years, all alone in an un-inhabited
      Island on the Coast of America, near the Mouth of the Great River of
      Oroonoque; Having been cast on Shore by Shipwreck.
    </Box>
  </Cell>
  <Cell span={4}>
    <Box height="100%" backgroundColor="lightblue" />
  </Cell>
  <Cell span={4}>
    <Box height="100%" backgroundColor="lightblue" />
  </Cell>

  <Cell span={4}>
    <Box height="100%" backgroundColor="lightblue" />
  </Cell>

  <Cell span={4}>
    <Box height="100%" backgroundColor="lightgreen">
      The Life and Strange Surprizing Adventures of Robinson Crusoe, Of York,
      Mariner: Who lived Eight and Twenty Years, all alone in an un-inhabited
      Island on the Coast of America, near the Mouth of the Great River of
      Oroonoque; Having been cast on Shore by Shipwreck, wherein all the Men
      perished but himself.With An Account how he was at last as strangely
      deliver'd by Pyrates.
    </Box>
  </Cell>
  <Cell span={4}>
    <Box height="100%" backgroundColor="lightblue" />
  </Cell>
</Layout>
`;

export const vertical = `
<Layout>
  <Cell span={4}>
    <Box backgroundColor="gold" height="80px" />
  </Cell>
  <Cell span={4} vertical>
    <Box backgroundColor="deeppink" height="40px" />
  </Cell>
  <Cell span={4} vertical>
    <Box backgroundColor="deepskyblue" height="20px" />
  </Cell>
</Layout>
`;

export const alignItems = `
<Box height="150px">
  <Layout alignItems="flex-end">
    <Cell span={4}>
      <Box backgroundColor="gold" height="100%" children="one" />
    </Cell>
    <Cell span={4}>
      <Box backgroundColor="deeppink" height="100%" children="two" />
    </Cell>
    <Cell span={4}>
      <Box backgroundColor="deepskyblue" height="100%">
        Three has way more text that doesn't fit in a single line and now it
        becomes important to find a way to align all three items the way we
        want.
      </Box>
    </Cell>
  </Layout>
</Box>
`;

export const justifyItems = `
<Layout justifyItems="end">
  <Cell span={4}>
    <Box backgroundColor="gold" children="one" />
  </Cell>
  <Cell span={4}>
    <Box backgroundColor="deeppink" children="two" />
  </Cell>
  <Cell span={4}>
    <Box backgroundColor="deepskyblue" children="three" />
  </Cell>
</Layout>
`;

export const cellRows = `
<Layout rowHeight="1fr">
  <Cell span={4} rows={2}>
    <Card stretchVertically>
      <Card.Content>
        <Box align="center">
          <Avatar size="size48" name="1" />
        </Box>
      </Card.Content>
    </Card>
  </Cell>
  <Cell span={4}>
    <Card>
      <Card.Content>
        <Box align="center">
          <Avatar size="size48" name="2" />
        </Box>
      </Card.Content>
    </Card>
  </Cell>
  <Cell span={4}>
    <Card>
      <Card.Content>
        <Box align="center">
          <Avatar size="size48" name="3" />
        </Box>
      </Card.Content>
    </Card>
  </Cell>
  <Cell span={4}>
    <Card>
      <Card.Content>
        <Box align="center">
          <Avatar size="size48" name="4" />
        </Box>
      </Card.Content>
    </Card>
  </Cell>
  <Cell span={4}>
    <Card>
      <Card.Content>
        <Box align="center">
          <Avatar size="size48" name="5" />
        </Box>
      </Card.Content>
    </Card>
  </Cell>
</Layout>
`;
