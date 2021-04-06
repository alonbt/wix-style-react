import focusableDriverFactory from '../../common/Focusable/Focusable.protractor.driver';
import { mergeDrivers } from '../../../test/utils/private-drivers';
import { dataHooks } from './constants';

const buttonDriverFactory = element => {
  const getRadio = () =>
    element.$(`[data-hook="${dataHooks.RadioButtonRadio}"]`);
  const getTextChildren = () =>
    element.$(`[data-hook="${dataHooks.RadioButtonChildren}"]`);

  const focusableDriver = focusableDriverFactory({
    rootElement: element,
    nativeFocusableElement: element,
    clickableElements: [getRadio, getTextChildren],
  });

  const publicDriver = {
    // Empty driver
  };

  return mergeDrivers(publicDriver, focusableDriver);
};

export default buttonDriverFactory;
