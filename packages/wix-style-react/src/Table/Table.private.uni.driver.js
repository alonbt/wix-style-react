import { tableUniDriverFactory } from './Table.uni.driver';

export const tablePrivateUniDriverFactory = (base, ...args) => {
  const publicDriver = tableUniDriverFactory(base, ...args);
  return {
    ...publicDriver,
    getInnerHtml: () => base._prop('innerHTML'),
  };
};
