import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const fillPreviewDriverFactory = base => {
  const { element, exists } = baseUniDriverFactory(base);
  return {
    exists,
    element,
    /** clicks on button */
    click: () => base.$('[data-hook="fill-preview-button"]').click(),
    /** returns true if item is selected */
    isSelected: async () =>
      base
        .$('[data-hook="fill-preview-button"]')
        .attr('data-selected')
        .then(x => x === 'true'),
  };
};
