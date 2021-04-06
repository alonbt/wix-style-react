# `withFocusable`

A HOC to add Accessibility focus states. (similar to [`focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible))

For component's like `<Input/>`, this HOC is not relevant, since they always show a focus border (regardless of the input method that made them focused).

## Usage

1. Wrap your component with `withFocusable` HOC.
2. In component's `js`:
 2.1 call `focusableOnFocus`, `focusableOnBlur` from props.
 2.2 spread focus states onto the component's root element. (Using `focusableStates(props)`)

```jsx
import { withFocusable, focusableStates } from "../common/Focusable";

<Component
  onFocus={this.props.focusableOnFocus}
  onBlur={this.props.focusableOnBlur}
  {...focusableStates(this.props)}
/>;

export default withFocusable(Component);
```

3. In `.scss` file include focus styles.

```scss
@import '../common/Focusable/FocusableMixins.scss';
@import "../common/Focusable/Focusable";

.root {
  outline: none;

  &#{$focusable-focus-visible} {
    @include FocusBox;

    &.hasError {
      @include FocusBoxError;
    }
  }
}
```

> Make sure to disable native browser outline by applying `outline: none;`

## Testing

Use visual tests for testing focusable. Refer to [visual testing documentation](../../../docs/contribution/VISUAL_TESTING.md)

## Troubleshooting

1. Focus effect does not appear on my `div`. Why?

Focusable HOC will only work on focusable html elements like `button`, `input` etc. In order to enable this on div make sure to pass `tabindex` to your component with value `0`. Read more https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex

```jsx
import { withFocusable, focusableStates } from "../common/Focusable";

<Component
  tabIndex={0}
  onFocus={this.props.focusableOnFocus}
  onBlur={this.props.focusableOnBlur}
  {...focusableStates(this.props)}
/>;

export default withFocusable(Component);
```
