# Test Drivers Guidelines
If you're not familiar with what components test drivers are - please start by reading [this article](../usage/COMPONENTS_DRIVERS.md) first.

## Motivation
This section will focus on the motivation and the different driver types in the library

### Drivers as an encapsulation utility
While developing a component and writing its tests, having a driver helps encapsulating actions, so that tests focus on the "what" instead of "how".

### Exposing drivers as testkits
Due to the fact these drivers are used internally in the library tests, they are confirmed as working, so they can also be used as a testkit for consumers of the component to interact with it in their tests.

## Technology

### Syntax and supported platforms
When writing components drivers, the library aims to support the common technologies in the market. When it was created, the community wrote tests in `JSDOM` and `Protractor`, so drivers were created specifically for it. However, now `Puppeteer` is much popular, and the requirement for it also became high.

#### Unidriver
The library's modern components drivers are written using [Unidriver](https://github.com/wix-incubator/unidriver), to support multiple platforms (e.g. `ReactDOM/JSDOM`, `Protractor`, `Puppeteer`, etc...).

#### Legacy Drivers
The library still contains legacy drivers, per platform. Usually the main driver file is implemented for `JSDOM` while additional files might be needed for the other platforms like `Protractor`)

## Drivers structure

### Driver file
Every component should have a driver file named `Component.driver.js`. New components implement drivers using `Unidriver`, while old components are implemented for `JSDOM` only.

### Other driver files
- Existing components supporting both legacy and `Unidriver` drivers will also have a file be named `Component.uni.driver.js`.
- `Protractor` specific drivers will be named `Component.protractor.driver.js`
- `Puppeteer` specific drivers will be named `Component.puppeteer.driver.js`
- A component might have a **private** driver, used to encapsulate some actions which are not intended to be exposed as testkit. The file will be named `Component.private.driver.js`.

### Private Drivers
Private drivers (`Component.private.driver.js`) are used for actions that must be tested as the component behavior, but should not be exposed to the user. For example, explicitly hovering over some item has a side effect that displays some opacity. The consumer should not care for it, but in unit-test it might be needed.

## Drivers APIs
In general, drivers methods are separated into two types - **getters** and **interactions**.

### Getters
As a rule of thumb, we write a getter for (almost) every prop passed. These getters assist the consumer to make sure the he wired of the component correctly. The driver should return a primitive value or a node, but not a complex object. Usually, we will not right a driver for visual properties like `skin`

#### Primitives: String, Number and Boolean
Props that effects rendering values are usually just returned in their same type:
1. `title: string` <=> `getTitle(): string`
1. `disabled: boolean` <=> `isDisabled(): bool`
1. `length: number` <=> `getLength(): number`

In the cases of a prop that effects the lifecycle or behavior of the component, it's better to have a function explaining the behavior of the component and not just the value. For example:
1. `initiallyOpened: boolean` <=> `isOpen(): boolean`

#### Array
For an array of items, the driver should expose a method to receive each item and return a primitive value.
1. `labels:[string, string]` <=> `getLabelAt(index: numer): string`.
1. `items:[{id, value}, {id, value}]: [{id: number, value: string}]` <=> `getItemIdAt(index: numer): number` **and** `getItemValueAt(index: numer): string`.

#### Node
In case of props from the type of node (render slot), it is best to return the node itself. The value of it is that it helps the consumer to verify he passed the right node to the right render slot. For example:
1. `prefixIcon: node` <=> `getPrefixIcon(): node`

#### Object
In cases where some objects are passed, try to separate between the use cases - "configurations" vs. values to render. In the case of configurations, this usually isn't exposed to the consumer and might be part of the private driver. for the values to render - this will usually be an array of items as described above.

### Interactions

#### Function
Usually, a function prop is supposed to be called on some action. In that case, it make sense to match a corresponding interactive method.
1. `onClick: function` <=> `click()`

### Abstractions
In the cases of complex interactions, the driver should abstract actions. For example, in the case of a Dropdown - selecting an item from a list might be complex.
```diff
-click()
-pressKeyDown()
-clickOption(index)
```
The above actions can be exposed in a private driver to unit-test the component, but should not be available for the consumer. Instead, the driver should expose a simple abstraction:
```diff
+selectOption(index)
```

## Best practices

1. Actions should accommodate for the user's intent (the "What") rather than how the user interacts (click, focus, keydown,...). For example, `<Search/>` input may have clear button (a little `x`).
```diff
-clickClearButton()
+clear()
```

1. Test the DOM. Props set by consumer affects the DOM, or behavior of the component (which in turn affects the DOM). Don't assert on React props or inner state, instead assert on the DOM.

1. Keep drivers flat. The returned object should be flat and simple. Avoid nesting objects or worse, other drivers (it is easy to do but creates implicit dependency which is very hard to maintain)

1. Use `data-*` html attributes to mark and locate elements in the DOM. If there is no specific accessibility data attribute, use `data-hook`. Make sure `data-hook` names are short as they stay in the application bundle.

```js
<div>
  <button data-hook="confirm">{props.confirmText}</button>
</div>
```

1. The only case where a getter method would return an element is to retrieve element from a render slot. Apart from that, never return an element.

```js
<Button prefixIcon={<Pencil/>}/>
```

1. If you write a boolean driver method (e.g. `isDisabled()`), remember to test it both ways (when it's `true` and also `false`).

1. Avoid importing stylesheets or any asset that is not pure javascript (JSX code, stylesheets, etc...)

## Exposed Testkits
The following process is automated, so no action is needed from the developer side.

1. Each component has `<ComponentName>Testkit` function which is exposed as public API.
1. They are imported through a special path, depending on platform, for example:
    ```js
    import {ButtonTestkit} from 'wix-style-react/dist/testkit'; // ReactDom
    import {ButtonTestkit} from 'wix-style-react/dist/testkit/enzyme';
    import {ButtonTestkit} from 'wix-style-react/dist/testkit/protractor';
    import {ButtonTestkit} from 'wix-style-react/dist/testkit/puppeteer';
    ```
1. Testkit must be invoked with wrapper (DOM node for vanilla, enzyme wrapper for enzyme) and `dataHook`.
    ```js
    import {ButtonTestkit} from 'wix-style-react/dist/testkit';
    const wrapper = ReactTestUtils.renderIntoDocument(<MyApp>);
    const buttonDriver = ButtonTestkit({wrapper, dataHook: 'my-button'})
    ```
