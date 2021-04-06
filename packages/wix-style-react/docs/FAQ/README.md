# Frequently Asked Questions

If you don't find your answer here, please open an issue or ask on our slack channel -
`#wix-style-react`.

Please create a pull request with the solution if it worth sharing.

<br/>

- [Usage issues](#%f0%9f%91%a8%e2%80%8d%f0%9f%8f%ab-usage-issues)
  - [How should I import a component properly?](#how-should-i-import-a-component-properly)
  - [I'm not sure which component to use to implement the desired spec](#i'm-not-sure-which-component-to-use-to-implement-the-desired-spec)
  - [My build suddenly started to fail, what should I do?](#my-build-suddenly-started-to-fail,-what-should-i-do?)
  - [I upgraded a major version and things started to break](#i-upgraded-a-major-version-and-things-started-to-break)
  - [The component I'm using does not look or behave as expected](#the-component-i'm-using-does-not-look-or-behave-as-expected)
  - [Making Server-Side-Rendering (SSR) work](#making-server-side-rendering-ssr-work)
  - [Components do not have styling in the first render of Server-Side-Rendering (SSR)](#components-do-not-have-styling-in-the-first-render-of-server-side-rendering-ssr)
  - [My PR was merged, why can't I see it in my project?](#my-pr-was-merged-why-cant-i-see-it-in-my-project)
  - [I getting a weird error when using some components' TestKit?](#i-getting-a-weird-error-when-using-some-components-testkit)
    - [`TypeError: document.x is not a function`](#typeerror-documentx-is-not-a-function)
  - [How can I get colors and fonts to use in my project?](#how-can-i-get-colors-and-fonts-to-use-in-my-project)
  - [How does look the Dropdown family?](#how-does-look-the-dropdown-family)
  - [What are the differences between `<Box/>` and Layout's family?](#what-are-the-differences-between-box-and-layouts-family)
- [Contributing issues](#%f0%9f%92%81%e2%80%8d%e2%99%82%ef%b8%8f-contributing-issues)
  - [Created a PR but the build is failing on CI, should I do something?](#created-a-pr-but-the-build-is-failing-on-ci-should-i-do-something)
  - [How can I run only one test locally?](#how-can-i-run-only-one-test-locally)
  - [Unit tests are failing with `renderer.register` error](#unit-tests-are-failing-with-rendererregister-error)
  - [I have a request for a feature or a new component. How can I get it?](#i-have-a-request-for-a-feature-or-a-new-component-how-can-i-get-it)

<br/>

## 👨‍🏫 Usage issues

### How should I import a component properly?

Our library supports named-imports:

```js
import { Button } from 'wix-style-react';
```

`import`ing a component directly from `dist/src` is strongly prohibited.

### I'm not sure which component to use to implement the desired spec
We recommend checking out our [cheatsheet](https://www.wix-style-react.com/?path=/story/introduction-cheatsheet--components-cheatsheet) page which includes a view of most of the library components inventory.
Furthermore, it includes links to the components and ux stories. If you cannot find it there and you're unable to find it by the regular search, please contact us at #wix-style-ux or #wix-style-react channels.

### My build suddenly started to fail, what should I do?
Make sure that you use the most updated Wix Style React version. We recommend checking the [change log](https://github.com/wix/wix-style-react/blob/master/CHANGELOG.md) for breaking changes and making sure that you don't use a lock file.

### I upgraded a major version and things started to break
We recommend following the detailed [migration guide](https://github.com/wix/wix-style-react/blob/master/MIGRATION.md) to make sure that you've migrated to the latest Wix Style React version correctly.

### The component I'm using does not look or behave as expected
Firstly, make sure that you use the component as described within the examples and API description. Should the issue persists,
please try to recreate it within storybook. Once you are able to recreate it, please contact #wix-style-react channel and provide us with the following information:
- A storybook link to the code snippet:
![](../assets/storybook_snippet_url.png)
- A link to a Zeplin spec of what you are trying to implement.
- A link to the repository of the project.
- Information about the difference between the current and expected behaviour or look.


### Making Server-Side-Rendering (SSR) work

You may receive an error like this one: `TypeError: (0 , _TextSt2.default) is not a function`.

In that case, ensure your generated `index.js` invokes [`attachHook`](https://stylable.io/docs/guides/server-side-rendering) from `@stylable/node`:

```diff
modified: my-generated-project/index.js
 const { wixCssModulesRequireHook } = require('yoshi-runtime'); //hook to `.scss` files
+const { resolveNamespaceFactory, attachHook } = require('@stylable/node'); //hook to `.st.css` files
+const {name} = require('./package.json');

wixCssModulesRequireHook();
+attachHook({
+  stylableConfig: {
+    resolveNamespace: resolveNamespaceFactory(name)
+  }
+});
```

Also, `yoshi` enables [`separateCss`](https://wix.github.io/yoshi/docs/api/configuration.html#separatecss) configuration by default, which outputs the standard CSS to a separate `app.css` file. Make sure you **don't** disable this configuration.

### Components do not have styling in the first render of Server-Side-Rendering (SSR)

Components that use Stylable may not receive their styling on the first render (while other components styled with Css-Modules are working fine).
In that case it means that your Stylable configuration with Yoshi is set to inject styling tags to the header of the html document.
You need to change the config in order for the styling to be bundled as a separate css, like css-modules.

Steps to fix it:

1. inside your package.json modify the config inside yoshi part like this:

```
  "yoshi": {
  ....
    "separateStylableCss": true,
  ...
  }
```

2. build your app
3. a generated stylable css is now created in your statics - `{your-app}/dist/statics/app.stylable.bundle.css`
4. import that css in your index.ejs (like your normal app.css) is imported.

`<link rel="stylesheet" href="<%= clientTopology.staticsBaseUrl %>app.stylable.bundle">`

### My PR was merged, why can't I see it in my project?

You PR might've merged into the `master` branch, but a new version containing it was not released
yet. You can contact the WSR team (on Slack) to request a release.

### I getting a weird error when using some components' TestKit?

##### `TypeError: document.x is not a function`

You might need to include a Polyfill in your test file. We provide some [essential
polyfills](../../testkit/polyfills/index.js), you may use them in the following way:

```js
import { rangePolyfill } from 'wix-style-react/dist/testkit/polyfills';

beforeEach(() => {
  rangePolyfill.install();
});

afterEach(() => {
  rangePolyfill.uninstall();
});

// ...
```

Check out the documentation of the component you're using for more info.

### How can I get colors and fonts to use in my project?

We recommend using the [Typography
components](/?path=/story/design-guidelines-foundation--1-2-typography)
in order to get the right colors and fonts. Alternatively, if these components does not suit your
needs, you can use the [Typography
classes](/?path=/story/components-api-styling--1-2-typography-classes)
instead.

Also check out the
[&lt;Box>](/?path=/story/components-api-components--box)
component for using correct colors and fonts.

### How does look the Dropdown family?

![](../assets/dropdown-family-diagram.png)

### What are the differences between `<Box/>` and Layout's family?

In short:

- `<Box/>` is a one-dimensional component that contains children and allows layouting them in a particular direction (horizontally or vertically). Mostly useful for small areas.
- Layout is a flexible component family that layouts children by cells that are placed into rows automatically. It's flexible - we can control stuff like the maximum amount of rows and gaps. Mostly useful for medium/large areas.

Check out [this](../usage/LAYOUTING.md) guide to learn more about layouting.

<br/>

## 💁‍♂️ Contributing issues

### Created a PR but the build is failing on CI, should I do something?

You should investigate the failing build and fix it. Sometimes, your build might be failing because
of a flaky test, so re-running it may solve the issue.

### How can I run only one test locally?

For component tests (file ending with `.spec.js`) we're using jest. You can add a `.only` flag to
your `it` / `describe` in order to make it focused, but you'll need to run only the file containing
the test. You can start watch mode by running `$ npm run test:watch`, then pressing `p` in order to
filter your specific test file.

For e2e tests we're using `protractor`, which uses `jasmine` under the hood. You can make an `it` or
`describe` block focused by prefixing it with a `f`, so `it` will turn to `fit` and `describe` will
turn to `fdescribe`.

⚠️ **Make sure to not push focused tests. Your build will fail when you do.**

### Unit tests are failing with `renderer.register` error

This can be a sign of invalid Jest cache that is still in use. Simply `jest --clearCache` to resolve.

### I have a request for a feature or a new component. How can I get it?

Simply [open a new issue!](https://github.com/wix-private/wsr-issues/issues/new) Even better, you
can also open a PR is you'd like! We'll love to accept new contributions 😄 .
