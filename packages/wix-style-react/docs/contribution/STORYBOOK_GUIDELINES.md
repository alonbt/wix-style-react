# Storybook Content Guidelines

This document explains how to write Storybook documentation in order to have consistent examples across the components.
Storybook documentation provides information about components for UX designers and FED developers:

- It provides a full overview of the component and its usage (no alternative information sources should be needed to make a decision)
- It shows if a component is developed, in development or deprecated.
- It explains what's still in development or why it's deprecated and what to use instead.

Guidelines Structure

- [Page Structure](#page-structure)
- [Demo Section](#demo-section)
- [Usage Section](#usage-section)
- [Import Section](#import-section)
- [Variations Section](#variations-section)
  - [1. Core Structure](#1-core-structure)
  - [2. Properties](#2-properties)
  - [3. Common Use Cases](#3-common-use-cases)
- [Code Snippets](#code-snippets)
- [API Section](#api-section)
- [Template](#templates)

## Page Structure

Each component story consists of following sections:

![](../assets/PageStructure.png)

## Demo Section

This section should contain a single interactive example that showcase default component usage: 
<table>
<tr>
    <td><img src='../assets/DemoDO.png'/></td>
    <td><img src='../assets/DemoDONT.png'/></td>
  </tr>
  <tr>
    <td>
      <img src='../assets/DO.png'/><br>
      <strong>DO.</strong>
      Use content to display common use case, that component is designed for.
    </td>
    <td>
      <img src='../assets/DONT.png'/><br>
      <strong>DON'T.</strong>
      Don’t display empty version that might raise more questions than answers.
    </td>
  </tr>
</table>

## Usage Section

This section should provide enough information for a user to make a decision if it’s a right component for a case or an alternative solution should be selected instead. Component description should explain:

- The primary purpose of the component
- If it’s a building part for a larger component (i.e. ListItemSelect)
- Do and don't examples — when component should be used or should not (optional link to correct solutions per case)

```
Modal controls the overlay layout that appears on call functions. It’s a container for components
like CustomModalLayout, ModalPreviewLayout and others.

Use it:
- To reveal all types of modal layouts
- To display a full page loading state

Don't use it:
- Example Don't use it
- Example Don't use it
```

## Import Section

This section should provide a line of code which can be copied and pasted to the developer's project, so component can be used right away.


```js
import { AddItem } from 'wix-style-react';
```


## Variations Section

This section should demonstrate how component behaves and when to use it. In order to maintain consistency between stories, examples should go in this order:

1. Core structure
2. Properties
3. Common use cases

### 1. Core Structure

Container box components should give an example how it is constructed. The example should list all available areas. This example should:

- Visually display existing content areas and design possibilities it provides
- Explain each content area purpose and accepted content types in the description (e.g. node, string, image)
- Use default properties or placeholder content without additional styling

#### Visuals

Use schematic drawing to visualise content areas, when containers do not have a default content type and accept any kind of content (node). If there are multiple content areas use text to communicate how each area is called.

<table>
<tr>
    <td><img src='../assets/FooterDO.png'/></td>
    <td><img src='../assets/FooterDONT.png'/></td>
  </tr>
  <tr>
    <td>
    	<img src='../assets/DO.png'/><br>
    	<strong>DO.</strong>
    	Use schematic drawings to communicate structural areas that accept node content type.
    </td>
    <td>
    	<img src='../assets/DONT.png'/><br>
    	<strong>DON'T.</strong>
    	Don’t use sample content as it doesn’t visually explain multiple content areas.
    </td>
  </tr>
</table>

<br>
Showcase the effect of different values passed to the same prop if it helps to communicate the possibilities component provides. Use text to communicate what values have been passed and the effect it made.

<table>
<tr>
    <td><img src='../assets/LayoutDO.png'/></td>
    <td><img src='../assets/LayoutDONT.png'/></td>
  </tr>
  <tr>
    <td>
    	<img src='../assets/DO.png'/><br>
    	<strong>DO.</strong>
    	Use content to communicate available options and difference it makes.
    </td>
    <td>
    	<img src='../assets/DONT.png'/><br>
    	<strong>DON'T.</strong>
    	Don’t leave blank space and force user to check code to figure out difference in code.
    </td>
  </tr>
</table>

<br>
If a component has a predefined value types, stick to these to showcase primary and recommended usage of a component. If content type is text, use it to explain area name and purpose.

If i.e. ‘title’ also accepts node content, it should be mentioned in a description and API.

<table>
<tr>
    <td><img src='../assets/MarketingContentDO.png'/></td>
    <td><img src='../assets/MarketingContentDONT.png'/></td>
  </tr>
  <tr>
    <td>
    	<img src='../assets/DO.png'/><br>
    	<strong>DO.</strong>
    	Use default styling for areas with predefined content types to set right patterns.
    </td>
    <td>
    	<img src='../assets/DONT.png'/><br>
    	<strong>DON'T.</strong>
    	Don’t override predefined styling with placeholder content.
    </td>
  </tr>
</table>

<br>
Use other components from the library to explain mechanism containers behaviour, such as modal call out, native file upload, etc.

<table>
<tr>
    <td><img src='../assets/ModalStructureDO.png'/></td>
    <td><img src='../assets/ModalStructureDONT.png'/></td>
  </tr>
  <tr>
    <td>
    	<img src='../assets/DO.png'/><br>
    	<strong>DO.</strong>
    	Use components from the library to explain behaviour, that is not visual.
    </td>
    <td>
    	<img src='../assets/DONT.png'/><br>
    	<strong>DON'T.</strong>
    	Don’t use native HTML elements if library components are available.
    </td>
  </tr>
</table>

<br>

#### Description

Structure example description should state:

- What areas the component consist of (if there are multiple areas only)
- Which areas are mandatory and which are optional
- What type and amount of children elements areas accept
- How to control component behaviour (for mechanism containers only)

<table>
<tr>
    <td>
	<i><strong>Structure</strong><br>
      	Render modal content by using children prop. Control modal appearance with props:
      	<ul>
   		<li>isOpen - this bool prop shows and hides the modal.</li>
		<li>onRequestClose - this prop calls a function you request. It can be used to control isOpen prop.</li>
      	</ul></i>
    </td>
    <td>
	<i><strong>Structure</strong><br>
      	A simple example for modal with an alert</i>
    </td>
  </tr>
  <tr>
    <td>
    	<img src='../assets/DO.png'/><br>
    	<strong>DO.</strong>
    	Give a meaningful description.
    </td>
    <td>
    	<img src='../assets/DONT.png'/><br>
    	<strong>DON'T.</strong>
    	Don’t write a generic message that gives no value.
    </td>
  </tr>
</table>

<br>

### 2. Properties

Property examples step by step introduce users to component features. This section should reveal and explain full component capabilities, also how to handle common edge cases (i.e. text wrapping).

<br>
Each component has a set of properties and features to explain. List them in order from least to most complex ones:

<strong>1. Appearance</strong> - list of properties that controls visual look and feel of a component

- Size and Layout _(i.e. width, height, position, direction)_
- Style _(i.e. skin, shape, shadow, border)_

<strong>2. States</strong> - list of predefined states of a component and when they should be displayed

- Selection _(i.e. selected, checked)_
- Validation _(i.e. error, warning, status)_

<strong>3. Content</strong> - list of properties that allow to customise content

- Content areas _(i.e. header, footer, suffix)_
- Text _(i.e. title, subtitle, additionalInfo)_
- Visual content _(i.e. thumbnail, avatar, image)_
- Actions _(i.e. actionText, primaryAction, secondaryAction)_

<strong>4. Behaviour</strong> - list of properties that control component behaviour or enable specific functionality for it

- Data loading _(i.e. lazyLoading, infiniteScroll)_
- Display _(i.e. horizontalScroll, overflow, collapse)_
- Other _(i.e. spellChecking, custom HTML tag)_

<br>

> Note: Order in which properties are listed can and should be adjusted depending per component and its most commonly used props

<br>

#### Visuals

Be aware that users are visual learners by nature. Examples we provide should be as self explanatory as possible.

In order to decide what content inside of a snippets would be suitable think about the following:

- What am I trying to communicate to the user (list of options to choose from, what behaviour property enables, etc.)?
- What is a property type (is it visual by its own, or does it need guidance)?
- How could we efficiently use initial component features to provide meaningful context?
- Could we help to set correct content patterns via snippets?

<br>
In cases where example lists down available value options use predefined component elements (if there are any) to communicate how passed value affects component appearance or behaviour.

<table>
<tr>
    <td><img src='../assets/InputDO.png'/></td>
    <td><img src='../assets/InputDONT.png'/></td>
  </tr>
  <tr>
    <td>
    	<img src='../assets/DO.png'/><br>
    	<strong>DO.</strong>
    	Utilize component elements to communicate available prop values.
    </td>
    <td>
    	<img src='../assets/DONT.png'/><br>
    	<strong>DON'T.</strong>
    	Don’t use meaningless placeholder titles which force you to look for information somewhere else.
    </td>
  </tr>
</table>

<br>
Merge statuses into a single snippet for interactive components. Use labels to communicate how each status is called.

<table>
<tr>
    <td><img src='../assets/StatesDO.png'/></td>
    <td><img src='../assets/StatesDONT.png'/></td>
  </tr>
  <tr>
    <td>
    	<img src='../assets/DO.png'/><br>
    	<strong>DO.</strong>
    	Display all different states in a single snippet and use labels to display state name.
    </td>
    <td>
    	<img src='../assets/DONT.png'/><br>
    	<strong>DON'T.</strong>
    	Don’t use placeholder labels when your intention is to communicate different states.
    </td>
  </tr>
</table>

<br>
Display single feature at the time. If example purpose is to list down the options, don’t complicate it with content which is not relevant at that specific moment.

<table>
<tr>
    <td><img src='../assets/ListItemSelectDO.png'/></td>
    <td><img src='../assets/ListItemSelectDONT.png'/></td>
  </tr>
  <tr>
    <td>
    	<img src='../assets/DO.png'/><br>
    	<strong>DO.</strong>
    	Display content which is necessary to communicate example purpose only, i.e. existing states.
    </td>
    <td>
    	<img src='../assets/DONT.png'/><br>
    	<strong>DON'T.</strong>
    	Don’t add content which is irrelevant in scenario you're showcasing (i.e. prefix icon in states example).
    </td>
  </tr>
</table>

<br>
In cases where property value affects the content which is allowed to be displayed inside of a component use real case examples. This approach provides the user with context what each value is designed for, and also sets right content patterns.

<table>
<tr>
    <td><img src='../assets/NotificationsDO.png'/></td>
    <td><img src='../assets/NotificationsDONT.png'/></td>
  </tr>
  <tr>
    <td>
    	<img src='../assets/DO.png'/><br>
    	<strong>DO.</strong>
    	Use real case content which both explains when skin could be used and sets correct content patterns
    </td>
    <td>
    	<img src='../assets/DONT.png'/><br>
    	<strong>DON'T.</strong>
    	Don’t communicate value names only when there’s a direct dependency between accepted messaging and selected theme.
    </td>
  </tr>
</table>

<br>
Use real content to demonstrate edge cases handling. It showcases the behaviour and sets correct content patterns at the same time. Avoid gibberish text that doesn't bring benefit.

<table>
<tr>
    <td><img src='../assets/TextOverflowDO.png'/></td>
    <td><img src='../assets/TextOverflowDONT.png'/></td>
  </tr>
  <tr>
    <td>
    	<img src='../assets/DO.png'/><br>
    	<strong>DO.</strong>
    	Use real content for text overflow demonstration to set right content patterns.
    </td>
    <td>
    	<img src='../assets/DONT.png'/><br>
    	<strong>DON'T.</strong>
    	Don’t use gibberish text which don’t bring benefit for a user.
    </td>
  </tr>
</table>

<br>
Merge directly dependent or same purpose properties into a single example (i.e. width and height could be a single example named ‘Dimensions’):

<table>
<tr>
    <td><img src='../assets/FixedAreasDO.png'/></td>
    <td><img src='../assets/FixedAreasDONT.png'/></td>
  </tr>
  <tr>
    <td>
    	<img src='../assets/DO.png'/><br>
    	<strong>DO.</strong>
    	Display similar purpose properties in a single example.
    </td>
    <td>
    	<img src='../assets/DONT.png'/><br>
    	<strong>DON'T.</strong>
    	Don’t create separate examples for similar purpose props. It increases story length unnecessarily.
    </td>
  </tr>
</table>

> Note: Examples of properties that could be shown in a single snippet:
>
> <table>
> 	<tr>
> 		<td>width<br>height</td>
> 		<td>maxWidth<br>maxHeight<br>ellipsis<br>textWrap<br>overflow</td>
> 		<td>primary<br>secondary</td>
> 		<td>border<br>borderRadius<br>borderWidth</td>
> 		<td>color<br>backgroundColour<br>textColor</td>
> 		<td>selected<br>disabled<br> selected disabled</td>
> 		<td>header<br>footer<br>footnote</td>
> 		<td>primaryAction<br>secondaryAction</td>
> 	</tr>
> </table>

<br>
Don't merge property values which serve different purposes. Provide each of them with a dedicated example inside of the same snippet. Use real and meaningful copy to communicate purpose better: <br>

> In example, selection items inside of a dropdown layout can be grouped using subheader or divider, but intentions are different. Subheader provides a name for a group. While divider separates list item that provide entirely different results, i.e. will add another field to the form where you can specify a custom length of a plan.

<table>
<tr>
    <td><img src='../assets/DropdownLayoutDO.png'/></td>
    <td><img src='../assets/DropdownLayoutDONT.png'/></td>
  </tr>
  <tr>
    <td>
    	<img src='../assets/DO.png'/><br>
    	<strong>DO.</strong>
    	Have separate examples for different purpose prop values. Use real content to communicate purpose clearly.
	</td>
    <td>
    	<img src='../assets/DONT.png'/><br>
    	<strong>DON'T.</strong>
    	Don’t merge prop variations with different intentions in a single layout. It doesn't explain clearly how they differ.
    </td>
  </tr>
</table>

<br>
Use content to communicate hard to notice functionality for the end user:

<table>
<tr>
    <td><img src='../assets/LetterCountingDO.png'/></td>
    <td><img src='../assets/LetterCountingDONT.png'/></td>
  </tr>
  <tr>
    <td>
    	<img src='../assets/DO.png'/><br>
    	<strong>DO.</strong>
    	Use content to visualise behaviour of not so obvious features.
	</td>
    <td>
    	<img src='../assets/DONT.png'/><br>
    	<strong>DON'T.</strong>
    	Don’t use meaningless placeholder copy that leaves user to figure out what needs to be done by himself.    </td>
  </tr>
</table>

<br>
Guide users with content if they are required to make an action to see a feature or functionality:

<table>
<tr>
    <td><img src='../assets/ErrorMessageDO.png'/></td>
    <td><img src='../assets/ErrorMessageDONT.png'/></td>
  </tr>
  <tr>
    <td>
    	<img src='../assets/DO.png'/><br>
    	<strong>DO.</strong>
    	Provide guidance for the hidden features (i.e. error message will be displayed in a tooltip on hover).
	</td>
    <td>
    	<img src='../assets/DONT.png'/><br>
    	<strong>DON'T.</strong>
    	Don’t leave features partially explained. It’s easy to miss functionality which is explained only in API or longer descriptions.</td>
  </tr>
</table>

<br>
Add external labels to communicate changes that happen in code for non visual features:

<table>
<tr>
    <td><img src='../assets/ToggleButtonDO.png'/></td>
    <td><img src='../assets/ToggleButtonDONT.png'/></td>
  </tr>
  <tr>
    <td>
    	<img src='../assets/DO.png'/><br>
    	<strong>DO.</strong>
    	 Add labels if component change is not visual to help user figure out the difference instantly.
	</td>
    <td>
    	<img src='../assets/DONT.png'/><br>
    	<strong>DON'T.</strong>
    	Don’t leave visual examples unexplained. This will require user to check the code to see a difference.</td>
  </tr>
</table>

<br>

#### Description

Property example should always be followed by a description explaining how and when to use it. Depending on a property type description could state:

- what purpose property should be used for <strong>(mandatory)</strong>
- what property values are available and what each option is used for
- what is a default value
- what are accepted child element types

> Tip: always start writing description with a verb

Selection of examples how to write example descriptions:

<table>
	<tr>
    <td>
		<i>
			<strong>Subtitle</strong><br>
      		Explain action in more detail with a subtitle. Keep in <br> mind that long subtitles affect visual hierarchy and compete <br> with main CTA.
		</i>
    </td>
    <td>
		<i>
			<strong>Subtitle</strong><br>
			A subtitle text can be set.
		</i>
    </td>
  </tr>
	<tr>
		<td>
			<img src='../assets/DO.png'/><br>
			<strong>DO.</strong>
			Define the purpose of a feature.
		</td>
		<td>
			<img src='../assets/DONT.png'/><br>
			<strong>DON'T.</strong>
			Don't write generic descriptions that don't bring value.
		</td>
	</tr>
</table>

<table>
	<tr>
    <td>
		<i>
			<strong>Skin</strong><br>
      		Highlights the purpose of an action. It supports 3 skin types.
      		<ul>
      			<li>standard (default)- use in common layouts</li>
      			<li>dark - use in longer list of actions (>5) in order to not overwhelm the user</li>
      			<li>destructive - use for destructive actions only</li>
      		</ul>
		</i>
    </td>
    <td>
		<i>
			<strong> Skin </strong><br>
      		Supports three different skins: standard, dark & destructive.
		</i>
    </td>
  </tr>
	<tr>
		<td>
			<img src='../assets/DO.png'/><br>
			<strong>DO.</strong>
			Explain when to use each property option.
		</td>
		<td>
			<img src='../assets/DONT.png'/><br>
			<strong>DON'T.</strong>
			Don’t list options without explaining when to use each one of them.
		</td>
	</tr>
</table>

<table>
	<tr>
    <td>
		<i>
			<strong>Subtoolbar</strong><br>
      		Provides a sticky container for related actions <br> or content (i.e. list of applied filters). Area accepts any kind of content.
		</i>
    </td>
    <td>
		<i>
			<strong>Subtoolbar</strong><br>
			A Table can contain a sticky sub-toolbar, an area for a tag list of filtered items.
		</i>
    </td>
  </tr>
	<tr>
		<td>
			<img src='../assets/DO.png'/><br>
			<strong>DO.</strong>
			Define accepted content types.
		</td>
		<td>
			<img src='../assets/DONT.png'/><br>
			<strong>DON'T.</strong>
			Don’t be too specific about the use case if feature is flexible.
		</td>
	</tr>
</table>

<table>
	<tr>
    <td>
		<i>
			<strong>Letter Counting</strong><br>
      		Indicates the number of letters typed inside of an input area. <br> Set both maxLength and hasCounter props to show the counter.
		</i>
    </td>
    <td>
		<i>
			<strong>Letter Counting</strong><br>
			InputArea can indicate how many letters were typed.
		</i>
    </td>
  </tr>
	<tr>
		<td>
			<img src='../assets/DO.png'/><br>
			<strong>DO.</strong>
			Highlight the required conditions for feature to work as expected.
		</td>
		<td>
			<img src='../assets/DONT.png'/><br>
			<strong>DON'T.</strong>
			Don’t leave mandatory conditions unmentioned.
		</td>
	</tr>
</table>

<br>

### 3. Common Use Cases

> <strong>Note:</strong>These examples are complex and should be made by WSR team only.

Common use cases is a list of examples which showcase recommended layouts and often used complex scenarios:

- Use real layouts and content to communicate cases where different variations of component should be used
- Use meaningful copy and set correct / recommended content patterns
- Showcase complex structures that can be achieved with a component

<table>
<tr>
    <td><img src='../assets/CommonUseDO.png'/></td>
    <td><img src='../assets/CommonUseDONT.png'/></td>
  </tr>
  <tr>
    <td>
    	<img src='../assets/DO.png'/><br>
    	<strong>DO.</strong>
    	Use real case content to communicate recommended usage better
	</td>
    <td>
    	<img src='../assets/DONT.png'/><br>
    	<strong>DON'T.</strong>
    	 Don’t use placeholder copy just to illustrate areas that was introduced in property examples already
    </td>
  </tr>
</table>

<br>

## Code Snippets

Snippets represent component expressions in code and should be easy to follow so that users can relate the visuals and the code. Component examples should have minimal properties to help users quickly understand their usage.

### Principles

| Clear                                                                                | Consistent                                                    | Meaningful                                                                |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Design snippet examples in such a way that the user can immediately understand them. | Make snippet examples meaningful to communicate your message. | Utilize the patterns outlined below to write snippets that are intuitive. |

### Terminology

**Direct snippet** - an example that is directly inserted into the playground.

```jsx
<TextButton weight="thin">Thin</TextButton>
```

**Functional snippet** - an example containing components within a function.

```jsx
() => {
  return <TextButton weight="thin">Thin</TextButton>;
};
```

### General Guidelines

- Only two kind of snippet styling is allowed: direct or functional.
- The content for the snippets should be prepared together with UX writers and UX designers.
- Do not use native HTML tags except when necessary.
- Code duplication is preferable for readability.
- For property and structure examples layouting use StorybookComponents, but for commone use caases don't.
- Do not waste time on caching optimizations, as these examples are not effective code, but rather representation of usage. (useMemo, useCallback)

### StorybookComponents

StorybookComponents are dedicated components developed by Design Systems team
to meet the needs of example demonstration.
#### <StorybookComponents.Stack>

CSS Flex based component meant for stacking multiple components either horizontally or vertically.

| Property       | Tye    | Default    |
| -------------- | ------ | ---------- |
| justifyContent | string | flex-start |
| alignItems     | string | flex-start |
| gap            | string | 30px       |
| width          | string | ---------  |
| height         | string | ---------  |
| padding        | string | ---------  |
| margin         | string | ---------  |

#### <StorybookComponents.Placeholder>

CSS Block based component meant for structure examples.

| Property | Tye             | Default   |
| -------- | --------------- | --------- |
| skin     | 'dark', 'light' | 'dark     |
| width    | string          | --------- |
| height   | string          | --------- |

### Structure Example

Structure snippets are mostly used to represent components that are container based.

```jsx
<PageFooter>
  <PageFooter.Start>
    // Represents empty slot for other components
    <StorybookComponents.Placeholder>start</StorybookComponents.Placeholder>
  </PageFooter.Start>
  <PageFooter.Center>
    // Represents empty slot for other components
    <StorybookComponents.Placeholder>center</StorybookComponents.Placeholder>
  </PageFooter.Center>
  <PageFooter.End>
    // Represents empty slot for other components
    <StorybookComponents.Placeholder>end</StorybookComponents.Placeholder>
  </PageFooter.End>
</PageFooter>
```

Here we see a `<PageFooter/>` component, which main purpose is to give structure to the footer section of `<Page/>` component. `<StorybookComponents.Placeholder/>` should be used to represent available layouting options.

### Property Example

Property examples are meant to illustrate different types of property usage.

#### 1. Examples should not include additional properties unless additional properties are needed to represent the full feature.

```jsx
// do
<StorybookComponents.Stack>
  <TextButton weight="thin">Thin</TextButton>
  <TextButton weight="normal">Normal</TextButton>
<StorybookComponents.Stack>

// don't
<StorybookComponents.Stack>
  <TextButton weight="thin" size="small">Thin</TextButton>
  <TextButton weight="normal" size="small">Normal</TextButton>
<StorybookComponents.Stack>
```

#### 2. Properties that are image based url's should use assets directly from libraries dedicated assets folder.

> Why? External links tend to get taken down and so our story examples gets broken.

```jsx
// do
<CardGalleryItem backgroundImageUrl="table_with_fruits.jpg" />

// don't
<CardGalleryItem backgroundImageUrl="https://random-link.com/table_with_fruits.jpg" />
```

#### 3. In case property requires large data sets for interpretation - functional snippets can be used to move big data sets to meaningful variables.

```jsx
// do
() => {
  const options = [
    { id: 1, value: 'Option 1' },
    { id: 2, value: 'Option 2' },
    { id: 3, value: 'Option 3' },
    { id: 4, value: 'Option 4' },
    { id: 5, value: 'Option 5' },
    { id: 6, value: 'Option 6' },
    { id: 7, value: 'Option 7' },
    { id: 8, value: 'Option 8' },
    { id: 9, value: 'Option 9' },
    { id: 10, value: 'Option 10' },
  ];

  return <Dropdown options={options} />;
};

// don't
<Dropdown
  options={[
    { id: 1, value: 'Option 1' },
    { id: 2, value: 'Option 2' },
    { id: 3, value: 'Option 3' },
    { id: 4, value: 'Option 4' },
    { id: 5, value: 'Option 5' },
    { id: 6, value: 'Option 6' },
    { id: 7, value: 'Option 7' },
    { id: 8, value: 'Option 8' },
    { id: 9, value: 'Option 9' },
    { id: 10, value: 'Option 10' },
  ]}
/>;
```

#### 4. Complex structure components examples can be daunting to comprehend. In such cases, there is value in abstracting code into smaller modules in order to reduce mental effort in understanding the code.

```jsx
//do
() => {
  const renderTableToolbar = () => (
    <TableToolbar>
      <TableToolbar.Title>Published</TableToolbar.Title>
    </TableToolbar>
  );

  const renderEmptyState = () => (
    <Table.EmptyState>
      <TextButton prefixIcon={<Icons.Add />}>Create New Post</TextButton>
    </Table.EmptyState>
  );

  return (
    <Table>
      {renderTableToolbar()}
      {renderEmptyState()}
    </Table>
  );
};

// don't
() => (
  <Table>
    <TableToolbar>
      <TableToolbar.Title>Published</TableToolbar.Title>
    </TableToolbar>
    <Table.EmptyState>
      <TextButton prefixIcon={<Icons.Add />}>Create New Post</TextButton>
    </Table.EmptyState>
  </Table>
);
```

#### 5. Some component properties are controlled externally and hence require local state. React hooks should be used.

```jsx
() => {
  const [checked, setChecked] = React.useState(false);

  return (
    <CheckToggle checked={checked} onChange={() => setChecked(!checked)} />
  );
};
```

#### 6. Properties that are supposed to relate to the behavior of other components should be used meaningfully and provided with near real world examples.

```jsx
() => {
  const [isModalOpened, setModalOpened] = React.useState(false);

  return (
    <StorybookComponents.Stack>
      <StorybookComponents.Action onClick={() => setModalOpened(true)}>
        Open Announcement Modal
      </StorybookComponents.Action>
      <Modal
        isOpen={isModalOpened}
        onRequestClose={() => setModalOpened(false)}
      >
        Real World Example
      </Modal>
    </StorybookComponents.Stack>
  );
};
```

### Common Use Case

Used to illustrate real-world examples, such as interactivity and components with state and content that is used in actual applications. All components presented in the examples should be library components and content that it used inside must resemble real world use case.

#### 1. Simulating data fetching

Components examples that are meant to work with data fetched from server should use StorybookUtils.fetch function that simulates data coming from server.

```jsx
() => {
  const containerRef = React.useRef(null);
  const [data, setData] = React.useState([]);
  const [container, setContainer] = React.useState(null);

  const fetchMoreData = async (loaded) => {
    setData(
      await StorybookUtils.fetch('/api/table', {
        load: loaded + 5,
      }),
    );
  };

  React.useEffect(() => {
    setContainer(containerRef);
    fetchMoreData();
  }, []);

  const columns = [
    { title: 'First', render: (row) => row.firstName },
    { title: 'Last', render: (row) => row.lastName },
  ];

  return (
    <Table
      data={data}
      columns={columns}
      infiniteScroll
      hasMore={true}
      loadMore={fetchMoreData}
      itemsPerPage={20}
      scrollElement={container && container.current}
    >
      <Table.Content />
    </Table>
  );
};
```

## API Section

API table should list ALL available properties and methods of a presented component.
Each property listed in this sections should have:

- Description
- Type
- Default value written (If component has default value. Bool type props should always have it).
- List of possible value options to choose from, i.e. oneOf (‘placement’) should include available placement options such as top, bottom, left, right

<br>

#### Description

> Tip: always start writing description with a verb

<table>
	<tr>
	<td><img src='../assets/DO.png'/><br></td>
    	<td>
      		<strong>fixed</strong><br>
      		Makes tooltip's position fixed to its original placement even if it's outside the boundary.
    	</td>
  </tr>
  <tr>
	<td><img src='../assets/DONT.png'/><br></td>
    	<td>
      		<strong> fixed </strong><br>
      		whether to enable the fixed behaviour.
    	</td>
  </tr>
</table>

<table>
	<tr>
	<td><img src='../assets/DO.png'/><br></td>
    	<td>
      		<strong> maxWidth </strong><br>
      		Defines maximum width of tooltip content container in pixels.
    	</td>
  </tr>
  <tr>
	<td><img src='../assets/DONT.png'/><br></td>
    	<td>
      		<strong> maxWidth </strong><br>
      		tooltip content container width in pixels
    	</td>
  </tr>
</table>

<table>
	<tr>
	<td><img src='../assets/DO.png'/><br></td>
    	<td>
      		<strong> secondary </strong><br>
		Sets text style to secondary. It affects font color only.
    	</td>
  </tr>
  <tr>
	<td><img src='../assets/DONT.png'/><br></td>
    	<td>
      		<strong> secondary </strong><br>
      		is the text type is secondary. Affects the font color
    	</td>
  </tr>
</table>

<table>
	<tr>
	<td><img src='../assets/DO.png'/><br></td>
    	<td>
      		<strong> tooltipProps </strong><br>
		Allows to pass all available tooltip properties. Check <Tooltip/> API for the full list.
    	</td>
  </tr>
  <tr>
	<td><img src='../assets/DONT.png'/><br></td>
    	<td>
      		<strong> tooltipProps </strong><br>
      		Properties for tooltip
    	</td>
  </tr>
</table>

<table>
	<tr>
	<td><img src='../assets/DO.png'/><br></td>
    	<td>
      		<strong> children </strong><br>
		Accepts any component as a child item. Common cases for this component are headings, text strings, badges or icons.
    	</td>
  </tr>
  <tr>
	<td><img src='../assets/DONT.png'/><br></td>
    	<td>
      		<strong> children </strong><br>
      		any nodes to be rendered
    	</td>
  </tr>
</table>

<br>

## Templates

For all the future story docs, please start with this template:
[https://docs.google.com/document/d/1KmQ56KeyAPqsiQ7vskSMJxK2Lfq9XlO0vzYoM_Nwn3M/edit?usp=sharing]()
