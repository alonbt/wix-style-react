import { popoverDriverFactory } from '../../Popover/Popover.uni.driver';

export const closablePopoverUniDriverFactory = (base, body) => {
  const popoverDriver = popoverDriverFactory(base, body);

  return {
    ...popoverDriverFactory(base, body),

    /**
     * Checks whether the popover's content is open
     * @return {Promise<boolean>}
     */
    isOpened: () => popoverDriver.isContentElementExists(),
  };
};
