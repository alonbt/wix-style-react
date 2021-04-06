# Component guidelines

## UX Specification

Components are designed according to [Zeplin](https://app.zeplin.io/project/5864e02695b5754a69f56150) design created by UX guild.

## Naming

A component will be named with a `PascalCase` convention.

## Structure

Every component folder should be a single component.

## API (Props)

### Mandatory Props

| Prop Rule   | Description |
| ---         | ---         |
| *dataHook*  | Every component should accept a `dataHook` property which is applied as a `data-hook` attribute on the component's root element. This attribute is use as a selector in tests.
| *className* | The convention for allowing styling of the component's root element is by exposing a `className` property.

### Props Guidelines

| Prop Rule         | Description |
| ---               | ---         |
| *initialPropName* | props which set an initial value to an identical uncontrolled state, should be named with an `initial` prefix. [Read More About Controlled & Uncontrolled Components](./CONTROLLED_VS_UNCONTROLLED.md)
| *xxxProps*        | If the component is wrapping another component (or native DOM element) and its props is needed - pass it with the convention of xxxProps. for example inputProps tooltipProps, etc..
| `PropTypes.node` instead of `PropTypes.string` | a frequent case for props that accept string is to use a component which evaluates to string. For example, component that handles translation or experiment, or some kind of provider. For those cases `PropTypes.string` would give a warning, therefore almost all `PropTypes.string` cases should actually be `PropTypes.node` |

## Component instance methods

Every method that is set on a React class component is publically available on the component `ref`.<br/> Methods like `focus()` or `blur()` are common public API for input elements and should be exposed to the consumer.<br/> Other methods, for example, `_handleButtonClick()` are usually private and should not be exposed to the consumer. <br/><br/>The library's convention is to add a `_` prefix for any private method. This convention is also handled as part of the `wix-storybook-utils` documentation tool, dropping it from the public API documentation.

## Typography

1. For common typography, components should use the `Text` or `Heading` components.
1. In some cases where you can not use a component, you can use the `Typography.st.css` file directly.

## Breaking Changes

When implementing new requirements for exisintg components, we sometimes have to make breaking changes.
We still have to stay backward compatible and to achieve this we use one of the following:

1. Next - A recreation of an existing component with an improved changed api, will be the official component in the next major version. Will have the same component name but will sit under `next` dir. For example:

* old component - `import Button from 'wix-style-react/Button'`;
* new component - `import Button from 'wix-style-react/next/Button'`;

2. Upgrade flag - In cases we want to change some of the features of the component but not reconstruct the whole component - usually be used for small sized changes.

### How can we make sure a component doesn’t stay in Next mode?
Before the next major version - go over `Next` components and migrate - replace Next component path to override the old component.


## Deprecation

[Component deprecation guide](https://github.com/wix/wix-style-react/blob/master/docs/internal/DEPRECATION_GUIDE.md)

## WIP
Work in progress - another section in storybook. Should be used when you start working on a component and would like to consume it before it’s perfect. It will be released but not officially used.

## Documentation

1. Add `propTypes` to each component and document each property with a `/** */` comment on above. (AutoDocs will make use of it)

[Read here](./DOCUMENTING_COMPONENTS.md)
