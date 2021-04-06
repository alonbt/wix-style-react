import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const counterBadgeDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base),

    /* Get the content of the CounterBadge */
    getContent: () => findByHook(base, dataHooks.content)._prop('innerHTML'),
  };
};
