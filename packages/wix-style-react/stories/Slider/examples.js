export const plainExample = `
class SliderWithState extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 3,
    };
    this.change = this.change.bind(this);
  }

  change(value) { this.setState({ value }) }

  render() {
    const { value } = this.state;
    return (
      <Layout>
        <Cell>
        <FormField label="Slider Label">
          <Slider onChange={this.change} min={1} max={10} value={value} displayMarks={false} />
        </FormField>
        </Cell>
      </Layout>
    );
  }
}
`;

export const rangeSlider = `
class SliderWithState extends React.Component {
  constructor() {
    super();
    this.state = {
      value: [2,4],
    };
    this.change = this.change.bind(this);
  }

  change(value) { this.setState({ value }) }

  render() {
    const { value } = this.state;
    return (
      <Layout>
        <Cell>
        <FormField label="Slider Label">
          <Slider onChange={this.change} min={1} max={10} value={value} displayMarks={false} />
        </FormField>
        </Cell>
      </Layout>
    );
  }
}
`;

export const plainSliderMarks = `
class SliderWithState extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 3,
    };
    this.change = this.change.bind(this);
  }

  change(value) { this.setState({ value }) }

  render() {
    const { value } = this.state;
    return (
      <div style={{ padding:'20px 0'}}>
        <FormField label="Slider Label">
          <Slider onChange={this.change} min={1} max={10} value={value} />
        </FormField>
      </div>
    );
  }
}
`;

export const label = `
class SliderWithState extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 3,
    };
    this.change = this.change.bind(this);
  }

  change(value) { this.setState({ value }) }

  render() {
    const { value } = this.state;
    return (
      <Layout>
        <Cell>
        <FormField label="Slider Label" labelPlacement="top">
          <Slider onChange={this.change} min={1} max={10} value={value} displayMarks={false} />
        </FormField>
        </Cell>
        <Cell>
        <FormField label="Slider Label" labelPlacement="left">
          <Slider onChange={this.change} min={1} max={10} value={value} displayMarks={false} />
        </FormField>
        </Cell>
        <Cell>
        <FormField label="Slider Label" labelPlacement="right">
          <Slider onChange={this.change} min={1} max={10} value={value} displayMarks={false} />
        </FormField>
        </Cell>
      </Layout>
    );
  }
}
`;
