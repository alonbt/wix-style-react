export const simple = `() => {
  const items = [
    {
      label:
        'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      suffix: (
        <TextButton weight="thin" size="small">
          suffix button
        </TextButton>
      ),
      labelAction: (
        <TextButton weight="thin" size="small">
          View Order
        </TextButton>
      ),
    },
    {
      label:
        'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      suffix: 'Jan 1, 2019 12:03 AM',
      labelAction: (
        <TextButton weight="thin" size="small">
          View Order
        </TextButton>
      ),
    },
    {
      id: 1,
      label: 'Quote #8 Accepted: Website setup, $7.00',
    },
    {
      label:
        'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      labelAction: (
        <TextButton weight="thin" size="small">
          View Order
        </TextButton>
      ),
    },
    {
      label:
        'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      suffix: 'Jan 1, 2019 12:03 AM',
      labelAction: (
        <TextButton weight="thin" size="small">
          View Order
        </TextButton>
      ),
    },
  ];

  return <Card><Card.Content><Timeline items={items} /></Card.Content></Card>;
}`;

export const customExample = `() => {
  const items = [
    {
      label: (
        <Layout cols={1} gap={0}>
          <Heading appearance="H6">Review Request Date</Heading>
          <Text size="small">Jul 05, 2020 at 11:00 AM</Text>
          <Box marginTop={2}>
            <Badge type="outlined">Waiting for review</Badge>
          </Box>
          <Box marginTop={3}>
            <Text size="small">
              Ask your client for a review directly from here. Send this
            </Text>
          </Box>
          <Box>
            <TextButton size="small">Request Review link</TextButton>
          </Box>
        </Layout>
      ),
    },
    {
      label: (
        <Layout cols={1} gap={6}>
          <Heading appearance="H6">Submitted Date</Heading>
          <Text size="small">Jul 04, 2020 at 09:00 AM</Text>
          <Box marginTop={3}>
            <Heading appearance="H6">Website Url</Heading>
          </Box>
          <Box>
            <TextButton size="small">www.mycurrentlywebsite.com</TextButton>
          </Box>
        </Layout>
      ),
    },
  ];

  return (
    <Card>
      <Card.Content>
        <Timeline items={items} />
      </Card.Content>
    </Card>
  );
};
`;
