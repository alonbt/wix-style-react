import { createPropsArray } from '../../../../stories/utils/LiveCodeExample';

export const createPopperWithStateExample = ({ shown = true, ...props }) => `
class PopoverWithState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shown: ${shown}
    };
  }

  toggle() {
    this.setState(({ shown }) => ({ shown: !shown }));
  }

  render() {
    const { shown } = this.state;

    return (
      <Box
        width="250px"
        overflow="hidden"
        border="solid 1px black"
        padding="50px"
      >
        <Popover showArrow shown={shown} ${createPropsArray(props).join(
          '\n        ',
        )}>
          <Popover.Element>
            <Button onClick={() => this.toggle()}>Click me to toggle</Button>
          </Popover.Element>
          <Popover.Content>
            <Box padding="12px 24px" direction="vertical" maxWidth="200px">
              <Heading appearance="H4">
                Popover content:
              </Heading>
              <Text size="small" skin="standard" weight="thin">
                Can be any react node!
              </Text>
            </Box>
          </Popover.Content>
        </Popover>
      </Box>
    );
  }
}
`;

export const createScrollParentExample = () => `
const ScrollableContent = ({ children }) => (
  <div
    style={{
      overflow: 'hidden',
      position: 'relative',
      border: '1px solid black',
    }}
  >
    <div
      style={{
        overflow: 'auto',
        height: 120,
      }}
    >
      <div style={{ padding: '25px 25px 150px' }}>
        {children}
      </div>
    </div>
  </div>
);

${createPopperWithStateExample({
  appendTo: 'scrollParent',
  placement: 'right',
})}

render(
  <ScrollableContent>
    <PopoverWithState />
  </ScrollableContent>
);
`;
