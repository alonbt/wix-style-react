import inputDriverFactory from '../Input/Input.protractor.driver';
import dropdownDriverFactory from '../Dropdown/Dropdown.protractor.driver';

export default component => {
  const inputDriver = inputDriverFactory(component);
  const dropdownDriver = dropdownDriverFactory(
    component.$('[data-hook="search-inputwithoptions"]'),
  );

  return {
    ...inputDriver,
    element: () => component,
    exists: () => component.isPresent(),
    clickOnInput: () => dropdownDriver.getInput().click(),
    clickOutside: () =>
      browser
        .actions()
        .mouseMove(component, { x: -20, y: -20 })
        .click()
        .perform(),
    getInput: dropdownDriver.getInput,
    getSearchDropdown: dropdownDriver.getDropdown,
    getSearchOptionAt: dropdownDriver.getDropdownItem,
    clickSearchOptionAt: async index => {
      const dropdownItem = await dropdownDriver.getDropdownItemElement(index);
      return await dropdownItem.click();
    },

    getSearchOptionsCount: dropdownDriver.getDropdownItemsCount,
  };
};
