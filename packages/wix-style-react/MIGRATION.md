# `wix-style-react` v9 Migration Guide
This release upgrades Stylable version to 3.

We decided to release this change as a major version although there are **no** breaking changes in any component API from 8 to 9!

# `wix-style-react` v8 Migration Guide

This guide will help to migrate `wix-style-react` from v7 to v8.

Changes from your side might be required. Follow this guide for a smooth ride.

A high level overview of changes are described in [Release Notes](./RELEASE_NOTES_v8.md)

_NOTE <span style="color:#c30000">links don't work in Storybook - only in GitHub. sorry for the inconvenience.</span>_

## Index
- [Suggested steps for the migration](#suggested-steps-for-the-migration)
- [Changes described by domain](#changes-described-by-domain)
- [All changes described per component list](#all-changes-described-per-component-list)
- [More guides](#-more-guides)
---

## Suggested steps for the migration

### Before you upgrade

Before upgrading to v8, it is best to fix all **Deprecation Messages** shown in console, that appear in v7.<br>
It will be much easier to apply other changes.

An example for v7 deprecation log:

`<Input/>` has deprecated `error` prop:
```jsx
<Input error />
```
Therefore the following warning will appear:
```bash
Wix-Style-React: [WARNING] <Input/> - error and errorMessage props are deprecated. Please use status="error" and statusMessage instead.
```
Changing to `status="error"` resolves this warning:
```diff
-<Input error />
+<Input status="error" />
```
This code is now ready for v8!

### Order of migration

First of all, make sure you have the latest version:
```sh
npm install wix-style-react@8
```

This is the recommended migration flow. Each step is described in more detail below.

1. Change component import statements to named-imports and to the icons library.

    Use codemods:
    ```bash
    npx wix-ui-codemod wix-style-react/named-imports <path-to-your-project>
    npx wix-ui-codemod wix-style-react/icons-common <path-to-your-project>
    ```
1. Remove old and deprecated components like `AutoCompleteComposite`. Follow list [here](#remove-old-and-deprecated-components).
1. Change components with `upgrade` prop like `Tooltip` and `Page`.

   Use codemod:
   ```bash
   npx wix-ui-codemod wix-style-react/migrate-wsr8 <path-to-your-project>
   ```

1. Change from `PopoverMenu` to the `PopoverMenu` which is stated as `PopoverMenuNext` - it becomes the official `PopoverMenu` in wsr8.
1. Change of all input/selection family components to "status message" standard by using `status` and `statusMessage` instead of `error` and `errorMessage`.
1. Handle all other general changes as mentioned below. Just search in your code for each component and apply the changes

---

### "File by File" vs. "Component by Component" strategies

It's up to you whether to take a component and search it all around the project, or go file by file and follow this migration guide.

It might be easier to go file-by-file as you can run your tests per file.

## Changes described by domain

### Import Statements

#### From cherry picking to named imports

For better performance we introduced named imports which will allow yoshi or custom webpack to eliminate dead code in our components. [Read more about tree-shaking](https://webpack.js.org/guides/tree-shaking/)

Cherry-pick imports are no longer supported, instead you should use the named imports.

```diff
- import TextButton from 'wix-style-react/TextButton';
+ import { TextButton } from 'wix-style-react';
```

use codemod to avoid manual changes

```sh
npx wix-ui-codemod wix-style-react/named-imports <path-to-your-project>
```

#### Separated icons library

Icons import from `wix-style-react` is no longer supported. Instead please import them from `wix-ui-icons-common`

```diff
- import Add from 'wix-style-react/new-icons/Add';
+ import Add from 'wix-ui-icons-common/Add';
```

use codemod to avoid manual changes

```sh
npx wix-ui-codemod wix-style-react/icons-common <path-to-your-project>
```

#### Automatic codemod changes

As mentioned, to make migration process easier, simply run the following codemods:

```bash
npx wix-ui-codemod wix-style-react/named-imports <path-to-your-project>
npx wix-ui-codemod wix-style-react/icons-common <path-to-your-project>
npx wix-ui-codemod wix-style-react/migrate-wsr8 <path-to-your-project>
```

### Remove old and deprecated components

1. The following components were deprecated for a long time and will not be available anymore.
   Use `<FormField/>` instead:

    - `<AutoCompleteComposite/>`
    - `<FieldWithSelectionComposite/>`
    - `<GoogleAddressInputWithLabel/>`
    - `<InputAreaWithLabelComposite/>`
    - `<MultiSelectComposite/>`

2. The following components were removed because of more up-to-date APIs

    - `<FullTextView/>`
    - `<HBox/>`, `<VBox/>` - use `<Box/>` instead
    - `<StatsWidget/>` - use `<StatisticsWidget/>` instead
    - `<TextLink/>` - use `<TextButton/>` instead

3. The following components were removed.
  `<Sidebar/>` should be used instead:

    - `<SideMenu/>`,
    - `<SideMenuDrill/>`,
    - `<SlideAnimation/>`

4. Remove `<DataTable/>` - This component became _internal_ and should not be used directly. Use `<Table/>` instead.

5. The following components were removed.
   Use `<MessageBoxMarketerialLayout/>` or `<MessageBoxFunctionalLayout/>` instead.

    - `<HeaderLayout/>`,
    - `<HeaderLayout1/>`,
    - `<FooterLayout/>`,
    - `<FooterLayout1/>`,
    - `<MessageBoxLayout2/>`,
    - `<MessageBoxLayout1/>`

6. `<DateInput/>` component which was under _WIP (Work In Progress)_ was removed. Use `<DatePicker/>` instead.

### API Changes for big components
- [\<Page/>](#page) - remove `upgrade`, to better performance, new API features and slickness.
- [\<PopoverMenu/>](#popovermenu) - Change implementation to the previously `<PopoverMenuNext/>`
- [\<Tooltip/>](#tooltip) - Change implemenation to the upraded `Tooltip`

#### Standardize components with tooltip props configuration

Standartize the usage of internal tooltips - instead of passing specific props (e.g. `tootlipAppendTo`), you should propagate the entire `tooltipProps`, except `tooltipContent`.

- [\<InputWithOptions/>](#page), [\<Popover/>](#page) and the entire dropdown family - change default behavior to **not** call `clickOutside` when popover is closed.
- [\<AddItem/>](#page)
- [\<ImageViewer/>](#page)

#### Standardize input components message indications

Change message indication to `status` and `statusMessage` instead of `error`, `errorMessage`, `help` & `helpMessage`.

- [\<AutoComplete/>](#autocomplete)
- [\<ColorInput/>](#colorinput)
- [\<DatePicker/>](#datepicker)
- [\<Dropdown/>](#dropdown)
- [\<GoogleAddressInput/>](#googleaddressinput)
- [\<ImageViewer/>](#imageviewer)
- [\<Input/>](#input)
- [\<InputArea/>](#inputarea)
- [\<InputWithOptions/>](#inputwithoptions)
- [\<MultiSelect/>](#multiselect)
- [\<MultiSelectCheckbox/>](#multiselectcheckbox)
- [\<NoBorderInput/>](#noborderinput)
- [\<NumberInput/>](#numberinput)
- [\<Search/>](#search)

#### Remove old skins and themes

The library contained a lot of old code, including unsupported styles of the design system. Many components used a `theme` prop that is now removed

- [\<AutoComplete/>](#autocomplete)
- [\<ColorInput/>](#colorinput)
- [\<Dropdown/>](#dropdown)
- [\<GoogleAddressInput/>](#googleaddressinput)
- [\<Input/>](#input)
- [\<InputWithOptions/>](#inputwithoptions)
- [\<MultiSelect/>](#multiselect)
- [\<MultiSelectCheckbox/>](#multiselectcheckbox)
- [\<NumberInput/>](#numberinput)
- [\<Search/>](#search)

#### More general changes

- `<Avatar/>` - removed old and deprecated colors.
- `<CircularProgressBar/>` - removed exeperimental dynamic loading, in favor of future improvements. also remove legacy driver methods.
- `<DatePicker/>` - change `isOpen` to `initialOpen`
- `<Input/>` - removed legacy sub component `<Input.Units/>` and the `magnifyingGlass` props
- `InputArea/>` - removed `onTooltipShow
- `<LinearProgressBar/>` - removed exeperimental dynamic loading, in favor of future improvements. also remove legacy driver methods.
- `<Loader/>` - removed exeperimental dynamic loading, in favor of future improvements.
- `<RadioGroup/>` - removed `type`, a deprecated skin of the radio group in favor of the `<SegmentedToggle/>` component
- `<StatisticsWidget/>` - removed `statistics` prop.
- `<Table/>` - removed `clickRowChecbox` - removed due to typo, use `clickRowCheckbox` instead
- `<TableActionCell/>` - use new `Tooltip` component internally and rename the `primaryAction.theme` prop to `primaryAction.skin`
- `<Tag/>` - wrap text by default.

## All changes described per component list
- [\<AddItem/>](#additem)
- [\<Avatar/>](#avatar)
- [\<AutoComplete/>](#autocomplete)
- [\<AutoCompleteComposite/>](#autocompletecomposite)
- [\<Badge/>](#badge)
- [\<BarChart/>](#barchart)
- [\<Card.Header/>](#cardheader)
- [\<CircularProgressBar/>](#circularprogressbar)
- [\<ColorInput/>](#colorinput)
- [\<DateInput/>](#dateinput)
- [\<DataTable/>](#datatable)
- [\<DatePicker/>](#datepicker)
- [\<Dropdown/>](#dropdown)
- [\<DropdownLayout/>](#dropdownlayout)
- [\<FieldWithSelectionComposite/>](#fieldwithselectioncomposite)
- [\<FormField/>](#formfield)
- [\<FullTextView/>](#fulltextview)
- [\<GoogleAddressInputWithLabel/>](#googleaddressinputwithlabel)
- [\<GoogleAddressInput/>](#googleaddressinput)
- [\<HBox/>](#hbox)
- [\<ImageViewer/>](#imageviewer)
- [\<Input/>](#input)
- [\<InputArea/>](#inputarea)
- [\<InputAreaWithLabelComposite/>](#inputareawithlabelcomposite)
- [\<InputWithOptions/>](#inputwithoptions)
- [\<Label/>](#label)
- [\<LinearProgressBar/>](#linearprogressbar)
- [\<ListItemSection/>](#listitemsection)
- [\<Loader/>](#loader)
- [\<MessageBoxFunctionalLayout/>](#messageboxfunctionallayout)
- [\<MultiSelect/>](#multiselect)
- [\<MultiSelectCheckbox/>](#multiselectcheckbox)
- [\<MultiSelectComposite/>](#multiselectcomposite)
- [\<NoBorderInput/>](#noborderinput)
- [\<NumberInput/>](#numberinput)
- [\<Page/>](#page)
- [\<Popover/>](#popover)
- [\<PopoverMenu/>](#popovermenu)
- [\<RadioGroup/>](#radiogroup)
- [\<RichTextInputArea/>](#richtextinputarea)
- [\<Search/>](#search)
- [\<SideMenu/>](#sidemenu)
- [\<SideMenuDrill/>](#sidemenudrill)
- [\<SlideAnimation/>](#slideanimation)
- [\<StatisticsWidget/>](#statisticswidget)
- [\<StatsWidget/>](#statswidget)
- [\<TextLink/>](#textlink)
- [\<Table/>](#table)
- [\<TableActionCell/>](#tableactioncell)
- [\<Tag/>](#tag)
- [\<ToggleButton/>](#togglebutton)
- [\<Tooltip/>](#tooltip)
- [\<VBox/>](#vbox)

---

## \<AddItem/>

*Props:*
- removed `tooltipAppendTo` - use `tooltipProps` instead.
- removed `tooltipPlacement` - use `tooltipProps` instead.
- removed `tooltipFixed` - use `tooltipProps` instead.
- removed `tooltipFlip` - use `tooltipProps` instead.

_Note: `tooltipProps` are defined in Tooltip component story page._

*Examples:*
<details>
  <summary>Using <code>tooltipProps</code> prop example:</summary>

  - Before:
  ```jsx
  <AddItem
    tooltipContent="hello"
    tooltipAppendTo="window"
    tooltipPlacement="top"
    tooltipFixed
    tooltipFlip
  />
  ```

  - After:
  ```jsx
  <AddItem
    tooltipContent="hello"
    tooltipProps={
      appendTo: 'window',
      content: 'hello',
      placement: 'top',
      fixed: true,
      flip: true,
    }
  />
  ```
</details>

## \<Avatar/>

*Props:*
- `color` - Deprecated old values: 'blue', 'green', 'grey', 'red', 'orange'. the new values are now A1 to A6.<br/>
  There is no specific mapping between old values to new, contact your UX designer if needed.

*Examples:*
<details>
  <summary>Using new <code>color</code> prop values example:</summary>

  - Before:
  ```jsx
  <Avatar color="red" />
  ```

  - After:
  ```jsx
  <Avatar color="A1" />
  ```
</details>

## \<AutoComplete/>

*Props:*
- removed `theme`.
  For more information and examples go to [theme prop](#theme-prop) section.
- removed `error` & `errorMessage` to `status` & `statusMessage`. <br/>
  For more information and examples go to [error --> status](#error--errormessage----status--statusmessage) section.
- removed `help` & `helpMessage` use a `<FormField/>` wrapper instead. <br/>
  For more information and examples go to [help prop](#help-prop) section.

## \<AutoCompleteComposite/>

This component was deleted, use `<FormField/>` instead.

*Examples:*
<details>
  <summary>Using <code><span><</span>FormField<span>/></span></code> example:</summary>

  - Before:
  ```jsx
  <AutoCompleteComposite>
    <Component />
  </AutoCompleteComposite>
  ```

  - After:
  ```jsx
  <FormField>
    <Component />
  </FormField>
  ```
</details>

## \<Badge/>

*Testkit:*
- removed `getPrefixIcon` - use your own dataHook on prefix element instead.
- removed `getSuffixIcon` - use your own dataHook on suffix element instead.

*Examples:*
<details>
  <summary>Using own dataHook over <code>getPrefixIcon</code> example:</summary>

  - Before:
  ```jsx
  it('should have suffix icon', async () => {
    const driver = createDriver(
      <Badge suffixIcon={<Email />}>Hello</Badge>,
    );
    expect(!!(await driver.getSuffixIcon())).toBe(true);
  });
  ```

  - After:
  ```jsx
  it('should have suffix icon', async () => {
    const dataHook = 'dataHook';
    const driver = createDriver(
      <Badge
        suffixIcon={ <Email data-hook={dataHook} /> }
      >
        Hello
      </Badge>,
    );
    expect(document.querySelector(`[data-hook="${dataHook}"]`)).toBeTruthy();
  });
  ```
</details>

## \<BarChart/>

*Props:*
- removed `deprecatedColors`.
  Just remove this prop, no other change required.

## \<Card.Header/>

*Props:*
- removed `withoutDivider` - from now on a card will be *without* a divider by default.<br/>
  Add a `<Card.Divider/>` when needed and delete `withoutDivider` wherever it's used.

*Examples:*
<details>
  <summary>Using own dataHook over <code><span><</span>Card.Divider/></code> example:</summary>

  - Before:
  ```jsx
  <Card>
    <Card.Header title="Card title" withoutDivider={false} />
    <Card.Content>...</Card.Content>
  </Card>
  ```
_Pay attention: In all places without withoutDivider, the divider will disappear automatically! Be sure to add a `<Card.Divider/>`_

  - After:
  ```jsx
  <Card>
    <Card.Header title="Card title" />
    <Card.Divider />
    <Card.Content>...</Card.Content>
  </Card>
  ```
</details>

## \<CircularProgressBar/>

*Props:*
- removed `shouldLoadAsync` - an experimental flag for testing dynamic imports and safe to remove.

*Testkit:*
- changed `getTooltipErrorMessage` in driver (not uni) returns a `string` instead of `Promise<string>`.
- removed `getTooltip` - use `isErrorIconShown` and `getTooltipErrorMessage` instead.
- removed `isTooltipShown` - use `isErrorIconShown` and `getTooltipErrorMessage` instead.

## \<ColorInput/>

*Props:*
- removed `theme`.
  For more information and examples go to [theme prop](#theme-prop) section.
- removed `error` & `errorMessage` to `status` & `statusMessage`. <br/>
  For more information and examples go to [error --> status](#error--errormessage----status--statusmessage) section.
- removed `help` & `helpMessage` use a `<FormField/>` wrapper instead. <br/>
  For more information and examples go to [help prop](#help-prop) section.

*Testkit:*
- added `hasStatus`.
- added `getStatusMessage`.
- removed `hasError` - use `hasStatus` instead.

## \<DataTable/>

This component is _internal_ and should not be used directly - use `<Table/>` instead.

## \<DateInput/>

This component is _internal_ and should not be used directly - use `<DatePicker/>` instead.

## \<DatePicker/>

*Props:*
- removed `isOpen` - use `initialOpen` instead.
- removed `error` & `errorMessage` to `status` & `statusMessage`. <br/>
  For more information and examples go to [error --> status](#error--errormessage----status--statusmessage) section.

*Exaples:*
<details>
  <summary>Using <code>initialOpen</code> prop example:</summary>

  - Before:
  ```jsx
  <DatePicker isOpen/>
  ```

  - After:
  ```jsx
  <DatePicker initialOpen/>
  ```
</details>

## \<Dropdown/>

*Props:*
- removed `theme`.
  For more information and examples go to [theme prop](#theme-prop) section.
- removed `error` & `errorMessage` to `status` & `statusMessage`. <br/>
  For more information and examples go to [error --> status](#error--errormessage----status--statusmessage) section.
- removed `help` & `helpMessage` use a `<FormField/>` wrapper instead. <br/>
  For more information and examples go to [help prop](#help-prop) section.

## \<DropdownLayout/>

*Props:*
- removed `theme`. (We once had b2b theme, no longer supported)<br/>
  Just remove this prop, no other change required.


*Testkit:*
- removed `hasTheme`

## \<FieldWithSelectionComposite/>

This component was deleted, use `<FormField/>` instead.

*Examples:*
<details>
  <summary>Using <code><span><</span>FormField<span>/></span></code> example:</summary>

  - Before:
  ```jsx
  <FieldWithSelectionComposite>
    <Component />
  </FieldWithSelectionComposite>
  ```

  - After:
  ```jsx
  <FormField>
    <Component />
  </FormField>
  ```
</details>

## \<FormField/>

*Testkit:*
- (protractor) removed `getTooltipInfoValue`.

## \<FullTextView/>

This component was deleted, use `<Text/>` instead.

## \<GoogleAddressInputWithLabel/>

This component was deleted, use `<FormField/>` instead.

*Examples:*
<details>
  <summary>Using <code><span><</span>FormField<span>/></span></code> example:</summary>

  - Before:
  ```jsx
  <GoogleAddressInputWithLabel>
    <Component />
  </GoogleAddressInputWithLabel>
  ```

  - After:
  ```jsx
  <FormField>
    <Component />
  </FormField>
  ```
</details>

## \<GoogleAddressInput/>

*Props:*
- removed `theme`.
  For more information and examples go to [theme prop](#theme-prop) section.
- removed `error` & `errorMessage` to `status` & `statusMessage`. <br/>
  For more information and examples go to [error --> status](#error--errormessage----status--statusmessage) section.
- removed `help` & `helpMessage` use a `<FormField/>` wrapper instead. <br/>
  For more information and examples go to [help prop](#help-prop) section.

## \<HBox/>

This component was deleted, use `<Box/>` instead.

## \<ImageViewer/>

*Props:*
- removed `tooltipPlacement` - use `tooltipProps` instead.
- removed `error` & `errorMessage` to `status` & `statusMessage`. <br/>
  For more information and examples go to [error --> status](#error--errormessage----status--statusmessage) section.

*Testkit:*
- added `hasStatus`
- added `getStatusMessage`
- removed `isErrorVisible` - use `hasStatus` instead
- removed `getErrorTooltipContent` - use `getStatusMessage` instead

*Examples:*
<details>
  <summary>Using <code>tooltipContent</code> prop example:</summary>

  - Before:
  ```jsx
  <ImageViewer
    tooltipPlacement="top"
  />
  ```

  - After:
  ```jsx
  <ImageViewer
    tooltipProps={
      placement: 'top',
    }
  />
```
</details>

## \<Input/>

*Props:*
- removed `theme`.
  For more information and examples go to [theme prop](#theme-prop) section.
- removed `error` & `errorMessage` to `status` & `statusMessage`. <br/>
  For more information and examples go to [error --> status](#error--errormessage----status--statusmessage) section.
- removed `help` & `helpMessage` use a `<FormField/>` wrapper instead. <br/>
  For more information and examples go to [help prop](#help-prop) section.
- removed sub component `<Input.Units/>` use `<Input.Affix/>` component instead
- removed `magnifyingGlass` use `<Input.Affix/>` or `<Search/>` component instead. (see example below)
- removed `updateControlledOnClear` - refer to `showClearButton` change of behavior.

Behavior:
- `showClearButton` - previously, clicking on the clear button would have trigger *both* `onChange()` *and* `onClear()`.<br/>
  Now, clicking on the clear button will trigger *only* `onClear()`.

*Testkit:*
- removed `hasHelp`
- removed `clickUnit`
- removed `getUnit`
- removed `hasMagnifyingGlass`
- removed `clickMagnifyingGlass`
- removed `hasExclamation`
- removed `isNarrowError`
- removed `getTooltipElement`
- removed `getTooltipDataHook`

*Examples:*
<details>
  <summary>Using <code><span><</span>Input.Affix<span>/></span></code> sub component example:</summary>

  - Before:
  ```jsx
  <Dropdown
    prefix={<Input.Units>$</Input.Units>}
  />
  ```

  - After:
  ```jsx
  <Dropdown
    prefix={<Input.Affix>$</Input.Affix>}
  />
  ```
</details>

<details>
  <summary>Replacing <code>magnifyingGlass</code> with <code><span><</span>Input.Affix<span>/></span></code> or <code><span><</span>Search<span>/></span></code> example:</summary>

  - Before:
  ```jsx
  <Input magnifyingGlass />
  ```

  - After with `<Input.IconAffix>`:
  ```jsx
  <Input suffix={
    <Input.IconAffix>
      <Icons.Search />
    </Input.IconAffix>
  } />
  ```

  - After with `<Search>`:
  ```jsx
  <Search />
  ```
</details>

## \<InputArea/>

*Props:*
- removed `onTooltipShow`.
- removed `error` & `errorMessage` to `status` & `statusMessage`. <br/>
  For more information and examples go to [error --> status](#error--errormessage----status--statusmessage) section.

*Testkit:*
- added `hasStatus`.
- added `getStatusMessage`.
- removed `hasError` - use `hasStatus`.
- removed `hasWarning` - use `hasStatus`.
- removed `getTooltipDataHook`.
- removed `getTooltipElement`.
- removed `isErrorMessageShown`.
- removed `mouseEnterErrorIndicator`.
- removed `getErrorMessage` - use `getStatusMessage` instead.
- removed `getWarningMessage` - use `getStatusMessage` instead.

## \<InputAreaWithLabelComposite/>

This component was deleted, use `<FormField/>` instead.

*Examples:*
<details>
  <summary>Using <code><span><</span>FormField<span>/></span></code> example:</summary>

  - Before:
  ```jsx
  <InputAreaWithLabelComposite>
    <Component />
  </InputAreaWithLabelComposite>
  ```

  - After:
  ```jsx
  <FormField>
    <Component />
  </FormField>
  ```
</details>

## \<InputWithOptions/>

*Props:*
- removed `theme`.
  For more information and examples go to [theme prop](#theme-prop) section.
- removed `error` & `errorMessage` to `status` & `statusMessage`. <br/>
  For more information and examples go to [error --> status](#error--errormessage----status--statusmessage) section.
- removed `help` & `helpMessage` use a `<FormField/>` wrapper instead. <br/>
  For more information and examples go to [help prop](#help-prop) section.
- removed `disableClickOutsideWhenClosed`, this functionality is now permanent. This means the `onClickoutside` callback will no longer be called when the component is in it's collpased state.

## \<Label/>

This component was deleted.<br>
Depends on your use case, you can use one of the following:
- `<FormField/>`
- `<Text tagName="label">`

*Examples:*
<details>
  <summary>Using <code><span><</span>FormField<span>/></span></code> example:</summary>

  - Before:
  ```jsx
  <Label size="medium">
    Name:
    <Input/>
  </Label>
  ```

  - After:
  ```jsx
  <FormField label="Name:">
    <Input/>
  </FormField>
  ```
</details>

<details>
  <summary>Using <code><span><</span>Text tagName="label"<span>/></span></code> example:</summary>

  - Before:
  ```jsx
  <Label size="medium" for="xxx">
    Name:
  </Label>
  ```

  - After:
  ```jsx
  <Text tagName="label" for="xxx">Name:</Text>
  ```
</details>

## \<LinearProgressBar/>

*Props:*
- removed `shouldLoadAsync` - an experimental flag for testing dynamic imports and safe to remove.

*Testkit:*
- changed `getTooltipErrorMessage` in driver (not uni) returns a `string` instead of a `Promise<string>`.
- removed `getTooltip` - use `isErrorIconShown` and `getTooltipErrorMessage` instead.
- removed `isTooltipShown` - use `isErrorIconShown` and `getTooltipErrorMessage` instead.

## \<ListItemSection/>

General:
- TYPES export no longer is supported. Import types definitions through: `ListItemSectionProps`.

## \<Loader/>

*Props:*
- removed `shouldLoadAsync` - an experimental flag for testing dynamic imports and safe to remove.

## \<MessageBoxFunctionalLayout/>

*Props:*
- removed value `green` in prop `theme` - will fall back to `blue`.

## \<MultiSelect/>

*Props:*
- removed `theme`.
  For more information and examples go to [theme prop](#theme-prop) section.
- removed `error` & `errorMessage` to `status` & `statusMessage`. <br/>
  For more information and examples go to [error --> status](#error--errormessage----status--statusmessage) section.
- removed `help` & `helpMessage` use a `<FormField/>` wrapper instead. <br/>
  For more information and examples go to [help prop](#help-prop) section.

*Testkit:*
- added `hasStatus`.
- added `getStatusMessage`.
- removed `inputWrapperHasError` - use `hasStatus` instead.

## \<MultiSelectCheckbox/>

*Props:*
- removed `theme`.
  For more information and examples go to [theme prop](#theme-prop) section.
- removed `error` & `errorMessage` to `status` & `statusMessage`. <br/>
  For more information and examples go to [error --> status](#error--errormessage----status--statusmessage) section.
- removed `help` & `helpMessage` use a `<FormField/>` wrapper instead. <br/>
  For more information and examples go to [help prop](#help-prop) section.

## \<MultiSelectComposite/>

This component was deleted, use `<FormField/>` instead.

*Examples:*
<details>
  <summary>Using <code><span><</span>FormField<span>/></span></code> example:</summary>

  - Before:
  ```jsx
  <MultiSelectComposite>
    <Component />
  </MultiSelectComposite>
  ```

  - After:
  ```jsx
  <FormField>
    <Component />
  </FormField>
  ```
</details>

## \<NoBorderInput/>

*Props:*
- removed `error` & `errorMessage` to `status` & `statusMessage`. <br/>
  For more information and examples go to [error --> status](#error--errormessage----status--statusmessage) section.

*Testkit:*
- added `hasStatus`.
- added `getStatusMessage`.

## \<NumberInput/>

*Props:*
- removed `theme`.
  For more information and examples go to [theme prop](#theme-prop) section.
- removed `error` & `errorMessage` to `status` & `statusMessage`. <br/>
  For more information and examples go to [error --> status](#error--errormessage----status--statusmessage) section.
- removed `help` & `helpMessage` use a `<FormField/>` wrapper instead. <br/>
  For more information and examples go to [help prop](#help-prop) section.

*Testkit:*
- added `hasStatus`.
- added `getStatusMessage`.

## \<Page/>

*Props:*
- removed `upgrade` - component is now upgraded by default

Features:
- **Flex Parent**: No need for Page parent to be a flex container with flow 'column'.
- **`<Page.FixedContent/>`**: Is now rendered as the new `<Page.Sticky/>` (See Examples in docs).
- **`<Page.Tail>`**: No longer receives a `minimized` prop.
- **`gradientCoverTail`**: Prop removed. Gradient never covers tail.
- **Content Stretch**: `<Page.Content/>` now allows it's children to stretch vertically.
- **Bottom-Padding**: If you had any bottom-padding hacks, remove them!

### Page Container

Previously we required that the Page's parent container will have these styles:

```css
.root {
  height: 100vh;
  display: flex;
  flex-flow: column;
  min-height: 0;
}
```

Now it is enough to pass in the determined height.

```jsx
<Page height="100vh"/>
```

IMPORTANT: If your page is already in an App structure, your Page container may already have a determined height!

```jsx
+--------------------------------------------------
|                    Header (48px)
+--------------------------------------------------
| Sidebar       |           <Page/>
| (100vh - 48px)|
|               |
|               |
+---------------+----------------------------------
```

#### Horizontal Scroll & min/max width

Horizontal scrolling and min/max width are already supported,
so you can remove any Page wrapper `<div>`'s you might have previously added in order to implement it.

### Content Stretch

This will stretch:

```jsx
<Page.Content>
  <Container stretchVertically>
    <Row stretchViewsVertically>
      <Col>
        <Card stretchVertically>
          <Card.Content>
             Hello World
          </Card.Content>
        </Card>
      </Col>
    </Row>
  </Container>
</Page.Content>
```

## \<Popover/>

*Props:*
- removed `disableClickOutsideWhenClosed`, this functionality is now permanent. This means the `onClickoutside` callback will no longer be called when the component is in it's collpased state.

## \<PopoverMenu/>

Old PopoverMenu component was removed and replaced with new component that was previously available as `beta/PopoverMenu`.

*Props:*
- removed `buttonTheme` prop. Instead, use the `triggerElement` prop and set <IconButton/> with the relevant `skin`.
- `appentToParent` prop should be changed to `appendTo="parent"`.

Old PopoverMenu:

```jsx
import PopoverMenu from 'wix-style-react/PopoverMenu';
import PopoverMenuItem from 'wix-style-react/PopoverMenuItem';

<PopoverMenu buttonTheme="icon-greybackground">
  <PopoverMenuItem onClick={clickHandler} text="Item" />
</PopoverMenu>;
```

New PopoverMenu:

```jsx
import { PopoverMenu, IconButton } from 'wix-style-react';
import More from 'wix-ui-icons-common/More';

<PopoverMenu
  triggerElement={
    <IconButton skin="inverted">
      <More />
    </IconButton>
  }
>
  <PopoverMenu.MenuItem onClick={clickHandler} text="Item" />
</PopoverMenu>;
```

## \<RadioGroup/>

*Props:*
- removed `type`.

*Testkit:*
- removed `isButtonType`.

*Examples:*
<details>
  <summary>Using removed <code>type</code> prop with value <code>button</code> example:</summary>

  - Before:
  ```jsx
  <RadioGroup type="button" />
  ```

  - After:
  ```jsx
  <SegmentedToggle />
  ```
</details>

## \<RichTextInputArea/>

*Testkit:*
- added `hasStatus`.
- added `getStatusMessage`.
- removed `hasError` - use `hasStatus`.
- removed `getErrorMessage` - use `getStatusMessage` instead.

## \<Search/>

*Props:*
- removed `theme`.
  For more information and examples go to [theme prop](#theme-prop) section.
- removed `error` & `errorMessage` to `status` & `statusMessage`. <br/>
  For more information and examples go to [error --> status](#error--errormessage----status--statusmessage) section.
- removed `help` & `helpMessage` use a `<FormField/>` wrapper instead. <br/>
  For more information and examples go to [help prop](#help-prop) section.

*Testkit:*
- added `hasStatus`.
- added `getStatusMessage`.

## \<SideMenu/>
This component was deleted, use `<Sidebar/>` instead.
For more information visit [\<Sidebar/>'s storybook page](https://wix-style-react.com/?path=/story/components-api-components--sidebar).

## \<SideMenuDrill/>
This component was deleted, use `<Sidebar/>` instead.
For more information visit [\<Sidebar/>'s storybook page](https://wix-style-react.com/?path=/story/components-api-components--sidebar).

## \<SlideAnimation/>
This component was part of `<SideMenu/>` and was deleted, use `<Sidebar/>` instead.
For more information visit [\<Sidebar/>'s storybook page](https://wix-style-react.com/?path=/story/components-api-components--sidebar).

## \<StatisticsWidget/>

*Props:*
- removed `statistics` use `items` instead.<br>
  _Note: No change needed in an item._

*Examples:*
<details>
  <summary>Using <code>items</code> prop example:</summary>

  - Before:
  ```jsx
  <StatisticsWidget statistics=[...]/>
  ```

  - After:
  ```jsx
  <StatisticsWidget items=[...]/>
  ```
</details>

## \<StatsWidget/>
This component was deleted, use `<StatisticsWidget/>` instead.

### Differences:
1. In contrast to the old `<StatsWidget/>`, the new `<StatisticsWidget/>` does not render the statistics inside a card. Due to that, also the next props do not exist.
2. `emptyState` prop
3. `suffix` prop which also inclues filters logic.

### New features
1. Keyboard and mouse accesibility features
2. Hover state and click functionality
3. Description tooltip
4. Customized text instead of elipssis

*Examples:*
<details>
  <summary>Migrating a Stats widget example with percents example:</summary>

  Old code using `<StatsWidget/>`
  ```jsx
  import React from 'react';
  import StatsWidget from '..';
  import styles from './ExampleStatsWidget.scss';
  import { Container } from '../../Grid';
  import { storySettings } from './storySettings';

  export default () => (
    <Container>
      <div>
        <StatsWidget
          title="Let's see what's going on with your store"
          items={[
             {
               title: '$10',
               subtitle: 'Revenue',
               percent: -15,
             },
             {
               title: '2',
               subtitle: 'Products',
               percent: -15,
             },
             {
               title: '1',
               subtitle: 'Transactions',
               percent: 0,
             },
             {
               title: '$5',
               subtitle: 'Profit',
               percent: 10,
             },
             {
               title: '456',
               subtitle: 'Music',
               percent: 15,
             },
           ]}
          dataHook={storySettings.dataHook}
        />
      </div>
    </Container>
  );
  ```

  New code using `<StatisticsWidget/>`:
  ```jsx
  import React from 'react';
  import StatisticsWidget from 'wix-style-react/StatisticsWidget';
  import Card from 'wix-style-react/Card';

  render(
    <Card>
      <Card.Header title={"Let's see what's going on with your store"} />
      <Card.Content>
        <StatisticsWidget
          items={[
            {
              value: '$10',
              description: 'Revenue',
              percentage: -15,
            },
            {
              value: '2',
              description: 'Products',
              percentage: -15,
            },
            {
              value: '1',
              description: 'Transactions',
              percentage: 0,
            },
            {
              value: '$5',
              description: 'Profit',
              percentage: 10,
            },
            {
              value: '456',
              description: 'Music',
              percentage: 15,
            },
          ]}
        />
      </Card.Content>
    </Card>,
  );
  ```
</details>

<details>
  <summary>Migrating a StatsWidget example with Multiple filters example:</summary>

  Old code using `<StatsWidget/>`
  ```jsx
  import React from 'react';
  import StatsWidget from '..';

  import { Container } from '../../Grid';

  const dropdownOption = [
    { id: 0, value: 'This month' },
    { id: 1, value: 'This week' },
  ];

  const onFilterChange = () => {
    alert('hi');
  };

  export default () => (
     <StatsWidget
       title="Let's see what's going on with your store"
       items={[
       {
         title: '$10',
         subtitle: 'Revenue',
       },
       {
         title: '2',
         subtitle: 'Products',
       },
       {
         title: '1',
         subtitle: 'Transactions',
       },
       {
         title: '$5',
         subtitle: 'Profit',
       },
     ]}
     >
       <StatsWidget.FilterButton
         dataHook="StatsWidgetFilter"
         initialSelectedId={1}
         options={dropdownOption}
         onSelect={onFilterChange}
       />

       <StatsWidget.FilterButton
         dataHook="StatsWidgetFilter"
         initialSelectedId={1}
         options={dropdownOption}
         onSelect={onFilterChange}
       />
     </StatsWidget>
  );
  ```

  New code using `<StatisticsWidget/>`
  ```jsx
  import React from 'react';
  import StatisticsWidget from 'wix-style-react/StatisticsWidget';
  import Card from 'wix-style-react/Card';
  import DropdownBase from 'wix-style-react/DropdownBase';
  import Icons from 'wix-style-react/Icons';
  import TextButton from 'wix-style-react/TextButton';

  class StatsWrapper extends React.Component {
    _getSuffix() {
      return [
        <DropdownBase
          onSelect={({ id }) => alert('hi', id)}
          options={[
            { id: '7d', value: 'Last 7 days' },
            { id: '14d', value: 'Last 14 days' },
          ]}
        >
          {({ toggle, selectedOption = { id: '7d', value: 'Last 7 days' } }) => {
            return (
              <TextButton
                upgrade
                skin="dark"
                suffixIcon={<Icons.ChevronDown />}
                onClick={toggle}
              >
                {selectedOption.value}
              </TextButton>
            );
          }}
        </DropdownBase>,
        <DropdownBase
          onSelect={({ id }) => alert('hi', id)}
          options={[
            { id: 'US', value: 'Only from US' },
            { id: 'All', value: 'All' },
          ]}
        >
          {({ toggle, selectedOption = { id: 'All', value: 'All' } }) => {
            return (
              <TextButton
                upgrade
                skin="dark"
                suffixIcon={<Icons.ChevronDown />}
                onClick={toggle}
              >
                {selectedOption.value}
              </TextButton>
            );
          }}
        </DropdownBase>,
      ];
    }

    render() {
      return (
        <Card>
          <Card.Header title={"Let's see what's going on with your store"} suffix={this._getSuffix()} />
          <Card.Content>
            <StatisticsWidget items={[
       {
         value: '$10',
         description: 'Revenue',
       },
       {
         value: '2',
         description: 'Products',
       },
       {
         value: '1',
         description: 'Transactions',
       },
       {
         value: '$5',
         description: 'Profit',
       },
     ]} />
          </Card.Content>
        </Card>
      );
    }
  }
  ```
</details>

## \<TextLink/>
This component was deleted, use `<TextButton as="a"/>` instead.

*Examples:*
<details>
  <summary>Using <code><span><</span>TextButton<span>/></span></code> component example:</summary>

  - Before:
  ```jsx
  <TextLink>Hello!</TextLink>
  ```

  - After:
  ```jsx
  <TextButton as="a">Hello!</TextButton>
  ```
</details>

## \<Table/>

*Testkit:*
- removed `clickRowChecbox` - removed due to typo, use `clickRowCheckbox` instead

## \<TableActionCell/>
Component is now upgraded by default.<br>
The only change is that internally, the new `<PopoverMenu/>` is used.<br>
Therefore the prop `popoverMenuProps` contains new values now.<br>
For more information about `<PopoverMenu/>` visit [`<PopoverMenu/>`'s story page](https://wix-style-react.com/?path=/story/components-api-components--popovermenu)

*Props:*
- removed `upgrade` - component is now upgraded by default
- changed `primaryAction.theme` to `primaryAction.skin` (with new values)

*Examples:*
<details>
  <summary>Using <code>primaryAction.skin</code> prop example:</summary>

  - Before:
  ```jsx
  <TableActionCell
    primaryAction={{
      theme: 'standard',
    }}
  />
  ```

  - After:
  ```jsx
  <TableActionCell
    primaryAction={{
      skin: 'standard',
    }}
  />
  ```
</details>

## \<Tag/>

*Props:*
- removed `wrap` - now text has ellipsis by default<br>
  Just remove this prop, no other change required.

## \<ToggleButton/>

*Props:*
- removed `tooltipContent` - use `labelValue` instead.

*Testkit:*
- removed `getTooltipText` - use `getLabelValue` instead.

*Examples:*
<details>
  <summary>Using <code>labelValue</code> prop example:</summary>

  Before:
  ```jsx
  <ToggleButton
    tooltipContent="Hello World!"
  />
  ```

  - After:
  ```jsx
  <ToggleButton
    labelValue="Hello World!"
  />
  ```
</details>

## \<Tooltip/>

### New Tooltip features
- Is Uncontrolled, and only open on HOVER, as per the UX guidelines.
- Uses community backed positioning mechanism `Popper.js`.
- Has a slimmer API.
- Provides clear documentation on how to achieve various way of positioning.
- Uses unidriver.

### Removed props
The following props are not supported anymore and should be remove from your code:
- `active` - Component is uncontrolled component.
- `bounce` - Not supported by UX guidelines.
- `color` - Changing Tooltip theming is not supported.
- `hideTrigger` - Component is uncontrolled.
- `lineHeight` - Text alignment is fixed by internal constants.
- `minWidth`
- `onClickOutside` - Not supported anymore. Component is interactive only on mouse enter or mouse leave.
- `padding` - Not supported by UX guidelines.
- `popover`
- `relative`
- `shouldCloseOnClickOutside`
- `shouldUpdatePosition`
- `showImmediately`
- `showTrigger`
- `theme`
- `upgrade`

The following props were changed/removed and require you to modify your code accordingly:
- `alignment` - changed to `textAlign` and supports only `center` and `start`.
- `appendByPredicate` -  Use `appendTo` values instead.
- `appendToParent` - Use `appendTo` with value `parent`.
- `hideDelay` - changed to `exitDelay`.
- `moveArrowTo` - Not supported by UX guidelines. Use `placement` to achieve it different arrow position.
- `showArrow` - Use `size` with value `small`.
- `showDelay` - changed to `enterDelay`.
- `size` - values are change from `normal, large` to `small, medium` by UX guidelines.


### New props
- `fixed` - whether to enable the fixed behaviour. This behaviour is used to keep the Tooltip at it's original placement even when it's being positioned outside the boundary.
- `flip` - whether to enable the flip behaviour. This behaviour is used to flip the Tooltips placement when it starts to overlap the target element.

### Deprecated theme=`white`

Tooltip no longer supports theme white, but white skin is available on Popover which is a building block for current Tooltip.

> Warning #1: Adding any action based element into the hoverable content is considered inaccesible. Only textual representation is recommended.

> Warning #2: White Tooltip should be used only in cases when app background is dark - all other cases should have dark Tooltip.


Before:
```jsx
<Tooltip content="Content">
  <div>Trigger</div>
</Tooltip>
```


After:
```jsx
() => {
  const [shown, setShown] = React.useState(false);
  const toggle = () => setShown(!shown);
  return (
      <Popover
        shown={shown}
        onMouseEnter={toggle}
        onMouseLeave={toggle}
        placement="top"
        animate
        showArrow
      >
        <Popover.Element>Trigger</Popover.Element>
        <Popover.Content>
          <div style={{padding: '12px 24px'}}>Content</div>
        </Popover.Content>
      </Popover>
    );
}
```


### Testkit
Testkit was rewritten and is now async, which means you should `await` for every method invocation.
You should change the import path accordingly:

- `ReactTestUtils` - `import {TooltipTestkit} from 'wix-style-react/dist/testkit';`
- `Enzyme` - `import {TooltipTestkit} from 'wix-style-react/dist/testkit/enzyme';`
- `Puppeteer` - `import {TooltipTestkit} from 'wix-style-react/dist/testkit/puppeteer';`
- `Protractor` - `import {TooltipTestkit} from 'wix-style-react/dist/testkit/protractor';`

### New Testkit API
API is slimmer and easier to interact it (with the recent types addition you can get an auto complete of these methods)

- `exists` - returns true if trigger element exists on the DOM.
- `tooltipExists` - returns true if tooltip element exists on the DOM.
- `mouseEnter` - mouse over the target element.
- `mouseLeave` - mouse leaves the target element.
- `getTooltipText` - returns tooltips content value in string.

## \<VBox/>

This component was deleted, use `<Box/>` instead.

# More guides
---

## Icons
Icons from `wix-style-react/new-icons` import path were removed.<br>
Please install and use icons from `wix-ui-icons-common` package directly. You can migrate your existing codebase using provided codemod.

Make sure you have `wix-ui-icons-common` package installed:

```bash
npm i wix-ui-icons-common
# or
yarn add wix-ui-icons-common
```

Then use our provided codemod or manually replace all icon imports with the following pattern:

```diff
- import Add from 'wix-style-react/new-icons/Add';
+ import Add from 'wix-ui-icons-common/Add';
```

To use codemod, run the following command (where the last argument is the directory or file for source code you want to transform):

```bash
npx wix-ui-codemod wix-style-react/icons-common src/
```

Please see [README.md](https://github.com/wix/wix-ui/blob/master/packages/wix-ui-codemod/README.md#wix-ui-codemod) file for more details on how to use the provided codemod.

### Using icons in your code

The icons from `wix-ui-icons-common` support all the same features as the old `wix-style-react/new-icons` icons. They are backwards compatible and their usage is the same:

```jsx
import Add from 'wix-ui-icons-common/Add';

export default () => (
  <div>
    <Add />
  </div>
);
```

## error & errorMessage --> status & statusMessage

Relevant for components:
- [\<AutoComplete/>](#autocomplete)
- [\<ColorInput/>](#colorinput)
- [\<DatePicker/>](#datepicker)
- [\<Dropdown/>](#dropdown)
- [\<GoogleAddressInput/>](#googleaddressinput)
- [\<ImageViewer/>](#imageviewer)
- [\<Input/>](#input)
- [\<InputArea/>](#inputarea)
- [\<InputWithOptions/>](#inputwithoptions)
- [\<MultiSelect/>](#multiselect)
- [\<MultiSelectCheckbox/>](#multiselectcheckbox)
- [\<NoBorderInput/>](#noborderinput)
- [\<NumberInput/>](#numberinput)
- [\<Search/>](#search)


*Props:*
- removed `error` & `errorMessage`
- added `status` & `statusMessage`

The prop `status` has more options than the regular error.<br>
It can be on of `error`, `warning`, or `loading`, each have it's own style and icon.

*Testkit:*
- added `hasStatus`
- added `getStatusMessage`
- \~ \~ \~
- removed `hasError` - use `hasStatus`
- removed `inputWrapperHasError` - use `hasStatus`
- removed `isErrorVisible` - use `hasStatus` instead
- removed `getErrorTooltipContent` - use `getStatusMessage` instead

*Examples:*
<details>
  <summary>Using <code>status</code> prop example:</summary>

  - Before:
  ```jsx
  <NumberInput error errorMessage="Error!" />
  ```

  - After:
  ```jsx
  <NumberInput status="error" statusMessage="Error!" />
  ```
</details>

<details>
  <summary>Testkit example, using <code>hasStatus</code> & <code>getStatus</code>:</summary>

  - Before:
  ```jsx
  it('should have an error state', async () => {
    const errorMessage = 'Error!';
    const { driver } = render(<Input error errorMessage={errorMessage} />);

    expect(await driver.hasError()).toBe(true);
    expect(await driver.getStatusMessage()).toBe(errorMessage);
  });
  ```

  - After:
  ```jsx
  it('should have an error state', async () => {
    const statusMessage = 'Error!';
    const { driver } = render(<Input status="error" statusMessage={statusMessage} />);

    expect(await driver.hasStatus()).toBe(true);
    expect(await driver.getStatus()).toBe('error');
    expect(await driver.getErrorTooltipContent()).toBe(errorMessage);
  });
  ```
</details>



## help prop

Relevant for components:
- [\<AutoComplete/>](#autocomplete)
- [\<ColorInput/>](#colorinput)
- [\<Dropdown/>](#dropdown)
- [\<GoogleAddressInput/>](#googleaddressinput)
- [\<Input/>](#input)
- [\<InputWithOptions/>](#inputwithoptions)
- [\<MultiSelect/>](#multiselect)
- [\<MultiSelectCheckbox/>](#multiselectcheckbox)
- [\<NumberInput/>](#numberinput)
- [\<Search/>](#search)

*Props:*
- removed `help` & `helpMessage` use a `<FormField/>` wrapper instead

*Testkit:*
- removed `hasHelp` - use `<FormField/>` testkit instead

*Example:*

Before:
```jsx
<NumberInput help helpMessage="Help!" />
```

After:
```jsx
<FormField infoContent="Help!">
  <NumberInput />
</FormField>
```

## theme prop

Relevant for components:
- [\<AutoComplete/>](#autocomplete)
- [\<ColorInput/>](#colorinput)
- [\<Dropdown/>](#dropdown)
- [\<GoogleAddressInput/>](#googleaddressinput)
- [\<Input/>](#input)
- [\<InputWithOptions/>](#inputwithoptions)
- [\<MultiSelect/>](#multiselect)
- [\<MultiSelectCheckbox/>](#multiselectcheckbox)
- [\<NumberInput/>](#numberinput)
- [\<Search/>](#search)

We decided to remove this prop and stop supporting designs that don't align with our UX guidelines.
The options we suggest is:
1. Using the component with the default design.
2. In some cases use `<NoBorderInput/>` that looks somewhat like amaterial theme.
3. In other cases `<InputWithLabel/>` will be a nice solution

Please contact your UX if needed.
