export const basicExample = `
 class MyComponent extends React.Component {

  state= { value: 3 };

  render() {
    const { value } = this.state;

    return (
      <StarsRatingBar
          value={value}
          onChange={ (rating) => this.setState({ value: rating })}
        />
      );
   }
 }
`;

export const readOnlyExample = `<StarsRatingBar value={3} readOnly={true} />`;

export const interactiveModeSizesExample = `
      <Layout>
        <Cell>
          <StarsRatingBar value={2} size="large" />
        </Cell>
      </Layout>
`;

export const readOnlyModeSizesExample = `
      <Layout>
        <Cell>
          <StarsRatingBar value={2} readOnly size="tiny" />
        </Cell>
        <Cell>
          <StarsRatingBar value={2} readOnly size="small" />
        </Cell>
        <Cell>
          <StarsRatingBar value={2} readOnly />
        </Cell>
        <Cell>
          <StarsRatingBar value={2} readOnly size="large" />
        </Cell>
      </Layout>
`;

export const rateCaptionsExample = `
  class MyComponent extends React.Component {

    state= { value: 4 };

    render() {
      const descriptionValues = ['Very bad', 'Bad', 'Ok', 'Good', 'Very good'];
      const { value } = this.state;

      return (
        <StarsRatingBar
          descriptionValues={descriptionValues}
          value={value}
          onChange={ (rating) => this.setState({ value: rating })}
        />
      );
    }
  }
`;
