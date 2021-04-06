import { timelineDriverFactory as publicDriverFactory } from '../Timeline.uni.driver';
import { dataHooks } from '../constants';

export const timelinePrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
    /** Get the suffix element by idx */
    getSuffixElement: idx =>
      base.$(`[data-hook="${dataHooks.timelineSuffix}-${idx}"]`),

    /** Get the label action element by idx */
    getLabelActionElement: idx =>
      base.$(`[data-hook="${dataHooks.timelineLabelAction}-${idx}"]`),

    /** Get bullet indicator element by idx */
    getBulletIndicatorElement: idx =>
      base.$(`[data-hook="${dataHooks.timelineBulletIndicator}-${idx}"]`),
  };
};
