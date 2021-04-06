import React from 'react';

export const single = `
() => {
  const DATA_SOURCE = (searchQuery, offset, limit) =>
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
          title.toLowerCase().startsWith(searchQuery.toLowerCase()),
        );

        resolve({
          items: filtered.slice(offset, offset + limit),
          totalCount: filtered.length,
        });
      }, 2000),
    );
  return (
    <ModalSelectorLayout
      height="540px"
      itemsPerPage={4}
      onCancel={() => 'canceled'}
      onOk={function onOk(data) {
        const isArray = Array.isArray(data),
          view = function view(i) {
            return { id: i.id, title: i.title, subtitle: i.substitle };
          };
        return JSON.stringify(isArray ? data.map(view) : view(data));
      }}
      searchDebounceMs={150}
      dataSource={DATA_SOURCE}
    />
  );
};
`;

export const multi = `
() => {
  const DATA_SOURCE = (searchQuery, offset, limit) =>
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
          title.toLowerCase().startsWith(searchQuery.toLowerCase()),
        );

        resolve({
          items: filtered.slice(offset, offset + limit),
          totalCount: filtered.length,
        });
      }, 2000),
    );
  return (
    <ModalSelectorLayout
      multiple
      height="540px"
      itemsPerPage={4}
      onCancel={() => 'canceled'}
      onOk={function onOk(data) {
        const isArray = Array.isArray(data),
          view = function view(i) {
            return { id: i.id, title: i.title, subtitle: i.substitle };
          };
        return JSON.stringify(isArray ? data.map(view) : view(data));
      }}
      searchDebounceMs={150}
      dataSource={DATA_SOURCE}
    />
  );
};
`;
