import {
  baseUniDriverFactory,
  isElementFocused,
  ReactBase,
} from '../../test/utils/unidriver';
import DATA_ATTR from './DataAttr';
import { statusIndicatorDriverFactory } from '../StatusIndicator/StatusIndicator.uni.driver';
import { dataHooks } from './constants';

export const testkit = (base, body) => {
  // single $ throws an exception for more than 1 match, so we use the first matching result with $$
  // to support cases of multiple inputs, e.g cases where this driver is used inside other drivers with popovers
  // which includes an input
  const input = base.$$('input').get(0);

  const reactBase = ReactBase(base);
  const reactBaseInput = ReactBase(input);

  const clearButtonNode = base.$(`[data-hook=input-clear-button]`);
  const menuArrowNode = base.$(`[data-hook="${dataHooks.menuArrow}"]`);

  const getStatusIndicatorDriver = () =>
    statusIndicatorDriverFactory(
      base.$(`[data-hook="${dataHooks.status}"]`),
      body,
    );

  const driver = {
    ...baseUniDriverFactory(base),
    click: () => input.click(),
    getInputElementClasses: async () =>
      await reactBaseInput._DEPRECATED_getClassList(),
    suffixComponentExists: async className =>
      await base.$(`[data-hook="${dataHooks.suffixes}"] ${className}`).exists(),
    getRootElementClasses: async () =>
      await reactBase._DEPRECATED_getClassList(),
    getAriaDescribedby: async () => await input.attr('aria-describedby'),
    getAriaLabel: async () => await input.attr('aria-label'),
    getName: async () => await input.attr('name'),
    getMaxLength: async () => await input.attr('maxLength'),
    getType: async () => await input.attr('type'),
    getAriaControls: async () => await input.attr('aria-controls'),
    clickIconAffix: async () =>
      await base.$(`[data-hook="icon-affix"]`).click(),
    clickCustomAffix: async () =>
      await base.$(`[data-hook="custom-affix"]`).click(),
    hasSuffix: async () =>
      await base.$(`[data-hook="${dataHooks.suffixes}"]`).exists(),
    prefixComponentExists: async style =>
      !!(await base.attr(DATA_ATTR.PREFIX)) && (await base.$(style).exists()),
    hasPrefix: async () => !!(await base.attr(DATA_ATTR.PREFIX)),
    hasClearButton: async () => await clearButtonNode.exists(),
    clickClear: async () => await clearButtonNode.click(),
    getValue: async () => await input.value(),
    getText: async () => await input.value(),
    getPattern: async () => await input.attr('pattern'),
    getPlaceholder: async () => await input.attr('placeholder'),
    isOfSize: async size => (await base.attr(DATA_ATTR.SIZE)) === size,
    getSize: async () => await base.attr(DATA_ATTR.SIZE),
    isDisabled: async () => !!(await base.attr(DATA_ATTR.DISABLED)),
    isHoveredStyle: async () => !!(await base.attr(DATA_ATTR.HOVER)),
    isFocusedStyle: async () => !!(await base.attr(DATA_ATTR.FOCUS)),
    getRequired: async () => await input._prop('required'),
    enterText: async value => await input.enterValue(value),
    getAutocomplete: async () => await input.attr('autocomplete'),
    getDefaultValue: async () => await input._prop('defaultValue'),
    getTabIndex: async () => await input._prop('tabIndex'),
    isCustomInput: async () =>
      (await input.attr('data-hook')) === 'wsr-custom-input',
    getReadOnly: async () => await input._prop('readOnly'),
    getDisabled: async () => await input._prop('disabled'),
    getTextOverflow: async () => (await input._prop('style'))['text-overflow'],
    focus: async () => await reactBaseInput.focus(),
    blur: async () => await reactBaseInput.blur(),
    keyUp: async () => await reactBaseInput.keyUp(),
    keyDown: async eventData => await reactBaseInput.keyDown(eventData),
    paste: async () => await reactBaseInput.paste(),
    wheel: async () => await reactBaseInput.wheel(),
    trigger: async (eventType, event) => {
      if (eventType === 'focus') {
        return await driver.focus();
      }
      if (eventType === 'blur') {
        return await driver.blur();
      }
      if (eventType === 'keyUp') {
        return await driver.keyUp();
      }
      if (eventType === 'keyDown') {
        return await driver.keyDown(event);
      }
      if (eventType === 'paste') {
        return await driver.paste();
      }
      if (eventType === 'change') {
        return await driver.enterText(event.target.value);
      }
      if (eventType === 'wheel') {
        return await driver.wheel();
      }
    },
    isFocus: async () => isElementFocused(input),
    clickMenuArrow: async () => await menuArrowNode.click(),
    hasMenuArrow: async () => await menuArrowNode.exists(),
    isRTL: async () => (await base.attr('dir')) === 'rtl',
    getCursorLocation: () => input._prop('selectionStart'),
    clearText: () => driver.enterText(''),
    clickOutside: () => ReactBase.clickDocument(),

    // Status
    /** Return true if there's a status */
    hasStatus: async status => (await base.attr(DATA_ATTR.STATUS)) === status,
    /** If there's a status message, returns its text value */
    getStatusMessage: async () => {
      const statusIndicatorDriver = getStatusIndicatorDriver();
      let tooltipText = null;

      if (await statusIndicatorDriver.hasMessage()) {
        tooltipText = await statusIndicatorDriver.getMessage();
      }

      return tooltipText;
    },
  };

  return driver;
};

export default testkit;
