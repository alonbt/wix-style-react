/* eslint-disable */

class CustomizingTags extends React.Component {
  render() {
    return (
      <TagList
        tags={[
          {
            id: '1',
            children: 'Luke Wilson',
            thumb: (
              <Avatar
                imgProps={{
                  src: 'https://randomuser.me/api/portraits/men/30.jpg',
                }}
                size="size18"
              />
            ),
          },
          {
            id: '2',
            theme: 'warning',
            children: 'Cancelled by client',
          },
          {
            id: '3',
            theme: 'error',
            children: 'Cancelled by parnter',
          },
        ]}
      />
    );
  }
}
