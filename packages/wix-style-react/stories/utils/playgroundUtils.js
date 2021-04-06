export const createOptions = length =>
  Array(length)
    .fill(0)
    .map((_, id) => ({ id, value: `Option ${id + 1}` }));

export const commonTooltipPropsExample = [
  { label: 'placement left', value: { placement: 'left' } },
  { label: 'exitDelay 200ms', value: { exitDelay: 200 } },
  { label: 'maxWidth 100px', value: { maxWidth: 100 } },
];

export const commonPopoverPropsExample = [
  { label: 'placement left', value: { placement: 'left' } },
  { label: 'hideDelay 200ms', value: { hideDelay: 200 } },
  { label: 'maxWidth 100px', value: { maxWidth: 100 } },
];
