export const simple = `
() => {
  const predictions = [
    {
      id: 0,
      displayLabel: 'First option',
      mainLabel: 'First',
      secondaryLabel: 'option',
    },
    {
      id: 1,
      displayLabel: 'Second option',
      mainLabel: 'Second',
      secondaryLabel: 'option',
    },
  ];
  const options = predictions.map(addressInputItemBuilder);

  return (
    <AddressInput
      placeholder="Search places..."
      options={options}
    />
  );
}
`;

export const sizes = `
() => {
  const props = {
    placeholder: 'Search places...',
  };

  return (
    <Layout cols={1}>
      <AddressInput {...props} size="small" />
      <AddressInput {...props} />
      <AddressInput {...props} size="large" />
    </Layout>
  );
}
`;

export const shape = `
() => {
  const props = {
    placeholder: 'Search places...',
  };

  return (
    <Layout cols={1}>
      <AddressInput {...props} />
      <AddressInput {...props} border="standard" />
    </Layout>
  );
}
`;

export const clearButton = `
<Layout cols={1}>
  <AddressInput initialValue="Some text" />
  <AddressInput initialValue="Some text" clearButton={false} />
</Layout>
`;

export const states = `
<Layout cols={1}>
  <FormField label="Disabled">
    <AddressInput placeholder="Disabled text" disabled />
  </FormField>
  <FormField label="Loading">
    <AddressInput value="Some text" status="loading" />
  </FormField>
  <FormField label="Has results">
    <AddressInput value="Some text" options={options} />
  </FormField>
  <FormField label="No results found">
    <AddressInput value="Some text" noResultsText="No results found" options={[]} />
  </FormField>
</Layout>
`;
