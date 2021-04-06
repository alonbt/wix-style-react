# `<TableActionCell/>`

The action column is the table's last column. This component represent a cell in this column.

It consist of main action, which is a button, and secondary actions. Secondary actions can be
_visible_, meaning they'll be shown next to the primary action, or _hidden_, meaning they'll be
collapsed and shown inside a `<PopoverMenu/>`.

You should render this component inside the `render` property of the `columns` prop (of `<Table/>`).
This column should not have a title. Check out the examples in the `<Table/>` story for usage.

## Playground
