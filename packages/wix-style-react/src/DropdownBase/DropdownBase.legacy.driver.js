import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.driver';

const dropdownBaseDriverFactory = ({ element }) => {
  return {
    exists: () => !!element,
    element: () => element,
    getDropdownLayoutDriver: () => {
      return dropdownLayoutDriverFactory({
        element: element.querySelector(
          '[data-hook="dropdown-base-dropdownlayout"]',
        ),
      });
    },
  };
};

export default dropdownBaseDriverFactory;
