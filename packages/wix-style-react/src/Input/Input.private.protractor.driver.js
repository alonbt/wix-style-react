import inputDriverFactory from './Input.protractor.driver';

// TODO: consider a better solution for selecting the input
export const inputDataHookSelector = `[data-hook="wsr-input"], [data-hook="wsr-custom-input"]`;

const inputPrivateDriverFactory = component => {
  const inputDriver = inputDriverFactory(component);
  const input = component.$(inputDataHookSelector);

  return {
    ...inputDriver,
    pressEnter: () => input.sendKeys(protractor.Key.ENTER),
  };
};

export default inputPrivateDriverFactory;
