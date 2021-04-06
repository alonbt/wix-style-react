import React from 'react';

const DATA_SOURCE = `(searchQuery, offset, limit) =>
new Promise(resolve =>
  setTimeout(() => {
    const items = Array(50)
      .fill(0)
      .map((_, i) => ({
        id: i,
        title: \`Title \${i}\`,
        subtitle: \`Subtitle \${i}\`,
        extraText: \`Extra Text \${i}\`,
        disabled: !(i % 2),
        image: (
          <img
            width="100%"
            height="100%"
            src="http://via.placeholder.com/100x100"
          />
        ),
      }));

    const filtered = items.filter(({ title }) =>
      title.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    resolve({
      items: filtered.slice(offset, offset + limit),
      totalCount: filtered.length,
    });
  }, 2000),
)`;

export const single = `
() => {
  const DATA_SOURCE = ${DATA_SOURCE};
  return (
    <CustomModalLayout
      width="600px"
      height="540px"
      title="Choose Your Items"
      primaryButtonText="Select"
      secondaryButtonText="Cancel"
      onCloseButtonClick={() => {}}
      removeContentPadding
      showHeaderDivider
    >
      <SelectorList
        itemsPerPage={8}
        searchDebounceMs={150}
        dataSource={DATA_SOURCE}
      />
    </CustomModalLayout>
  );
};
`;

export const multi = `
() => {
  const DATA_SOURCE = ${DATA_SOURCE};
  return (
    <SelectorList
      multiple
      itemsPerPage={8}
      searchDebounceMs={150}
      dataSource={DATA_SOURCE}
    >
      {({
        renderList,
        renderToggleAllCheckbox,
        selectedItems,
      }) => (
        <CustomModalLayout
          width="600px"
          height="540px"
          title="Choose Your Items"
          primaryButtonText="Select"
          primaryButtonProps={{
            disabled: !selectedItems.length,
          }}
          secondaryButtonText="Cancel"
          onCloseButtonClick={() => {}}
          sideActions={renderToggleAllCheckbox()}
          removeContentPadding
          showHeaderDivider
        >
          {renderList()}
        </CustomModalLayout>
      )}
    </SelectorList>
  );
};
`;
