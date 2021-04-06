/* eslint-disable */
<Proportion aspectRatio={1.8}>
  <MediaOverlay
    skin="gradient"
    media="example.jpg"
  >
    <MediaOverlay.Content placement="top-end" visible="hover">
      <IconButton priority="secondary" skin="inverted" size="tiny">
        <Icons.Crop />
      </IconButton>
      <IconButton priority="secondary" skin="inverted" size="tiny">
        <Icons.Star />
      </IconButton>
      <PopoverMenu
        triggerElement={
          <IconButton priority="secondary" skin="inverted" size="tiny">
            <Icons.More />
          </IconButton>
        }
      >
        <PopoverMenu.MenuItem text="Edit" />
        <PopoverMenu.MenuItem text="Preview" />
        <PopoverMenu.MenuItem text="Remove" skin="destructive" />
      </PopoverMenu>
    </MediaOverlay.Content>
    <MediaOverlay.Content placement="top-start" visible="always">
      <Badge skin="success">New!</Badge>
    </MediaOverlay.Content>
    <MediaOverlay.Content placement="bottom-start" visible="always">
      <Text size="small" light>Image Title</Text>
    </MediaOverlay.Content>
  </MediaOverlay>
</Proportion>
