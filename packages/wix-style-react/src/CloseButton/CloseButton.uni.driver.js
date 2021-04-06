import { buttonNextDriverFactory } from 'wix-ui-core/dist/src/components/button-next/button-next.uni.driver';
import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const closeButtonDriverFactory = base => {
  const buttonDriver = buttonNextDriverFactory(base);

  // Not using Omit so that AutoDocs will generate properly
  return {
    ...baseUniDriverFactory(base),
    /** Checks whether the button is disabled
     * @returns {Promise<boolean>}
     * */
    isButtonDisabled: buttonDriver.isButtonDisabled,
  };
};
