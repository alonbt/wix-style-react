# Creating new components

`wix-style-react` includes a generator for scaffolding new components.

Run generator in root folder of the project:

```sh
npm run generate
```

![](../assets/component-generator.png)

---

You will be asked for component name (which **must** be in `PascalCase`) and optional description.

The generator will do automatically:
* Create files according to structure defined in [Component Structure](./COMPONENT_STRUCTURE.md) document
* Add necessary `export`s to [index file](../../src/index.js), [testkits](../../testkit) and [stories index](../../stories/index.js)


---

Generator will create a sample `.story.js`. Read [story.js usage document](https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md) for details.

By default documentation will be shown under `Component` category. To change it modify `category` value in `src/YourNewComponent/test/storySettings.js`.

Make sure to re-arrange the [Stories index file](../../stories/index.js) as needed. The order of `require`s in that file is reflected in rendered storybook sidebar.
