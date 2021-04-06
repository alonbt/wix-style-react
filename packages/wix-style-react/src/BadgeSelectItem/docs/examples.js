export const subtitleExample = `
<BadgeSelectItem text='Badge Select Item' subtitle='subtitle' />
`;

export const skins = `
<Layout cols={1}>
  <BadgeSelectItem text='General skin - default' skin='general' />
  <BadgeSelectItem text='Standard skin' skin='standard' /> 
  <BadgeSelectItem text='Success skin' skin='success' />
</Layout>
`;

export const suffix = `
  <BadgeSelectItem text='BadgeSelectItem with suffix' suffix='suffix' />
`;

export const sizes = `
<Layout cols={1}>
  <BadgeSelectItem text='Medium size - default' size='medium' />
  <BadgeSelectItem text='Small size' size='small' />
</Layout>
`;

export const textCropping = `
<Layout cols={1}>
  <BadgeSelectItem
    text="This is a very very very very long text that is perfect to demonstrate how it will wrap at some point"
    subtitle="This is a very very very very long subtitle that is perfect to demonstrate how it will wrap into multiple lines  at some point"
  />
  <BadgeSelectItem
    ellipsis
    text="This is a very very very very long text that is perfect to demonstrate how it will cropped by ellipsis at some point"
    subtitle="This is a very very very very long text that is perfect to demonstrate how it will cropped by ellipsis at some point"
  />
</ Layout>
`;

export const advancedExample = `
<DropdownLayout
  visible
  inContainer
  selectedId={2}
  options={[
    badgeSelectItemBuilder({
      id: 0,
      text: 'Not Paid',
      subtitle: 'Waiting for a payment',
      skin: 'danger',
    }),
    badgeSelectItemBuilder({
      id: 1,
      text: 'Paid in Person',
      subtitle: 'Cash',
      skin: 'success',
      disabled: true,
    }),
    badgeSelectItemBuilder({
      id: 2,
      text: 'Paid Plan: Gold',
      subtitle: '8/10 sessions left • Valid until Jan 24 2021',
    }),
    badgeSelectItemBuilder({
      id: 3,
      text: 'Paid Plan: Silver',
      subtitle: '10/10 sessions left • Valid until Dec 22 2020',
      skin: 'warning'
    })
  ]}
/>;
`;
