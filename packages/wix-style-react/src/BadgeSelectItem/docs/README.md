# `BadgeSelectItemBuilder`

> An option builder for the `<DropdownLayout/>` component and its consumers.

```js
import { badgeSelectItemBuilder } from 'wix-style-react';
```

This builder is being used in `<BadgeSelect/>` under the hood.

### `badgeSelectItemBuilder
({
    id: string | number,
    className: string,
    text: string,
    skin: string,
    subtitle: string,
    ellipsis: boolean,
    disabled: boolean,
    dataHook: string,
}): DropdownLayoutOption`

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `id`   | `string`, `number` | `true` | The id of the option, should be unique. |
| `className` | `string` | `false` | A css class to be applied to the component's root element |
| `text` | `string` | `true` | The text to be rendered within the badge. |
| `skin` | `string` | `true` | The badge's skin. See the `<Badge/>` story for the full list of available skins. |
| `subtitle` | `string` | `false` |  The secondary text to be rendered within the badge. |
| `ellipsis` | `boolean` | `false` | Should the text and subtitle get ellipsis with tooltip, or should it get broken into lines when it reaches the end of its container |
| `disabled` | `boolean` | `false` | If true, the item is disabled |
| `dataHook` | `string` | `false` | Applied as data-hook HTML attribute that can be used in the tests |
## Examples
