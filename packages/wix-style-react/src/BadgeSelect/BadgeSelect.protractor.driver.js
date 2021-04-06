import popoverDriverFactory from '../Popover/Popover.protractor.driver';

const badgeSelectDriverFactory = component => {
  const popoverDriver = popoverDriverFactory(component);

  const getBadgeElement = () => popoverDriver.getTargetElement();

  const getDropdownItem = index =>
    component.$$(`[data-hook="dropdown-layout-options"] div`).get(index);

  return {
    /** Returns the element */
    element: () => component,

    /** Click the badge */
    clickBadge: () => getBadgeElement().click(),

    /** Select a specific option */
    async selectOption(index) {
      await this.clickBadge();
      await getDropdownItem(index).click();
    },
  };
};
export default badgeSelectDriverFactory;
