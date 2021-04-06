## `<ItemGroup/>` (`<Toolbar.ItemGroup/>`)

The layout of a toolbar is composed of item groups (`<ItemGroups/>` ) which include the toolbar items.

### Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| position | 'start' &#124; 'end' | 'start' | false | Typically, in an Left-To-Right layout, a `start` group (and all it's items) would be aligned to the left, and an 'end' group (and all it's items)would be aligned to the right |
| children | node | - | true | `<Item/>` or `<Divider/>` elements |

## `<Item/>` (`<Toolbar.Item/>`)

The layout of a toolbar is composed of item groups (`<ItemGroups/>` ).

### Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| layout | 'button' | - | false | applies appropriate css styles like margins. There might be more layout values in the future. |
| children | node | - | true | any node. If it is a `<Button/>` then you should set `layout` prop to `'button'` to get the desired look |

## `<Divider/>` (`<Toolbar.Divider/>`)

A divider between `<Item/>` components.

## `<Title/>` (`<Toolbar.Title/>`)

Applies "title" font styling to it's children.
### Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| dataHook | 'string' | - | false | Applies data hook to element |

## `<SelectedCount/>` (`<Toolbar.SelectedCount/>`)

Applies "selected count" font styling to it's children.
### Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| dataHook | 'string' | - | false | Applies data hook to element |


## Styling guidelines

- `<Button/>` components  should have `skin="light"`
- `<Dropdown/>` : should have rounded corners (add `roundInput` prop). Same with other types of Input components.
