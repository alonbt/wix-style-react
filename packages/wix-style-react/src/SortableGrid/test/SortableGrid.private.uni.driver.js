import { sortableGridUniDriverFactory as publicDriverFactory } from '../SortableGrid.uni.driver';

export const sortableGridPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),
  };
};
