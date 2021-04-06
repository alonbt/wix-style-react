/* eslint-disable no-undef */

import React from 'react';
import TextButton from '../../../TextButton/TextButton';
import { MultiSelect } from 'wix-style-react';

const options = [
  { value: 'Alabama', id: 'AL' },
  { value: 'Alaska', id: 'AK' },
  { value: 'Arizona', id: 'AZ' },
  { value: 'Arkansas', id: 'AR' },
  { value: 'California', id: 'CA' },
  { value: 'North Carolina', id: 'NC' },
  { value: 'Colorado', id: 'CO' },
  { value: 'Connecticut', id: 'CT' },
  { value: 'Delaware', id: 'DL' },
  { value: 'Florida', id: 'FL' },
  { value: 'Georgia', id: 'GA' },
  { value: 'Hawaii', id: 'HI' },
  { value: 'Idaho', id: 'IL' },
  { value: 'Illinois', id: 'IN' },
  { value: 'Indiana', id: 'IA' },
];

class StateSelection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      options,
    };

    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleOnRemoveTag = this.handleOnRemoveTag.bind(this);
  }

  createTag({ countryName, countryCode }) {
    return {
      id: countryCode, // When tag ids correspond to option ids, then MultiSelect will show only unselected options.
      label: `${countryName} (${countryCode || '?'})`,
    };
  }

  handleOnSelect(option) {
    const newTag = this.createTag({
      countryName: option.value,
      countryCode: option.id,
    });

    this.setState({ tags: [...this.state.tags, newTag] });
  }

  handleOnRemoveTag(tagId) {
    this.setState({
      tags: this.state.tags.filter(currTag => currTag.id !== tagId),
    });
  }

  render() {
    return (
      <MultiSelect
        mode="select"
        tags={this.state.tags}
        onSelect={this.handleOnSelect}
        onRemoveTag={this.handleOnRemoveTag}
        options={this.state.options}
        customSuffix={<TextButton>+ Add Tag</TextButton>}
        dataHook={this.props.dataHook}
      />
    );
  }
}

export default StateSelection;
