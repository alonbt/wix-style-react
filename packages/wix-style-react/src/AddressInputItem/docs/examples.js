export const basicExample = `
  <AddressInputItem mainLabel="main label" secondaryLabel="secondary label"/>
`;

export const optionLayout = `
<Layout cols={1}>
  <AddressInputItem
    mainLabel="main label"
    optionLayout="single-line"
    secondaryLabel="single line layout"
  />
  <AddressInputItem
    optionLayout="double-line"
    mainLabel="main label"
    secondaryLabel="double line layout"
  />
</Layout>
`;

export const Affixes = `
  <Layout cols={1}>
    <AddressInputItem
      mainLabel="default behavior"
    />
    <AddressInputItem
      prefix={false}
      mainLabel="No prefix"
    />
    <AddressInputItem
      mainLabel="Text Affixes"
      suffix="suffix"
      prefix="prefix"
    />
  </Layout>;
`;

export const advancedExample = `
<DropdownLayout
  visible
  inContainer
  selectedId={0}
  options={[
    addressInputItemBuilder({
      id: 0,
      secondaryLabel: 'secondary label 1',
      mainLabel: 'main label 1',
      prefix: <Icons.Toolbox />,
      suffix: "suffix",
    }),
    addressInputItemBuilder({
      id: 1,
      secondaryLabel: 'secondary label 2',
      mainLabel: 'main label 2',
      optionLayout: 'double-line'
    }),
    addressInputItemBuilder({
      id: 3,
      secondaryLabel: 'secondary label 3',
      mainLabel: 'main label 3 - disabled',
      optionLayout: 'double-line',
      disabled: true,
    }),
  ]}
/>
`;
