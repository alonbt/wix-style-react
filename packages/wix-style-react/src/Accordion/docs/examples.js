export const text = 'This is an accordion item content';

export const simple = `
<Accordion
  items={[
    accordionItemBuilder({
      title: 'First Row',
      children: <Text>This is an accordion item content</Text>,
    }),
    accordionItemBuilder({
      title: 'Second Row',
      children: <Text>This is an accordion item content</Text>,
    }),
  ]}
/>
`;

export const withSection = `
<Accordion
  size="small"
  items={[
    accordionSectionItemBuilder({
      title: 'Accordion Title',
    }),
    accordionItemBuilder({
      title: 'First Row',
      children: <Text>This is an accordion item content</Text>,
    }),
    accordionItemBuilder({
      title: 'Second Row',
      children: <Text>This is an accordion item content</Text>,
    }),
  ]}
/>
`;

export const withButton = `
<Layout>
  <Cell span={6}>
    <Accordion
      items={[
        accordionItemBuilder({
          title: 'Chevron',
          children: <Text>This is an accordion item content</Text>,
        }),
      ]}
    />
  </Cell>
  <Cell span={6}>
    <Accordion
      items={[
        accordionItemBuilder({
          title: 'Chevron + label',
          children: <Text>This is an accordion item content</Text>,
          buttonType: 'textButton',
          expandLabel: 'expand',
          collapseLabel: 'collapse',
        }),
      ]}
    />
  </Cell>
  <Cell span={6}>
    <Accordion
      items={[
        accordionItemBuilder({
          title: 'Button',
          children: <Text>This is an accordion item content</Text>,
          buttonType: 'button',
          expandLabel: 'expand',
          collapseLabel: 'collapse',
        }),
      ]}
    />
  </Cell>
  <Cell span={6}>
    <Accordion
      items={[
        accordionItemBuilder({
          title: 'Custom node',
          children: <Text>This is an accordion item content</Text>,
          buttonType: 'node',
          showLabel: 'always',
          expandLabel: (
            <IconButton>
              <Icons.More />
            </IconButton>
          ),
          collapseLabel: (
            <IconButton>
              <Icons.X />
            </IconButton>
          ),
        }),
      ]}
    />
  </Cell>
</Layout>
`;

export const multiple = `
<Accordion
  multiple
  items={[
    accordionItemBuilder({ title: 'First Row', children: <Text>This item is opened on component mounts</Text>, initiallyOpen: true, }),
    accordionItemBuilder({ title: 'Second Row', children: <Text>This item is opened on component mounts</Text>, initiallyOpen: true, }),
  ]}
/>
`;

export const disabled = `
<Accordion
  items={[
    accordionItemBuilder({ title: 'Disabled Row (closed)', children: <Text>${text}</Text>, disabled: true }),
    accordionItemBuilder({ title: 'Disabled Row (open)', children: <Text>${text}</Text>, disabled: true, initiallyOpen: true, }),
  ]}
/>
`;

export const skins = `
<Layout>
  <Cell span={6}>
    <Accordion
      items={[
        accordionItemBuilder({
          title: 'Accordion with standard skin',
          children: <Text>This is an accordion item content</Text>,
          initiallyOpen: true,
          collapseLabel: 'Less',
        }),
      ]}
    />
  </Cell>
  <Cell span={6}>
    <Accordion
      skin="light"
      items={[
        accordionItemBuilder({
          title: 'Accordion with light skin',
          children: <Text>This is an accordion item content</Text>,
          initiallyOpen: true,
          collapseLabel: 'Less',
        }),
      ]}
    />
  </Cell>
</Layout>
`;

export const sizes = `
<Layout>
  <Cell span={6}>
    <Accordion
      size="small"
      items={[
        accordionItemBuilder({
          title: 'Accordion with small size',
          children: <Text>This is an accordion item content</Text>,
          initiallyOpen: true,
        }),
      ]}
    />
  </Cell>
  <Cell span={6}>
    <Accordion
      size="large"
      items={[
        accordionItemBuilder({
          title: 'Accordion with large size',
          children: <Text>This is an accordion item content</Text>,
          initiallyOpen: true,
        }),
      ]}
    />
  </Cell>
</Layout>
`;

export const backwardCompatibility = `
<Accordion
  items={[
    {
      title: 'First Row With Button',
      children: <Text>${text}</Text>,
    },
    {
      title: 'Second Row With Icon',
      children: <Text>${text}</Text>,
    },
  ]}
/>
`;
