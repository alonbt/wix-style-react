import { buttonNextDriverFactory } from 'wix-ui-core/dist/src/components/button-next/button-next.uni.driver';

export const iconButtonDriverFactory = base => {
  const buttonDriver = buttonNextDriverFactory(base);

  // Not using Omit so that AutoDocs will generate properly
  return {
    /** returns true if component exists */
    exists: buttonDriver.exists,
    /** returns the component element */
    element: buttonDriver.element,
    /** click on the element */
    click: buttonDriver.click,
    /** returns true if button disabled */
    isButtonDisabled: buttonDriver.isButtonDisabled,
  };
};
