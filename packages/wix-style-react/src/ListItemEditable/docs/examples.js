export const sie = `
<Layout cols={1}>
  <ListItemEditable
    onApprove={() => {}}
    onCancel={() => {}}
    placeholder="Value"
    cancelButtonTooltipContent="Cancel"
    approveButtonTooltipContent="Approve"
    size="small"
    margins="none"
  />

  <ListItemEditable
    onApprove={() => {}}
    onCancel={() => {}}
    placeholder="Value"
    cancelButtonTooltipContent="Cancel"
    approveButtonTooltipContent="Approve"
    size="medium"
    margins="none"
  />
</Layout>
`;

export const status = `
<Layout cols={1}>
  <ListItemEditable
    onApprove={() => {}}
    onCancel={() => {}}
    placeholder="Value"
    cancelButtonTooltipContent="Cancel"
    approveButtonTooltipContent="Approve"
    status="error"
    margins="none"
  />

  <ListItemEditable
    onApprove={() => {}}
    onCancel={() => {}}
    placeholder="Value"
    cancelButtonTooltipContent="Cancel"
    approveButtonTooltipContent="Approve"
    status="warning"
    margins="none"
  />

  <ListItemEditable
    onApprove={() => {}}
    onCancel={() => {}}
    placeholder="Value"
    cancelButtonTooltipContent="Cancel"
    approveButtonTooltipContent="Approve"
    status="loading"
    margins="none"
  />
</Layout>
`;

export const advanced = `
<Box height="230px">
  <DropdownLayout
    visible
    options={[
      listItemSelectBuilder({
        id: 0,
        title: 'Carmel Lloyd',
      }),
      listItemSelectBuilder({
        id: 1,
        title: 'Gracie-May Marsden',
      }),
      listItemSelectBuilder({
        id: 2,
        title: 'Keisha Decker',
      }),
      listItemSelectBuilder({
        id: 3,
        title: 'Ruairidh Fitzgerald',
      }),
      listItemEditableBuilder({
        id: 4,
        onApprove: val => console.log(val),
        onCancel: () => console.log('cancel'),
        cancelButtonTooltipContent: 'Cancel',
        approveButtonTooltipContent: 'Approve',
      }),
      listItemSectionBuilder({ type: 'whitespace' }),
    ]}
  />
</Box>
`;
