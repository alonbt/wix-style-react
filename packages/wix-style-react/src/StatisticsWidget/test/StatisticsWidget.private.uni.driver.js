import publicDriverFactory from '../StatisticsWidget.uni.driver';
import { findBaseByHook } from '../../../test/utils';
import DataHooks from '../dataHooks';

export const statisticsWidgetPrivateDriverFactory = (base, body) => {
  const getHookSelector = hook => `[data-hook="${hook}"]`;

  const getStatsItem = async index =>
    base.$$(getHookSelector(DataHooks.stat)).get(index);

  return {
    ...publicDriverFactory(base, body),

    /** Get info icon of the stat with index */
    isInfoExists: async index =>
      await findBaseByHook(
        await base.$$(getHookSelector(DataHooks.stat)).get(index),
        DataHooks.info,
      ).exists(),

    pressEnterKey: async index => {
      if (index === undefined) {
        await base.pressKey('Enter');
        return;
      }

      const stat = await getStatsItem(index);
      await stat.pressKey('Enter');
    },

    pressSpaceKey: async index => {
      if (index === undefined) {
        await base.pressKey(' ');
        return;
      }

      const stat = await getStatsItem(index);
      await stat.pressKey(' ');
    },

    hasTabIndex: async index => {
      const stat = await getStatsItem(index);
      const tabIndex = await stat._prop('tabIndex');

      return tabIndex === 0;
    },

    getStatsItem,
  };
};
