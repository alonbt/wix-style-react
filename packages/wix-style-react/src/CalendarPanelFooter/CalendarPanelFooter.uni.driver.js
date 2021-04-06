import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { buttonDriverFactory } from '../Button/Button.uni.driver';

export const calendarPanelFooterDriverFactory = base => {
  const getByDataHook = dataHook => base.$(`[data-hook=${dataHook}]`);
  const getButton = dataHook => {
    const buttonElem = getByDataHook(dataHook);
    return buttonDriverFactory(buttonElem);
  };

  const primaryButtonDataHook = 'primary-action-button';
  const secondaryButtonDataHook = 'secondary-action-button';

  return {
    ...baseUniDriverFactory(base),
    isPrimaryButtonDisabled: () =>
      getButton(primaryButtonDataHook).isButtonDisabled(),
    getSelectedDaysText: () => getByDataHook('selected-days-text').text(),
    getPrimaryActionButtonLabel: () =>
      getButton(primaryButtonDataHook).getButtonTextContent(),
    getSecondaryActionButtonLabel: () =>
      getButton(secondaryButtonDataHook).getButtonTextContent(),
    clickOnPrimaryButton: () => getButton(primaryButtonDataHook).click(),
    clickOnSecondaryButton: () => getButton(secondaryButtonDataHook).click(),
  };
};
