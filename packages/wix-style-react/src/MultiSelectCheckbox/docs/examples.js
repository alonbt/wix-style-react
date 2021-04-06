export const options = [
  'Alabama',
  'Arkansas',
  'California',
  'New York',
  'Ohio',
  'Texas',
  'Utah',
  'Washington',
].map(state => ({ value: state, id: state }));

export const simple = `
class Example extends React.Component {
  state = { selectedOptions: ['Alabama', 'California'] };

  onSelect = option => this.setState({selectedOptions: [...this.state.selectedOptions, option]});

  onDeselect = option => this.setState({selectedOptions: this.state.selectedOptions.filter(item => item !== option)});

  render() {
    const { selectedOptions } = this.state;
    return (
      <MultiSelectCheckbox
        options={${JSON.stringify(options)}}
        selectedOptions={selectedOptions}
        onSelect={this.onSelect}
        onDeselect={this.onDeselect}
      />
    );
  }
}
`;

const personalTrainers = [
  'Christian Mills',
  'Logan Chandler',
  'Paul Simon',
].map(
  name =>
    `listItemSelectBuilder({
     checkbox: true,
     id: '${name}',
     title: '${name}',
  }),`,
);

personalTrainers.unshift(`
     listItemSectionBuilder({
        title: 'Personal Trainers',
      }),
`);

export const usingBuilders = `
class BuildersExample extends React.Component {
  state = { selectedOptions: ['Logan Chandler'] };

  onSelect = optionId  =>
    optionId &&
        this.setState({ selectedOptions: [...this.state.selectedOptions, optionId] });

  onDeselect = optionId =>
    this.setState({
      selectedOptions: this.state.selectedOptions.filter(
        item => item !== optionId,
      ),
    });

  render() {
    const { selectedOptions } = this.state;
    const optionsList = [
       listItemSectionBuilder({
        title: 'Personal Trainers',
       }),
        listItemSelectBuilder({
            checkbox: true,
            id: 'Logan Chandler',
            title: 'Logan Chandler',
            label: 'Logan Chandler Label',
        }),
       { value: 'Paul Simon', id: 'Paul Simon' },
       listItemSectionBuilder({
        title: 'Nutritionists',
       }),
       listItemSelectBuilder({
            checkbox: true,
            id: 'Etta Wheeler',
            title: 'Etta Wheeler',
            label: 'Etta Wheeler Label',
          }),
        { value: 'Robert Ortega', id: 'Robert Ortega'}
        ];
    return (
      <MultiSelectCheckbox
        options={optionsList}
        selectedOptions={selectedOptions}
        onSelect={this.onSelect}
        onDeselect={this.onDeselect}
      />
    );
  }
}
`;

export const controlled = `
class ControlledExample extends React.Component {
  state = { selectedOptions: ['Logan Chandler'], value: 'Logan Chandler' };

  getValue = selectedOptions => {
    if (selectedOptions.length === 3) {
      return 'All Personal Trainers';
    }
    return selectedOptions.join(', ');
  };

  onSelect = optionId => {
    if (optionId) {
      const selectedOptions = [...this.state.selectedOptions, optionId];
      const value = this.getValue(selectedOptions);
      this.setState({ selectedOptions, value });
    }
  };

  onDeselect = optionId => {
    const selectedOptions = this.state.selectedOptions.filter(
      item => item !== optionId,
    );
    const value = this.getValue(selectedOptions);
    this.setState({ selectedOptions, value });
  }

  render() {
    const { selectedOptions, value } = this.state;
    const optionsList = [
      listItemSectionBuilder({
        title: 'Personal Trainers',
      }),
      { value: 'Logan Chandler', id: 'Logan Chandler' },
      { value: 'Paul Simon', id: 'Paul Simon' },
      { value: 'Art Garfunkel', id: 'Art Garfunkel' },
    ];
    return (
      <MultiSelectCheckbox
        options={optionsList}
        selectedOptions={selectedOptions}
        onSelect={this.onSelect}
        onDeselect={this.onDeselect}
        value={value}
      />
    );
  }
}
`;
