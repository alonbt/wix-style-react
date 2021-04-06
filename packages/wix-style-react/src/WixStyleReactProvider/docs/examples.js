export const usage = `
<StorybookComponents.Stack>
      <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: false }}>
            <Heading appearance="H1">Before</Heading>
      </WixStyleReactProvider>
    <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: true }}>
            <Heading appearance="H1">After</Heading>
      </WixStyleReactProvider>
</StorybookComponents.Stack>
`;

export const heading = `
<Layout gap="60px">
  <Cell span={6}>
  <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: false }}>
    <StorybookComponents.Stack flexDirection="column">
      <Heading appearance="H1">Heading 1</Heading>
      <Heading appearance="H2">Heading 2</Heading>
      <Heading appearance="H3">Heading 3</Heading>
      <Heading appearance="H4">Heading 4</Heading>
      <Heading appearance="H5">Heading 5</Heading>
      <Heading appearance="H6">Heading 6</Heading>
    </StorybookComponents.Stack>
  </WixStyleReactProvider>
  </Cell>
  <Cell span={6}>
  <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: true }}>
    <StorybookComponents.Stack flexDirection="column">
      <Heading appearance="H1">Heading 1</Heading>
      <Heading appearance="H2">Heading 2</Heading>
      <Heading appearance="H3">Heading 3</Heading>
      <Heading appearance="H4">Heading 4</Heading>
      <Heading appearance="H5">Heading 5</Heading>
      <Heading appearance="H6">Heading 6</Heading>
      </StorybookComponents.Stack>
  </WixStyleReactProvider>
  </Cell>
  </Layout>
`;
export const layout = `
<Layout gap="60px">
  <Cell span={6}>
  <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: false }}>
      <Layout>
        <Cell span={12}><StorybookComponents.Placeholder height="30px"/></Cell>
        <Cell span={6}><StorybookComponents.Placeholder height="30px"/></Cell>
        <Cell span={6}><StorybookComponents.Placeholder height="30px"/></Cell>
        <Cell span={4}><StorybookComponents.Placeholder height="30px"/></Cell>
        <Cell span={4}><StorybookComponents.Placeholder height="30px"/></Cell>
        <Cell span={4}><StorybookComponents.Placeholder height="30px"/></Cell>
      </Layout>
  </WixStyleReactProvider>
  </Cell>
  <Cell span={6}>
  <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: true }}>
    <Layout>
      <Cell span={12}><StorybookComponents.Placeholder height="30px"/></Cell>
      <Cell span={6}><StorybookComponents.Placeholder height="30px"/></Cell>
      <Cell span={6}><StorybookComponents.Placeholder height="30px"/></Cell>
      <Cell span={4}><StorybookComponents.Placeholder height="30px"/></Cell>
      <Cell span={4}><StorybookComponents.Placeholder height="30px"/></Cell>
      <Cell span={4}><StorybookComponents.Placeholder height="30px"/></Cell>
    </Layout>
  </WixStyleReactProvider>
  </Cell>
  </Layout>
`;

export const pageHeader = `
<Layout gap="60px">
  <Cell span={6}>
  <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: false }}>
    <Page.Header
      breadcrumbs={
        <Breadcrumbs
          activeId="3"
          items={[
            { id: '1', value: 'Item 1' },
            { id: '2', value: 'Item 2' },
          ]}
          onClick={() => {}}
        />
      }
      onBackClicked={() => {}}
      title="Page Header"
      subtitle="Page subtitle"
      actionsBar={<Button prefixIcon={<Icons.Add/>}>Add New Item</Button>}
    />
  </WixStyleReactProvider>
  </Cell>
  <Cell span={6}>
  <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: true }}>
    <Page.Header
      breadcrumbs={
        <Breadcrumbs
          activeId="3"
          items={[
            { id: '1', value: 'Item 1' },
            { id: '2', value: 'Item 2' },
          ]}
          onClick={() => {}}
        />
      }
      onBackClicked={() => {}}
      title="Page Header"
      subtitle="Page subtitle"
      actionsBar={<Button prefixIcon={<Icons.Add/>}>Add New Item</Button>}
    />
  </WixStyleReactProvider>
  </Cell>
</Layout>
`;

export const pageSection = `
<Layout gap="60px">
  <Cell span={6}>
  <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: false }}>
    <PageSection
      title="Section Title"
      actionsBar={<TextButton prefixIcon={<Icons.Add />}>Add New Item</TextButton>}
      showDivider
    />
  </WixStyleReactProvider>
  </Cell>
  <Cell span={6}>
  <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: true }}>
    <PageSection
      title="Section Title"
      actionsBar={<TextButton prefixIcon={<Icons.Add />}>Add New Item</TextButton>}
      showDivider
    />
  </WixStyleReactProvider>
  </Cell>
</Layout>
`;

export const card = `
<Layout gap="60px">
  <Cell span={6}>
  <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: false }}>
  <Card>
    <Card.Header
      title="Card title"
      subtitle="This is how a subtitle looks like"
      suffix={
        <Button size="small" prefixIcon={<Icons.AddSmall />}>
          New Item
        </Button>
        }
    />
    <Card.Subheader skin="neutral" title="Card subheader" />
    <Card.Content>
    <StorybookComponents.Placeholder height="120px"></StorybookComponents.Placeholder>
    </Card.Content>
  </Card>
</WixStyleReactProvider>
  </Cell>
  <Cell span={6}>
  <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: true }}>
    <Card>
      <Card.Header
        title="Card title"
        subtitle="This is how a subtitle looks like"
        suffix={
          <Button size="small" prefixIcon={<Icons.AddSmall />}>
            New Item
          </Button>
          }
      />
      <Card.Subheader skin="neutral" title="Card subheader" />
      <Card.Content>
      <StorybookComponents.Placeholder height="120px"></StorybookComponents.Placeholder>
      </Card.Content>
    </Card>
  </WixStyleReactProvider>
  </Cell>
</Layout>
`;

export const table = `

() => {
  const records = [
    { item: 'Item 1' },
    { item: 'Item 2' },
    { item: 'Item 3' },
    { item: 'Item 4' },
  ];

  const columns = Array(2).fill({
    title: 'Column Name',
    render: row => row.item,
  });

  return (
  <Layout gap="60px">
  <Cell span={6}>
    <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: false }}>
    <Card hideOverflow>
      <Table data={records} columns={columns}>
        <TableToolbar>
          <TableToolbar.Title>Toolbar</TableToolbar.Title>
        </TableToolbar>
        <Table.SubToolbar>
          <FormField label="Tags:" labelPlacement="left">
            <TagList
              tags={[
                { id: '1', children: 'Tag 1' },
                { id: '2', children: 'Tag 2' },
              ]}
              actionButton={{ label: 'Clear All' }}
            />
          </FormField>
        </Table.SubToolbar>
        <Table.Content />
      </Table>
    </Card>
    </WixStyleReactProvider>
  </Cell>
  <Cell span={6}>
    <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: true }}>
    <Card hideOverflow>
      <Table data={records} columns={columns}>
        <TableToolbar>
          <TableToolbar.Title>Toolbar</TableToolbar.Title>
        </TableToolbar>
        <Table.SubToolbar>
          <FormField label="Tags:" labelPlacement="left">
            <TagList
              tags={[
                { id: '1', children: 'Tag 1' },
                { id: '2', children: 'Tag 2' },
              ]}
              actionButton={{ label: 'Clear All' }}
            />
          </FormField>
        </Table.SubToolbar>
        <Table.Content />
      </Table>
    </Card>
    </WixStyleReactProvider>
  </Cell>
</Layout>
  );
};
`;

export const tableRows = `

() => {
  const large = [
    { item: 'Large' },
  ];
  const medium = [
    { item: 'Medium' },
  ];
  const small = [
    { item: 'Small' },
  ];
  const tiny = [
    { item: 'Tiny' },
  ];

  const columns = Array(1).fill({
    title: 'Column Name',
    render: row => row.item,
  });

  return (
  <Layout gap="60px">
  <Cell span={6}>
    <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: false }}>
      <StorybookComponents.Stack flexDirection="column">
        <Table data={large} columns={columns} rowVerticalPadding="large">
          <Table.Content titleBarVisible={false} />
        </Table>
        <Table data={medium} columns={columns} rowVerticalPadding="medium">
          <Table.Content titleBarVisible={false} />
        </Table>
        <Table data={small} columns={columns} rowVerticalPadding="small">
          <Table.Content titleBarVisible={false} />
        </Table>
        <StorybookComponents.Placeholder height="42px">Tiny doesn't exist in WSR V 9.0</StorybookComponents.Placeholder>
      </StorybookComponents.Stack>
      </WixStyleReactProvider>
  </Cell>
  <Cell span={6}>
    <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: true }}>
      <StorybookComponents.Stack flexDirection="column">
        <StorybookComponents.Placeholder height="66px">Large size will be removed in WSR V 10.0</StorybookComponents.Placeholder>
        <Table data={medium} columns={columns} rowVerticalPadding="medium">
          <Table.Content titleBarVisible={false} />
        </Table>
        <Table data={small} columns={columns} rowVerticalPadding="small">
          <Table.Content titleBarVisible={false} />
        </Table>
        <Table data={tiny} columns={columns} rowVerticalPadding="tiny">
          <Table.Content titleBarVisible={false} />
        </Table>
      </StorybookComponents.Stack>
    </WixStyleReactProvider>
  </Cell>
</Layout>
  );
};
`;

export const tableListItem = `
<Layout gap="60px">
  <Cell span={6}>
    <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: false }}>
      <StorybookComponents.Stack flexDirection="column">
        <TableListItem
          checkbox
          draggable
          verticalPadding="medium"
          options={[{ value: 'Medium' }]}
        />
        <TableListItem
          checkbox
          draggable
          verticalPadding="small"
          options={[{ value: 'Small' }]}
        />
        <StorybookComponents.Placeholder height="42px">Tiny doesn't exist in WSR V 9.0</StorybookComponents.Placeholder>
      </StorybookComponents.Stack>
      </WixStyleReactProvider>
  </Cell>
  <Cell span={6}>
    <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: true }}>
      <StorybookComponents.Stack flexDirection="column">
        <TableListItem
          checkbox
          draggable
          verticalPadding="medium"
          options={[{ value: 'Medium' }]}
        />
        <TableListItem
          checkbox
          draggable
          verticalPadding="small"
          options={[{ value: 'Small' }]}
        />
        <TableListItem
          checkbox
          draggable
          verticalPadding="tiny"
          options={[{ value: 'Tiny' }]}
        />
      </StorybookComponents.Stack>
    </WixStyleReactProvider>
  </Cell>
</Layout>
`;

export const accordion = `
<Layout gap="60px">
  <Cell span={6}>
    <WixStyleReactProvider
      features={{ reducedSpacingAndImprovedLayout: false }}
    >
      <StorybookComponents.Stack flexDirection="column">
        <Accordion
          size="large"
          items={[
            accordionSectionItemBuilder({
              title: 'Sub header',
            }),
          ]}
        />
        <Accordion
          size="large"
          items={[
            {
              title: 'Large',
              children: <StorybookComponents.Placeholder height="42px" />,
            },
          ]}
        />
        <Accordion
          size="small"
          items={[
            {
              title: 'Small',
              children: <StorybookComponents.Placeholder height="42px" />,
            },
          ]}
        />
      </StorybookComponents.Stack>
    </WixStyleReactProvider>
  </Cell>
  <Cell span={6}>
    <WixStyleReactProvider features={{ reducedSpacingAndImprovedLayout: true }}>
      <StorybookComponents.Stack flexDirection="column">
      <StorybookComponents.Placeholder height="72px">Large size will be removed in WSR V 10.0</StorybookComponents.Placeholder>
        <Accordion
          size="medium"
          items={[
            {
              title: 'Medium',
              children: <StorybookComponents.Placeholder height="42px" />,
            },
          ]}
        />
        <Accordion
          size="small"
          items={[
            {
              title: 'Small',
              children: <StorybookComponents.Placeholder height="42px" />,
            },
          ]}
        />
        <Accordion
          size="tiny"
          items={[
            {
              title: 'Tiny',
              children: <StorybookComponents.Placeholder height="42px" />,
            },
          ]}
        />
      </StorybookComponents.Stack>
    </WixStyleReactProvider>
  </Cell>
</Layout>;
`;

export const selectableAccordion = `
<Layout gap="60px">
  <Cell span={6}>
    <WixStyleReactProvider
      features={{ reducedSpacingAndImprovedLayout: false }}
    >
      <StorybookComponents.Stack flexDirection="column">
        <SelectableAccordion
          verticalPadding="medium"
          type="checkbox"
          items={[
            {
              title: 'Option 1',
              content: <StorybookComponents.Placeholder height="42px" />,
            },
          ]}
        />
        <SelectableAccordion
          verticalPadding="small"
          type="checkbox"
          items={[
            {
              title: 'Option 1',
              content: <StorybookComponents.Placeholder height="42px" />,
            },
          ]}
        />
        <SelectableAccordion
          verticalPadding="tiny"
          type="checkbox"
          items={[
            {
              title: 'Option 1',
              content: <StorybookComponents.Placeholder height="42px" />,
            },
          ]}
        />
      </StorybookComponents.Stack>
    </WixStyleReactProvider>
  </Cell>
  <Cell span={6}>
    <WixStyleReactProvider features={{ reducedSpacingAndImprovedLayout: true }}>
      <StorybookComponents.Stack flexDirection="column">
        <SelectableAccordion
          verticalPadding="medium"
          type="checkbox"
          items={[
            {
              title: 'Option 1',
              content: <StorybookComponents.Placeholder height="42px" />,
            },
          ]}
        />
        <SelectableAccordion
          verticalPadding="small"
          type="checkbox"
          items={[
            {
              title: 'Option 1',
              content: <StorybookComponents.Placeholder height="42px" />,
            },
          ]}
        />
        <SelectableAccordion
          verticalPadding="tiny"
          type="checkbox"
          items={[
            {
              title: 'Option 1',
              content: <StorybookComponents.Placeholder height="42px" />,
            },
          ]}
        />
      </StorybookComponents.Stack>
    </WixStyleReactProvider>
  </Cell>
</Layout>;
`;

export const statisticsWidget = `
<Layout gap="60px">
  <Cell span={6}>
    <WixStyleReactProvider
      features={{ reducedSpacingAndImprovedLayout: false }}
    >
      <StorybookComponents.Stack flexDirection="column">
        <Card>
          <StatisticsWidget
            size="large"
            items={[
                {
                  value: '$3,456',
                  description: 'Large',
                  percentage: -11,
                  descriptionInfo: 'Additional content',
                },{
                  value: '$3,456',
                  description: 'Large',
                  percentage: 57,
                  invertedPercentage: false,
                  descriptionInfo: 'Additional content',
                },
              ]}
            />
        </Card>
        <Card>
            <StatisticsWidget
            size="tiny"
            items={[
                {
                  value: '$3,456',
                  description: 'Tiny',
                  percentage: -11,
                  descriptionInfo: 'Additional content',
                },{
                  value: '$3,456',
                  description: 'Tiny',
                  percentage: 57,
                  invertedPercentage: false,
                  descriptionInfo: 'Additional content',
                },
              ]}
            />
          </Card>
      </StorybookComponents.Stack>
    </WixStyleReactProvider>
  </Cell>
  <Cell span={6}>
    <WixStyleReactProvider features={{ reducedSpacingAndImprovedLayout: true }}>
      <StorybookComponents.Stack flexDirection="column">
        <Card>
          <StatisticsWidget
            size="large"
            items={[
              {
                value: '$0,000',
                description: 'Large',
                percentage: -11,
                descriptionInfo: 'Additional content',
              },{
                value: '$0,000',
                description: 'Large',
                percentage: 57,
                invertedPercentage: false,
                descriptionInfo: 'Additional content',
              },
            ]}
          />
        </Card>
      <Card>
          <StatisticsWidget
          size="tiny"
          items={[
              {
                value: '$0,000',
                description: 'Tiny',
                percentage: -11,
                descriptionInfo: 'Additional content',
              },{
                value: '$0,000',
                description: 'Tiny',
                percentage: 57,
                invertedPercentage: false,
                descriptionInfo: 'Additional content',
              },
            ]}
          />
        </Card>
      </StorybookComponents.Stack>
    </WixStyleReactProvider>
  </Cell>
</Layout>;
`;

export const marketingLayout = `
<Layout gap="60px">
  <Cell span={6}>
    <WixStyleReactProvider
      features={{ reducedSpacingAndImprovedLayout: false }}
    >
      <StorybookComponents.Stack flexDirection="column">
        <Card>
          <MarketingLayout
            title="Large Size Layout"
            description="This layout is big enough to be noticed and can be used to promote big things while still leaving plenty of space."
            actions={<Button size="medium">Get Started</Button>}
            size="large"
            image={<Image />}
          />
        </Card>
        <Card>
          <MarketingLayout
            title="Medium Size Layout"
            description="This layout is big enough to be noticed and can be used to promote big things while still leaving plenty of space."
            actions={<Button size="medium">Get Started</Button>}
            size="medium"
            image={<Image />}
          />
        </Card>
        <Card>
          <MarketingLayout
            title="Small Size Layout"
            description="This layout requires less attention. It can promote side features that might add value, but are not mandatory to achieve main goals."
            actions={<Button size="small">Get Started</Button>}
            size="small"
            image={<Image />}
          />
        </Card>
        <Card>
          <MarketingLayout
            title="Tiny Size Layout"
            description="This layout requires less attention. It can promote side features that might add value, but are not mandatory to achieve main goals."
            actions={<Button size="small">Get Started</Button>}
            size="tiny"
            image={
              <Box width="100%" align="right">
                <Image width="96px" height="96px" />
              </Box>
            }
          />
        </Card>
      </StorybookComponents.Stack>
    </WixStyleReactProvider>
  </Cell>
  <Cell span={6}>
    <WixStyleReactProvider features={{ reducedSpacingAndImprovedLayout: true }}>
      <StorybookComponents.Stack flexDirection="column">
        <StorybookComponents.Placeholder height="312px">Large will be removed in WSR V10.0</StorybookComponents.Placeholder>
        <Card>
          <MarketingLayout
            title="Medium Size Layout"
            description="This layout is big enough to be noticed and can be used to promote big things while still leaving plenty of space."
            actions={<Button size="medium">Get Started</Button>}
            size="medium"
            image={<Image />}
          />
        </Card>
        <Card>
          <MarketingLayout
            title="Small Size Layout"
            description="This layout requires less attention. It can promote side features that might add value, but are not mandatory to achieve main goals."
            actions={<Button size="small">Get Started</Button>}
            size="small"
            image={<Image />}
          />
        </Card>
        <Card>
          <MarketingLayout
            title="Tiny Size Layout"
            description="This layout requires less attention. It can promote side features that might add value, but are not mandatory to achieve main goals."
            actions={<Button size="small">Get Started</Button>}
            size="tiny"
            image={
              <Box width="100%" align="right">
                <Image width="96px" height="96px" />
              </Box>
            }
          />
        </Card>
      </StorybookComponents.Stack>
    </WixStyleReactProvider>
  </Cell>
</Layout>;
`;

export const announcementModalLayout = `
<Layout gap="60px">
  <Cell span={6}>
    <WixStyleReactProvider
      features={{ reducedSpacingAndImprovedLayout: false }}
    >
      <AnnouncementModalLayout
        illustration={'generic_post.svg'}
        title="Import Posts From WordPress"
        primaryButtonText="Start Now"
        linkText="Learn More"
        onCloseButtonClick={() => {}}
      >
        <Text>
          Your public posts, images and videos will be copied and added to your
          Wix blog. Your site and current posts won't be affected.
        </Text>
      </AnnouncementModalLayout>
    </WixStyleReactProvider>
  </Cell>
  <Cell span={6}>
    <WixStyleReactProvider features={{ reducedSpacingAndImprovedLayout: true }}>
      <AnnouncementModalLayout
        illustration={<Image width="240px" height="156px" src="generic_post.svg" />}
        title="Import Posts From WordPress"
        primaryButtonText="Start Now"
        linkText="Learn More"
        onCloseButtonClick={() => {}}
      >
        <Text>
          Your public posts, images and videos will be copied and added to your
          Wix blog. Your site and current posts won't be affected.
        </Text>
      </AnnouncementModalLayout>
    </WixStyleReactProvider>
  </Cell>
</Layout>
`;

export const formField = `
<Layout gap="60px">
  <Cell span={6}>
    <WixStyleReactProvider
      features={{ reducedSpacingAndImprovedLayout: false }}
    >
      <StorybookComponents.Stack flexDirection="column">
        <FormField
        labelSize="medium"
        label="Medium size field label"
        infoContent="Additional information area"
        required
      >
        <StorybookComponents.Placeholder height="30px" />
      </FormField>
      <FormField
        labelSize="small"
        label="Small size field label"
        infoContent="Additional information area"
        required
      >
        <StorybookComponents.Placeholder height="30px" />
      </FormField>
      </StorybookComponents.Stack>
    </WixStyleReactProvider>
  </Cell>
  <Cell span={6}>
    <WixStyleReactProvider features={{ reducedSpacingAndImprovedLayout: true }}>
      <StorybookComponents.Stack flexDirection="column">
        <StorybookComponents.Placeholder height="60px">Medium will be removed in WSR V 10.0</StorybookComponents.Placeholder>
      <FormField
        labelSize="small"
        label="Small size field label"
        infoContent="Additional information area"
        required
      >
        <StorybookComponents.Placeholder height="30px" />
      </FormField>
      </StorybookComponents.Stack>
    </WixStyleReactProvider>
  </Cell>
</Layout>;
`;

export const colorPicker =`
class MyComponent extends React.Component {
  state = {
    current: '#c479ed',
    previous: '#c479ed',
  };

  render() {
    const { current, previous } = this.state;

    return (
      <Layout gap="60px">
        <Cell span={6}>
          <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: false }}>
            <ColorPicker
              value={current}
              onChange={color => this.setState({ current: color.hex() })}
              onConfirm={() => {
                this.setState({ previous: current });
                alert('New color confirmed: ' + current);
              }}
              onCancel={prevColor => {
                this.setState({ current: prevColor });
              }}
              onAdd={color => {
                alert('New color is added: ' + color);
              }}
              showHistory={true}
            />
          </WixStyleReactProvider>
        </Cell>
        <Cell span={6}>
          <WixStyleReactProvider features={{reducedSpacingAndImprovedLayout: true }}>
            <ColorPicker
              value={current}
              onChange={color => this.setState({ current: color.hex() })}
              onConfirm={() => {
                this.setState({ previous: current });
                alert('New color confirmed: ' + current);
              }}
              onCancel={prevColor => {
                this.setState({ current: prevColor });
              }}
              onAdd={color => {
                alert('New color is added: ' + color);
              }}
              showHistory={true}
            />
          </WixStyleReactProvider>
        </Cell>
      </Layout>
    );
  }
}
`;