# Deprecation guide

This document describes the process of deprecating props and components from our library. **All kind
of deprecations should be documented in the CHANGELOG and in the relevant migration guides, both for
specific components and releases.**

## Using the `deprecationLog`

The `deprecationLog` is an internal utility that used to log, you guessed it, deprecation messages.
You should call it only when the deprecated behaviour is **being used**, so for example, when
deprecating components, call it in the `constructor` or in `componentDidMount`. Similarly, when
deprecating props, call it only when the prop is used, like inside a custom `PropTypes` validator,
inside `render` or in `componentDidUpdate`.

## Removing components

We should deprecate components when they are not needed anymore (for example, when we have a better
replacement for them), or when we changed their API or their design drastically. As deprecating
components may result in a breaking change, we should do that gradually with backward compatibility.

When we'd plan to remove a component from the library, we should still keep it in the library while
adding a deprecation message to it. As users may still use the component, we suggest keeping its
path the same, for example: `src/ComponentName`.

When we'd plan to use a new component (that may break existing API), we should move the old
component to the `src/Deprecated` folder. Then, add your new component in the same previous path as
the old component, and add a _feature flag_ that will determine which component to use. You can see
an example for this kind of logic [in the following
link](https://github.com/wix/wix-style-react/blob/cc58ef88aff66efc5278ffc5adff115ca7264650/src/Button/index.js).

Then, in the component constructor, you should call the `deprecationLog` while provide a useful
message regarding the deprecation of the component, explaining the required next steps:

```jsx
import deprecationLog from '../utils/deprecationLog';

// ...

class IconWithOptions extends React.Component {
  constructor(props) {
    super(props);

    deprecationLog(
      `Using "<IconWithOptions/>" is deprecated. Instead, we advise you to use the newer "<DropdownBase/>" component. Please refer to it's documentation.`,
    );
  }
}
```

In addition, you may also move the component's story to the `Deprecated` section and to the
`stories/Deprecated` folder as well, and update the story with a deprecation message.

When releasing a new major version, you can remove the component and it's story from the library.
Make sure to document the change in the release's migration guide!

*Do not forget to find all of the internal usages and update them accordingly*

## Deprecating props values

You should deprecate props on specific cases such as naming change or when the expected value for
that prop is changed.

First, update the component's `propTypes`:

```js
Component.propTypes = {
  // size: PropTypes.oneOf(['little', 'medium', 'big']),
     size: PropTypes.oneOf(['small',  'normal', 'large']),
  //                           ^         ^         ^
};
```

Then, use the `deprecationLog` inside the component when the deprecated propType is being used, and
add the backward compatibility:

```jsx
import deprecationLog from '../utils/deprecationLog';

// ...

class SomeComponent extends React.Component {
  render() {
    let { size } = this.props;

    // Do the same thing when `size === 'little'` and `size === 'big'`
    if (size === 'medium') {
      deprecationLog('<SomeComponent/> prop "size" with value "medium" is deprecated and will be removed in next major release, please use "normal" size instead');

      // Making it backward compatible
      size = 'normal';
    }

    return (
      <div>
        ...
      </div>
    );
  }
}
```

When releasing a new major version, you can remove the above check and the `deprecationLog` from the
component. Make sure to document the change in the release's migration guide!

*Do not forget to find all of the internal usages and update them accordingly*
