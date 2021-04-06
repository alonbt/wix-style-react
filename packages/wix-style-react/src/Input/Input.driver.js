import ReactTestUtils from 'react-dom/test-utils';
import { tooltipDriverFactory } from 'wix-ui-core/dist/src/components/tooltip/Tooltip.driver';
import { dataHooks } from './constants';
import DATA_ATTR from './DataAttr';

const inputDriverFactory = ({ element, eventTrigger }) => {
  const input = element && element.querySelector('input');
  const clearButton =
    element && element.querySelector(`[data-hook=input-clear-button]`);
  const customAffixNode =
    element && element.querySelector(`[data-hook="custom-affix"]`);
  const iconAffixNode =
    element && element.querySelector(`[data-hook="icon-affix"]`);
  const menuArrowNode =
    element && element.querySelector(`[data-hook="${dataHooks.menuArrow}"]`);
  const getName = () => input.getAttribute('name');
  const getType = () => input.getAttribute('type');
  const getMaxLength = () => input.getAttribute('maxlength');

  const driver = {
    trigger: (trigger, event) => ReactTestUtils.Simulate[trigger](input, event),
    focus: options => {
      input.focus(options);
      ReactTestUtils.Simulate.focus(input);
    },
    blur: () => {
      input.blur();
      ReactTestUtils.Simulate.blur(input);
    },
    getName,
    getMaxLength,
    getType,
    keyDown: key => ReactTestUtils.Simulate.keyDown(input, { key }),
    click: () => ReactTestUtils.Simulate.click(input),
    clickCustomAffix: () => ReactTestUtils.Simulate.click(customAffixNode),
    clickClear: () => ReactTestUtils.Simulate.click(clearButton),
    clickIconAffix: () => ReactTestUtils.Simulate.click(iconAffixNode),
    clickMenuArrow: () => ReactTestUtils.Simulate.click(menuArrowNode),
    mouseOver: () => ReactTestUtils.Simulate.mouseOver(input),
    mouseOut: () => ReactTestUtils.Simulate.mouseOut(input),
    clearText: () => driver.enterText(''),
    enterText: text => {
      input.value = text;
      ReactTestUtils.Simulate.change(input, {
        target: { name: getName(), type: getType(), value: text },
      });
    },
    getValue: () => input.value,
    getText: () => input.value,
    getPlaceholder: () => input.placeholder,
    getPattern: () => input.pattern,
    getDefaultValue: () => input.defaultValue,
    getTabIndex: () => input.tabIndex,
    getReadOnly: () => input.readOnly,
    getDisabled: () => input.disabled,
    getTextOverflow: () => input.style['text-overflow'],
    getAriaLabel: () => input.getAttribute('aria-label'),
    getAriaControls: () => input.getAttribute('aria-controls'),
    getAriaDescribedby: () => input.getAttribute('aria-describedby'),
    getAutocomplete: () => input.getAttribute('autocomplete'),
    getRequired: () => input.required,
    hasPrefix: () => element.hasAttribute(DATA_ATTR.PREFIX),
    hasSuffix: () =>
      !!element.querySelector(`[data-hook="${dataHooks.suffixes}"]`),
    prefixComponentExists: style =>
      element.hasAttribute(DATA_ATTR.PREFIX) && !!element.querySelector(style),
    suffixComponentExists: style =>
      !!element.querySelector(`[data-hook="${dataHooks.suffixes}"] ${style}`),
    getDataHook: () => element.getAttribute('data-hook'),
    getCustomAffix: () => customAffixNode.textContent,
    hasMenuArrow: () => !!menuArrowNode,
    hasClearButton: () => !!clearButton,
    isRTL: () => element.getAttribute('dir') === 'rtl',
    isFocusedStyle: () => element.hasAttribute(DATA_ATTR.FOCUS),
    isHoveredStyle: () => element.hasAttribute(DATA_ATTR.HOVER),
    isDisabled: () => element.hasAttribute(DATA_ATTR.DISABLED),
    isOfSize: size => element.getAttribute(DATA_ATTR.SIZE) === size,
    getSize: () => element.getAttribute(DATA_ATTR.SIZE),
    isFocus: () => document.activeElement === input,
    exists: () => !!(element && element.querySelector('input')),
    startComposing: () => ReactTestUtils.Simulate.compositionStart(input),
    endComposing: () => ReactTestUtils.Simulate.compositionEnd(input),
    getCursorLocation: () => input.selectionStart,
    getRootElementClasses: () => element.classList,
    getInputElementClasses: () => input.classList,
    hasRightBorderRadius: () =>
      !element.hasAttribute(DATA_ATTR.RIGHTBORDERRADIUS),
    hasLeftBorderRadius: () =>
      !element.hasAttribute(DATA_ATTR.LEFTBORDERRADIUS),
    isCustomInput: () => {
      return input.getAttribute('data-hook') === 'wsr-custom-input';
    },

    // Status
    /** Return true if the given status is displayed */
    hasStatus: status => element.getAttribute(DATA_ATTR.STATUS) === status,
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

  return driver;
};

export default inputDriverFactory;
