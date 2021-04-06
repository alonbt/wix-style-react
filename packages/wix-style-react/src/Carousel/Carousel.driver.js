import ReactTestUtils from 'react-dom/test-utils';

export const carouselDriverFactory = ({ element }) => {
  // It turns out that react-slick duplicates the children, so we ditch the cloned nodes
  const withoutClonedNodes = (selector = '') =>
    `.slick-slide:not(.slick-cloned) ${selector}`;

  return {
    exists: () => !!element,
    isLoading: () => {
      const loader = element.querySelector('[data-hook="loader"]');
      return !!loader;
    },
    getChildren: () => element.querySelectorAll(withoutClonedNodes()),
    getImages: () => {
      // Converting the result from NodeList to a real array
      return [
        ...element.querySelectorAll(
          withoutClonedNodes('[data-hook="carousel-img"]'),
        ),
      ].map(img => img.src);
    },
    clickPrevious: () => {
      const prevButton = element.querySelector('[data-hook="prev-button"]');
      ReactTestUtils.Simulate.click(prevButton);
    },
    clickNext: () => {
      const nextButton = element.querySelector('[data-hook="next-button"]');
      ReactTestUtils.Simulate.click(nextButton);
    },
  };
};
