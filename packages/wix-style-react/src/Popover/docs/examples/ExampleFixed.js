import { createPropsArray } from '../../../../stories/utils/LiveCodeExample';

export const createStaticPopoverExample = props => `
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
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ padding: '70px 25px 100px' }}>
        {children}
      </div>
    </div>
  </div>
);

const StaticPopover = () => (
  <Popover
    shown
    showArrow
    placement="top"
    appendTo="scrollParent"
    ${createPropsArray(props).join('\n        ')}
  >
    <Popover.Element>
      <Button>I am a plain Button</Button>
    </Popover.Element>
    <Popover.Content>
      <Box padding="12px 24px" width={140}>
        <Text size="small" skin="standard" weight="thin">
          Content
        </Text>
      </Box>
    </Popover.Content>
  </Popover>
);

render(
  <ScrollableContent>
    <StaticPopover />
  </ScrollableContent>
);
`;
