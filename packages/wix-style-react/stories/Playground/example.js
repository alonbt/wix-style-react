/* eslint-disable */
() => {
  const initialState = {
    name: 'Bruce Wayne',
    title: 0,
    dominantHand: 2,
  };

  const [state, setState] = React.useReducer(
    (currentState, newState) => ({ ...currentState, ...newState }),
    initialState,
  );

  return (
    <Box align="center">
      <Card>
        <Card.Content>
          <Layout>
            <Cell>
              <FormField label="Name">
                <Input
                  value={state.name}
                  onChange={event => setState({ name: event.target.value })}
                />
              </FormField>
            </Cell>

            <Cell>
              <FormField label="Title">
                <Dropdown
                  initialSelectedId={state.title}
                  onSelect={({ id }) => setState({ title: id })}
                  options={[
                    { id: 0, value: 'Mr' },
                    { id: 1, value: 'Ms' },
                  ]}
                />
              </FormField>
            </Cell>

            <Cell>
              <FormField label="Dominant Hand">
                <Dropdown
                  initialSelectedId={state.dominantHand}
                  onSelect={({ id }) => setState({ dominantHand: id })}
                  options={[
                    { id: 0, value: 'Left' },
                    { id: 1, value: 'Right' },
                    { id: 2, value: 'Ambidextrous' },
                  ]}
                />
              </FormField>
            </Cell>

            <Cell>
              <Box align="right">
                <Box marginRight={2}>
                  <Button
                    priority="secondary"
                    onClick={() => setState(initialState)}
                  >
                    Cancel
                  </Button>
                </Box>
                <Button onClick={() => alert(JSON.stringify(state))}>
                  Submit
                </Button>
              </Box>
            </Cell>
          </Layout>
        </Card.Content>
      </Card>
    </Box>
  );
};
