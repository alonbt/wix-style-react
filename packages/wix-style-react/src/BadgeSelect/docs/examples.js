export const basicExample = `
  <BadgeSelect
    options={
      [
        {id: '0', skin: 'general', text:'general'},
        {id: '1', skin: 'standard', text:'standard'},
        {id: '2', skin: 'danger', text:'danger'},
        {id: '3', skin: 'success', text:'success'},
        {id: '4', skin: 'neutral', text:'neutral'},
        {id: '5', skin: 'neutralLight', text:'neutralLight'},
        {id: '6', skin: 'warning', text:'warning'},
        {id: '7', skin: 'warningLight', text:'warningLight'},
        {id: '8', skin: 'urgent', text:'urgent'},
        {id: '9', skin: 'neutralStandard', text:'neutralStandard'},
        {id: '10', skin: 'neutralSuccess', text:'neutralSuccess'},
        {id: '11', skin: 'neutralDanger', text:'neutralDanger'},
        {id: '12', skin: 'premium', text:'premium'},
      ]
    }
   />
`;

export const controlledModeExample = `
 class MyComponent extends React.Component {

  state= {
    selectedId: '1',
  };

  render() {
    const { selectedId } = this.state;
    const options = [
      {
        id: '0',
        skin: 'general',
        text: 'general',
      },
      {
        id: '1',
        skin: 'standard',
        text: 'standard',
      },
      {
        id: '2',
        skin: 'danger',
        text: 'danger',
      },
      {
        id: '3',
        skin: 'success',
        text: 'success',
      },
    ];

    return (
      <BadgeSelect
          options={options}
          selectedId={selectedId}
          onSelect={ selectedOption => this.setState({ selectedId: selectedOption.id })}
        />
      );
   }
 }
`;

export const sizesExample = `
      <Layout>
        <Cell>
          <BadgeSelect size="small" options={[{id: '0', skin: 'success', text:'success'}, {id: '1', skin: 'warning', text:'warning'}]} />
        </Cell>
        <Cell>
          <BadgeSelect size="medium" options={[{id: '0', skin: 'success', text:'success'}, {id: '1', skin: 'warning', text:'warning'}]} />
        </Cell>
      </Layout>
`;

export const typeExample = `
      <Layout>
        <Cell>
          <BadgeSelect type="solid" options={[{id: '0', skin: 'warning', text:'warning'}, {id: '1', skin: 'success', text:'success'}]} />
        </Cell>
        <Cell>
          <BadgeSelect type="outlined" options={[{id: '0', skin: 'warning', text:'warning'}, {id: '1', skin: 'success', text:'success'}]} />
        </Cell>
        <Cell>
          <BadgeSelect type="transparent" options={[{id: '0', skin: 'warning', text:'warning'}, {id: '1', skin: 'success', text:'success'}]} />
        </Cell>
      </Layout>
`;

export const subtitle = `
  <Layout>
    <Cell>
      <BadgeSelect
        options={
          [
            {id: '0', skin: 'general', text:'general', subtitle: 'subtitle'},
            {id: '1', skin: 'standard', text:'standard'},
          ]
        }
      />
    </Cell>
    <Cell>
      <BadgeSelect
        options={
          [
            {id: '0', skin: 'general', text:'general', subtitle: 'this is a very long subtitle'},
            {id: '1', skin: 'standard', text:'standard'},
          ]
        }
      />
    </Cell>
  </Layout>
`;
