import { addressInputDriverFactory } from '../AddressInput/AddressInput.uni.driver';

export const atlasAddressInputDriverFactory = (base, body) => {
  return {
    ...addressInputDriverFactory(base, body),
  };
};
