import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { ReactBase } from '../../test/utils/unidriver';
import { dataAttr, dataHooks } from './constants';
import { statusIndicatorDriverFactory } from '../StatusIndicator/StatusIndicator.uni.driver';

export const inputAreaUniDriverFactory = (base, body) => {
  const textArea = base.$('textarea');
  const counterSelector = '[data-hook="counter"]';
  const getStatusIndicatorDriver = () =>
    statusIndicatorDriverFactory(
      base.$(`[data-hook="${dataHooks.tooltip}"]`),
      body,
    );

  const textAreaBase = ReactBase(textArea);

  return {
    ...baseUniDriverFactory(base),

    trigger: (trigger, event) => textAreaBase[trigger](event),
    focus: () => textAreaBase.focus(),
    enterText: text => textArea.enterValue(text),
    getValue: () => textArea.value(),
    getName: () => textArea.attr('name'),
    getPlaceholder: () => textArea._prop('placeholder'),
    getDefaultValue: () => textArea._prop('defaultValue'),
    getRowsCount: () => textArea._prop('rows'),
    getMaxLength: () => textArea._prop('maxLength'),
    getTabIndex: () => textArea._prop('tabIndex'),
    getReadOnly: () => textArea._prop('readOnly'),
    getCursorLocation: () => textArea._prop('selectionStart'),
    getResizable: async () => !!(await base.attr(dataAttr.RESIZABLE)),
    getDisabled: async () =>
      !!(await base.attr(dataAttr.DISABLED)) &&
      !!(await textArea._prop('disabled')),
    getRequired: () => textArea._prop('required'),
    getHasCounter: () => !!base.$$(counterSelector).length,
    getCounterValue: () => base.$(counterSelector).text(),
    hasExclamation: async () => !!(await base.attr(dataAttr.STATUS)),
    isFocusedStyle: async () => !!(await base.attr(dataAttr.FOCUS)),
    isSizeSmall: async () => (await base.attr(dataAttr.SIZE)) === 'small',
    isHoveredStyle: async () => !!(await base.attr(dataAttr.HOVER)),
    isFocus: () => textAreaBase.isFocus(),
    exists: () => textArea.exists(),
    getStyle: () => textArea._prop('style'),
    getAriaLabel: () => textArea.attr('aria-label'),
    getAriaControls: () => textArea.attr('aria-controls'),
    getAriaDescribedby: () => textArea.attr('aria-describedby'),
    getTooltipDataHook: () => dataHooks.tooltip,
    getTooltipElement: () => base,

    // Status
    /** Return true if there's a status */
    hasStatus: async status => {
      const statusIndicatorDriver = getStatusIndicatorDriver();
      if (await statusIndicatorDriver.exists()) {
        return status === (await statusIndicatorDriver.getStatus());
      }

      return false;
    },
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
};
