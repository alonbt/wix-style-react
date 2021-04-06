export const standard = `
<Layout cols={2}>
  <Cell span={1}>
    <ImageViewer />
  </Cell>
  <Cell span={1} vertical>No image</Cell>
  <Cell span={1}>
    <ImageViewer imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/dd/New_Mela_Ramanputhur_Holy_Family_Church.jpg" />
  </Cell>
  <Cell span={1} vertical>Full color image</Cell>
  <Cell span={1}>
    <ImageViewer imageUrl="https://onlinepngtools.com/images/examples-onlinepngtools/palm-fronds-and-sky.png" />
  </Cell>
  <Cell span={1} vertical>An image with a transparent background</Cell>
</Layout>
`;

export const status = `
<Layout cols={1}>
  <Cell>
    <ImageViewer imageUrl="" status="error" />
  </Cell>
  <Cell>
    <ImageViewer imageUrl="" status="warning" />
  </Cell>
  <Cell>
    <ImageViewer imageUrl="" status="loading" />
  </Cell>
</Layout>
`;
