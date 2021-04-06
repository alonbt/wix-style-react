export const fitExample = `<Layout cols={3}>
    <Image fit="contain" height="200" src="example.jpg" />
    <Image fit="cover" height="200" src="example.jpg" />
    <Image fit="none" height="200" src="example.jpg" />
  </Layout>`;

export const lazyExample = `<Image loading="lazy" src="example.jpg" />`;

export const sourceExample = `<Layout cols={2}>
  <Image src="example.jpg" />
  <Image height="100%" />
</Layout>`;

export const sizeExample = `<Layout cols={2}>
  <Image src="example.jpg" />
  <Image width="80%" height="60%" src="example.jpg" />
</Layout>
`;

export const positionExample = `<Layout cols={3}>
  <Image fit="contain" position="top" height="200" src="example.jpg" />
  <Image fit="contain" position="center" height="200" src="example.jpg" />
  <Image fit="contain" position="bottom" height="200" src="example.jpg" />
</Layout>
`;

export const borderExample = `<Layout cols={1}>
  <Image src="example.jpg" showBorder/>
</Layout>`;

export const borderRadius = `<Image borderRadius={'10px 20px 30px 40px'} src="example.jpg" />`;
