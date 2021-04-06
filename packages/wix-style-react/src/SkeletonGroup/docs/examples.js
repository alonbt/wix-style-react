export const general = `
<Card>
  <Card.Content>
    <SkeletonGroup skin="light">
      <Layout>
        <Cell>
          <Layout>
            <Cell span={1}>
              <SkeletonCircle diameter="32px" />
            </Cell>
            <Cell span={3}>
              <Box direction="vertical">
                <SkeletonLine marginBottom="5px" />
                <SkeletonLine marginBottom="5px" />
              </Box>
            </Cell>
            <Cell span={3}>
              <Box direction="vertical">
                <SkeletonLine marginBottom="5px" />
                <SkeletonLine marginBottom="5px" />
              </Box>
            </Cell>
            <Cell span={5}>
              <Box direction="vertical">
                <SkeletonLine marginBottom="5px" />
                <SkeletonLine marginBottom="5px" />
              </Box>
            </Cell>
          </Layout>
        </Cell>
        <Cell>
          <SkeletonRectangle height="150px" />
        </Cell>
      </Layout>
    </SkeletonGroup>
  </Card.Content>
</Card>
`;

export const skin = `
<Layout>
  <Cell span={6}>
    <Box backgroundColor="white" padding="SP5" width="200">
      <SkeletonGroup skin="light" backgroundColor="white">
        <Layout>
          <Cell>
            <Layout>
              <Cell span={2}>
                <SkeletonCircle diameter="32px" />
              </Cell>
              <Cell span={5}>
                <Box direction="vertical">
                  <SkeletonLine marginBottom="5px" />
                  <SkeletonLine marginBottom="5px" />
                </Box>
              </Cell>
            </Layout>
          </Cell>
          <Cell>
            <SkeletonRectangle height="150px" />
          </Cell>
        </Layout>
      </SkeletonGroup>
    </Box>
  </Cell>
  <Cell span={6}>
    <Box backgroundColor="gray" padding="SP5" width="200">
      <SkeletonGroup skin="dark" backgroundColor="gray">
        <Layout>
          <Cell>
            <Layout>
              <Cell span={2}>
                <SkeletonCircle diameter="32px" />
              </Cell>
              <Cell span={5}>
                <Box direction="vertical">
                  <SkeletonLine marginBottom="5px" />
                  <SkeletonLine marginBottom="5px" />
                </Box>
              </Cell>
            </Layout>
          </Cell>
          <Cell>
            <SkeletonRectangle height="150px" />
          </Cell>
        </Layout>
      </SkeletonGroup>
    </Box>
  </Cell>
</Layout>;
`;
