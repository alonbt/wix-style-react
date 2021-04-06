import inputDriverFactory from '../Input/Input.driver';
import calendarDriverFactory from '../Calendar/Calendar.driver';
import popoverDriverFactory from '../Popover/Popover.driver';

import { dataHooks } from './constants';

const datePickerDriverFactory = ({ element }) => {
  const popoverElement = element.querySelector(
    `[data-hook=${dataHooks.datePickerPopover}]`,
  );
  const popoverContent = () =>
    popoverDriverFactory({ element: popoverElement }).getContentElement();
  const calendarTestkit = () =>
    calendarDriverFactory({ element: popoverContent() });

  const calendarDriver = {
    ...Object.keys(calendarDriverFactory({ element })).reduce(
      (prev, current) => ({
        ...prev,
        [current]: args => {
          if (current === 'isVisible') {
            return popoverDriverFactory({
              element: popoverElement,
            }).isContentElementExists();
          }
          if (current === 'mouseClickOutside') {
            return popoverDriverFactory({
              element: popoverElement,
            }).clickOutside();
          }
          return calendarTestkit()[current](args);
        },
      }),
      {},
    ),
  };

  // here we have a dirty hack for getting input element directly
  // this is not the best wayt to do it, but knowing that we exposed
  // input datahook - we cannot change this for now.
  const inputElement = popoverDriverFactory({ element: popoverElement })
    .getTargetElement()
    .querySelector('[data-size]');

  const inputDriver = inputDriverFactory({ element: inputElement });

  const driver = {
    exists: () => !!element,
    open: () => inputDriver.focus(),
    getWidth: () => element.style.width,
  };

  return {
    exists: driver.exists,
    driver,
    inputDriver,
    calendarDriver,
  };
};

export default datePickerDriverFactory;
