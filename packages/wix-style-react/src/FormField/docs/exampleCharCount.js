/* eslint-disable */
class FormFieldCharCount extends React.PureComponent {
  state = { charCount: 0 };
  render() {
    return (
      <FormField label="Label" charCount={10 - this.state.charCount}>
        <Input onChange={event => this.setState({ charCount: event.target.value.length })} />
      </FormField>
    );
  }
}
