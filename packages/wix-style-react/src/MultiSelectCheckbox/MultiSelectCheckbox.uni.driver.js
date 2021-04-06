import { inputWithOptionsUniDriverFactory } from '../InputWithOptions/InputWithOptions.uni.driver';

export const multiSelectCheckboxUniDriverFactory = (base, body) => {
  const {
    driver,
    inputDriver,
    dropdownLayoutDriver,
  } = inputWithOptionsUniDriverFactory(base, body);

  const getLabels = async (delimiter = `, `) =>
    (await inputDriver.getValue()).split(delimiter);

  return {
    driver: {
      ...driver,
      getNumOfLabels: async () => (await getLabels()).length,
      getLabels: async delimiter => getLabels(delimiter),
      getLabelAt: async (index, delimiter) =>
        (await getLabels(delimiter))[index],
    },
    inputDriver,
    dropdownLayoutDriver,
  };
};
