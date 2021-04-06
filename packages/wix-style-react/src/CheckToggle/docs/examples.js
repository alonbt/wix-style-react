export const skin = `
<Layout>
  <Cell span={3}>
    standard:
  </Cell>
  <Cell span={2}>
    <CheckToggle skin="standard" checked />
  </Cell>
  <Cell span={7}>
    <CheckToggle skin="standard" checked={false} />
  </Cell>
  <Cell span={3}>
    success:
  </Cell>
  <Cell span={2}>
    <CheckToggle skin="success" checked />
  </Cell>
  <Cell span={7}>
    <CheckToggle skin="success" checked={false} />
  </Cell>
</Layout>
`;

export const size = `
<Layout>
  <Cell span={3}>
    small:
  </Cell>
  <Cell span={2}>
    <CheckToggle size="small" checked />
  </Cell>
  <Cell span={7}>
    <CheckToggle size="small" checked={false} />
  </Cell>
  <Cell span={3}>
    medium:
  </Cell>
  <Cell span={2}>
    <CheckToggle size="medium" checked />
  </Cell>
  <Cell span={7}>
    <CheckToggle size="medium" checked={false} />
  </Cell>
</Layout>
`;

export const disabled = `
<Layout>
  <Cell span={2}>
    <CheckToggle disabled checked />
  </Cell>
  <Cell span={2}>
    <CheckToggle disabled />
  </Cell>
</Layout>
`;

export const tooltip = `
<Layout>
  <Cell span={2}>
    <CheckToggle checked tooltipContent="click me!" />
  </Cell>
  <Cell span={2}>
    <CheckToggle tooltipContent="click me!" />
  </Cell>
</Layout>
`;

export const controlled = `
() => {
  const [checked, setChecked] = React.useState(false);

  return (
    <CheckToggle checked={checked} onChange={() => {
      console.log('yay');
      setChecked(!checked)
    }} />
  );
};
`;
