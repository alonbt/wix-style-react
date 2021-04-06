import { buttonDriverFactory } from '../Button.uni.driver';

export const buttonPrivateDriverFactory = base => {
  return {
    ...buttonDriverFactory(base),
    /** Returns the button size */
  };
};
