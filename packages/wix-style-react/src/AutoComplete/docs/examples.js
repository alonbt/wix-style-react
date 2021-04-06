export const simple = `
class ControlledAutoComplete extends React.Component {
  state = { value: '' }

  onSelect = (option) => {
    this.setState({ value: option.value });
  }

  onChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <AutoComplete
        options={[
          { id: 0, value: 'First option' },
          { id: 1, value: 'Second option' },
          { id: 2, value: 'Third option' },
          { id: 3, value: 'Fifth option' },
          { id: 4, value: 'Fourth option' },
        ]}
        value={value}
        onChange={this.onChange}
        onSelect={this.onSelect}
        placeholder={'Start typing'}
        emptyStateMessage={\`Couldn't find: \${this.state.value}\`}
        predicate={option =>
          option.value.toLowerCase().indexOf(value.toLowerCase()) !==
          -1
        }
        popoverProps={{
          appendTo: 'window',
        }}
      />
    );
  }
}
`;

export const states = `
<Layout cols={1}>
  <FormField label="Disabled">
    <AutoComplete
      disabled
      options={Array(10)
        .fill(0)
        .map((_, id) => ({ id, value: \`Option \${id}\` }))}
    />
  </FormField>
  <FormField label="Error">
    <AutoComplete
      status="error"
      options={Array(10)
        .fill(0)
        .map((_, id) => ({ id, value: \`Option \${id}\` }))}
    />
  </FormField>
  <FormField label="Warning">
    <AutoComplete
      status="warning"
      options={Array(10)
        .fill(0)
        .map((_, id) => ({ id, value: \`Option \${id}\` }))}
    />
  </FormField>
  <FormField label="Loading">
    <AutoComplete
      status="loading"
      options={Array(10)
        .fill(0)
        .map((_, id) => ({ id, value: \`Option \${id}\` }))}
    />
  </FormField>
</Layout>
`;

export const overflow = `
<div style={{ display:'flex', justifyContent:'center', alignItems: 'center', width: '400px', height: '150px', background: 'rgba(240, 244, 247, 1)', overflow:'scroll'}}>
 <AutoComplete
  popoverProps={{ appendTo:"window" }}
  options={[
    { id: 0, value: 'Option 1' },
    { id: 1, value: 'Option 2' },
    { id: 2, value: 'Option 3' },
    { id: 3, value: 'Option 4' },
  ]}
placeholder={'Start typing'}
/>
</div>
`;

export const infinite = `
class ControlledAutoComplete extends React.Component {
  state = { value: '', num: 100 };

  onSelect = option => this.setState({ value: option.value });

  onChange = event => this.setState({ value: event.target.value });

  render() {
    const { value, num } = this.state;
    return (
      <AutoComplete
        infiniteScroll
        hasMore={num < 9999}
        loadMore={() => {
          setTimeout(() => this.setState({ num: num + 100 }), 250);
        }}
        options={Array(this.state.num)
          .fill(0)
          .map((_, id) => ({ id, value: \`Option \${id}\` }))}
        value={value}
        onChange={this.onChange}
        onSelect={this.onSelect}
        placeholder={'Start typing'}
        emptyStateMessage={\`Couldn't find: \${value}\`}
        predicate={option =>
          option.value.toLowerCase().indexOf(value.toLowerCase()) !== -1
        }
      />
    );
  }
}
`;
