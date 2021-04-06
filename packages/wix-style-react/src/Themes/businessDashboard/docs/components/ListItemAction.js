export const playground = `
  <ThemeProvider theme={theme()}>
    <DropdownLayout
      visible
      inContainer
      options={[
        listItemActionBuilder({
          id: 0,
          skin: 'dark',
          size: 'small',
          prefixIcon: <Icons.Edit />,
          title: 'skin dark',
        }),
        listItemActionBuilder({
          id: 2,
          skin: 'dark',
          size: 'small',
          disabled: true,
          prefixIcon: <Icons.Edit />,
          title: 'skin dark disabled',
        }),
        listItemActionBuilder({
          id: 3,
          size: 'small',
          title: 'standard',
        }),
        listItemActionBuilder({
          id: 4,
          size: 'small',
          prefixIcon: <Icons.Edit />,
          title: 'standard',
        }),
        listItemSectionBuilder({
          type: 'divider',
        }),
        listItemActionBuilder({
          id: 5,
          size: 'small',
          skin: 'standard',
          prefixIcon: <Icons.Edit />,
          title: 'standard disabled',
        }),
        listItemActionBuilder({
          id: 6,
          size: 'small',
          prefixIcon: <Icons.Edit />,
          title: 'standard',
        }),
        listItemActionBuilder({
          id: 7,
          size: 'small',
          prefixIcon: <Icons.Edit />,
          title: 'standard',
        }),
        listItemActionBuilder({
          id: 8,
          size: 'small',
          prefixIcon: <Icons.Edit />,
          title: 'standard',
        }),
      ]}
    />
  </ThemeProvider>
`;
