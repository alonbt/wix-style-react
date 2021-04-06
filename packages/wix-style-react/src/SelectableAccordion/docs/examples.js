export const structure = `
<SelectableAccordion
  items={[
    {
      title: 'Option 1',
      content: 'Content 1',
    },
    {
      title: 'Option 2',
      content: 'Content 2',
    },
  ]}
/>
`;

export const typesExample = `
<Layout cols="1">
  <SelectableAccordion
    type="radio"
    items={[
      {
        title: 'Radio Option 1',
        content: 'Content Text 1',
      },
      {
        title: 'Radio Option 2',
        content: 'Content Text 2',
      },
    ]}
  />
  <SelectableAccordion
    type="checkbox"
    items={[
      {
        title: 'Checkbox Option 1',
        content: 'Content Text 1',
      },
      {
        title: 'Checkbox Option 2',
        content: 'Content Text 2',
      },
    ]}
  />
  <SelectableAccordion
    type="toggle"
    items={[
      {
        title: 'Toggle Feature 1',
        content: 'Content Text 1',
      },
      {
        title: 'Toggle Feature 2',
        content: 'Content Text 2',
      },
    ]}
  />
</Layout>
`;

export const subtitle = `
<SelectableAccordion
  items={[
    {
      title: 'Option 1',
      subtitle: 'Description of the first group',
      content: 'Enabled content is here.',
    },
    {
      title: 'Option 2',
      subtitle: 'Description of the second group',
      content: 'Enabled content is here.',
    },
  ]}
/>;
`;

export const initiallyOpen = `<SelectableAccordion
  items={[
    {
      initiallyOpen: true,
      title: 'Initially Active Option',
      content: 'This content is available initially.',
    },
    {
      title: ' Initially Inactive Option',
      content: 'This content is available when group is opened.',
    },
  ]}
/>
`;

export const disabledState = `<SelectableAccordion
  items={[
    {
      title: 'Option 1',
      subtitle: 'Description of the first group',
      content: 'Enabled content is here.',
      disabled: true,
    },
    {
      title: 'Option 2',
      subtitle: 'Description of the second group',
      content: 'Enabled content is here.',
      initiallyOpen: true,
      disabled: true,
    },
  ]}
/>
`;

export const advancedExample = `<SelectableAccordion
  type="radio"
  items={[
    {
      initiallyOpen: true,
      title: 'Free Plan',
      subtitle: 'Offer this plan free of charge',
      content: (
        <FormField label="Length of Plan" required>
          <Dropdown
            placeholder="Select"
            options={[{ id: 0, value: '1 Month' }]}
          />
        </FormField>
      ),
    },
    {
      title: 'One-time Payment',
      subtitle: 'Charge a single upfront fee',
      content: (
        <Layout cols={1}>
          <FormField label="Price" required>
            <Input value={99} prefix={<Input.Affix>$</Input.Affix>} />
          </FormField>
          <FormField label="Length of Plan" required>
            <Dropdown
              placeholder="Select"
              options={[{ id: 0, value: '1 Month' }]}
            />
          </FormField>
        </Layout>
      ),
    },
    {
      title: 'Recurring Payments',
      subtitle: 'Charge a weekly, monthly or yearly fee',
      content: (
        <Layout cols={1}>
          <FormField label="Payment Frequency" required>
            <Dropdown
              initialSelectedId={0}
              options={[{ id: 0, value: 'Monthly' }]}
            />
          </FormField>
          <FormField label="Price" required>
            <Input value={99} prefix={<Input.Affix>$</Input.Affix>} />
            </FormField>
          <FormField label="Length of Plan" required>
            <Dropdown
              initialSelectedId={0}
              options={[{ id: 0, value: '1 Month' }]}
            />
          </FormField>
        </Layout>
      ),
    },
  ]}
/>
`;
