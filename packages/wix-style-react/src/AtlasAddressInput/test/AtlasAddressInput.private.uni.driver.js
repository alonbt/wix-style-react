import { atlasAddressInputDriverFactory as publicDriverFactory } from '../AtlasAddressInput.uni.driver';
import { inputWithOptionsUniDriverFactory } from '../../InputWithOptions/InputWithOptions.uni.driver';
import { addressInputItemDriverFactory } from '../../AddressInputItem/AddressInputItem.uni.driver';

export const atlasAddressInputPrivateDriverFactory = (base, body) => {
  const { dropdownLayoutDriver } = inputWithOptionsUniDriverFactory(base, body);

  const getItemDriverAt = async index => {
    const optionDrivers = await dropdownLayoutDriver.options();
    const item = await optionDrivers[index].element();
    return addressInputItemDriverFactory(item);
  };

  return {
    ...publicDriverFactory(base, body),

    /**
     * Gets item prefix at given index
     * @param {number} index
     * @returns {Promise<node>} Item prefix
     */
    getItemPrefixAt: async index => (await getItemDriverAt(index)).getPrefix(),

    /**
     * Gets item suffix at given index
     * @param {number} index
     * @returns {Promise<node>} Item suffix
     */
    getItemSuffixAt: async index => (await getItemDriverAt(index)).getSuffix(),
  };
};
