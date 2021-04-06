import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { getElement } from '../../../test/utils/unidriver';
import { buttonDriverFactory } from '../../Button/Button.uni.driver';

export const MessageBoxFunctionalLayoutUniDriverFactory = base => {
  const confirmationButton = () => base.$('[data-hook="confirmation-button"]');
  const cancellationButton = () => base.$('[data-hook="cancellation-button"]');
  const headerCloseButton = () => base.$('[data-hook="header-close-button"]');

  const confirmButtonDriver = buttonDriverFactory(confirmationButton());
  const cancelButtonDriver = buttonDriverFactory(cancellationButton());

  return {
    ...baseUniDriverFactory(base),
    exists: () => base.exists(),
    getConfirmationButtonText: () => confirmButtonDriver.getButtonTextContent(),
    isConfirmationButtonPrefixIconExists: async () =>
      (await confirmationButton()._prop('innerHTML')).indexOf('prefix') !== -1,
    isConfirmationButtonSuffixIconExists: async () =>
      (await confirmationButton()._prop('innerHTML')).indexOf('suffix') !== -1,
    clickOnConfirmationButton: () => confirmButtonDriver.click(),
    getConfirmationButton: () => getElement(confirmationButton()),
    getCancellationButton: () => getElement(cancellationButton()),
    getHeaderCloseButton: () => getElement(headerCloseButton()),
    getCancellationButtonText: () => cancelButtonDriver.getButtonTextContent(),
    isCancellationButtonPrefixIconExists: async () =>
      (await cancellationButton()._prop('innerHTML')).indexOf('prefix') !== -1,
    isCancellationButtonSuffixIconExists: async () =>
      (await cancellationButton()._prop('innerHTML')).indexOf('suffix') !== -1,
    clickOnCancellationButton: () => cancelButtonDriver.click(),
    clickOnHeaderCloseButton: () => headerCloseButton().click(),
    isThemeExist: async theme => (await base.attr('data-theme')) === theme,
    getFooter: () => getElement(base.$('[data-hook="message-box-footer"]')),
    getTitle: () => base.$('[data-hook="header-layout-title"]').text(),
    getChildBySelector: selector => getElement(base.$(selector)),
    isCancelEnable: () => !cancelButtonDriver.isButtonDisabled(),
    isConfirmationEnable: () => !confirmButtonDriver.isButtonDisabled(),
    toHaveBodyPadding: async () =>
      (await base.attr('data-nobodypadding')) !== 'true',
  };
};
