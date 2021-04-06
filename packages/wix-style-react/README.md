<p align="center">

  <a href="www.wix-style-react.com">
      <img
      src="https://raw.githubusercontent.com/wix/wix-style-react/master/packages/wix-style-react/.storybook/logo.svg?sanitize=true" alt="Wix Style React" width="400">
  </a>
  </br>
<span>
A collection of React components that conform to Wix Style.
</span>

</p>

<div align="center">

![](https://flat.badgen.net/badge/React/16.13.1/blue)
[![](https://badgen.net/npm/v/wix-style-react/latest)](https://www.npmjs.com/package/wix-style-react)
[![Dependencies](https://img.shields.io/david/wix/wix-style-react.svg?style=flat-square)](https://david-dm.org/wix/wix-style-react)
[![DevDependencies](https://img.shields.io/david/dev/ant-design/ant-design.svg?style=flat-square)](https://david-dm.org/wix/wix-style-react?type=dev)

</div>

<div align="center">
 <a href="https://wix-style-react.com">https://wix-style-react.com/</a>
</div>

## 📦 Install

```bash
npm install wix-style-react
```

```bash
yarn add wix-style-react
```

## 🔨 Setup

wix-style-react is built with [Stylable](https://stylable.io/), therefore we recommend you build your project using a **Stylable compatible** template in order to save some configurations.
Take a look at our usage guide [Create Stylable
App](https://github.com/wix/wix-style-react/blob/master/packages/wix-style-react/docs/usage/usage-with-create-stylable-app.md) to create a new Stylable project from a boilerplate.

#### Requirements
wix-style-react requires react version `16.13.1` and up.<br/>
For typescript users version `^3.9.7` is required.

#### Browsers support
* Google Chrome (version 76 and above)
* Safari for Mac (version 12 and above)
* Microsoft Edge (version 18 and above)
* Firefox (version 72 and above)

#### How to load wix-style-react compatible fonts:

Load Wix fonts from CDN:<br/>
- For Madefor font please visit [wix-fonts](https://bo.wix.com/pages/wix-fonts/?path=/story/fonts--madefor).
- For Helvetica Neue:
  ```html
  <link
    rel="stylesheet"
    href="//static.parastorage.com/services/third-party/fonts/Helvetica/fontFace.css"
  />
  ```
Enable font smoothing with browser specific css properties:
  ```css
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ```


## 🚀 Usage

```jsx
import { Button } from 'wix-style-react';

const App = () => (
  <Button>
    Click me!
  </Button>
);
```

## 💫 Testkits

All our components are provided with testkits that help our users test them.

A component testkit provides an interface to the component, enabling automated tests to access component functions without needing to know precise details of the technology being used.

```jsx
//  Here is an example

// 1. import
import { InputTestkit } from 'wix-style-react/dist/testkit';

// 2. initialize
const inputDriver = InputTestkit({
  wrapper: document.body,
  dataHook: 'name-input',
});

// 3. interact
it('test', async () => {
    await inputDriver.enterText('hello world');
    expect(await inputDriver.getText()).toBe('hello world');
});
```
All methods are documented in our storybook components stories and some can be viewed through typescript interface.

Our testkits currently support four major testing frameworks:
`react-jsdom`, `protractor`, `puppeteer` and `selenium`. Read our
[testing
guidelines](https://github.com/wix/wix-style-react/blob/master/packages/wix-style-react/docs/usage/testing.md)

## ⌨️ Typescript

The library is javascript based but types are supported with `d.ts` files.
You should get the types automatically when installing `wix-style-react`.
For any issues, check out our types
[FAQ](https://github.com/wix/wix-style-react/blob/master/packages/wix-style-react/docs/FAQ/TYPES.MD)

## 🤝 Contributing [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

We welcome contributions to Wix-Style-React!

Read our [contributing
guide](https://github.com/wix/wix-style-react/blob/master/packages/wix-style-react/CONTRIBUTING.md) and help us build or improve our components.

## 🙋 Support
Check out our [support
guide](https://github.com/wix/wix-style-react/blob/master/packages/wix-style-react/SUPPORT.md)

## 📝 License

This project is offered under [MIT
License](https://github.com/wix/wix-style-react/blob/master/packages/wix-style-react/LICENSE).
