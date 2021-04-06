import { baseModalLayoutDriverFactory } from '../BaseModalLayout/BaseModalLayout.uni.driver';

export const customModalLayoutDriverFactory = base => {
  return {
    ...baseModalLayoutDriverFactory(base),
    /**
     * Checks whether the modal content has padding
     * @returns {Promise<boolean>}
     * */
    hasContentPadding: async () =>
      (await base.attr('data-contentpadding')) === 'true',
  };
};
