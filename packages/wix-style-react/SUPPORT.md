# Support

## Table of Content

*   [Component Documentation ℹ️](#component-documentation-ℹ%EF%B8%8F)

    *   [Components and Testkit Usage 🎉](#components-and-testkit-usage-)
    *   [Frequently Asked Questions ❓](#frequently-asked-questions-)
    *   [Playground 🏀](#playground-)
    *   [Cheatsheet 👋🏻](#cheatsheet-)
    *   [Resources 📖](#resources-)

*   [Handling Issues 🧐](#handling-issues-🧐)

    *   [Debugging Strategies](#debugging-strategies)

    *   [Reporting an issue ![github-mark](/GitHub-Mark-32px.png)](#reporting-an-issue-github-mark)

        *   [Have you managed to resolve the issue?](#have-you-managed-to-resolve-the-issue)

    *   [Wix Employees](#wix-employees)

*   [Supported versions 🧷](#supported-versions-🧷)

    *   [Upgrade from older versions](#upgrade-from-older-versions)

## Component Documentation ℹ️

Each component has a story page that describes all the interesting states that are supported.
A story page has one or more of the following tabs:

*   **Description:** Contains a short description of the component usage, an example of how to import it and examples of common usages and features.
*   **API:** Detailed section with all the props names, types, default values, required values and descriptions.
*   **Testkit:** Contains an import examples and API description of the component testkit.
*   **Playground:** A graphical UI to interact with a component's arguments dynamically, without needing to code. It creates a code snippet which can be used in your application.

### Components and Testkit Usage 🎉

A component should be treated as a black box. In order to help you with testing it within your code, we provide a set of utility functions called `testkit`.
For a detailed guide how to use a testkit, refer to our [Testing guide](https://www.wix-style-react.com/?path=/story/introduction-testing--testing).
Moreover, if you want to see specific examples, our tests are available and well documented under:
`src/<ComponentName>/test/<ComponentName>.spec.js`

### Frequently Asked Questions ❓

You may find an answer to your question at the [Frequently Asked Questions](https://github.com/wix/wix-style-react/tree/master/packages/wix-style-react/docs/FAQ#frequently-asked-questions) article.

### Playground 🏀

You can use the [Playground](https://www.wix-style-react.com/?path=/story/introduction-playground--playground) to easily test the component abilities. In order to share your code snippet with others, follow the following steps:

1.  Edit the code snippet.
2.  Click ![save-button](/playgroundSaveButton.png) which located on the top right side of the code editor.
3.  A generated url will be created and can be shared with others. ![generated-link](/generatedLink.png)

### Cheatsheet 👋🏻

The components inventory is displayed at the [Cheetsheet](https://www.wix-style-react.com/?path=/story/introduction-cheatsheet--components-cheatsheet) page which contains examples and links to the relevant documentation pages.

### Resources 📖

New to Wix Style React? It's easy to learn if you know where to start!
Check out the [Getting Started](https://www.wix-style-react.com/?path=/story/introduction-getting-started--getting-started) page.

## Handling Issues 🧐

### Debugging Strategies

When you run into an issue, don't panic 🤗. We have some recommendations how to solve it:

*   Look for similar working examples in our documentation and try to find if perhaps you've missed something.
*   Try to isolate the problem, comment out wrappers and other features gradually until you find the source of the problem.
*   Verify that the latest version of Wix Style React is installed (in `node_modules`, not `package.json`).
*   Try to find whether there is external CSS that might override parts of our components.

If you **suspect** the issue you encountered is related to the component or testkit, before you report an issue, try to verify it by:

*   Recreate the issue in our playground.
*   Pin Wix Style React version to a prior one, in order to see if there's no issue there. Note that you can check out the [CHANGELOG](https://github.com/wix/wix-style-react/blob/master/packages/wix-style-react/CHANGELOG.md) to view the changes of each released version.

Once you're absolutely sure the issue is ours, please let us know through the channel or by reporting an issue.

### Reporting an issue ![github-mark](/GitHub-Mark-32px.png)

We use Jira as bugs and feature requests tracker.
If you think you have found a bug, or have a new feature idea- please start by making sure it hasn't already been [reported or fixed](https://jira.wixpress.com/secure/RapidBoard.jspa?rapidView=2394&projectKey=DSM&view=planning&selectedIssue=DSM-1118&issueLimit=100).
You can search through existing issues and pull requests to see if someone has reported a similar issue to yours.

If it does not exist, please follow the following guidelines:

*   Click [here](http://wix.to/i0DYB4w) to get the relevant issue template.

*   Please begin the title with `<ComponentName/>` where appropriate, and use a succinct description that helps others find similar issues.
    *   `<FilePicker/>`- `<some feature>` doesn't work ❌
    *   `<Table/>` - Add support for `<some feature>` ✅

*   Please don't group multiple topics in one issue – each issue should have its own github issue.

*   Please add a link with a recreation of the issue within our [Playground](###playground).

#### Have you managed to resolve the issue?

*   ✅ A contribution to our [Frequently Asked Questions](https://github.com/wix/wix-style-react/tree/master/packages/wix-style-react/docs/FAQ#frequently-asked-questions) article is welcome! Check out our [contribution guide](https://github.com/wix/wix-style-react/blob/master/packages/wix-style-react/CONTRIBUTING.md) for more information.
*   ❌ Create [a GitHub issue](#reporting-an-issue-github-mark).

### Wix Employees

Here are few more steps which can help with troubleshooting an issue we struggle with:

*   Debug storybook on your local machine. You can place a `debugger` inside the story of your rebellious component.
*   Search `#wix-style-react` slack channel for similar problems.
*   Consult with your Guild Masters (Organization Wix Style React Expert / Heavy Users).
*   Create a new yoshi project and try to recreate the issue in a clean environment. This can be helpful in order to check whether it's an issue with the component, testkit or the project you currently work on.
*   Check with your UX designer whether the desired spec was reviewed by Wix Style React UX team.
*   Consult with `#wix-style-ux` slack channel for UX related questions.

## Supported versions 🧷

The current status of each Wix Style React version is as follows:

| Version        | Active / Inactive development |
| ------------- |:-------------:|
| [Version 9](https://www.wix-style-react.com)| ✅ |
| [Version 8](https://wix-style-react-v8.now.sh)| ❌ |
| [Version 7](https://wix-style-react-v7.now.sh)| ❌ |
| [Version 6](https://wix-wix-style-react-v6.surge.sh)| ❌ |

### Upgrade from older versions

Read and follow our migration guide:

*   From 7.x to 8.x/9.x read [V8/V9 migration guide](https://github.com/wix/wix-style-react/blob/master/packages/wix-style-react/MIGRATION.md)
