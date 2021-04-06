export const simple = `
<Highlighter match="Lorem">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Highlighter>
`;

export const interactive = `
() => {
  const [match, setMatch] = React.useState('sit');
  return (
    <Box direction="vertical">
      <FormField label="Type anything and watch how it's being highlighted in the text below">
        <Input value={match} onChange={event => setMatch(event.target.value)} />
      </FormField>
      <Box margin="SP4">
        <Highlighter match={match}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Highlighter>
      </Box>
    </Box>
  );
};
`;
