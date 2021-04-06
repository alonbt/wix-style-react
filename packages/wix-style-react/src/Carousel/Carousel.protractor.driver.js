const carouselDriverFactory = component => {
  return {
    element: () => component,
    isReady: async () => {
      return (await component.getAttribute('data-ready')) === 'true';
    },
  };
};
export default carouselDriverFactory;
