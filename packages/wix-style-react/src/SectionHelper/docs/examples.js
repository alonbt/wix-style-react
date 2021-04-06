export const structure = `
<SectionHelper
  actionText="Action Button"
  onAction={() => 'onAction'}
  onClose={() => 'onClose'}
  title="This is a Section Helper Title"
>
  This is a description explaining why you're seeing this message
</SectionHelper>
`;

export const appearance = `
<Layout cols={1}>
<SectionHelper appearance="standard">
  In order to sell your music you need to choose a payment method.
</SectionHelper>
<SectionHelper appearance="warning">
  All websites are required to provide a link to comprehensive privacy policy.
</SectionHelper>
<SectionHelper appearance="danger">
  Your data got corrupted. Go to settings and update your contact details in order to let your clients reach you.
</SectionHelper>
<SectionHelper appearance="success">
  Congratulations, your website appears at the top of the list in search results.
</SectionHelper>
<SectionHelper appearance="premium">
  To start accepting payments for your plans, upgrade your site with a Business & eCommmerce Premium Plan.
</SectionHelper>
<SectionHelper appearance="preview">
  Your yearly subscription will auto renew on January 1st, 2021.
</SectionHelper>
<SectionHelper appearance="experimentalDark">
  In order to sell your music you need to choose a payment method.
</SectionHelper>
</Layout>
`;

export const textbutton = `
<Layout cols={1}>
  <SectionHelper title="Don't forget to set up payments">
    In order to sell your music you need to choose a payment method.
    <Box>
      <TextButton size="small" skin="dark" underline="always">
        Learn More
      </TextButton>
    </Box>
  </SectionHelper>
  <SectionHelper title="Don't forget to set up payments">
    In order to sell your music you need to choose a payment method.
    <Box inline>
      <TextButton size="small" skin="dark" underline="always">
        Learn More
      </TextButton>
    </Box>
  </SectionHelper>
</Layout>
`;

export const title = `
<SectionHelper title="Don't forget to setup payments">
  In order to sell your music you need to choose a payment method.
</SectionHelper>
`;

export const close = `
<SectionHelper onClose={() => 'onClose'}>
  In order to sell your music you need to choose a payment method.
</SectionHelper>
`;

export const children = `
<SectionHelper>
  In order to sell your music you need to choose a payment method.
  <Box inline>
    <TextButton size="small" skin="dark" underline="always">Setup Payments</TextButton>
  </Box>
</SectionHelper>;
`;

export const action = `
<SectionHelper
  actionText="Setup Payments"
  onAction={() => 'onAction'}
>
  In order to sell your music you need to choose a payment method.
</SectionHelper>
`;

export const componentWidth = `
<Layout cols={1}>
  <Box width="100%">
    <SectionHelper>
      In order to sell your music you need to choose a payment method.
    </SectionHelper>
  </Box>
  <Box width="80%">
    <SectionHelper>
      In order to sell your music you need to choose a payment method.
    </SectionHelper>
  </Box>
  <Box width="40%">
    <SectionHelper>
      In order to sell your music you need to choose a payment method.
    </SectionHelper>
  </Box>
</Layout>
`;

export const contentWidth = `
<Layout cols={1}>
  <SectionHelper>
    Release Manager allows you to publish a version of your site to a percentage
    of your site visitors. This is a great way to test new features on your site
    or get feedback on changes you have made before publishing to 100% of
    visitors.
  </SectionHelper>
  <SectionHelper fullWidth>
    Release Manager allows you to publish a version of your site to a percentage
    of your site visitors. This is a great way to test new features on your site
    or get feedback on changes you have made before publishing to 100% of
    visitors.
  </SectionHelper>
</Layout>
`;

export const cardExample = `
<Card>
  <Card.Header
    title="Subscriptions"
    subtitle="Manage the subscriptions you're offering for this product"
  />
  <Card.Divider />
  <Card.Content>
    <SectionHelper
      actionText="Upgrade Now"
      appearance="premium"
      onAction={() => 'onAction'}
    >
      This is an Advanced Business Plan feature. Customers won’t be able to buy
      these subscriptions until you upgrade.
    </SectionHelper>
  </Card.Content>
</Card>
`;

export const pageExample = `
<Page>
  <Page.Header
    title="Accept Payments"
    subtitle="Choose how your customers can pay at checkout"
  />
  <Page.Content>
    <Layout>
      <Cell>
        <SectionHelper
          actionText="Upgrade"
          appearance="premium"
          onAction={() => 'onAction'}
          onClose={() => 'onClose'}
          title="Want to start selling online?"
        >
          Upgrade your site with Business & eCommerce Premium Plan so your
          customers can pay at checkout.
        </SectionHelper>
      </Cell>
      <Cell>
        <Card>
          <Card.Header title="Payment Options" />
          <Card.Divider />
          <Box height="120px" />
        </Card>
      </Cell>
    </Layout>
  </Page.Content>
</Page>;
`;
