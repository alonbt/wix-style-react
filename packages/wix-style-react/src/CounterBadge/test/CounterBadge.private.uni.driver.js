import { counterBadgeDriverFactory as publicDriverFactory } from '../CounterBadge.uni.driver';

export const counterBadgePrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),
  };
};
