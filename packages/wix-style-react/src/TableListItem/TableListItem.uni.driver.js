import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';
import { checkboxUniDriverFactory } from '../Checkbox/Checkbox.uni.driver';
import deprecationLog from '../utils/deprecationLog';

export const tableListItemDriverFactory = (base, body) => {
  const getColumnAt = index =>
    base.$$(`[data-hook="${dataHooks.tableListItemValue}"]`).get(index);
  const getCheckboxDriver = () =>
    checkboxUniDriverFactory(
      base.$(`[data-hook="${dataHooks.tableListItemCheckbox}"]`),
      body,
    );

  const getColumnTextAt = async index => {
    const column = await getColumnAt(index);
    return column.text();
  };

  const getColumTextAt = index => {
    deprecationLog(
      'getColumTextAt is deprecated and will be removed in next major release, please use getColumnTextAt instead',
    );
    return getColumnTextAt(index);
  };

  return {
    ...baseUniDriverFactory(base, body),
    getColumTextAt,
    getColumnTextAt,
    isCheckboxExists: () => {
      const driver = getCheckboxDriver();
      return driver.exists();
    },
    isCheckboxChecked: () => {
      const driver = getCheckboxDriver();
      return driver.isChecked();
    },
    toggleCheckbox: () => {
      const driver = getCheckboxDriver();
      return driver.click();
    },
  };
};
