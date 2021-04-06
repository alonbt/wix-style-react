export const standard = `<TimeInput />`;

export const disabled = `<TimeInput disabled />`;

export const disableAmPm = `<TimeInput disableAmPm />`;

export const showSeconds = `<TimeInput showSeconds />`;

export const status = `
<Layout>
  <Cell>
    <TimeInput status="error" />
  </Cell>
  <Cell>
    <TimeInput status="warning" />
  </Cell>
  <Cell>
    <TimeInput status="loading" />
  </Cell>
</Layout>
`;

export const customSuffix = `
<Layout>
  <Cell>
    <TimeInput customSuffix={<Input.IconAffix><LockLocked /></Input.IconAffix>} />
  </Cell>
  <Cell>
    <TimeInput customSuffix="hello" />
  </Cell>
</Layout>
`;
