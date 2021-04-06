import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks, THEMES, TYPE_POSITIONS_MAP } from './constants';

export const notificationUniDriverFactory = base => {
  const getElementByDataHook = dataHook => base.$(`[data-hook="${dataHook}"]`);

  const notificationContent = getElementByDataHook(
    dataHooks.notificationContent,
  );
  const labelText = getElementByDataHook(dataHooks.notificationLabel);
  const actionButton = getElementByDataHook(dataHooks.notificationCtaButton);
  const closeButton = getElementByDataHook(dataHooks.notificationCloseButton);

  const getTheme = async () => await base.attr('data-theme');
  const getType = async () => await base.attr('data-type');

  return {
    ...baseUniDriverFactory(base),
    visible: () => notificationContent.exists(),
    hasTheme: async () => !!(await getTheme()),
    isStandardNotification: async () => (await getTheme()) === THEMES.standard,
    isErrorNotification: async () => (await getTheme()) === THEMES.error,
    isSuccessNotification: async () => (await getTheme()) === THEMES.success,
    isWarningNotification: async () => (await getTheme()) === THEMES.warning,
    isPremiumNotification: async () => (await getTheme()) === THEMES.premium,
    getLabelText: () => labelText.text(),
    hasActionButton: () => actionButton.exists(),
    getActionButtonText: () => actionButton.text(),
    hasCloseButton: () => closeButton.exists(),
    isRelativelyPositioned: async () =>
      (await getType()) === TYPE_POSITIONS_MAP.relative,
    isFixedPositioned: async () =>
      (await getType()) === TYPE_POSITIONS_MAP.fixed,
    isAbsolutePositioned: async () =>
      (await getType()) === TYPE_POSITIONS_MAP.absolute,
    clickOnCloseButton: () => closeButton.click(),
    clickOnActionButton: () => actionButton.click(),
    getZIndex: async () => {
      const style = await base._prop('style');
      return Number(style['z-index']);
    },
  };
};
