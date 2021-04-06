### `<Table.Content/>`

You can render `<Table.Content/>` anywhere inside a `<Table/>` (not necessarily as a direct child).

#### Props

| propName        | propType | defaultValue | isRequired | description                                                                     |
| --------------- | -------- | ------------ | ---------- | ------------------------------------------------------------------------------- |
| titleBarVisible | boolean  | true         | false      | Whether to display the title bar (the row with the names of the columns) or not |

### `<Table.ToolbarContainer/>`

The `<ToolbarContainer/>` is a consumer of the Table's SelectionContext (React 16 context API). Which means it expects to receive a single child as a function. That function receives the following SelectionContext object as an argument.

#### Props

| propName | propType | defaultValue | isRequired | description                 |
| -------- | -------- | ------------ | ---------- | --------------------------- |
| children | any      |              | false      | A container for the toolbar |

### `<Table.SubToolbar/>`

You can render `<Table.Subtoolbar/>` anywhere inside a `<Table/>` (not necessarily as a direct child).

#### Props

| propName | propType | defaultValue | isRequired | description                 |
| -------- | -------- | ------------ | ---------- | --------------------------- |
| children | any      |              | false      | A container for the sub-toolbar |


### `<Table.BulkSelectionCheckbox/>`

You can render `<Table.BulkSelectionCheckbox/>` anywhere inside a `<Table/>` to display a checkbox that enabled bulk selection (`Select All`/`Unselect All`).

If you render your own `<Table.BulkSelectionCheckbox/>`, you should set `<Table>`'s `hideBulkSelectionCheckbox` prop to `true` so the bulk selection checkbox is not displayed in the table's header.

#### Props

| propName | propType | defaultValue | isRequired | description                                 |
| -------- | -------- | ------------ | ---------- | ------------------------------------------- |
| children | any      |              | false      | The bulk selection checkbox content         |
| dataHook | any      |              | false      | A data-hook for the bulk selection checkbox |

### `<Table.Titlebar/>`

The `<Table/>` title bar (or "header"). Can be useful when setting `titleBarVisible` to `false`, so
you can render the title bar independently. See the "Table in a Page" example for example usage.

### `<Table.EmptyState/>`

An `<EmptyState>` for usage within a table. See the "Table in a Page" example for example usage.

#### Props

Accepts the same props as `<EmptyState/>`. See the API tab in the `<EmptyState/>` story for a full
list of valid props.
