export const skins = `
<Layout cols={1} gap={10}>
  <Text skin="standard">Standard skin appears in all major text.</Text>
  <Text skin="premium">
    Premium skin calls users to upgrade to get unlimited features.
  </Text>
  <Text skin="success">
    Success skin indicated users that everything went smooth.
  </Text>
  <Text skin="error">
    Error skin alerts users that something went wrong.
  </Text>
  <Text skin="disabled">
    Disabled skin indicates users that something cannot be accesed.
  </Text>
  <Text skin="primary">
    Primary skin is for links.
  </Text>
</Layout>
`;

export const light = `
<Layout cols={1} gap={10}>
<Text>
  Dark like a charcoal text is used on light backgrounds.
</Text>
<Box backgroundColor="D10" padding="3px">
  <Text light>
    Light like a chalk text is used on dark backgrounds.
  </Text>
</Box>
</Layout>;
`;

export const secondary = `
<Layout cols={1} gap={10}>
  <Text skin="standard" secondary>
    Dark secondary text is used where it's less important, than standard text.
  </Text>
  <Box backgroundColor="D10" padding="3px">
    <Text light secondary>
      Light secondary text is also serves for neutral content just on dark.
    </Text>
  </Box>
</Layout>
`;

export const weight = `
<Layout cols={1} gap={10}>
  <Text weight="thin">
    Thin weight is for a running text. All major paragraphs use it.
  </Text>
  <Text weight="normal">
    Normal weight is for form field values and buttons.
  </Text>
  <Text weight="bold">
    Bold weight is meant to emphasize running text.
  </Text>
</Layout>
`;

export const size = `
<Layout cols={1} gap={10}>
  <Text size="medium">
    Size medium is default size that's used most of the time.
  </Text>
  <Text size="small">
   Small size is used where medium doesn't fit or content is less important.
  </Text>
  <Text size="tiny">
    Tiny size is used when there's no space or it's the last thing users need to see.
  </Text>
</Layout>
`;

export const link = `
<Text>
  HTML 'a' tag lets users to read <a>a text link</a> between the lines.
</Text>
`;

export const ellipsis = `
<Layout cols={2} gap={10}>
  <Box width="150px">
    <Text>Text that wraps forever. It doesn't show any ellipsis.</Text>
  </Box>
  <Box width="150px">
    <Text ellipsis maxLines={2}>
      Text with ellipsis. It can be set to wrap, but after some lines it turns
      into ellipsis. Full text is revealed on hover.
    </Text>
  </Box>
</Layout>
`;

export const ellipsisNoTooltip = `
<Layout cols={2} gap={10}>
  <Box width="120px">
    <Text ellipsis>I show tooltip on hover</Text>
  </Box>
  <Box width="120px">
    <Text ellipsis tooltipProps={{ disabled: true }}>I don't show anything on hover</Text>
  </Box>
</Layout>
`;

export const smallTooltip = `
<Box width="120px">
  <Text ellipsis size="tiny" tooltipProps={{ size:'small' }}>I am tiny and I show small tooltip</Text>
</Box>
`;

export const maxwidth = `
<Box width="120px">
  <Text ellipsis tooltipProps={{ maxWidth: '360px' }}>Long text doesn't fit into 120px</Text>
</Box>
`;

export const custom = `
<Text tagName="div">
  Examples above appear as "span", while this text appears as a "div" tag.
</Text>
`;

export const list = `
<div>
  <Text listStyle="checkmark">
    The list below is built using standard "ul" and "li" HTML tags.
    <ul>
      <li>First list item</li>
      <li>
        Second list item
        <ul>
          <li>First sub list item</li>
          <li>Second sub list item</li>
        </ul>
      </li>

      <li>Third list item</li>
    </ul>
  </Text>
  <br />
  <Text listStyle="circle">
    <ul>
      <li>First list item</li>
      <li>
        Second list item
        <ul>
          <li>First sub list item</li>
          <li>Second sub list item</li>
        </ul>
      </li>

      <li>Third list item</li>
    </ul>
  </Text>
  <br />
  <Text>
    The list below is built using standard "ol" and "li" HTML tags.
    <ol>
      <li>First list item</li>
      <li>
        Second list item
        <ol type="I">
          <li>First sub list item</li>
          <li>Second sub list item</li>
        </ol>
      </li>

      <li>Third list item</li>
    </ol>
  </Text>
</div>
`;
