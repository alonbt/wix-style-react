/* eslint-disable */
class FormExample extends React.Component {
  render() {
    return (
      <Card>
        <Card.Header
          title="Card title"
          subtitle="This is how a subtitle looks like"
          suffix={
            <IconButton skin="inverted">
              <Icons.More />
            </IconButton>
          }
        />
        <Card.Content>
          <Layout>
            <Cell>
              <Heading appearance="H6">Section 1</Heading>
            </Cell>
            <Cell span={4}>
              <FormField label="Image">
                <ImageViewer width="100%" height="186px" />
              </FormField>
            </Cell>
            <Cell span={8}>
              <Layout>
                <Cell span={6}>
                  <FormField label="Name">
                    <Input
                      value="My New Dish"
                      prefix={<Input.Affix>$</Input.Affix>}
                    />
                  </FormField>
                </Cell>
                <Cell span={3}>
                  <FormField label="Price">
                    <Input
                      value="0"
                      prefix={<Input.Affix>$</Input.Affix>}
                    />
                  </FormField>
                </Cell>
                <Cell span={3}>
                  <FormField label="Tax">
                    <Input
                      value="0"
                      prefix={<Input.Affix>%</Input.Affix>}
                    />
                  </FormField>
                </Cell>
                <Cell>
                  <FormField label="Description">
                    <InputArea
                      placeholder="Enter your dish details"
                      resizable
                      rows={3}
                    />
                  </FormField>
                </Cell>
              </Layout>
            </Cell>
          </Layout>
        </Card.Content>
        <Card.Divider />
        <Card.Content>
          <Layout>
            <Cell span={6}>
              <FormField
                label="Labels"
                infoContent="Choose your preferences"
              >
                <Layout>
                  <Cell span={6}>
                    <Box direction="vertical">
                      <Box marginBottom="12px">
                        <Checkbox>Special</Checkbox>
                      </Box>
                      <Box marginBottom="12px">
                        <Checkbox>Vegan</Checkbox>
                      </Box>
                      <Checkbox>Vegeterian</Checkbox>
                    </Box>
                  </Cell>
                  <Cell span={6}>
                    <Box direction="vertical">
                      <Box marginBottom="12px">
                        <Checkbox>Gluten Free</Checkbox>
                      </Box>
                      <Box marginBottom="12px">
                        <Checkbox>Organic</Checkbox>
                      </Box>
                      <Checkbox>Spicy</Checkbox>
                    </Box>
                  </Cell>
                </Layout>
              </FormField>
            </Cell>
            <Cell span={3}>
              <FormField label="Visibility">
                <Checkbox checked>Show to Customers</Checkbox>
              </FormField>
            </Cell>
            <Cell span={3}>
              <FormField label="Inventory">
                <Checkbox checked>In Stock</Checkbox>
              </FormField>
            </Cell>
          </Layout>
        </Card.Content>
      </Card>
    );
  }
}
