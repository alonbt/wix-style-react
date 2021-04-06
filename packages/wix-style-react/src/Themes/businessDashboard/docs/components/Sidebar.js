export const playground = /* jsx */ `
<Box height="320px">
  <ThemeProvider theme={theme()}>
    <Sidebar skin="dark">
      <Sidebar.PersistentHeader>
        <SidebarHeader title="Site Name" subtitle="Role: Owner" />
        <SidebarDivider fullWidth />
      </Sidebar.PersistentHeader>

      <Sidebar.Item itemKey="selected">
        <SidebarSectionItem selected>Selected</SidebarSectionItem>
      </Sidebar.Item>

      <SidebarDivider />
      <Sidebar.Item itemKey="title">
        <SidebarSectionTitle>Some Title</SidebarSectionTitle>
      </Sidebar.Item>

      <Sidebar.Item itemKey="plain">
        <SidebarSectionItem>Action</SidebarSectionItem>
      </Sidebar.Item>

      <Sidebar.Item itemKey="disabled">
        <SidebarSectionItem disabled>Action</SidebarSectionItem>
      </Sidebar.Item>

      <Sidebar.Item
        itemKey="inner"
        innerMenu={[
          <Sidebar.BackButton key="back-button">
            <SidebarBackButton>
              Main Menu
            </SidebarBackButton>
          </Sidebar.BackButton>,
          <Sidebar.Item itemKey="inner-item-1" key="inner-item-1">
            <SidebarSectionItem>Inner item 1</SidebarSectionItem>
          </Sidebar.Item>,
          <Sidebar.Item itemKey="inner-item-2" key="inner-item-2">
            <SidebarSectionItem>Inner item 2</SidebarSectionItem>
          </Sidebar.Item>,
        ]}
      >
        <SidebarSectionItem drillable alwaysDisplayChevron>
          Inner Menu
        </SidebarSectionItem>
      </Sidebar.Item>


      <Sidebar.PersistentFooter>
        <SidebarDivider fullWidth />
        <SidebarHeader>
          <Text size="medium" light>Menu Footer</Text>
        </SidebarHeader>
      </Sidebar.PersistentFooter>
    </Sidebar>
  </ThemeProvider>
</Box >
`;
