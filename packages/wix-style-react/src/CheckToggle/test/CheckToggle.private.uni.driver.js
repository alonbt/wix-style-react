import { checkToggleDriverFactory as publicDriverFactory } from '../CheckToggle.uni.driver';

export const checkTogglePrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),
  };
};
