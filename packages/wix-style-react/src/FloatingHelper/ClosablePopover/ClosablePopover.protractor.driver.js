import { popoverDriverFactory } from 'wix-ui-core/drivers/protractor';

export const closablePopoverDriverFactory = element => {
  const popoverDriver = popoverDriverFactory(element);

  return {
    ...popoverDriver,
    isOpened: async () => popoverDriver.isContentElementExists(),
  };
};
