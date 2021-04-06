export const simple = `
  <RadioGroup value={1}>
    <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
    <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
  </RadioGroup>
`;

export const disabledRadios = `
  <RadioGroup disabledRadios={[2]} value={1}>
    <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
    <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
    <RadioGroup.Radio value={3}>Option 3</RadioGroup.Radio>
  </RadioGroup>
`;

export const selectionAreaAlwaysFilled = `
  <RadioGroup selectionArea='always' value={1}>
    <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
    <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
  </RadioGroup>
`;

export const selectionAreaHoverFilled = `
  <RadioGroup selectionArea='hover' value={1}>
    <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
    <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
  </RadioGroup>
`;

export const selectionAreaAlwaysOutlined = `
  <RadioGroup selectionArea='always' selectionAreaSkin='outlined' value={1}>
    <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
    <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
  </RadioGroup>
`;

export const selectionAreaHoverOutlined = `
  <RadioGroup selectionArea='hover' selectionAreaSkin='outlined' value={1}>
    <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
    <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
  </RadioGroup>
`;

export const withContent = `
  <RadioGroup value={1} selectionArea="always">
    <RadioGroup.Radio
      key={0}
      value={1}
      content={<Box margin={2}>Another details for option 1, not clickable</Box>}
    >
      Option 1
    </RadioGroup.Radio>
    <RadioGroup.Radio
      key={1}
      value={2}
      content={<Box margin={2}>Another details for option 2, not clickable</Box>}
    >
      Option 2
    </RadioGroup.Radio>
  </RadioGroup>
`;

export const controlledRadioGroup = `
() => {
  const [value, setValue] = React.useState(null);
  return (<RadioGroup
    onChange={value => setValue(value)}
    value={value}
  >
    <RadioGroup.Radio value={1}>
      Option 1
    </RadioGroup.Radio>
    <RadioGroup.Radio value={2}>
      Option 2
    </RadioGroup.Radio>
    <RadioGroup.Radio value={3}>
      Option 3
    </RadioGroup.Radio>
    <RadioGroup.Radio value={4}>
      Option 4
    </RadioGroup.Radio>
  </RadioGroup>)
}`;
