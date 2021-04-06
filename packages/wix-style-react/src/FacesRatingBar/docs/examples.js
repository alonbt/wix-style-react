export const basicExample = `
 class MyComponent extends React.Component {
  state= { value: 3 };
  render() {
    const { value } = this.state;
    return (
      <FacesRatingBar
          value={value}
          onChange={ (rating) => this.setState({ value: rating })}
        />
      );
   }
 }
`;

export const readOnlyExample = `
      <Layout>
        <Cell>
          <FacesRatingBar value={1} readOnly />
        </Cell>
        <Cell>
          <FacesRatingBar value={2} readOnly />
        </Cell>
        <Cell>
          <FacesRatingBar value={3} readOnly />
        </Cell>
        <Cell>
          <FacesRatingBar value={4} readOnly />
        </Cell>
        <Cell>
          <FacesRatingBar value={5} readOnly />
        </Cell>
      </Layout>
`;

export const descriptionValuesExample = `
  class MyComponent extends React.Component {
    state= { value: 4 };
    render() {
      const descriptionValues = ['Strong Negative', 'Negative', 'Neutral', 'Positive', 'Strong Positive'];
      const { value } = this.state;
      return (
        <FacesRatingBar
          descriptionValues={descriptionValues}
          value={value}
          onChange={ (rating) => this.setState({ value: rating })}
        />
      );
    }
  }
`;
