/* eslint-disable no-undef */

import React from 'react';
import TextButton from '../../TextButton/TextButton';

import {
  MultiSelect,
  Card,
  FormField,
  contactItemBuilder,
} from 'wix-style-react';

const contacts = [
  { name: 'David Fincher', email: 'davidf@wix.com' },
  { name: 'John Doe', email: 'johnd@wix.com' },
  { name: 'Jane Martin', email: 'janem@wix.com' },
  { name: 'David ', email: 'davidf@gmail.com' },
  { name: 'John Doe', email: 'johnd@gmail.com' },
  { name: 'Jane Martin', email: 'janem@gmail.com' },
];

const options = contacts.map(contact => ({
  ...contact,
  ...contactItemBuilder({
    id: contact.email,
    title: contact.name,
    subtitle: contact.email,
    imageUrl: 'https://randomuser.me/api/portraits/women/39.jpg',
  }),
}));

class ContactsInput extends React.Component {
  constructor(props) {
    super(props);

    this.nextId = 0;
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

  createTag({ name, email }) {
    return {
      id: String(this.nextId++),
      label: name ? `${email} (${name})` : email,
    };
  }

  handleOnSelect(option) {
    const newTag = this.createTag({
      name: option.name,
      email: option.email,
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
    const tags = values.map(value => this.createTag({ email: value }));
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
        // If I remove this comment - the ReactLive get stuck
        dataHook="multi-select-standard"
        value={this.state.inputValue}
        onChange={this.handleOnChange}
        options={options}
        tags={this.state.tags}
        onManuallyInput={this.handleOnManuallyInput}
        onSelect={this.handleOnSelect}
        onRemoveTag={this.handleOnRemoveTag}
        predicate={this.predicate}
        customSuffix={<TextButton>+ Add Tag</TextButton>}
        highlight={false} // FIXME: This is a workaround a current bug
      />
    );
  }
}

render(
  <div style={{ width: '600px' }}>
    <Card>
      <Card.Content>
        <FormField label="Enter Contact Emails">
          <ContactsInput />
        </FormField>
      </Card.Content>
    </Card>
  </div>,
);
