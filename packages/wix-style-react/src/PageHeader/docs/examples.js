export const breadcrumbs = `
<Page.Header
  breadcrumbs={<Breadcrumbs activeId="3" items={[{id: '1', value: '#1 item'}, {id: '2', value: '#2 item'}, {id: '3', value: '#3 item'}]} onClick={() => {}}/>}
  onBackClicked={() => {}}
  title="Page Header"
  subtitle="I am a relatively long subtitle to fill this space"
/>
`;

export const actionBar = `
<Page.Header
  actionsBar={<Button>Action</Button>}
  onBackClicked={() => {}}
  title="Page Header"
/>
`;

export const editableTitle = `
<Page.Header
  title={<EditableTitle initialValue="This title is editable"/>}
  breadcrumbs={<Breadcrumbs activeId="3" items={[{id: '1', value: '#1 item'}, {id: '2', value: '#2 item'}, {id: '3', value: '#3 item'}]} onClick={() => {}}/>}
  actionsBar={<Button>Action</Button>}
/>
`;

export const ellipsis = `
<Page.Header
  breadcrumbs={<Breadcrumbs activeId="3" items={[{id: '1', value: '#1 item'}, {id: '2', value: '#2 item'}, {id: '3', value: '#3 item'}]} onClick={() => {}}/>}
  onBackClicked={() => {}}
  title="Page Title long enough to expose ellipsis on page title"
  subtitle="I am a relatively long subtitle to fill this space and demonstrate the subtitle which cannot wrap up to two lines, but no more. There more text to demonstrate that it cannot exceed the three lines. I am a relatively long subtitle to fill this space and demonstrate the subtitle which cannot wrap up to two lines, but no more. There more text to demonstrate that it cannot exceed the three lines."
/>
`;
