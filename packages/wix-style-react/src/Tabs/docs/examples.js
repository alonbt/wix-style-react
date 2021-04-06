const items = [1, 2, 3, 4, 5].map(index => ({
  id: index,
  title: `item ${index}`,
}));

export const base = `
() => {
  const [activeId, setActiveId] = React.useState(2);

  return (
    <Tabs
      activeId={activeId}
      onClick={value => setActiveId(value.id)}
      items={[
        { id: 1, title: 'item 1' },
        { id: 2, title: 'item 2' },
        { id: 3, title: 'item 3' },
        { id: 4, title: 'item 4' },
        { id: 5, title: 'item 5' },
      ]}
    />
  );
};
`;

export const hasDivider = `
  <Tabs
    items={${JSON.stringify(items)}}
    activeId={2}
    hasDivider={false}
  />
`;

export const smallSize = `
  <Tabs
    items={${JSON.stringify(items)}}
    activeId={2}
    size={"small"}
  />
`;

export const types = `
  <div>
    <Heading appearance="H3">Default</Heading>
    <Tabs
      items={${JSON.stringify(items)}}
      activeId={1}
    />
    <Heading appearance="H3" style={{marginTop: '15px'}}>Compact</Heading>
    <Tabs
      items={${JSON.stringify(items)}}
      activeId={1}
      type="compact"
    />
    <Heading appearance="H3" style={{marginTop: '15px'}}>compactSide</Heading>
    <Tabs
      items={${JSON.stringify(items)}}
      activeId={1}
      type="compactSide"
    />
    <Heading appearance="H3" style={{marginTop: '15px'}}>uniformSide</Heading>
    <Tabs
      items={${JSON.stringify(items)}}
      activeId={1}
      type="uniformSide"
    />
    <Heading appearance="H3" style={{marginTop: '15px'}}>uniformFull</Heading>
    <Tabs
      items={${JSON.stringify(items)}}
      activeId={1}
      type="uniformFull"
    />
  </div>
`;
