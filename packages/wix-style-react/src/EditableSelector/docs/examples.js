export const cardWithEditableSelector = `
class CardWithEditableSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [{ title: 'Pumpkin Seeds' }, { title: 'Sunflower Seeds' }],
      selectedIndex: null,
    };
  }

  onOptionAdded = ({ newTitle }) => {
    this.setState({
      options: [...this.state.options, { title: newTitle }],
    });
  };

  onOptionEdit = ({ newTitle, index }) => {
    this.setState({
      options: this.state.options.map((option, i) =>
        index === i ? { title: newTitle } : option,
      ),
    });
  };

  onOptionToggle = index => {
    const selectedIndex = this.state.selectedIndex;
    if (index === selectedIndex) {
      return;
    }
    const newOptions = this.state.options.map(opt => Object.assign({}, opt));
    if (selectedIndex !== null) {
      newOptions[selectedIndex].isSelected = false;
    }
    newOptions[index].isSelected = true;
    this.setState({
      options: newOptions,
      selectedIndex: index,
    });
  };

  onOptionDelete = ({ index }) => {
    let newSelectedIndex = this.state.selectedIndex;
    if (index === this.state.selectedIndex) {
      newSelectedIndex = null;
    } else if (index < this.state.selectedIndex) {
      newSelectedIndex = 1;
    }
    this.setState({
      options: this.state.options.filter((option, i) => index !== i),
      selectedIndex: newSelectedIndex,
    });
  };

  render() {
    return (
      <Layout>
        <Cell span={6}>
          <Card>
            <Card.Header title="Editable Selector Inside Card" />
            <Card.Divider />
            <Card.Content>
              <EditableSelector
                onOptionAdded={params => this.onOptionAdded(params)}
                onOptionEdit={params => this.onOptionEdit(params)}
                onOptionDelete={params => this.onOptionDelete(params)}
                onOptionToggle={params => this.onOptionToggle(params)}
                toggleType={'radio'}
                title="Type of Seeds"
                options={this.state.options}
              />
            </Card.Content>
          </Card>
        </Cell>
      </Layout>
    );
  }
}
`;

export const popoverWithEditableSelector = `
class PopoverWithEditableSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { title: 'Marc Banks' },
        { title: 'Bernard Park' },
        { title: 'Carlos Dunn' },
        { title: 'Norman Reeves' },
        { title: 'Richard Medina' },
      ],
      shown: false,
    };
  }

  onOptionAdded = ({ newTitle }) => {
    this.setState({
      options: [...this.state.options, { title: newTitle, isSelected: true }],
    });
  };

  onOptionEdit = ({ newTitle, index }) => {
    this.setState({
      options: this.state.options.map((option, i) =>
        index === i ? { title: newTitle } : option,
      ),
    });
  };

  onOptionToggle = index => {
    this.setState({
      options: this.state.options.map((option, i) => {
        if (index === i) {
          option.isSelected = !option.isSelected;
          return option;
        } else {
          return option;
        }
      }),
    });
  };

  onOptionDelete = ({ index }) => {
    this.setState({
      options: this.state.options.filter((option, i) => index !== i),
    });
  };

  onTogglePopover = () => {
    this.setState(({ shown }) => ({ shown: !shown }));
  };

  render() {
    const { shown } = this.state;

    const content = (
      <EditableSelector
        onOptionAdded={params => this.onOptionAdded(params)}
        onOptionEdit={params => this.onOptionEdit(params)}
        onOptionDelete={params => this.onOptionDelete(params)}
        onOptionToggle={params => this.onOptionToggle(params)}
        options={this.state.options}
      />
    );

    return (
      <Box minHeight={300}>
        <Popover
          placement="right-start"
          content={content}
          shown={shown}
          showArrow
        >
          <Popover.Element>
            <Button onClick={() => this.onTogglePopover()}>Click me</Button>
          </Popover.Element>
          <Popover.Content>
            <Card>
              <Card.Content>{content}</Card.Content>
            </Card>
          </Popover.Content>
        </Popover>
      </Box>
    );
  }
}
`;
