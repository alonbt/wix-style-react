## \<ModalMobileLayout/>

Previously `ModalMobileLayout` was fully responsible for spacing between full viewport and modal layout, but now this logic has been moved to `Modal` component. 

Migration examples:

1. Default mobile layout spacing:

  Before: 

  ```jsx
  <Modal>
    <ModalMobileLayout />
  </Modal>
  ```

  After:

  ```jsx
  <Modal screen="mobile">
    <ModalMobileLayout />
  </Modal>
    ```

2. Full screen mobile layout:

  Before:

  ```jsx
  <Modal>
    <ModalMobileLayout fullscreen />
  </Modal>
  ```

  After:

  ```jsx
  <Modal screen="full">
    <ModalMobileLayout fullscreen />
  </Modal>
  ```