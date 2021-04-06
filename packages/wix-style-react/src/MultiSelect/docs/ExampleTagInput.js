/* eslint-disable no-undef */

import React from 'react';
import TextButton from '../../TextButton/TextButton';

import { MultiSelect, Card, FormField } from 'wix-style-react';

class ExampleTagInput extends React.Component {
  constructor(props) {
    super(props);

    this.nextId = 0;
    this.state = {
      tags: [],
      inputValue: '',
    };

    this.handleOnManuallyInput = this.handleOnManuallyInput.bind(this);
    this.handleOnRemoveTag = this.handleOnRemoveTag.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnRemoveTag(tagId) {
    this.setState({
      tags: this.state.tags.filter(currTag => currTag.id !== tagId),
    });
  }

  handleOnChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleOnManuallyInput(values) {
    const tags = values.map(value => {
      const tag = { id: String(this.nextId++), label: value };
      return tag;
    });
    this.setState({ tags: [...this.state.tags, ...tags] });
  }

  render() {
    return (
      <MultiSelect
        dataHook="multi-select-tags-input"
        value={this.state.inputValue}
        onChange={this.handleOnChange}
        tags={this.state.tags}
        onManuallyInput={this.handleOnManuallyInput}
        onRemoveTag={this.handleOnRemoveTag}
        customSuffix={<TextButton>+ Add Tag</TextButton>}
      />
    );
  }
}

render(
  <div style={{ width: '600px' }}>
    <Card>
      <Card.Content>
        <FormField label="Enter Any Tag">
          <ExampleTagInput />
        </FormField>
      </Card.Content>
    </Card>
  </div>,
);
