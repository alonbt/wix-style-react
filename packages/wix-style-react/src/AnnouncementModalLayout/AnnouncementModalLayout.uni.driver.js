import { baseModalLayoutDriverFactory } from '../BaseModalLayout/BaseModalLayout.uni.driver';
import { textButtonDriverFactory } from '../TextButton/TextButton.uni.driver';
import { dataHooks } from './constants';

export const announcementModalLayoutDriverFactory = base => {
  const getLink = () =>
    textButtonDriverFactory(base.$(`[data-hook="${dataHooks.link}"]`));

  return {
    ...baseModalLayoutDriverFactory(base),

    /** Returns if the link component text content */
    getLinkText: () => getLink().getButtonTextContent(),

    /** Clicks the link component */
    clickLink: async () => getLink().click(),
  };
};
