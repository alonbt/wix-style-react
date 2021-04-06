`<Notification>` is a compound component and requires `<Notification.TextLabel/>` to be used as children.

<details>
  <summary>
    `<Notification.TextLabel/>` (required)
  </summary>

Use this component to display the notification message

| propName    | propType                                                                                                     | defaultValue | isRequired | description                                                                                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------ | ------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children    | string                                                                                                       | -            | -          | The text to display                                                                                                                                                                                                 |
| ellipsis    | boolean                                                                                                      | true         | -          | The label text could be either with or without ellipsis                                                                                                                                                             |
| showTooltip | boolean                                                                                                      | true         | -          | When `ellipsis` is true, controls wether to show tooltip on truncated text                                                                                                                                          |
| appendTo    | enum:<br>&nbsp;"window"<br>&nbsp;"scrollParent"<br>&nbsp;"viewport"<br>&nbsp;"parent"<br>, element, function | "window"     | -          | tooltips are positioned relative to a dom element. Can be either: `'window', 'scrollParent', 'viewport', 'parent'`, `element` or `function` based predicate i.e. (elm) => elm.getAttribute('data-hook') === 'value' |
| disabled    | bool                                                                                                         | -            | -          | disables tooltip element trigger behaviour. If not specified, `disabled` prop of the `children` element will be used.                                                                                               |
| enterDelay  | number                                                                                                       | 0            | -          | time in milliseconds to wait before showing the tooltip                                                                                                                                                             |
| exitDelay   | number                                                                                                       | 0            | -          | time in milliseconds to wait before hiding the tooltip. Defaults to 0.                                                                                                                                              |
| fixed       | bool                                                                                                         | false        | -          | whether to enable the fixed behaviour. This behaviour is used to keep the Tooltip at it's original placement even when it's being positioned outside the boundary.                                                  |
| flip        | bool                                                                                                         | true         | -          | whether to enable the flip behaviour. This behaviour is used to flip the Tooltips placement when it starts to overlap the target element.                                                                           |
| maxWidth    | number, string                                                                                               | 204          | -          | tooltip content container width in pixels                                                                                                                                                                           |
| moveArrowTo | number                                                                                                       | -            | -          | Moves arrow by amount                                                                                                                                                                                               |
| onHide      | function                                                                                                     | -            | -          | callback on tooltips content hide event                                                                                                                                                                             |
| onShow      | function                                                                                                     | -            | -          | callback on tooltips content show event                                                                                                                                                                             |
| placement   | string                                                                                                       | "bottom"     | -          | tooltip content placement in relation to target element                                                                                                                                                             |
| textAlign   | enum:<br>&nbsp;"start"<br>&nbsp;"center"<br>                                                                 | "start"      | -          | align tooltip content                                                                                                                                                                                               |
| zIndex      | number                                                                                                       | 6000         | -          | tooltips content zindex                                                                                                                                                                                             |

</details>

<details>
  <summary>
    `<Notification.CloseButton/>`
  </summary>

Use this component to display the close button

</details>

<details>
  <summary>
    `<Notification.ActionButton/>`
  </summary>

Use this component to supply an action button for the notification

| propName | propType                  | defaultValue | isRequired              | description                                                           |
| -------- | ------------------------- | ------------ | ----------------------- | --------------------------------------------------------------------- |
| children | string                    | -            | -                       | The text to display                                                   |
| type     | string (button, textLink) | -            | button                  | A Button component or TextLink component                              |
| onClick  | function                  | -            | e => e.preventDefault() | -                                                                     |
| link     | string                    | -            | -                       | A url to navigate to on click                                         |
| target   | string                    | `_self`      | -                       | The `target` attribute to be set on the `a` tag (for `textLink` type) |
| target   | string                    | `_self`      | -                       | The `target` attribute to be set on the `a` tag (for `textLink` type) |

</details>
