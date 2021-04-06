export const inputExample = `
<Range>
  <Input/>
  <Input/>
</Range>
`;

export const datePickerExample = `
() => {

  const [fromValue, setFromValue] = React.useState('');
  const [toValue, setToValue] = React.useState('');

  return <Range>
    <DatePicker
      placeholderText="From"
      id="fromDate"
      value={fromValue}
      onChange={fromValue => setFromValue(fromValue)}
    />
    <DatePicker
       placeholderText="To"
       id="toDate"
       value={toValue}
       onChange={toValue => setToValue(toValue)}
    />
  </Range>
}
`;

export const errorState = `<Layout>
    <Cell>
      <Range>
      <DatePicker
        placeholderText="From"
        id="fromDate"
        status="error"
      />
      <DatePicker
         placeholderText="To"
         id="toDate"
         status="error"
      />
    </Range>
    </Cell>
    <Cell>
      <Range>
        <Input status="error"/>
        <Input status="error"/>
     </Range>
    </Cell>
</Layout>`;

export const disabledState = `<Layout>
    <Cell>
      <Range>
      <DatePicker
        placeholderText="From"
        id="fromDate"
        disabled
      />
      <DatePicker
         placeholderText="To"
         id="toDate"
         disabled
      />
    </Range>
    </Cell>
    <Cell>
      <Range>
        <Input disabled/>
        <Input disabled/>
     </Range>
    </Cell>
</Layout>`;
