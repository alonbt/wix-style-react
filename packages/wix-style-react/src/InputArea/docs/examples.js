export const standard = `<InputArea placeholder="This is a placeholder" resizable />`;

export const letterCounting = `<InputArea value ="I typed exactly 37 letters out of 100" resizable maxLength={100} hasCounter />`;

export const disabledReadOnly = `
<Layout>
  <Cell>
    <InputArea placeholder="This is a placeholder" resizable disabled />
  </Cell>
  <Cell>
    <InputArea placeholder="This is a placeholder" resizable readOnly />
  </Cell>
</Layout>
`;

export const status = `
<Layout>
  <Cell>
    <InputArea placeholder="This is a placeholder" resizable status="error" />
  </Cell>
  <Cell>
    <InputArea placeholder="This is a placeholder" resizable status="warning" />
  </Cell>
  <Cell>
    <InputArea placeholder="This is a placeholder" resizable status="loading" />
  </Cell>
</Layout>
`;
