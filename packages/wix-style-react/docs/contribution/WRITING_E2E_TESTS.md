# Writing E2E Tests

## Use async/await
When writing e2e tests, don't forget to use `async/await`.

> DON'T rely on Protractor's [Control Flow](https://github.com/angular/protractor/blob/master/docs/control-flow.md#the-webdriver-control-flow) (Promise Manager is being deprecated)!

*Example:*

```js
import React from 'react';
import eyes from 'eyes.it';
import {
  waitForVisibilityOf,
  createStoryUrl
} from 'wix-ui-test-utils/protractor';
import { ButtonTestkit } from '../../../testkit/protractor';

describe('Button', () => {
  const storyUrl = createStoryUrl({
    kind: '5. Buttons',
    story: '5.1 Standard',
    withExamples: false,
  });

  const driver = ButtonTestkit({ dataHook: 'storybook-button' });

  beforeAll(async () => {
    await browser.get(storyUrl);
    await waitForVisibilityOf(driver.element(), 'Cannot find Button');
  });

  eyes.it('should be in initial state when renders with default', async () => {
    expect(await driver.isButtonDisabled()) // Don't forget to use `await` inside `expect`.
      .toBe(false, 'isButtonDisabled'); // Add message when having multiple expects
    expect(await driver.isFocused()).toBe(false, 'isFocused');
  });
});
```

## forEach Gotcha !

*DON'T*

```js
eyes.it('Sizes', async () => {
  const sizes = ['small', 'medium', 'large'];
  sizes.forEach(async size => {
    // ...
    await eyes.checkWindow(size);
  });
});
```

This will run in parallel !
(Because `forEach` does not do await when calling each the function)

*DO*

```js
eyes.it('Sizes', async () => {
  const sizes = ['small', 'medium', 'large'];
  for (let size of sizes) {
    // ...
    await eyes.checkWindow(size);
  });
});
```

## Visual tests using `eyes.it`
**Please avoid from creating new eyes.it if not needed as they are slow and can be achieved using the Visual Grid solution described**

1. Many test uses `eyes.it()` and `eyes.checkWindow()` to capture screenshots for visual testing. (See `eyes.it`](https://github.com/wix/eyes.it) for full API). 

```js
import { eyesItInstance } from '../../test/utils/eyes-it';

const eyes = new eyesItInstance();

eyes.it('should test something with screenshot diff', async () => {
  expect(await assert).toEqual(expectation);
});

eyes.it('should test something with a screenshot on demand', async () => {
  // do some manipulation, for example scroll
  await eyes.checkWindow('after scrolling');
  // do other manipulations
});
```
