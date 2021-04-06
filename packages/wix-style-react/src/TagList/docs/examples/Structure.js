/* eslint-disable */

class Structure extends React.Component {
  render() {
    return (
      <TagList
        tags={[
          { id: '1', children: 'Tag 1' },
          { id: '2', children: 'Tag 2' },
        ]}
        actionButton={{ label: 'Button' }}
      />
    );
  }
}
