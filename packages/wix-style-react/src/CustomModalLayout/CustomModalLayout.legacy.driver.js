import { baseModalLayoutDriverFactory } from '../BaseModalLayout/BaseModalLayout.legacy.driver';

export const customModalLayoutDriverFactory = ({ element }) => {
  return {
    ...baseModalLayoutDriverFactory({ element }),

    /** Returns if the modal content has padding */
    hasContentPadding: async () =>
      (await element.getAttribute('data-contentpadding')) === 'true',
  };
};
