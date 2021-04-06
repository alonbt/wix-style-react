import { dataHooks } from './constants';

export const getItemAt = (idx, base) =>
  base.$$(`[data-hook="${dataHooks.item}"]`).get(idx);
