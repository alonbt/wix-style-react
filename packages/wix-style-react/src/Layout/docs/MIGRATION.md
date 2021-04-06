## \<Layout/> migration from Grid

<details>
  <summary>Basic usage</summary>

Grid:

```jsx
<Container>
  <Row>
    <Col>
      <Box border="1px solid">span 12</Box>
    </Col>
  </Row>
  <Row>
    <Col span={6}>
      <Box border="1px solid">span 6</Box>
    </Col>
    <Col span={6}>
      <Box border="1px solid">span 6</Box>
    </Col>
  </Row>
</Container>
```

Layout:

```jsx
<Layout>
  <Cell><Box border="1px solid">span 12</Box></Cell>
  <Cell span={6}><Box border="1px solid">span 6</Box></Cell>
  <Cell span={6}><Box border="1px solid">span 6</Box></Cell>
</Layout>
```

</details>

<details>
  <summary><code><span><</span>AutoAdjustedRow /></code> replacement</summary>

Grid:

```jsx
() => {
  const renderCard = () => (
    <Card>
      <Card.Header
        title="Card title"
      />
      <Card.Divider />
      <Box height="160px" />
    </Card>
  )
  return (
    <Container>
      <AutoAdjustedRow>
        {renderCard()}
        {renderCard()}
        {renderCard()}
      </AutoAdjustedRow>
    </Container>
  );
}
```

Layout:

```jsx
() => {
  const renderCard = () => (
    <Card stretchVertically>
      <Card.Header
        title="Card title"
      />
      <Card.Divider />
      <Box height="160px" />
    </Card>
  );
  
  return (
    <Layout>
      <Cell>
        <Box gap="40px">
          {renderCard()}
          {renderCard()}
          {renderCard()}
        </Box>
      </Cell>
    </Layout>
  );
}
```
</details>

<details>

  <summary><code>StretchViewsVertically</code> prop replacement</summary>
  <br>

stretchViewsVetically prop behavior to make all columns the same height is no longer needed - \<Layout /> works this way by default.

Grid:

```jsx
<Container>
  <Row stretchViewsVertically>
    <Col span={8}>
      <Card>
        <Card.Header title="Card Title" />
        <Card.Content>
          <Box height="200px" />
        </Card.Content>
      </Card>
    </Col>
    <Col span={4}>
      <Card stretchVertically>
        <Card.Content>
          <Box height="150px" />
        </Card.Content>
      </Card>
    </Col>
  </Row>
</Container>
```

Layout:

```jsx
<Layout>
  <Cell span={8}>
    <Card>
      <Card.Header title="Card Title" />
      <Card.Content>
        <Box height="200px" />
      </Card.Content>
    </Card>
  </Cell>
  <Cell span={4}>
    <Card stretchVertically>
      <Card.Content>
        <Box height="150px" />
      </Card.Content>
    </Card>
  </Cell>
</Layout>
``` 

</details>

<details>

  <summary><code><span><</span>Row /></code> replacement</summary>
  <br>

Layout doesn’t have \<Row /> component and it tries to fit columns into the least amount of rows. If we need multiple rows even if columns could fit into one row we have to use \<Layout /> nesting.

Grid: 

```jsx
<Container>
  <Row>
    <Col span={6}>
      <Card>
        <Card.Header title="Card Title" />
        <Card.Content>
          <Box height="100px" />
        </Card.Content>
      </Card>
    </Col>
  </Row>
    <Row>
    <Col span={6}>
      <Card>
        <Card.Header title="Card Title" />
        <Card.Content>
          <Box height="100px" />
        </Card.Content>
      </Card>
    </Col>
  </Row>
</Container>
```

Layout:

```jsx
<Layout>
  <Cell>
    <Layout>
      <Cell span={6}>
          <Card>
            <Card.Header title="Card Title" />
            <Card.Content>
              <Box height="100px" />
            </Card.Content>
          </Card>
      </Cell>
    </Layout>
  </Cell>
  <Cell>
    <Layout>
      <Cell span={6}>
          <Card>
            <Card.Header title="Card Title" />
            <Card.Content>
              <Box height="100px" />
            </Card.Content>
          </Card>
      </Cell>
    </Layout>
  </Cell>
</Layout>
```

</details>

<details>

  <summary>Limit layout width with parent container</summary>
  <br>

1. To limit \<Layout /> width with parent container it must have display: block - if we use flex, flex item by default has flex-grow: 0, so Layout would take as little space as possible.

2. \<Layout /> width would be the same as the parent container width if sum of all gaps width is less or equal to parent container width. Layout internally uses css grid which is 12 columns based layouting mechanism. It has 11 gaps. Layout default gap is 30px, so by default min width with 30px gap would be: 11 * 30px = 330px;

Grid:

```jsx
<Box max-width="200px">
  <Container fluid>
    <Row>
      <Col span={6}>
        <Box background-color="yellow" width="100px" height="50px" />
      </Col>
      <Col span={6}>
        <Box background-color="yellow" width="100px" height="50px" />
      </Col>
    </Row>
  </Container>
</Box>
```

Layout:

```jsx
<Box max-width="230px" display="block">
  <Layout gap={0}>
    <Cell span={6}>
      <Box background-color="yellow" width="100px" height="50px" />
    </Cell>
    <Cell span={6}>
      <Box background-color="yellow" width="100px" height="50px" />
    </Cell>
  </Layout>
</Box>
```

</details>

<details>

  <summary>Replacement of default <code>Grid</code> width constraints</summary>
  <br>

Grid \<Container /> component by default has width constraints (when used without <b>fluid</b> prop):

```css
{
	min-width: 894px;
	max-width: 1254px;
}
```
These constraints are realized using \<Page /> component, but if for some reason you don’t use \<Page /> component as a parent and you need to achieve the same result with \<Layout /> you can wrap it with \<Box /> component set max-width here.

Grid:

```jsx
<Container>
  <Row>
    <Col>
       <Card>
        <Card.Header title="Card title" />
        <Box height="160px" />
      </Card>
    </Col>
  </Row>
</Container>
```

Layout:

```jsx
<Box max-width="1254px" display="block">
  <Layout>
    <Cell>
      <Card>
        <Card.Header title="Card title" />
        <Box height="160px" />
      </Card>
    </Cell>
  </Layout>
</Box>
```

</details>