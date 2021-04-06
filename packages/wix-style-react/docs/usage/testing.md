# Testing

Together with components `wix-style-react` library also expose testkits.

Testkits allow to test components without knowing their internal details.

For example, `<Input>` component can be tested with methods like `getValue()` or `clickClear()` instead of inspecting DOM, looking for desired element, triggering some event and so on.

# How to use testkits

## Preparation

As example, let's imagine we have such code which we want to test:

```js
import React from 'react';
import Input from 'wix-style-react/Input';
import Heading from 'wix-style-react/Heading';

export class App extends React.Component {
  state = {
    title: '',
  };

  render() {
    return (
      <div>
        <Input
          onChange={e => this.setState({ title: e.target.value })} />

        <Heading>{this.state.title}</Heading>
      </div>
    );
  }
}
```

We want to test that value typed in `<Input>` will be shown in `<Heading>`.

For testkits to work, components need to be marked using `dataHook` prop.
This is a common prop which every wix-style-react component has:

```diff
      <div>
        <Input
+         dataHook="title-changer-input"
          onChange={e => this.setState({ title: e.target.value })} />

-       <Heading>{this.state.title}</Heading>
+       <Heading dataHook="app-title">{this.state.title}</Heading>
      </div>
```

## Tests

Now let's test that code using a testkit.

Each component has a testkit factory, a small function to initialize testkit.

There are 3 steps to use it:
1. import testkit
2. initialize testkit
3. use testkit

### 1. Import Testkit

There are many testing platforms available and wix-style-react supports a few. For this reason it is possible to import testkit from multiple places, separated for each platform.

For example:

**ReactTestUtils / react-testing-library**
```js
import { InputTestkit } from 'wix-style-react/dist/testkit'
```

**Enzyme**
```js
import { InputTestkit } from 'wix-style-react/dist/testkit/enzyme'
```

**Protractor**
```js
import { InputTestkit } from 'wix-style-react/dist/testkit/protractor'
```

**Puppeteer**
```js
import { InputTestkit } from 'wix-style-react/dist/testkit/puppeteer'
```

### 2. Initialize Testkit

Once you have imported the testkit (let's say, `InputTestkit`) you need to initialize it:

```js
// in this example we use testkit compatible with react-testing-library
import { InputTestkit } from 'wix-style-react/dist/testkit';
import { render } from 'react-testing-library';

import App from './App';

const inputDriver = InputTestkit({
  wrapper: render(<App />).baseElement,
  dataHook: 'title-changer-input',
});
```

`InputTestkit` and all other testkits require two things:

1. `wrapper` - a platform specific React node. (In this example we use `react-testing-library`). Inside node there should be a component, which has `dataHook="title-changer-input"`.
2. `dataHook` - a string that matches `dataHook` of component

This is a way of telling `InputTestkit`: hey, here's a `wrapper`, please find component with `dataHook` in there and return me a testkit.

### 3. Use Testkit

once you have imported and initialized the testkit, it is time to use it.

It is as simple as:

```js
await inputDriver.enterText('hello world');
```

> **NOTE**: Majority of wix-style-react testkits are asynchronous, thus you should use `async/await` or similar

Full code of all steps for clarity:

```js
// 1. import
import { InputTestkit } from 'wix-style-react/dist/testkit';

// 2. initialize
const inputDriver = InputTestkit({
  wrapper: document.body, // possible with all document, but always prefer a more specific node
  dataHook: 'title-changer-input',
});

// 3. interact
await inputDriver.enterText('hello world');
```

### Using drivers in a test

Now let's look at code from above and example test for it. Remember, we
have `<Input>` which value should be rendered in `<Heading>`:

```js
import React from 'react';
import { render } from 'react-testing-library';
import App from './App';

// 1. importing testkits
import {
  InputTestkit,
  HeadingTestkit,
} from 'wix-style-react/dist/testkit';

describe('App', () => {
  it('should update the title', async () => {
    // 2. initializing testkits
    const inputDriver = InputTestkit({
      wrapper: render(<App />).baseElement,
      dataHook: 'title-changer-input',
    });

    const headingDriver = HeadingTestkit({
      wrapper: baseElement,
      dataHook: 'app-title',
    });

    // 3. using testkits
    await inputDriver.enterText('hello world');
    expect(await headingDriver.getText()).toEqual('hello world');
  });
});
```
 For concrete examples for each one of the testing platforms click [here](https://github.com/wix/wix-style-react/blob/master/docs/usage/testing_examples.md)

### Pitfalls

For common issues click [here](https://github.com/wix/wix-style-react/blob/master/docs/usage/testing_pitfalls.md)
