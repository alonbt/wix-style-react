export const uncontrolled = `
<div style={{ textAlign: 'center' }}>
  <DropdownBase
    data-hook="story-dropdown-base-uncontrolled-click"
    options={[
      { id: 0, value: 'First option' },
      { id: 1, value: 'Second option' },
      { id: 2, value: 'Third option' },
      { id: 3, value: 'Fourth option' },
      { id: 4, value: 'Fifth option' },
      { id: 5, value: 'Sixth option' },
    ]}
  >
    {({ toggle, selectedOption = {} }) => {
      return (
        <TextButton
          skin="dark"
          suffixIcon={<Icons.ChevronDown />}
          onClick={toggle}
          dataHook={'drop-down-opener'}
        >
          {selectedOption.value || 'Please choose'}
        </TextButton>
      );
    }}
  </DropdownBase>
</div>;
`;

export const uncontrolledIcon = `
<div style={{ textAlign: 'center' }}>
  <DropdownBase
    data-hook="story-dropdown-base-uncontrolled-icon"
    showArrow
    options={[
      { id: 0, value: 'Today' },
      { id: 1, value: 'Yesterday' },
      { id: 2, value: 'Last 7 days' },
      { id: 3, value: 'Next 7 days' },
      { id: 4, value: 'A month ago' },
    ]}
  >
    {({ open, close }) => {
      return (
        <IconButton dataHook={"drop-down-opener"} skin="inverted" onMouseEnter={open} onMouseLeave={close}>
          <Icons.Date />
        </IconButton>
      );
    }}
  </DropdownBase>
</div>
`;

export const controlledButton = `
/* eslint-disable */

class ExampleControlledMouse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this._open = this._open.bind(this);
    this._close = this._close.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
  }

  _open() {
    this.setState({ open: true });
  }

  _close() {
    this.setState({ open: false });
  }

  _onKeyDown(e, delegateKeyDown) {
    const eventWasHandled = delegateKeyDown(e);

    // We'll open the list when pressing the Enter key
    if (!eventWasHandled && e.key === 'Enter') {
      this._open();
      e.preventDefault();
      return;
    }

    // Close on escape
    if (e.key === 'Escape') {
      this._close();
      e.preventDefault();
    }
  }

  render() {
    const { open } = this.state;

    return (
      <div style={{ textAlign: 'center' }}>
      <DropdownBase
        data-hook="story-dropdown-base-controlled-mouse"
        showArrow
        open={open}
        onMouseEnter={this._open}
        onMouseLeave={this._close}
        onSelect={this._close}
        options={[
          { id: 0, value: 'First option' },
          { id: 1, value: 'Second option' },
          { id: 2, value: 'Third option' },
          { id: 3, value: 'Fourth option' },
          { id: 4, value: 'Fifth option' },
          { id: 5, value: 'Sixth option' },
        ]}
      >
        {({ delegateKeyDown, selectedOption = {} }) => {
          return (
            <Button
              onKeyDown={e => this._onKeyDown(e, delegateKeyDown)}
              dataHook={"drop-down-opener"}
            >
              {selectedOption.value || 'Nothing is selected'}
            </Button>
          );
        }}
      </DropdownBase>
      </div>
    );
  }
}
`;

export const controlledInput = `
class ExampleControlledInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selectedId: -1,
      value: '',
    };

    this._open = this._open.bind(this);
    this._close = this._close.bind(this);
    this._toggle = this._toggle.bind(this);
    this._onSelect = this._onSelect.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
  }

  _open() {
    this.setState({ open: true });
  }

  _close() {
    this.setState({ open: false });
  }

  _toggle() {
    this.setState(({ open }) => ({
      open: !open,
    }));
  }

  _onSelect(selectedOption) {

    this.setState({
      selectedId: selectedOption.id,
      open: false,
      value: selectedOption.value,
    });
  }

  _onChange(e) {
    const { value } = e.target;

    this.setState({ value: e.target.value });

    if (value.trim()) {
      this._open();
    }
  }

  _onKeyDown(e, delegateKeyDown) {
    const eventWasHandled = delegateKeyDown(e);

    // We'll open the list when pressing the ArrowDown key
    if (!eventWasHandled && e.key === 'ArrowDown') {
      this._open();
      e.preventDefault();
      return;
    }

    // Close on escape
    if (e.key === 'Escape') {
      this._close();
      e.preventDefault();
    }
  }

  render() {
    const { open, selectedId, value } = this.state;

    return (
      <div style={{ textAlign: 'center' }}>
      <DropdownBase
        data-hook="story-dropdown-base-controlled-input"
        open={open}
        onClickOutside={this._close}
        options={[
          { id: 0, value: 'First option' },
          { id: 1, value: 'Second option' },
          { id: 2, value: 'Third option' },
          { id: 3, value: 'Fourth option' },
          { id: 4, value: 'Fifth option' },
          { id: 5, value: 'Sixth option' },
        ]}
        selectedId={selectedId}
        onSelect={this._onSelect}
      >
        {({ delegateKeyDown }) => {
          return (
            <Input
              menuArrow
              dataHook={"drop-down-opener"}
              placeholder="Type something"
              value={value}
              onChange={this._onChange}
              onInputClicked={this._open}
              onKeyDown={e => this._onKeyDown(e, delegateKeyDown)}
            />
          );
        }}
      </DropdownBase>
    </div>
    );
  }
}
`;

export const uncontrolledEllipsis = `
<Box align="center">
 <div style={{ width: "100px" }}>
  <DropdownBase
    fluid
    options={[
      { id: 0, value: 'First option' },
      { id: 1, value: 'Second option' },
      { id: 2, value: 'Third option' },
      { id: 3, value: 'Fourth option' },
      { id: 4, value: 'Fifth option' },
      { id: 5, value: 'Sixth option' },
    ]}
  >
    {({ toggle, selectedOption = {} }) => {
      return (
        <TextButton
          skin="dark"
          fluid
          ellipsis={true}
          suffixIcon={<Icons.ChevronDown />}
          onClick={toggle}
          dataHook={'drop-down-opener'}
        >
          {selectedOption.value || 'Please choose'}
        </TextButton>
      );
    }}
  </DropdownBase>
  </div>
</Box>
`;
