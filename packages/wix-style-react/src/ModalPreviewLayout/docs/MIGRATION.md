## \<ModalPreviewLayout/>

`ModalPreviewLayout` shouldn't have spacing between full viewport and modal layout according design guidelines, but now `Modal` component has default `screen` prop value `desktop` which adds some spacing. To keep the old behavior we need to set `screen` prop to `full` value 

Migration example:

Before: 

```jsx
<Modal>
  <ModalPreviewLayout />
</Modal>
```

After:

```jsx
<Modal screen="full">
  <ModalPreviewLayout />
</Modal>
```