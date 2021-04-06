import ReactTestUtils from 'react-dom/test-utils';
import { tooltipDriverFactory } from 'wix-ui-core/dist/src/components/tooltip/Tooltip.driver';
import { dataAttr, dataHooks } from './constants';

const inputAreaDriverFactory = ({ element, eventTrigger }) => {
  const textArea = () => element.querySelector('textarea');
  const name = () => textArea().getAttribute('name');
  const counterSelector = '[data-hook="counter"]';

  return {
    trigger: (trigger, event) =>
      ReactTestUtils.Simulate[trigger](textArea(), event),
    focus: () => textArea().focus(),
    enterText: text => {
      textArea().value = text;
      ReactTestUtils.Simulate.change(textArea(), {
        target: { name: name(), value: text },
      });
    },
    getValue: () => textArea().value,
    getName: name,
    getPlaceholder: () => textArea().placeholder,
    getDefaultValue: () => textArea().defaultValue,
    getRowsCount: () => textArea().rows,
    getMaxLength: () => textArea().maxLength,
    getTabIndex: () => textArea().tabIndex,
    getReadOnly: () => textArea().readOnly,
    getCursorLocation: () => textArea().selectionStart,
    getResizable: () => element.hasAttribute(dataAttr.RESIZABLE),
    getDisabled: () =>
      element.hasAttribute(dataAttr.DISABLED) && textArea().disabled,
    getRequired: () => textArea().required,
    getHasCounter: () => !!element.querySelectorAll(counterSelector).length,
    getCounterValue: () => element.querySelector(counterSelector).textContent,
    hasExclamation: () => element.hasAttribute(dataAttr.STATUS),
    isFocusedStyle: () => element.hasAttribute(dataAttr.FOCUS),
    isSizeSmall: () => element.getAttribute(dataAttr.SIZE) === 'small',
    isHoveredStyle: () => element.hasAttribute(dataAttr.HOVER),
    isFocus: () => document.activeElement === textArea(),
    exists: () => !!textArea(),
    getStyle: () => textArea().style,
    getAriaLabel: () => textArea().getAttribute('aria-label'),
    getAriaControls: () => textArea().getAttribute('aria-controls'),
    getAriaDescribedby: () => textArea().getAttribute('aria-describedby'),

    // Status
    /** Return true if the given status is displayed */
    hasStatus: status => {
      const statusEl = element.querySelector(
        `[data-hook='${dataHooks.tooltip}']`,
      );
      return (statusEl && statusEl.getAttribute('data-status')) === status;
    },
    /** If there's a status message, returns its text value */
    getStatusMessage: () => {
      let tooltipText = null;
      const tooltipDriver = tooltipDriverFactory({
        element: element.querySelector(
          '[data-hook="status-indicator-tooltip"]',
        ),
        eventTrigger,
      });

      if (tooltipDriver.exists()) {
        tooltipDriver.mouseEnter();
        const contentElement = tooltipDriver.getContentElement();
        if (contentElement) {
          tooltipText = contentElement.textContent;
        }
      }

      return tooltipText;
    },
  };
};

export default inputAreaDriverFactory;
