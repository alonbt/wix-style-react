/* eslint-disable */
<Proportion aspectRatio={1.8}>
  <MediaOverlay
    hoverSkin="dark"
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
    <MediaOverlay.Content visible="hover">
      <MediaOverlay.DragHandle />
    </MediaOverlay.Content>
  </MediaOverlay>
</Proportion>
