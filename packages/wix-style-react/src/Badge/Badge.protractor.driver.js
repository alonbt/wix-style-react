const badgeDriverFactory = component => ({
  /** returns the component element */
  element: () => component,
  /** returns the component text */
  text: async () => component.getText(),
});

export default badgeDriverFactory;
