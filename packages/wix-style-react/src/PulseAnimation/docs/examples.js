export const defaultExample = `() => {
  const [ active, setActive ] = React.useState(true);
  return (
    <Layout>
      <Cell span={8}>
        <PulseAnimation active={active} color="B10" borderRadius="18px">
          <Button>Button</Button>
        </PulseAnimation>
      </Cell>
      <Cell span={4} vertical>
        <button onClick={() => setActive(!active)}>
          {active ? 'Stop Animation' : 'Play Animation'}
        </button>
      </Cell>
    </Layout>
  )
}
`;

export const colorExample = `() => {
  const [ active, setActive ] = React.useState(false);
  return (
    <Layout>
      <Cell span={8}>
        <PulseAnimation active={active} color="P10" borderRadius="18px">
          <Button skin="premium">Button</Button>
        </PulseAnimation>
      </Cell>
      <Cell span={4} vertical>
        <button onClick={() => setActive(!active)}>
          {active ? 'Stop Animation' : 'Play Animation'}
        </button>
      </Cell>
    </Layout>
 )
}
`;

export const delayExample = `() => {
  const [ active, setActive ] = React.useState(false);
  return (
    <Layout>
      <Cell span={8}>
        <PulseAnimation delay="500ms" active={active} color="B10" borderRadius="18px">
          <Button color="B10">Button</Button>
        </PulseAnimation>
      </Cell>
      <Cell span={4} vertical>
        <button onClick={() => setActive(!active)}>
          {active ? 'Stop Animation' : 'Play Animation'}
        </button>
      </Cell>
    </Layout>
 )
}
`;
