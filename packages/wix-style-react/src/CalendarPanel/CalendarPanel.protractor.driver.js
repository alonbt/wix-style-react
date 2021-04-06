import calendarDriverFactory from '../Calendar/Calendar.protractor.driver';
import dropdownLayoutDriverFactory from '../DropdownLayout/DropdownLayout.protractor.driver';

export const calendarPanelDriverFactory = component => ({
  /** returns the component element */
  element: () => component,

  /** returns the component calendar driver */
  calendarDriver: () =>
    calendarDriverFactory(component.$('[data-hook="calendar"]')),

  /** returns the component dropdown layout driver */
  presetsDropdownLayoutDriver: () =>
    dropdownLayoutDriverFactory(component.$('[data-hook="dropdown-layout"]')),
});

export default calendarPanelDriverFactory;
