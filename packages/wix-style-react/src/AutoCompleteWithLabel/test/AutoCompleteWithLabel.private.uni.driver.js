import { autoCompleteWithLabelDriverFactory as publicDriverFactory } from '../AutoCompleteWithLabel.uni.driver';
import { inputWithOptionsUniDriverFactory } from '../../InputWithOptions/InputWithOptions.uni.driver';
import dataHooks from '../dataHooks';

export const autoCompleteWithLabelPrivateDriverFactory = base => {
  const inputWithOptionsSelector = `[data-hook="${dataHooks.inputWithOptions}"]`;
  const inputWithOptionsDriver = inputWithOptionsUniDriverFactory(
    base.$(inputWithOptionsSelector),
    base,
  );

  return {
    ...publicDriverFactory(base),
    optionsLength: () =>
      inputWithOptionsDriver.dropdownLayoutDriver.optionsLength(),
  };
};
