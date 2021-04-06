import { baseUniDriverFactory } from '../../test/utils/unidriver';

import {
  buttonDriverFactory,
  ButtonUniDriver,
} from '../Button/Button.uni.driver';
import { dataHooks } from './constants';
import { getFormattedDataHooks } from '../../test/utils';

const fDataHooks = getFormattedDataHooks(dataHooks);

export const baseModalLayoutDriverFactory = base => {
  const getButtonDriver = dataHook =>
    buttonDriverFactory(base.$(`[data-hook="${dataHook}"]`));

  return {
    ...baseUniDriverFactory(base),
    /**
     * Gets the modal theme
     * @returns {Promise<string>}
     */
    getTheme: async () => base.attr('data-theme'),

    /**
     * Clicks the modal close-button
     * @returns {Promise<Void>}
     * */
    clickCloseButton: async () => base.$(fDataHooks.closeButton).click(),

    /**
     * Clicks the modal help-button
     * @returns {Promise<Void>}
     * */
    clickHelpButton: async () => base.$(fDataHooks.helpButton).click(),

    /**
     * Checks whether a node with the provided dataHook exists
     * @param {string} dataHook
     * @returns {Promise<boolean>}
     * */
    childExists: async dataHook => base.$(`[data-hook="${dataHook}"]`).exists(),

    /**
     * Gets the title's text
     * @returns {Promise<string>}
     * */
    getTitleText: async () => base.$(fDataHooks.headerTitle).text(),

    /**
     * Gets the subtitle's text
     * @returns {Promise<string>}
     * */
    getSubtitleText: async () => base.$(fDataHooks.headerSubtitle).text(),

    /**
     * Gets the secondary button driver
     * @returns {Promise<ButtonUniDriver>}
     * */
    getSecondaryButtonDriver: async () =>
      getButtonDriver(dataHooks.footerSecondaryButton),

    /**
     * Gets the primary button driver
     * @returns {Promise<ButtonUniDriver>}
     * */
    getPrimaryButtonDriver: async () =>
      getButtonDriver(dataHooks.footerPrimaryButton),

    /**
     * Gets the illustration source
     * @returns {Promise<string>}
     */
    getIllustrationSrc: async () =>
      base.$(fDataHooks.illustrationSrc).attr('src'),
  };
};
