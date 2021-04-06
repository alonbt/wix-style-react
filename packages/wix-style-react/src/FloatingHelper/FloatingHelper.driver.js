import { closablePopoverDriverFactory } from './ClosablePopover/ClosablePopover.driver';
import { dataHooks } from './constants';
import { floatingHelperContentDriverFactory } from './FloatingHelperContent/FloatingHelperContent.driver';

const floatingHelperDriverFactory = ({ wrapper, element, eventTrigger }) => {
  const closablePopoverDriver = closablePopoverDriverFactory({
    wrapper,
    element,
    eventTrigger,
  });
  const popoverContent = () => closablePopoverDriver.getContentElement();
  const innerContent = () =>
    popoverContent().querySelector(`[data-hook='${dataHooks.innerContent}']`);
  const closeButton = () =>
    popoverContent().querySelector(`[data-hook='${dataHooks.closeButton}']`);
  const contentWrapper = () =>
    popoverContent().querySelector(`[data-hook='${dataHooks.contentWrapper}']`);

  return {
    ...closablePopoverDriver,
    /** check whether the helper has a close button */
    hasCloseButton: () => !!closeButton(),
    /** click the close button */
    clickCloseButton: () => eventTrigger.click(closeButton()),
    /** Get the driver for the helper's content */
    getHelperContentDriver: () =>
      floatingHelperContentDriverFactory({
        wrapper,
        element: innerContent(),
        eventTrigger,
      }),
    /** Get width of content's root element */
    getWidth: () => window.getComputedStyle(contentWrapper()).width,
  };
};

export default floatingHelperDriverFactory;
