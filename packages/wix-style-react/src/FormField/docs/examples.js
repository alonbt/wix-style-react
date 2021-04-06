export const generic = `
<FormField label="Your name" required>
  <Input/>
</FormField>
`;

export const withTooltip = `
<FormField label="Your name" infoContent="Tooltip text" required>
  <Input/>
</FormField>
`;

export const alignment = `
<Layout>
  <Cell>
    <FormField
        label="Middle"
        labelPlacement="right"
        labelAlignment="middle"
    >
      <InputArea/>
    </FormField>
  </Cell>
  <Cell>
    <FormField
      label="Top"
      labelPlacement="left"
      labelAlignment="top"
     >
    <InputArea/>
    </FormField>
  </Cell>
</Layout>
`;

export const withLength = `
<FormField label="Label">
  {({setCharactersLeft}) =>
    <Input onChange={event => setCharactersLeft(100 - event.target.value.length)}/>
  }
</FormField>
`;

export const inlineLabelWithLength = `
<FormField
    label="Label"
    labelPlacement="left">
    {({ setCharactersLeft }) => (
      <Input
        onChange={event => setCharactersLeft(20 - event.target.value.length)}
      />
    )}
  </FormField>
`;

export const ExampleWithinLayout = `
<MessageBoxFunctionalLayout
  title="User Details"
  confirmText="Save"
  width="400px"
  cancelText="Cancel"
>
  <Layout>
    <Cell span={3}>
      <FormField dataHook="storybook-formfield-grid" label="User" required />
    </Cell>
    <Cell span={9}>
      <Input />
    </Cell>
    <Cell span={3}>
      <FormField label="Email" />
    </Cell>
    <Cell span={9}>
      <Input />
    </Cell>
    <Cell span={3}>
      <FormField label="Address" infoContent="I help you to fill info" />
    </Cell>
    <Cell span={9}>
      <Input />
    </Cell>
  </Layout>
</MessageBoxFunctionalLayout>;
`;

export const customSuffix = `
<FormField label="Your name" suffix={<TextButton>Action</TextButton>}>
  <Input/>
</FormField>
`;
