export const simple = `
<Box height="24px">
  <Layout cols={4}>
    <FillPreview fill="#3399ff"/>
    <FillPreview fill="linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)"/>
    <FillPreview fill="https://stylable.io/branding/logo/PNG/96-logo-OnlySymbol.png"/>
    <FillPreview fill={<Icons.More/>}/>
  </Layout>
</Box>
`;

export const states = `
<Box height="24px">
  <Layout cols={2}>
    <FillPreview fill="#3399ff" selected/>
    <FillPreview fill="#3399ff" disabled/>
  </Layout>
</Box>
`;

export const addIcon = `
<Box height="24px">
  <Layout cols={2}>
    <FillPreview  fill="#3399ff" />
    <FillPreview  fill="#ffd06c" />
  </Layout>
</Box>
`;

export const fullInteractive = `
class FillPreviewExamples extends React.Component {
  state = {
    selectedIndex: 1,
  }
  render() {
    const { selectedIndex } = this.state;
    return (
      <Box height="24px">
        <Layout cols={3}>
          <FillPreview selected={selectedIndex===0} onClick={() => this.setState({ selectedIndex: 0 })} />
          <FillPreview fill="#28c197" selected={selectedIndex===1}  onClick={() => this.setState({ selectedIndex: 1 }) } />
          <FillPreview fill="#ffd06c" selected={selectedIndex===2} onClick={() => this.setState({ selectedIndex: 2 }) }/>
        </Layout>
      </Box>
    );
  }
}
`;
