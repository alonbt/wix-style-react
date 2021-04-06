```js
  ...
  import { dndStyles } from 'wix-style-react';
  ...

  <NestableList
    useDragHandle
    items={[{id: 1, text: 'item1'}, {id: 2, text: 'item2', children: [{id: 3, text: 'item3'}]}]}
    renderItem={({ isPlaceholder, depth, isPreview, connectDragSource, item }) => (
      const classes = classNames(
        dndStyles.item,
        {
          [dndStyles.itemPlaceholder]: isPlaceholder,
          [dndStyles.itemPreview]: isPreview
        }
      );
      return (
        <div className={classes} data-hook={`item-${item.id}-${depth}`}>
          {item.text}
          {connectDragSource(<div>handle</div>)}
        </div>
    );
    )}
    onUpdate={(newItems) => {
      this.setState({items: newItems})
    }}
    maxDepth={3}
    threshold={50}
    childrenStyle={ stylesExp.children }
    childrenProperty={ 'children' }
  />
```

<details>
  <summary>`Props`</summary>
  | propName         | propType | defaultValue | isRequired | description |
  | ---              | ---      | ---          | ---        | ---         |
  | items            | array    | -            | true       | array of items, each item should have an id. |
  | renderItem       | func     | -            | true       | render function which will be used to render item block inside of nestable list |
  | useDragHandle    | bool     | -            | -          | use true to receive connectDragSource in renderItem and has the functionality to connect a handle with dnd drag functionality|
  | maxDepth         | number   | Infinity     | -          | Maximum item depth |
  | threshold        | number   | 30           | -          | Distance in pixels the cursor must move horizontally before item changes depth |
  | childrenStyle    | object   | -            | -          | Style object applied to nested |
  | theme            | object   | -            | -          | object of react classes - receiving styles: topContainer, container, item |
  | childrenProperty | string   | 'children'   | -          | The property on each item which contains an array of children |
  | onUpdate         | func     | -            | -          | A function invoked with the new array of items whenever an item is dropped in a new location |
  | onDragStart      | func     | -            | -        | A function invoked when drag of item starts, the item's props passed as argument |
  | onDragEnd        | func     | -            | -          | A function invoked when drag of item ends, the item's props passed as argument |
  | dragLayerZIndex  | number     | 100           | -          | zindex of the list item drag container |
</details>

Some details about complex props

<details>
  <summary>`items`</summary>
  Example:
  ```js
  [
    {
      id: 'a',
      text: 'Item 1'
    },
    {
      id: 'b',
      text: 'Item 2'
      children: [
        {
          id: 'c',
          text: 'Item 3'
        },
        {
          id: 'd',
          text: 'Item 4'
        },
      ],
    },
  ]
  ```
</details>

<details>
  <summary>`renderItem`</summary>
  This function called with such parameters:

  - `isPlaceholder` - if item in drag state,
  then instead of an item(item previous place)
  we want to render placeholder(empty block, or left item as it is), so you able to style your item by checking isPlaceholder.
  - `isPreview` - if item in drag(fly) state,
  then instead of an item,
  we want to render preview
  state(maybe we want to rotate it a little, or hide something),
  so you able to style your item by checking isPreview.
  - `item` - item that you are render
  - `connectDragSource` - used to mark only a handle as the drag trigger, work only if useDragHandle passed to NestableList
  - `depth` - the depth of the item

  Example without handle:
  ```js
  renderItem = ({isPlaceholder, depth, isPreview, item}) => {
      const classes = classNames(
        {
          [styles.placeholder]: isPlaceholder,
          [styles.preview]: isPreview,
        });

      return (
        <div className={classes} data-hook={`item-${item.id}`}>
          {item.text}
        </div>
      );
    }
  ```

  Example with handle:
  ```js
  renderItem = ({isPlaceholder, depth, isPreview, connectDragSource, item}) => {
      const classes = classNames(
        styles.card,
        {
          [styles.placeholder]: isPlaceholder,
          [styles.preview]: isPreview
        });

      return (
        <div className={classes} data-hook={`item-${item.id}`}>
          {connectDragSource(
            <div className={styles.handle} data-hook={`card-${item.id}-handle`}>
              <DragAndDropLarge/> // an icon
            </div>
          )}
          {item.text}
        </div>
      );
    }
  ```
</details>
