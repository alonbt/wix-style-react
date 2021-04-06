# `wix-style-react` v9 is out!

## A leap forward
The release of version 9.0.0 includes only a single change, but an important one - upgrading from `stylable@1` to `stylable@3`.

In the next paragraphs, we will try to explain why this change was done and how important it is to our current and future efforts.

## What is Stylable
`Stylable` is a powerful CSS Preprocessor developed internally in Wix, which we use to style and extend our components.

You can read more about it in the official docs site - https://stylable.io/

Stylable v3 contains a lot of powerful features such as "Partial Mixins" and scoped CSS variables (full IE11 support).

## Why is this this change important?
In an era where components and libraries are created every day, it is crucial to have a strong component library which is easy to extend and enhance. `wix-style-react` is a battle-tested library, but lacked the extending capabilities to allow creating design systems out of its components.

Stylable in general and its new features as mentioned above are important part in making `wix-style-react` themable. This will allow extending components styles, creating themes for all of Wix's design systems needs and much more.

## Why a major version is required?
`wix-style-react` outputs all of its components transpiled, while the components' stylable stylesheets are kept raw in order for the end project to bundle it in a more performant way.

This approach works well but have a couple of caveats:

1. **Upgrade your build tool** - Stylable@3 comes with a new `webpack` plugin that must be integrated in your project. In Wix, we use a shared build tool (`yoshi@4`) which takes care of it, but if you're using your own tools - we will make sure to provide a step-by-step guide and examples in the near future.

2. **A mixture of `wix-style-react` v9 with older versions is not possible** - Stylable v3 changed its API in a way which is not backward compatible, meaning that if your project is built of multiple packages that uses `wix-style-react` (and technically also `stylable` v1), then you must upgrade **all** of these packages to the latest `wix-style-react` version as well.

## Upgrading to v9
1. Make sure you're using the latest webpack plugin
2. Upgrade all of your packages according to their order (the deepest dependency should come first)

## Next steps
Once `stylable@3` is integrated in the library, it is time to remove all `scss` usages and make sure we have only a single styling tool.

Then, we will be focus on providing an official theming solution which will allow using `wix-style-react` components in other libraries and eventually consolidate them to a single library of components for all Wix needs.
