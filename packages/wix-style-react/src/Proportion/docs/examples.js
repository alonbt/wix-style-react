export const simple = `
<div
  data-hook="proportion-example-basic"
  style={{ background: '#F0F4F7', padding: 30 }}
>
  <Layout>
    <Cell span={4}>
      <Proportion aspectRatio={1}>
        <AddItem />
      </Proportion>
    </Cell>
    <Cell span={8}>
      <Card>
        <Card.Header title="Square Proportion" />
        <Card.Divider />
        <Card.Content>I don't maintain proportion</Card.Content>
      </Card>
    </Cell>
    <Cell span={4}>
      <Proportion aspectRatio={3 / 4}>
        <AddItem />
      </Proportion>
    </Cell>
    <Cell span={8}>
      <Card>
        <Card.Header title="Portrait Proportion" />
        <Card.Divider />
        <Card.Content>I don't maintain proportion</Card.Content>
      </Card>
    </Cell>
    <Cell span={4}>
      <Proportion aspectRatio={16 / 9}>
        <AddItem />
      </Proportion>
    </Cell>
    <Cell span={8}>
      <Card>
        <Card.Header title="Cinema Proportion" />
        <Card.Divider />
        <Card.Content>I don't maintain proportion</Card.Content>
      </Card>
    </Cell>
    <Cell span={4}>
      <Proportion aspectRatio={4 / 3}>
        <AddItem />
      </Proportion>
    </Cell>
    <Cell span={8}>
      <Card>
        <Card.Header title="Landscape Proportion" />
        <Card.Divider />
        <Card.Content>I don't maintain proportion</Card.Content>
      </Card>
    </Cell>
    <Cell span={4}>
      <Proportion aspectRatio={9.5 / 3}>
        <AddItem />
      </Proportion>
    </Cell>
    <Cell span={8}>
      <Card>
        <Card.Header title="Custom Proportion (9.5 / 3)" />
        <Card.Divider />
        <Card.Content>I don't maintain proportion</Card.Content>
      </Card>
    </Cell>
  </Layout>
</div>
`;
