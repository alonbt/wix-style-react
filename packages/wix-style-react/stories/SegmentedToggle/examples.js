export const textAndIcon = `
<Layout  cols={1}>
  <FormField label="Segmented Toggle">
    <SegmentedToggle defaultSelected="option">
      <SegmentedToggle.Button prefixIcon={<Icons.LockLocked />} value="option">
        Option
      </SegmentedToggle.Button>
      <SegmentedToggle.Button prefixIcon={<Icons.LockLocked />} value="option2">
        Option1
      </SegmentedToggle.Button>
      <SegmentedToggle.Button prefixIcon={<Icons.LockLocked />} value="option3">
        Option2
      </SegmentedToggle.Button>
    </SegmentedToggle>
  </FormField>
</Layout>
`;

export const text = `
<Layout  cols={1}>
  <FormField label="Segmented Toggle">
    <SegmentedToggle defaultSelected="option">
      <SegmentedToggle.Button value="option">
        Option
      </SegmentedToggle.Button>
      <SegmentedToggle.Button value="option2">
        Option1
      </SegmentedToggle.Button>
      <SegmentedToggle.Button value="option3">
        Option2
      </SegmentedToggle.Button>
    </SegmentedToggle>
  </FormField>
</Layout>
`;

export const icon = `
<Layout>
  <Cell span={3}>
    <FormField label="Segmented Toggle">
      <SegmentedToggle defaultSelected="option">
        <SegmentedToggle.Icon value="option" tooltipText="Locked">
          <Icons.LockLocked />
        </SegmentedToggle.Icon>
        <SegmentedToggle.Icon value="option2" tooltipText="Unlocked">
          <Icons.LockUnlocked />
        </SegmentedToggle.Icon>
      </SegmentedToggle>
    </FormField>
 </Cell>
</Layout>
`;
