### `<Page.Header/>`

An alias for The `PageHeader` component which defines the components within the Page's header. This node is required in order to display the page.

#### Props
 
Please refer to the `PageHeader` API for the full API.

### `<Page.Content/>`

A render slot for the page scrollable body. This is where all of the visible and scrollable content can appear.

#### Props

| propName | propType | defaultValue | isRequired | description|
| -------- | -------- | ------------ | ---------- | --------------------------- |
| `children` | node | | false | The content to display |
| `fullScreen` | boolean | false | false | span the content to full width |


### `<Page.Sticky/>`
A render slot inside the `<Page.Content`/> for elements that can be scrolled below the header.

#### Props

| propName | propType | defaultValue | isRequired | description |
| -------- | -------- | ------------ | ---------- | ----------- |
| `children` | `node` or `function` | | false | The content to display. If the child is a render function, then a `stickyStyle` object is passed to this function, the `stickyStyle` should be applied to your container's `style` attribute. In this case `Page.Sticky` does NOT render any wrapping `<div>`. |

### `<Page.Tail/>`

A render slot inside the Page's content for elements that can be scrolled.

## Deprecated

### `<Page.FixedContent/>`

A placeholder for a component which sticks to the bottom of the Tail (or bottom of Header if there is no Tail). It gets the same layout as the Page.Content. If Page.content `fullScreen` is enabled, then this FixedContent will be also full screen.