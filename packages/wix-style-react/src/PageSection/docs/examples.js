export const divider = `
<PageSection
  title="Automations"
  showDivider
/>

`;

export const textOverflow = `
<PageSection
  title="Track Your Workflows on Simple Boards"
  subtitle="Manage any work process from start to finish. Track leads, contacts & orders on a simple board."
  actionsBar={<TextButton>Go to Workflows</TextButton>}
/>
`;

export const subtitle = `
<PageSection
  title="Marketing Tools"
  subtitle="Check out just a few of the marketing apps you can use to grow your business"
/>
`;

export const structure = `
<PageSection
  title="Section Title"
  actionsBar={<StorybookComponents.Placeholder width='300px'>Actions Bar</StorybookComponents.Placeholder>}
/>

`;

export const commonUseCases = `
<Page>
  <Page.Header
    title="Marketing Integrations"
    subtitle="Use these tools to make your marketing more effective."
    actionsBar={<Button skin="premium">Upgrade</Button>}
  ></Page.Header>
  <Page.Content>
    <Layout>
      <Cell>
        <Layout>
          <Cell span={6}>
            <Card>
              <Box height="120px" />
            </Card>
          </Cell>
          <Cell span={6}>
            <Card>
              <Box height="120px" />
            </Card>
          </Cell>
          <Cell span={6}>
            <Card>
              <Box height="120px" />
            </Card>
          </Cell>
          <Cell span={6}>
            <Card>
              <Box height="120px" />
            </Card>
          </Cell>
        </Layout>
      </Cell>
      <Cell>
        <Layout>
          <Cell>
            <Page.Section
              title="Marketing Tools from the App Market"
              subtitle="Check out just a few of the marketing apps you can use to grow your business"
              showDivider
              actionsBar={<TextButton>Manage Your Apps</TextButton>}
            />
          </Cell>
          <Cell span={3}>
            <Card>
              <Box height="160px" />
            </Card>
          </Cell>
          <Cell span={3}>
            <Card>
              <Box height="160px" />
            </Card>
          </Cell>
          <Cell span={3}>
            <Card>
              <Box height="160px" />
            </Card>
          </Cell>
          <Cell span={3}>
            <Card>
              <Box height="160px" />
            </Card>
          </Cell>
        </Layout>
      </Cell>
    </Layout>
  </Page.Content>
</Page>
`;
