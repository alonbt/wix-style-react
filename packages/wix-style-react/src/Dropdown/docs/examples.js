export const simple = `
  <Dropdown
    placeholder="Select an option"
    options={[{id: 0, value: 'Left'}, {id: 1, value: 'Right'}, {id: 2, value: 'Ambidextrous'}]}
    />
`;

export const group = `
  <Dropdown
    placeholder="Select an option"
      options={[
    listItemSectionBuilder({
      id: 0,
      type: 'subheader',
      title: 'Group 1',
    }),
    { id: 1, value: 'Option 1' },
    { id: 2, value: 'Option 2' },
    listItemSectionBuilder({
        id: 3,
      type: 'divider',
    }),
    { id: 4, value: 'Option 3' },
  ]}
    />
`;

export const sizes = `
<Layout>
  <Cell>
      <Dropdown
        size="small"
        placeholder="Select an option"
        options={[
          {id: 0, value: 'Left'},
          {id: 1, value: 'Right'},
          listItemSectionBuilder({type: 'divider', id: 2}),
          {id: 3, value: 'Ambidextrous'}
        ]}
        />
  </Cell>
  <Cell>
      <Dropdown
        size="medium"
        placeholder="Select an option"
        options={[
          {id: 0, value: 'Left'},
          {id: 1, value: 'Right'},
          listItemSectionBuilder({type: 'divider', id: 2}),
          {id: 3, value: 'Ambidextrous'}
        ]}        />
  </Cell>
  <Cell>
    <Dropdown
      size="large"
      placeholder="Select an option"
        options={[
          {id: 0, value: 'Left'},
          {id: 1, value: 'Right'},
          listItemSectionBuilder({type: 'divider', id: 2}),
          {id: 3, value: 'Ambidextrous'}
        ]}
      />
  </Cell>
</Layout>
`;

export const affix = `
<Layout>
<Cell>
  <Dropdown
    placeholder="Select an option"
    suffix={<Input.Affix>%</Input.Affix>}
    options={[{id: 0, value: '35'}, {id: 1, value: '40'}, {id: 2, value: '50'}]}
    />
</Cell>
<Cell>
  <Dropdown
    placeholder="Select an option"
    prefix={<Input.Affix>$</Input.Affix>}
    options={[{id: 0, value: '35'}, {id: 1, value: '40'}, {id: 2, value: '50'}]}
    />
</Cell>
</Layout>
`;

export const fixedHeaderFooter = `
  <Dropdown
    placeholder="Select an option"
    fixedHeader={<ListItemAction title="Fixed Header" />}
    fixedFooter={<ListItemAction title="Fixed Footer" />}
    options={[
    { id: 1, value: 'Option 1' },
    { id: 2, value: 'Option 2' },
    { id: 3, value: 'Option 3' },
    { id: 4, value: 'Option 4' },
    { id: 5, value: 'Option 5' },
    { id: 6, value: 'Option 6' },
    { id: 7, value: 'Option 7' },
    { id: 8, value: 'Option 8' },
    { id: 9, value: 'Option 9' },
    { id: 10, value: 'Option 10' },
        ]}
          maxHeightPixels="234px"

   />
`;

export const states = `
<Layout cols={2}>
<Dropdown
  options={[
    { id: 0, value: 'Option 1' },
    { id: 1, value: 'Option 2' },
    { id: 2, value: 'Option 3' },
    { id: 3, value: 'Option 4' },
  ]}
  disabled
  placeholder="Select an option"
/>
<Dropdown
  options={[
    { id: 0, value: 'Option 1' },
    { id: 1, value: 'Option 2' },
    { id: 2, value: 'Option 3' },
    { id: 3, value: 'Option 4' },
  ]}
  status="error"
  statusMessage="I am in error state"
  placeholder="Select an option"
/>
</Layout>
`;

export const widthConstraints = `
<Layout cols={1}>
  <Dropdown
    options={[
      { id: 0, value: 'Very long long long long long long long long long long long long long long option' },
      { id: 1, value: 'Option 2' },
      { id: 2, value: 'Option 3' },
      { id: 3, value: 'Option 4' },
    ]}
    placeholder="Default"
  />
  <Dropdown
    popoverProps={{ appendTo: "window", maxWidth: "600px" }}
    options={[
      { id: 0, value: 'Very long long long long long long long long long long long long long long option' },
      { id: 1, value: 'Option 2' },
      { id: 2, value: 'Option 3' },
      { id: 3, value: 'Option 4' },
    ]}
    placeholder="Detached"
  />
</Layout>
`;

export const heightConstraints = `
<Dropdown
  maxHeightPixels="107px"
  options={[
    { id: 0, value: 'Option 1' },
    { id: 1, value: 'Option 2' },
    { id: 2, value: 'Option 3' },
    { id: 3, value: 'Option 4' },
  ]}
  placeholder="Select an option"
/>
`;

export const native = `
<Dropdown
  options={[
    { id: 0, value: 'Option 1' },
    { id: 1, value: 'Option 2' },
    { id: 2, value: 'Option 3' },
    { id: 3, value: 'Option 4' },
  ]}
  placeholder="Select an option"
  native
/>
`;

export const infinite = `
class InfiniteScrollExample extends React.Component {
  total = 300;
  itemsPerPage = 15;

  state = { hasMore: true, options: [] };

  componentDidMount() {
    this.generateData();
  }

  generateOption = id => ({ id, value: 'Option ' + id });

  generateData = () => {
    const newOptions = [];
    const { options } = this.state;

    for (let i = 0; i < this.itemsPerPage; i++) {
      newOptions.push(this.generateOption(options.length + i));
    }

    this.setState({ options: options.concat(newOptions) });
  };

  loadMoreData = () => {
    const { options } = this.state;
    if (options.length >= this.total) {
      this.setState({ hasMore: false });
    } else {
      this.generateData();
    }
  };

  loadMore = () => setTimeout(this.loadMoreData, 1000);

  render() {
    const { options, hasMore } = this.state;

    return (
      <Dropdown
        infiniteScroll
        hasMore={hasMore}
        loadMore={this.loadMore}
        options={options}
      />
    );
  }
}
`;

export const overflow = `
<div style={{ display:'flex', justifyContent:'center', alignItems: 'center', width: '400px', height: '150px', background: 'rgba(240, 244, 247, 1)', overflow:'scroll'}}>
  <Dropdown
    popoverProps={{ appendTo:"window" }}
    options={[
      { id: 0, value: 'Option 1' },
      { id: 1, value: 'Option 2' },
      { id: 2, value: 'Option 3' },
      { id: 3, value: 'Option 4' },
    ]}
    placeholder="Select an option"
  />
</div>
`;
