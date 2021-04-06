export const simple = `<SocialButton text="Share on Facebook" icon="facebook" />`;

export const text = `
<Layout justifyItems="center">
 <Cell span={6}>
  <SocialButton icon="facebook"/>
 </Cell>
 <Cell span={6}>
  <SocialButton text="Share on Facebook" icon="facebook"/>
 </Cell>
</Layout>
`;

export const icons = `
<Layout cols={5}>
  <SocialButton  icon="facebook" />
  <SocialButton  icon="twitter" />
  <SocialButton  icon="linkedin" />
  <SocialButton  icon="instagram" />
  <SocialButton  icon="pinterest" />
  <SocialButton  icon="youtube" />
</Layout>
`;

export const disabled = `
<Layout cols={5}>
  <SocialButton  icon="facebook" disabled />
  <SocialButton  icon="twitter" disabled />
  <SocialButton  icon="linkedin" disabled />
  <SocialButton  icon="instagram" disabled />
  <SocialButton  icon="pinterest" disabled />
  <SocialButton  icon="youtube" disabled />
</Layout>
`;

export const interactive = `

<Layout cols={5}>
  <SocialButton  icon="facebook" disabled />
  <SocialButton  icon="twitter" disabled />
  <SocialButton  icon="linkedin" disabled />
  <SocialButton  icon="instagram" disabled />
  <SocialButton  icon="pinterest" disabled />
  <SocialButton  icon="youtube" disabled />
</Layout>
`;
