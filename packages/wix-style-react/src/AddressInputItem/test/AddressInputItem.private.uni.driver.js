import { addressInputItemDriverFactory as publicDriverFactory } from '../AddressInputItem.uni.driver';

export const addressInputItemPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
