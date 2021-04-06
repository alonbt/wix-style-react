# Controlled VS. Uncontrolled Components (props)

## Overview

A Controlled component has not internal react state.
An Uncontrolled component has internal react state.

Sometimes a component will be Uncontrolled, but a single prop can be controlled.

## Prop Name Convention

If a prop is uncontrolled, it usually sets an initial state which is similar to the prop itself.
For example:
```js
class Dropdown extends React.Component {
  state = { selectedId: this.props.selectedId}
}
```

In this case the prop should be called `initialSelectedId`, since that's what it realy does.
This way, if one day we want to add a controlled version of the prop, we simply add `selectedId`.

## Migrating A Badly Named Uncontrolled Prop

In the above case, when we want to make a version with a controlled `selectedId`, but we did not call the prop `initialSelectedId` in the first place, then to avoid a breaking change, we should do the following steps:

- Add a new `update` boolean prop. When `true` the `selectedId` would act as a controlled prop.
- Add an `initialSelectedId` prop.
- Add [`deprecationLog`](../internal/DEPRECATION_GUIDE.md) that prints only when `selectedId` is used and `update=false`. The log should instruct the consumer to use `initialSelectedId` instead.

Later on, we can have a major version, where we make selectedId controlled and deprecate the `upgrade` prop.
