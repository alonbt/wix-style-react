/* eslint-disable */

class Sizes extends React.Component {
  render() {
    return (
      <Layout>
        <Cell>
          <TagList
            tags={[
              { id: '1', children: 'Tag 1' },
              { id: '2', children: 'Tag 2' },
              { id: '3', children: 'Tag 3' },
            ]}
            actionButton={{ label: 'Button' }}
          />
        </Cell>
        <Cell>
          <TagList
            size="medium"
            tags={[
              { id: '1', children: 'Tag 1' },
              { id: '2', children: 'Tag 2' },
              { id: '3', children: 'Tag 3' },
            ]}
            actionButton={{ label: 'Button' }}
          />
        </Cell>
        <Cell>
          <TagList
            size="large"
            tags={[
              { id: '1', children: 'Tag 1' },
              { id: '2', children: 'Tag 2' },
              { id: '3', children: 'Tag 3' },
            ]}
            actionButton={{ label: 'Button' }}
          />
        </Cell>
      </Layout>
    );
  }
}
