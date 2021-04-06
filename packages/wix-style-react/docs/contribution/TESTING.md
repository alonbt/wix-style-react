# Testing

> For component library to be stable, it must be testable and tested

## Test Types

### Component (Unit) Tests

1. Tests are running with [`jest`](https://facebook.github.io/jest/).

1. Tests in this API level are ones that require browser-like environment but can still run without any visual rendering. The nature of these tests is testing the behavior of a component and wiring methods. For example: clicking on a component triggers a callback, changing the input value, etc...

1. Every component has test file with `spec.js` extension, for example: `ComponentName.spec.js`.

1. Every component has a driver (read about [them here](./TEST_DRIVERS_GUIDELINES.md)). Naming convention is `ComponentName.driver.js`

### Writing a test

```js
import React from 'react';
import checkboxDriverFactory from './Checkbox.driver';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';

describe('Checkbox', () => {
  const createDriver = createDriverFactory(checkboxDriverFactory);

  it('should be unchecked and not disabled by default', () => {
    const driver = createDriver(<Checkbox/>);
    expect(driver.isChecked()).toBeFalsy();
  });
});
```

### Visual Testing

1. Visual testing implementation becomes trivial using a new and simple methodology of Applitools' Visual Grid. [Read about it here](./VISUAL_TESTING.md)

### Browser Testing

1. These tests are intended to use anything that needs real browser API (e.g. position calculations, hovering, styling).

1. Tests run with [`protractor`](http://www.protractortest.org/#/) which uses chrome browser.

1. some components have a test file with `e2e.js` extension, for example: `ComponentName.e2e.js`.

1. Every component has a driver . Legacy driver name convention is `ComponentName.protractor.driver.js`, but the best-practice is to write a UniDriver (read about [them here](./TEST_DRIVERS_GUIDELINES.md)).

1. You may create a dedicated test story page and add it to the `stories/e2e.js` file.

1. See [Writing E2E Tests](./WRITING_E2E_TESTS.md)

## Running tests

### Running all

1. `npm run build && npm run test`

Note: Make sure to add all files to git before running build `git add . -A`

### Running unit tests

1. single run: `npm run test:unit`

1. watch mode: `npm run test:watch`

1. watch mode + storybook: `npm start`

#### Debugging

1. In watch mode, you can use `jest`'s interactive mode, for example, press `p` in your command line and type the name of the test:
<img src="https://raw.githubusercontent.com/wix/wix-style-react/master/docs/assets/jest-interactive.png" alt="Interactive Jest Preview" width="600">

### Running visual tests

#### Single run

`npm run test:visual`

#### Debugging

`npm run storybook:visual`

### Running browser tests

#### Single run

`npm run test:e2e`

### "watch" mode

- `npm run storybook:e2e` - start storybook server with hot module reload
- open another terminal console
- `npm run test:e2e-only` - run protractor tests

#### Running a single test (focused test)

- To make a focused test (only it runs) use `fit` instead of `it`
- Or use `eyes.fit` instead of `eyes.it`.

#### Debugging

1. Use `await browser.sleep(100000)` in your test, for quick browser stop and debugging.
