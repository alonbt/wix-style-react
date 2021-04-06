export const structure = `
<HorizontalTimeline
  items={[
    { label: 'Event 1', skin: 'dark' },
    { label: 'Event 2', skin: 'dark' },
    { label: 'Event 3' },
  ]}
/>
`;

export const width = `
<HorizontalTimeline
  items={[
    {label: 'Ten percent width', width: '10%'},
    {label: 'Width is auto'},
    {label: 'One hundred pixels width', width: '100px'},
  ]}
/>
`;

export const predefined = `
<HorizontalTimeline
  items={[
    {
      label: 'Complete',
      skin: 'dark',
      icon: <HorizontalTimeline.CompleteIcon />,
    },
    {
      label: 'Active',
      skin: 'dark',
      icon: <HorizontalTimeline.ActiveIcon />,
    },
    {
       label: 'Blank',
       icon: <HorizontalTimeline.DefaultIcon />,
    },
    {
      label: 'Destructive',
      icon: <HorizontalTimeline.DestructiveIcon />,
    },
  ]}
/>
`;
