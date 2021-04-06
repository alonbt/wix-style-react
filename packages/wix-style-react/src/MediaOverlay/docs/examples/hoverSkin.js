/* eslint-disable */
<Layout cols={3}>
  <Proportion>
    <MediaOverlay
      hoverSkin="none"
      media="example.jpg"
    >
      <MediaOverlay.Content visible="always">
        <Box backgroundColor="D70" padding={1}>none</Box>
      </MediaOverlay.Content>
    </MediaOverlay>
  </Proportion>
  <Proportion>
    <MediaOverlay
      hoverSkin="gradient"
      media="example.jpg"
    >
      <MediaOverlay.Content visible="always">
        <Box backgroundColor="D70" padding={1}>gradient</Box>
      </MediaOverlay.Content>
    </MediaOverlay>
  </Proportion>
  <Proportion>
    <MediaOverlay
      hoverSkin="dark"
      media="example.jpg"
    >
      <MediaOverlay.Content visible="always">
        <Box backgroundColor="D70" padding={1}>dark</Box>
      </MediaOverlay.Content>
    </MediaOverlay>
  </Proportion>
</Layout>
