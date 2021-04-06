import ReactTestUtils from 'react-dom/test-utils';
import { dataHooks, THEMES, TYPE_POSITIONS_MAP } from './constants';

const notificationDriverFactory = ({ element }) => {
  const getElementByDataHook = dataHook =>
    element.querySelector(`[data-hook="${dataHook}"]`);

  const notificationContent = () =>
    getElementByDataHook(dataHooks.notificationContent);
  const labelText = () => getElementByDataHook(dataHooks.notificationLabel);
  const actionButton = () =>
    getElementByDataHook(dataHooks.notificationCtaButton);
  const closeButton = () =>
    getElementByDataHook(dataHooks.notificationCloseButton);

  const getTheme = () => element.getAttribute('data-theme');
  const getType = () => element.getAttribute('data-type');

  return {
    exists: () => !!element,
    visible: () => !!notificationContent(),
    hasTheme: () => !!getTheme(),
    isStandardNotification: () => getTheme() === THEMES.standard,
    isErrorNotification: () => getTheme() === THEMES.error,
    isSuccessNotification: () => getTheme() === THEMES.success,
    isWarningNotification: () => getTheme() === THEMES.warning,
    isPremiumNotification: () => getTheme() === THEMES.premium,
    getLabelText: () => labelText().textContent,
    hasActionButton: () => !!actionButton(),
    getActionButtonText: () => actionButton().textContent,
    hasCloseButton: () => !!closeButton(),
    isRelativelyPositioned: () => getType() === TYPE_POSITIONS_MAP.relative,
    isFixedPositioned: () => getType() === TYPE_POSITIONS_MAP.fixed,
    isAbsolutePositioned: () => getType() === TYPE_POSITIONS_MAP.absolute,
    clickOnCloseButton: () => ReactTestUtils.Simulate.click(closeButton()),
    clickOnActionButton: () => ReactTestUtils.Simulate.click(actionButton()),
    getZIndex: () => Number(element.style['z-index']),
  };
};

export default notificationDriverFactory;
