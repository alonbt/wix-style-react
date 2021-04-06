export const simple = `
<Box height="24px"><FillButton tooltipContent="hello there" /></Box>
`;

export const fill = `
<Box height="24px">
  <Layout cols={4}>
    <FillButton fill="#3399ff" tooltipContent="hello there" />
    <FillButton fill="linear-gradient(#DBE6B3, #D7E6B3)" tooltipContent="hello there" />
  </Layout>
</Box>
`;

export const state = `
<Box height="24px">
    <FillButton fill="#3399ff" disabled tooltipContent="hello there" />
</Box>
`;
