import { getSimpleExampleItems } from './examplesConstants';

export function getSource({
  preventChangeDepth,
  readOnly = false,
  items = getSimpleExampleItems(),
  addItemLabel = '',
  maxDepth,
}) {
  return `
() => {
  const [items, updateItems] = React.useState(${JSON.stringify(items)});
  return <StyledNestableList 
    preventChangeDepth={${preventChangeDepth}}
    maxDepth={${maxDepth}}
    addItemLabel={"${addItemLabel}"}
    readOnly={${readOnly}}
    onAddItem={console.log}
    items={items}
    onChange={(changInfo) => {
      console.log(changInfo);
      updateItems(changInfo.items);
    }}
  />
}
`;
}

export function getCollapsedExampleSource() {
  return `
() => {
  function recursiveMap(items, predicateFn, childProp = 'children') {
    return items.map(currentItem => {
      const item = predicateFn(currentItem);
      if (item !== currentItem) {
        return item;
      }
      if (currentItem[childProp]) {
        return {
          ...currentItem,
          children: recursiveMap(currentItem[childProp], predicateFn),
        };
      }
      return currentItem;
    });
  }
  const [items, updateItems] = React.useState([
    {
      id: "a10",
      isCollapsed: false,
      options: [{
        value: 'Parent'
      }],
      children: [
        {
          id: "a11",
          options: [
            {
              value: 'Child 1'
            }
          ],
          children: [
            {
              id: "a12",
              options: [
                {
                  value: 'Child 2'
                }
              ],
            }
          ]
        }
      ],
    },
    {
      id: "a13",
      options: [
        {
          value: 'Parent 2'
        }
      ]
    }
  ]);
  
  const toggleCollapse = (id) => {
    return recursiveMap(items, (item) => {
      if (item.id === id) {
        return {
          ...item,
          isCollapsed: !item.isCollapsed,
        }
      }
      return item;
    });
  }
  
  return <>
    <button onClick={() => {
      updateItems(toggleCollapse('a10'));
    }}>collapse Parent </button>
    <button onClick={() => {
      updateItems(toggleCollapse('a11'));
    }}>collapse Child 1</button>
    <br/>
    <br/>
    <StyledNestableList 
      items={items}
      onChange={({ items }) => {
        updateItems(items);
      }}
    />
  </>
}
`;
}
