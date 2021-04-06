let counter = 0;
export function getSimpleExampleItems(options = {}) {
  const { draggable, addItemLabel } = options;
  return Array.from(new Array(2)).map((_, index) => {
    return {
      id: counter++,
      options: [{ value: `Node ${index}` }],
      draggable,
      addItemLabel: addItemLabel
        ? `${addItemLabel} to Node ${index}`
        : undefined,
      children: [
        {
          id: counter++,
          options: [{ value: `Node ${index} child` }],
          draggable,
        },
      ],
    };
  });
}
