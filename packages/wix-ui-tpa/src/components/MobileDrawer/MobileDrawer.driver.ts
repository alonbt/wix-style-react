import {
  BaseUniDriver,
  baseUniDriverFactory,
} from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { modalDriverFactory } from '../internal/Modal/Modal.driver';

export interface MobileDrawerDriver extends BaseUniDriver {
  childExists(predicate: string): Promise<boolean>;
  isOpen(): Promise<boolean>;
}

export const mobileDrawerDriverFactory = (
  base: UniDriver,
): MobileDrawerDriver => {
  return {
    ...baseUniDriverFactory(base),

    /**
     * Checks whether a node with the provided predicate exists.
     * @param {string} predicate - a predicate for the child node
     * @returns {Promise<boolean>}
     */
    childExists: async (predicate: string) => base.$(predicate).exists(),

    /**
     *  Checks whether the Drawer is open.
     *  @returns {Promise<boolean>}
     */
    isOpen: async () => {
      const modalDriver = modalDriverFactory(base);
      return modalDriver.isOpen();
    },
  };
};
