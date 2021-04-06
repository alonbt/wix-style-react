# `ListItemActionBuilder`

> An option builder for the `<DropdownLayout/>` component and its consumers.

```js
import { listItemActionBuilder } from 'wix-style-react/ListItemAction';
```

### `contactItemBuilder({ id: string | number, title: string, subtitle: string, imageUrl: string }): DropdownLayoutOption`

| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| `id` | `string` | `true` | the option id. |
| `title` | `string` | `true` | the option title. |
| `prefixIcon`| `node` | `false` | the option prefix icon |
| `theme` | `string` | `false` | 'standard', 'dark', or 'destructive'
| `textSize` | `string` | `false` | option text size
| `paddingSize` | `string` | `false` | option padding size
| `disabled` | `boolean` | `false` | disable the option when set to true |
| `subtitle` | `strun` | `false` | option subtitle text |

## Examples
