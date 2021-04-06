const highlighterDriverFactory = ({ element }) => {
  return {
    exists: () => !!element,
    html: () => element.innerHTML,
    getElement: () => element,
  };
};

export default highlighterDriverFactory;
