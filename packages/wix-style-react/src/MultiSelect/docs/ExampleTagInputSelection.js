/* eslint-disable no-undef */

import React from 'react';
import TextButton from '../../TextButton/TextButton';

import { MultiSelect, Card, FormField } from 'wix-style-react';

const countries = [
  { name: 'Alabama', code: 'AL' },
  { name: 'Alaska', code: 'AK' },
  { name: 'Arizona', code: 'AZ' },
  { name: 'Arkansas', code: 'AR' },
  { name: 'California', code: 'CA' },
  { name: 'North Carolina', code: 'NC' },
  { name: 'Colorado', code: 'CO' },
  { name: 'Connecticut', code: 'CT' },
  { name: 'Delaware', code: 'DL' },
  { name: 'Florida', code: 'FL' },
  { name: 'Georgia', code: 'GA' },
  { name: 'Hawaii', code: 'HI' },
  { name: 'Idaho', code: 'IL' },
  { name: 'Illinois', code: 'IN' },
  { name: 'Indiana', code: 'IA' },
];

const options = countries.map(country => ({
  ...country,
  value: country.name, // This can be any ReactNode
  id: country.code,
}));

class CountryInput extends React.Component {
  constructor(props) {
    super(props);

    this.nextTagId = 0;
    this.state = {
      tags: [],
      inputValue: '',
    };

    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleOnManuallyInput = this.handleOnManuallyInput.bind(this);
    this.handleOnRemoveTag = this.handleOnRemoveTag.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.predicate = this.predicate.bind(this);
  }

  createTag({ countryName, countryCode }) {
    return {
      id: countryCode || String(this.nextTagId++), // When tag ids correspond to option ids, then MultiSelect will show only unselected options.
      label: `${countryName} (${countryCode || '?'})`,
    };
  }

  handleOnSelect(option) {
    const newTag = this.createTag({
      countryName: option.name,
      countryCode: option.code,
    });

    this.setState({ tags: [...this.state.tags, newTag] });
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
    const tags = values.map(value =>
      this.createTag({
        countryName: value,
      }),
    );
    this.setState({ tags: [...this.state.tags, ...tags] });
  }

  predicate(option) {
    return `${option.name} + ${option.emial}`
      .toLowerCase()
      .includes(this.state.inputValue.toLowerCase());
  }

  render() {
    return (
      <MultiSelect
        dataHook="multi-select-tag-input-selection"
        value={this.state.inputValue}
        onChange={this.handleOnChange}
        options={options}
        tags={this.state.tags}
        onManuallyInput={this.handleOnManuallyInput}
        onSelect={this.handleOnSelect}
        onRemoveTag={this.handleOnRemoveTag}
        predicate={this.predicate}
        customSuffix={<TextButton>+ Add Tag</TextButton>}
      />
    );
  }
}

render(
  <div style={{ width: '600px' }}>
    <Card>
      <Card.Content>
        <FormField label="Enter Or Select Countries">
          <CountryInput />
        </FormField>
      </Card.Content>
    </Card>
  </div>,
);
