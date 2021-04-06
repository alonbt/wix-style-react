import { createPropsArray } from '../../../../stories/utils/LiveCodeExample';

export const createStaticPopoverExample = props => `
<Box
  align="center"
  verticalAlign="middle"
  height={80}
  style={{
    overflow: 'auto',
  }}
>
  <Popover shown showArrow placement="right" appendTo="scrollParent"  ${createPropsArray(
    props,
  ).join('\n        ')}>
    <Popover.Element>
      <Button>I am a plain Button</Button>
    </Popover.Element>
    <Popover.Content>
      <Box align="center" verticalAlign="middle" width={300} height={40}>
        <Text size="small" skin="standard" weight="thin">
          I am a very long popover's content
        </Text>
      </Box>
    </Popover.Content>
  </Popover>
</Box>;
`;
