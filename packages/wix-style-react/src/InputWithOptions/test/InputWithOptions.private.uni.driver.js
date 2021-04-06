import { inputWithOptionsUniDriverFactory as publicDriver } from '../InputWithOptions.uni.driver';
import { testkit } from '../../Input/Input.private.uni.driver';

export const inputWithOptionsUniDriverFactory = (base, body) => {
  const inputWrapperSelector = '[data-input-parent]';
  const inputTestkit = testkit(
    base.$(`${inputWrapperSelector} > *:first-child `),
  );

  return {
    ...publicDriver(base, body),
    inputDriver: inputTestkit,
  };
};
