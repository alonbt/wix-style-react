export const simple = `
<Card>
  <Card.Header
    title="Monthly App Revenue"
    suffix={<TextButton size="small">Learn more</TextButton>}
  />
  <Card.Divider />
  <Card.Content>
    <Box align="center">
      <StackedBarChart
        yAxisTickFormat={(raw, formatted) => \`\${formatted} $\`}
        data={[
          { label: 'Jan 20', values: [1000, 200] },
          { label: 'Feb 20', values: [200, 700] },
          { label: 'Mar 20', values: [0, 400] },
          { label: 'Apr 20', values: [900, 100] },
          { label: 'Mai 20', values: [300, 300] },
          { label: 'Jun 20', values: [400, 300] },
          { label: 'Jul 20', values: [100, 100] },
          { label: 'Aug 20', values: [0, 0] },
          { label: 'Sep 20', values: [800, 0] },
          { label: 'Oct 20', values: [600, 300] },
          { label: 'Nov 20', values: [200, 300] },
          { label: 'Dec 20', values: [300, 200] },
        ]}
        tooltipTemplate={({ label, values }) => (
          <Box direction="vertical">
            <Text size="small" light>
              Total: {values[0] + values[1]} $
            </Text>
            <Text size="small" light>
              Payout: {values[1]} $
            </Text>
          </Box>
        )}
        margin={{ left: 100 }}
        width={800}
        height={400}
      />
    </Box>
  </Card.Content>
</Card>
`;
