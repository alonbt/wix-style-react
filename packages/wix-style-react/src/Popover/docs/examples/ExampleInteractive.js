import { createPropsArray } from '../../../../stories/utils/LiveCodeExample';

export const createClickablePopoverExample = props => `
class ClickablePopover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shown: false
    };
  }

  toggle() {
    this.setState(({ shown }) => ({ shown: !shown }));
  }

  close() {
    this.setState({ shown: false });
  }

  render() {
    const { shown } = this.state;

    return (
      <Box align="center" verticalAlign="middle">
        <Popover
          showArrow
          animate
          placement="right"
          shown={shown}
          onClickOutside={() => this.close()}
          ${createPropsArray(props).join('\n        ')}
        >
          <Popover.Element>
            <Button onClick={() => this.toggle()}>Click me to toggle</Button>
          </Popover.Element>
          <Popover.Content>
            <Box padding="12px 24px" width={140}>
              <Text size="small" skin="standard" weight="thin">
                Clicking inside the popover will not close it, but clicking outside will.
              </Text>
            </Box>
          </Popover.Content>
        </Popover>
      </Box>
    );
  }
}
`;

export const createHoverablePopoverExample = props => `
class HoverablePopover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shown: false
    };
  }

  open() {
    this.setState({ shown: true });
  }

  close() {
    this.setState({ shown: false });
  }

  render() {
    const { shown } = this.state;

    return (
      <Box align="center" verticalAlign="middle">
        <Popover
          showArrow
          animate
          placement="right"
          shown={shown}
          onMouseEnter={() => this.open()}
          onMouseLeave={() => this.close()}
          ${createPropsArray(props).join('\n        ')}
        >
          <Popover.Element>
            <Button>Hover me to open</Button>
          </Popover.Element>
          <Popover.Content>
            <Box padding="12px 24px" width={100}>
              <Text size="small" skin="standard" weight="thin">
                Now hover me!
              </Text>
            </Box>
          </Popover.Content>
        </Popover>
      </Box>
    );
  }
}
`;
