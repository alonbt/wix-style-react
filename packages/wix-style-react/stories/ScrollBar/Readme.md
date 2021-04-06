
# ScrollBar

Motivation:
  We do not supply a custom css component.
  But in order to make custom content look and feel the same as other wix-style-react components,
  we provide mixin with scroll bar styles.

> Example of mixin usage

```scss
@import 'wix-style-react/mixins.scss';

.root {
  @include default-scroll-bar;
  overflow: auto;
  max-height: 200px;
  max-width: 300px;
  border: 1px solid blue;
}
```
