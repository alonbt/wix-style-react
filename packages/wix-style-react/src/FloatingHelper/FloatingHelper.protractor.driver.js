import { closablePopoverDriverFactory } from './ClosablePopover/ClosablePopover.protractor.driver';
import { dataHooks } from './constants';
import { floatingHelperContentDriverFactory } from './FloatingHelperContent/FloatingHelperContent.protractor.driver';

const floatingHelperDriverFactory = element => {
  const getElementByDataHook = dataHook =>
    element.$(`[data-hook='${dataHook}']`);

  return {
    ...closablePopoverDriverFactory(element),
    /** Get HelperContent driver */
    getHelperContentDriver: () =>
      floatingHelperContentDriverFactory(
        getElementByDataHook(dataHooks.innerContent),
      ),
  };
};

export default floatingHelperDriverFactory;
