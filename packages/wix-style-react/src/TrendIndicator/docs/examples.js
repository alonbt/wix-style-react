export const trends = `
<Layout cols={3}>
  <Cell span={1}>
    <TrendIndicator value={21} />
  </Cell>
  <Cell span={1}>
    <TrendIndicator value={0} />
  </Cell>
  <Cell span={1}>
    <TrendIndicator value={-11} />
  </Cell>
</Layout>
`;

export const invertedTrends = `
<Layout cols={3}>
  <Cell span={1}>
    <TrendIndicator value={21} inverted />
  </Cell>
  <Cell span={1}>
    <TrendIndicator value={0} inverted />
  </Cell>
  <Cell span={1}>
    <TrendIndicator value={-11} inverted />
  </Cell>
</Layout>
`;
