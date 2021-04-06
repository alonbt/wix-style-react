export const structure = `<PageFooter>
  <PageFooter.Start>
    <Box border="dashed 1px" width="100%" align="center">
      start
    </Box>
  </PageFooter.Start>
  <PageFooter.Center>
    <Box border="dashed 1px" width="100%" align="center">
      center
    </Box>
  </PageFooter.Center>
  <PageFooter.End>
    <Box border="dashed 1px" width="100%" align="center">
      end
    </Box>
  </PageFooter.End>
</PageFooter>`;

export const divider = `<PageFooter divider>
  <PageFooter.Start>
    <Box border="dashed 1px" width="100%" align="center">
      start
    </Box>
  </PageFooter.Start>
  <PageFooter.Center>
    <Box border="dashed 1px" width="100%" align="center">
      center
    </Box>
  </PageFooter.Center>
  <PageFooter.End>
    <Box border="dashed 1px" width="100%" align="center">
      end
    </Box>
  </PageFooter.End>
</PageFooter>`;

export const usage = `<Layout cols={1}>
    <PageFooter>
      <PageFooter.Center>
        <Pagination currentPage={4} totalPages={7} />
      </PageFooter.Center>
    </PageFooter>
    <PageFooter>
      <PageFooter.End>
        <Box marginRight="SP2">
          <Button size="medium" priority="secondary">
            Cancel
          </Button>
        </Box>
        <Button size="medium">Save</Button>
      </PageFooter.End>
    </PageFooter>
    <PageFooter>
      <PageFooter.Start>
        <Button size="medium" skin="inverted" prefixIcon={<Icons.ArrowLeft />}>
          Go Back
        </Button>
      </PageFooter.Start>
      <PageFooter.End>
        <Box marginRight="SP2">
          <Button size="medium" priority="secondary">
            Skip
          </Button>
        </Box>
        <Button size="medium">Go Next</Button>
      </PageFooter.End>
    </PageFooter>
  </Layout>`;

export const advanced = `<Page>
  <Page.Header
    title="Page Title"
    showBackButton
    onBackClicked={() => alert('cool')}
    actionsBar={
      <Box>
        <Button priority="secondary">Cancel</Button>
        <Box marginLeft="SP2">
          <Button>Save</Button>
        </Box>
      </Box>
    }
  />
  <Page.Content>
    <Layout>
    <Cell span={12}>
    <Card>
      <Card.Header title="Card Title"></Card.Header>
      <Divider />
      <Card.Content>
        <Box border="dashed 1px" padding="SP6">
          Card Content
        </Box>
      </Card.Content>
    </Card>
    </Cell>
    <Cell span={12}>
    <PageFooter>
      <PageFooter.End>
        <Box marginRight="SP2">
          <Button size="medium" priority="secondary">
            Cancel
          </Button>
        </Box>
        <Button size="medium">Save</Button>
      </PageFooter.End>
    </PageFooter>
    </Cell>
    </Layout>
  </Page.Content>
</Page>`;

export const titles = {
  description: 'Description',
  structure: 'Structure',
  divider: 'Divider',
  usage: 'Usage',
  advanced: 'Advanced Example',
};
export const texts = {
  description:
    'PageFooter is a layout component that helps to set the correct spacing for bottom actions in the page. It can be used in a form or wizard pages.',
  structure:
    'PageFooter consists of 3 columns — Start, Center, End. Start column align children to the left, center column aligns center, end column aligns right. Children inserted to the column are automatically separated by 2SP margin.',
  divider:
    'Divider should be enabled for page layouts that use cards narrower than 12 columns.',
  usage:
    'Page footer can be used to expose pagination, "save" and "cancel" actions or to display wizard navigation actions.',
  advanced:
    'In order to align PageFooter properly it should be used inside Page.Content and Layout components.',
};
