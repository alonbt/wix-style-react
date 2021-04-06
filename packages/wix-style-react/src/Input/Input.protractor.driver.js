import { isFocused } from 'wix-ui-test-utils/protractor';
import { inputDataHookSelector } from './Input.private.protractor.driver';

const inputDriverFactory = component => {
  const input = component.$(inputDataHookSelector),
    clearButton = component.$('[data-hook="input-clear-button"]');

  return {
    element: () => component,
    enterText: text => input.clear().sendKeys(text),
    getText: () => input.getAttribute('value'),
    hasClearButton: () => clearButton.isPresent(),
    clickClear: () => clearButton.isPresent() && clearButton.click(),
    click: () => input.click(),
    isFocused: () => isFocused(input),
  };
};

export default inputDriverFactory;
