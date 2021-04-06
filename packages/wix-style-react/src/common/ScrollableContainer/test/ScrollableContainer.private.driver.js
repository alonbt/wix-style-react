export const scrollableContainerPrivateDriverFactory = ({ element }) => {
  return {
    _scrollContentTo: ({ x = 0, y = 0 }) => {
      element.scroll(x, y);
    },
  };
};
