export const structure = `
<CopyClipboard value="https://www.wix-style-react.com/">
  {({ isCopied, copyToClipboard, reset }) => (
    <Box width="260" align="space-between">
      <Text>www.wix-style-react.com</Text>
      <TextButton onClick={() => (isCopied ? reset() : copyToClipboard())}>
        {!isCopied ? 'Copy' : 'Copied!'}
      </TextButton>
    </Box>
  )}
</CopyClipboard>;
`;

export const usage = `
class MyComponent extends React.Component {
  state = {
    inputText: 'https://www.wix-style-react.com',
  };
 
  render() {
    const { inputText } = this.state;
 
    return (
      <CopyClipboard value={inputText} resetTimeout={1500}>
        {({ isCopied, copyToClipboard }) => (
              <Input
                readOnly
                value={inputText}
                onChange={event => {
                  this.setState({ inputText: event.target.value });
                }}
                suffix={
                  <Box verticalAlign="middle" marginRight="SP1">
                    <TextButton
                      onClick={() => copyToClipboard()}
                      size="small"
                      prefixIcon={<Icons.DuplicateSmall />}
                    >
                      {!isCopied ? 'Copy' : 'Copied!'}
                    </TextButton>
                  </Box>
                }
              />
        )}
      </CopyClipboard>
    );
  }
 }
`;
