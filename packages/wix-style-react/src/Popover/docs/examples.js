import {
  createHoverablePopoverExample,
  createClickablePopoverExample,
} from './examples/ExampleInteractive';
import {
  createPopperWithStateExample,
  createScrollParentExample,
} from './examples/ExampleAppendTo';
import { createStaticPopoverExample } from './examples/ExampleFlip';
import { createStaticPopoverExample as createStaticPopoverFixedExample } from './examples/ExampleFixed';

export const appendToWindow = createPopperWithStateExample({
  appendTo: 'window',
  placement: 'right',
});

export const appendToViewport = createPopperWithStateExample({
  shown: false,
  appendTo: 'viewport',
  placement: 'bottom',
});

export const appendToParent = createPopperWithStateExample({
  appendTo: 'parent',
  placement: 'right',
});

export const appendToScrollParent = createScrollParentExample();

export const interactiveClickable = createClickablePopoverExample({
  appendTo: 'parent',
});
export const nonInteractiveClickable = createClickablePopoverExample({
  appendTo: 'window',
});

export const interactiveHoverable = createHoverablePopoverExample({
  appendTo: 'parent',
});
export const interactiveHoverableHideDelay = createHoverablePopoverExample({
  hideDelay: 150,
});
export const nonInteractiveHoverable = createHoverablePopoverExample({
  appendTo: 'window',
});

export const flipEnabled = createStaticPopoverExample({
  flip: true,
});
export const flipDisabled = createStaticPopoverExample({
  flip: false,
});

export const fixedEnabled = createStaticPopoverFixedExample({
  fixed: true,
});
export const fixedDisabled = createStaticPopoverFixedExample({
  fixed: false,
});
export const fixedDisabledFlipFalse = createStaticPopoverFixedExample({
  fixed: false,
  flip: false,
});

export const positioning = `
class PositionedPopover extends React.Component {
  state = {
    shown: false,
  };

  open = () => this.setState({ shown: true });
  close = () => this.setState({ shown: false });

  render() {
    const { shown } = this.state;

    return (
      <Box padding="10px 0">
        <Popover
          appendTo="window"
          dataHook={\`story-popover-positioning-\${this.props.placement}\`}
          shown={shown}
          onMouseEnter={this.open}
          onMouseLeave={this.close}
          style={{ display: 'block' }}
          {...this.props}
        >
          <Popover.Element>
            <Button size="tiny" fullWidth>
              {this.props.placement}
            </Button>
          </Popover.Element>
          <Popover.Content>
            <Box padding="10px">Content</Box>
          </Popover.Content>
        </Popover>
      </Box>
    );
  }
}

const PopoversRow = ({ placements }) => (
  <Layout cols={5}>
    {placements.map(placement => (
      <Cell
        span={1}
        children={
          placement ? <PositionedPopover placement={placement} /> : null
        }
      />
    ))}
  </Layout>
);

render(
  <div
    data-hook="story-popover-positioning"
    style={{
      maxWidth: 1254,
      padding: 50,
      backgroundColor: '#DFE5EB',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <div style={{ maxWidth: 600 }}>
      <PopoversRow placements={['', 'top-start', 'top', 'top-end', '']} />
      <PopoversRow placements={['left-start', '', '', '', 'right-start']} />
      <PopoversRow placements={['left', '', '', '', 'right']} />
      <PopoversRow placements={['left-end', '', '', '', 'right-end']} />
      <PopoversRow
        placements={['', 'bottom-start', 'bottom', 'bottom-end', '']}
      />
    </div>
  </div>
);
`;
