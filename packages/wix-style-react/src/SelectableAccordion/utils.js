import { findByHookAtIndex } from '../../test/utils/unidriver';
import { dataHooks } from './constants';

export const getItemAt = (base, idx) =>
  findByHookAtIndex(base, dataHooks.item, idx);
