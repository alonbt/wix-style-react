/* eslint-disable */

function Usage() {
  const [currentTags, setTags] = React.useState([
    { id: '1', children: 'In Progress' },
    { id: '2', children: 'Canceled By Client' },
    { id: '3', children: 'Last 7 Days' },
  ]);
  const clearAll = () => setTags([]);
  const removeTag = tagId =>
    setTags(currentTags.filter(({ id }) => id !== tagId));

  return (
    <FormField label="Applied filters:">
      <TagList
        tags={currentTags}
        actionButton={{ label: 'Clear All', onClick: clearAll }}
        onTagRemove={removeTag}
      />
    </FormField>
  );
}
