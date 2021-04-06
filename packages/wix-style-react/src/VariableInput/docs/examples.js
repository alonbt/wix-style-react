const _statusExample = (status, statusMessage) => `<VariableInput
initialValue="Example {{page.name1}}"
variableParser={value => {
  return value === 'page.name' ? 'Page name' : false;
}}
status='${status}'
statusMessage='${statusMessage}'
/>`;
const _sizeExample = size => `<VariableInput
initialValue="${size} example {{page.name}}"
size='${size}'
variableParser={value => {
  return value === 'page.name' ? 'Page name' : false;
}}
/>`;
const _rowsExample = rows => `<VariableInput
initialValue="${rows} rows example {{page.name}}"
rows={${rows}}
variableParser={value => {
  return value === 'page.name' ? 'Page name' : false;
}}
/>`;

export const status = `<Layout>
<Cell>${_statusExample('error', 'Please fix this')}</Cell>
<Cell>${_statusExample('warning', `I am warning you`)}</Cell>
<Cell>${_statusExample('loading', `Loading...`)}</Cell>
</Layout>`;
export const simple = `<VariableInput
initialValue="Example {{page.name}}"
variableParser={value => {
  return value === 'page.name' ? 'Page name' : false;
}}
/>`;
export const placeholder = `<VariableInput placeholder="This is a placeholder" />`;
export const size = `<Layout>
  <Cell>
    ${_sizeExample('small')}
  </Cell>
  <Cell>
    ${_sizeExample('medium')}
  </Cell>
  <Cell>
    ${_sizeExample('large')}
  </Cell>
</Layout>`;
export const rows = `<Layout>
  <Cell>
    ${_rowsExample(1)}
  </Cell>
  <Cell>
    ${_rowsExample(5)}
  </Cell>
</Layout>`;
export const disabled = `<VariableInput
disabled
initialValue="Example {{page.name}}"
variableParser={value => {
  return value === 'page.name' ? 'Page name' : false;
}}
/>`;
export const readOnly = `<VariableInput
readOnly
initialValue="Example {{page.name}}"
variableParser={value => {
  return value === 'page.name' ? 'Page name' : false;
}}
/>`;
export const multiline = `<VariableInput
initialValue="Example {{page.name}} Example {{page.name}} Example {{page.name}} Example {{page.name}}"
multiline={false}
variableParser={value => {
  return value === 'page.name' ? 'Page name' : false;
}}
/>`;
