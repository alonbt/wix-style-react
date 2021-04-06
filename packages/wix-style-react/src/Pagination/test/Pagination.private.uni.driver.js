import { paginationDriverFactory as publicDriverFactory } from '../Pagination.uni.driver';

export const paginationPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),
  };
};
