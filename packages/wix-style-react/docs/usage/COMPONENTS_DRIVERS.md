# Components Drivers

## What is a component driver?

A component driver provides an interface to the component, enabling automated tests to access component functions without needing to know precise details of the technology being used.

And in bullets:

* Abstract component implementation.
* Make tests independent from implementation.
* Abstract complex interactions

For more knowledge about drivers, watch [Better Testing with Component Drivers - Gabriel Grinberg](https://www.youtube.com/watch?v=xXROoG1jEs0)

The `wix-style-react` component drivers (aka testkits) provides the best way to interact with the components with a minimal hassle.

## How to use a component driver in your tests
In the following examples, we will use the`<Input/>` and `<Heading/>` components and their testkits.

### Using the components
In our app, we will type the input field, which will reflect the heading.

```jsx
//App.js
import React from 'react';
import Input from 'wix-style-react/Input';
import Heading from 'wix-style-react/Heading';

class App extends React.Component {
  state = {
    title: '',
  };

  render() {
    return (
      <div>
        <Input onChange={e => this.setState({ title: e.target.value })}/>
        <Heading>{this.state.title}</Heading>
      </div>
    );
  }
}

export default App;
```

For the drivers to work, components need to be marked using the `dataHook` (a common property which every component gets). This convention allows an easy querying from the DOM of the component.

```diff
//App.js
import React from 'react';
import Input from 'wix-style-react/Input';
import Heading from 'wix-style-react/Heading';

class App extends React.Component {
  state = {
    title: '',
  };

  render() {
    return (
      <div>
-       <Input onChange={e => this.setState({ title: e.target.value })}/>
+       <Input
+          dataHook="title-changer-input"
+          onChange={e => this.setState({ title: e.target.value })}
+       />
-       <Heading>{this.state.title}</Heading>
+       <Heading dataHook="app-title">{this.state.title}</Heading>
      </div>
    );
  }
}

export default App;
```

### Using the testkit drivers
For convenience, the component drivers are consumed directly from the library. Each component provides a testkit, a small utility that takes a rendered node and a `dataHook` and returns the component driver.
Here's an example how to import a driver to interact with a component in a `React` and `jsdom` environment.

```js
//import
import { InputTestkit } from 'wix-style-react/dist/testkit';

//initialize
const inputDriver = InputTestkit({
  wrapper: document.body, //prefer a more specific node
  dataHook: 'title-changer-input',
});

//interact
await inputDriver.enterText('hello world');
```

**Notice:** The driver methods are asynchronous, in order to create a consistent API across different platforms

### Using drivers in a test
As in any test, the logical component is being rendered and then being interacted.
In the following example, the test checks that typing some value in the input field reflects the title:

```jsx
//App.spec.js
import React from 'react';
import { render } from 'react-testing-library';
import App from './App';

import {
  InputTestkit,
  HeadingTestkit,
} from 'wix-style-react/dist/testkit';

describe('App', () => {
  it('should update the title', async () => {
    const { baseElement } = render(<App />);

    const inputDriver = InputTestkit({
      wrapper: baseElement,
      dataHook: 'title-changer-input',
    });

    await inputDriver.enterText('hello world');

    const headingDriver = HeadingTestkit({
      wrapper: baseElement,
      dataHook: 'app-title',
    });

    expect(await headingDriver.getText()).toEqual('hello world');
  });
});
```

## Supported platforms
The library currently supplies fully supported drivers for `jsdom` testing environment and several testkis for `protractor` and `puppeteer`.
In the upcoming months, all drivers will be available across the above platforms, thanks to using [Unidriver](https://github.com/wix-incubator/unidriver).

For example, puppeteer drivers should be consumed like this:

```js
import { InputTestkit } from 'wix-style-react/dist/testkit/puppeteer';

const inputDriver = await InputTestkit({dataHook: 'title-changer-input', page}); //puppeteer page instance
await inputDriver.enterText('hello world');
```

## Drivers APIs
Each component has its own driver implementation, check the `Testkit` tab in the components documentation pages https://wix-style-react.com
