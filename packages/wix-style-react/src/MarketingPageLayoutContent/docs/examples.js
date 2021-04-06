export const basicExample = `
  <MarketingPageLayoutContent
    overline="Overline"
    title="Title"
    subtitle="Subtitle"
    content="Content"
    actions={<Button size="large">Action</Button>}
  />
`;

export const sizesExample = `
    <Layout cols={2}>
      <Cell span={1}>
        <MarketingPageLayoutContent
          size="medium"
          overline="Medium overline"
          title="Medium title"
          subtitle="Medium subtitle"
          content="Medium content"
          actions={<Button size="medium">Medium Action</Button>}
        />
      </Cell>
      <Cell span={1}>
        <MarketingPageLayoutContent
          overline="Large overline"
          title="Large title"
          subtitle="Large subtitle"
          content="Large content"
          actions={<Button size="large">Large Action</Button>}
        />
      </Cell>
</Layout>
`;

export const advancedExample = `
    <MarketingPageLayoutContent
      overline="Coming Soon"
      title="Create a branded client experience"
      content={
        <Text>
          <ul>
            <li>Brand your dashboard with a custom logo</li>
            <li>Remove Wix ads and promotions</li>
            <li>Promote your business when sharing in-progress work</li>
            <li>Customize your client’s dashboard</li>
          </ul>
        </Text>
      }
      actions={
        <Layout>
          <Cell>
            <Button size="large">Contact Us</Button>
            <Box inline marginLeft="12px">
              <TextButton>Learn More</TextButton>
            </Box>
          </Cell>
          <Cell>
            <Text size="tiny" secondary>
              Custom branding is free for Partners who have reached the Icon and
              Legend level. Have less than 2000 points? Purchase custom branding for
              $200/month.
            </Text>
          </Cell>
        </Layout>
      }
    />
  `;
