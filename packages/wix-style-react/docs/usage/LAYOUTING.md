# Layouting

Layouting is a category of techniques which allow us to position elements within a container - considering factors such as positioning flow, elements around them, their parent container, viewport and more.

The library provides three utilities in order to layout elements fluidly, so that each is designed and appropriate for a different use case.

Before we start, we should understand there are two main approaches to layout:

1. Content-first - an approach that advocates adding the relevant content at first and then adjusting the layout, as necessary. The content is the factor that instructs the structure.
2. Layout-first - an approach that advocates defining the layout's structure and then adding content, based on that structure.

Understanding the approaches above will assist us to choose the appropriate solution.

Let's start.

<br/>

## The `<Box/>` Component

A one-dimensional layout component based on Flexbox, that implements the content-first approach.

The component allows us adding children directly and those are displayed one by one as a “stack” in a particular direction - horizontally or vertically.

Mostly would be useful for layouting small-scale areas.

### Examples

#### Icon & Text Alignment

This example uses `<Box/>`s to pad and align the icon vertically beside the text:

```jsx
<Box verticalAlign="middle">
  <Box marginRight="1">
    <Icons.HintSmall />
  </Box>
  <Text>
    This is a hint!
  </Text>
</Box>
```

#### Header

This example uses `<Box/>`s to spread the child elements horizontally over the whole width:

```jsx
<Box align="space-between" verticalAlign="middle">
  <Heading>My Title</Heading>
  <Box verticalAlign="middle">
    <Text>Hello John!</Text>
    <Box marginLeft="3">
      <Avatar />
    </Box>
  </Box>
</Box>
```

<br/>

## Layout's Family

A flexible layout family (`<Layout/>` & `<Cell/>`) based on CSS Grid, that could implement both approaches.

This family allows us to layout one-dimensionally or two-dimensionally either, according to the use-case. It enables to divide the cells into "virtual" columns, without the constraint to deal with breaking rows - because of the fact that it places the items automatically (considering their `span` width and the available viewport space).

Mostly would be useful for larger-scale areas. Main features:

* There is no need to deal with explicit rows - just adding the `<Cell/>`s into the container
* The gaps between the cells are controllable
* The amount of the maximum columns is adjustable (could be 12 or lower)

### Examples
#### Form

This example uses Layout's family to display a list of labels beside aligned inputs:

```jsx
<Layout>
  <Cell span={1}>
    <FormField label="User" required />
  </Cell>
  <Cell span={11}>
    <Input />
  </Cell>
  <Cell span={1}>
    <FormField label="Email" />
  </Cell>
  <Cell span={11}>
    <Input />
  </Cell>
  <Cell span={1}>
    <FormField label="Address" infoContent="I help you to fill info" />
  </Cell>
  <Cell span={11}>
    <Input />
  </Cell>
</Layout>
```
#### Grid View

This example uses Layout's family to divide a list of cards between rows and columns:

```jsx
() => {
  const list = Array(6).fill({ title: 'Title', subtitle: 'Subtitle' });

  return (
    <Layout>
      {list.map(item => (
        <Cell span={6}>
          <CardGalleryItem title={item.title} subtitle={item.subtitle} />
        </Cell>
      ))}
    </Layout>
  );
};
```

<br/>

## Conclusion

We covered three different ways to layout elements with the library.

We should know that there is no absolute formula to choose the right solution, but we can ask ourselves the following:

* What's the scale of the area we need to layout?
* What's the layout dimension?
* What's the layout-approach that is more relevant for us?
* Do we need to iterate through a data collection? If so, in which way is it structured?
* How much the layout should be flexible?

Here’s a comparison:

|            | `Box`                         | Layout's Family |
|------------|-------------------------------|-----------------|
| Dimensions | One                           | Up to you       |
| Based on   | Flexbox                       | CSS Grid        |
| Approach   | Content-first                 | Up to you       |
| Scale      | Small                         | Medium/Large    |
| Examples   | Icon & Text Alignment, Header | Grid View       |
