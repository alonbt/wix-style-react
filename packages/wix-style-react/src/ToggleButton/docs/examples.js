export const skins = `
<ToggleButton labelValue="Crop & Rotate">
  <Icons.CropRotate />
</ToggleButton>
`;

export const selected = `
<ToggleButton labelValue="Crop & Rotate" selected>
  <Icons.CropRotate />
</ToggleButton>
`;

export const disabled = `
<Layout cols={2} gap={0} justifyItems="center">
  <ToggleButton labelValue="Crop & Rotate" disabled>
    <Icons.CropRotate />
  </ToggleButton>
  <ToggleButton labelValue="Crop & Rotate" skin="inverted" disabled>
    <Icons.CropRotate />
  </ToggleButton>
</Layout>
`;

export const custom = `
<Layout cols={3} gap={0} justifyItems="center" alignItems="center">
  <Cell span={1}>
    <div style={{ textAlign: 'center' }}>
      <p>An &lt;a/&gt; tag</p>
      <ToggleButton as="a" href="https://www.wix.com" target="_blank"><Icons.CropRotate /></ToggleButton>
    </div>
  </Cell>
  <Cell span={1}>
    <div style={{ textAlign: 'center' }}>
      <p>A react router &lt;Link/&gt; tag</p>
      <ToggleButton as={Link} to="/home"><Icons.CropRotate /></ToggleButton>
    </div>
  </Cell>
  <Cell span={1}>
    <div style={{ textAlign: 'center' }}>
      <p>A native &lt;button/&gt; tag</p>
      <ToggleButton as="button" onClick={() => alert('yay')}><Icons.CropRotate /></ToggleButton>
    </div>
  </Cell>
</Layout>
`;

export const sizes = `
<Layout cols={4} gap={0} justifyItems="center" alignItems="center">
  <Cell span={1}>
    <ToggleButton size="tiny" labelValue="Tiny"><Icons.CropRotateSmall /></ToggleButton>
  </Cell>
  <Cell span={1}>
    <ToggleButton size="small" labelValue="Small"><Icons.CropRotateSmall /></ToggleButton>
  </Cell>
  <Cell span={1}>
    <ToggleButton size="medium" labelValue="Medium"><Icons.CropRotate /></ToggleButton>
  </Cell>
  <Cell span={1}>
    <ToggleButton size="large" labelValue="Large"><Icons.CropRotate /></ToggleButton>
  </Cell>
</Layout>
`;

export const shapes = `
<Layout cols={2} gap={0} justifyItems="center" alignItems="center">
  <Cell span={1}>
    <ToggleButton shape="square" labelValue="Square"><Icons.CropRotateSmall /></ToggleButton>
  </Cell>
  <Cell span={1}>
    <ToggleButton shape="round" border={true} labelValue="Round"><Icons.CropRotateSmall /></ToggleButton>
  </Cell>
</Layout>
`;

export const labelPlacements = `
<Layout cols={3} gap={0} justifyItems="center" alignItems="center">
  <Cell span={1}>
        <ToggleButton labelValue="Label" labelPlacement="tooltip"><Icons.CropRotate /></ToggleButton>
  </Cell>
  <Cell span={1}>
        <ToggleButton labelValue="Label" labelPlacement="end"><Icons.CropRotate /></ToggleButton>
  </Cell>
  <Cell span={1}>
        <ToggleButton labelValue="Label" labelPlacement="bottom"><Icons.CropRotate /></ToggleButton>
  </Cell>
</Layout>
`;
