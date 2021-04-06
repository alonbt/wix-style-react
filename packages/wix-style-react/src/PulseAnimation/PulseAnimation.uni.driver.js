import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const pulseAnimationDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),
  };
};
