/* eslint-disable */

class Collapsable extends React.Component {
  render() {
    return (
      <TagList
        tags={[
          { id: '1', children: 'Tag 1' },
          { id: '2', children: 'Tag 2' },
          { id: '3', children: 'Tag 3' },
          { id: '4', children: 'Tag 4' },
          { id: '5', children: 'Tag 5' },
        ]}
        maxVisibleTags={3}
        toggleMoreButton={(amountOfHiddenTags, isExpanded) => ({
          label: isExpanded ? 'Show Less' : `+${amountOfHiddenTags} More`,
          tooltipContent: !isExpanded && 'Show More',
        })}
      />
    );
  }
}
