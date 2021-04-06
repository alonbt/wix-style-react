/* eslint-disable */
<Layout cols={3}>
  <Proportion>
    <MediaOverlay
      skin="none"
      media="example.jpg"
    >
      <MediaOverlay.Content visible="always">
        <Box backgroundColor="D70" padding={1}>none</Box>
      </MediaOverlay.Content>
    </MediaOverlay>
  </Proportion>
  <Proportion>
    <MediaOverlay
      skin="gradient"
      media="example.jpg"
    >
      <MediaOverlay.Content visible="always">
        <Box backgroundColor="D70" padding={1}>gradient</Box>
      </MediaOverlay.Content>
    </MediaOverlay>
  </Proportion>
  <Proportion>
    <MediaOverlay
      skin="dark"
      media="example.jpg"
    >
      <MediaOverlay.Content visible="always">
        <Box backgroundColor="D70" padding={1}>dark</Box>
      </MediaOverlay.Content>
    </MediaOverlay>
  </Proportion>
</Layout>
