import { messageBoxMarketerialLayoutUniDriverFactory } from './MessageBoxMarketerialLayout.uni.driver';
import { buttonDriverFactory } from '../../Button/Button.uni.driver';

export const messageBoxMarketerialLayoutPrivateUniDriverFactory = base => {
  const getCloseButtonBase = () => base.$('[data-hook="close-button"]');
  const primaryButtonDriver = buttonDriverFactory(
    base.$('[data-hook="primary-button"]'),
  );

  return {
    ...messageBoxMarketerialLayoutUniDriverFactory(base),
    hasPrimaryButtonSkin: skin => primaryButtonDriver.hasSkin(skin),
    closeButtonHasSkin: async skin =>
      (await getCloseButtonBase().attr('data-skin')) === skin,
    isPrimaryButtonDisabled: primaryButtonDriver.isButtonDisabled,
  };
};
