import buttonDriverFactory from '../Button/Button.legacy.driver';
import { dataHooks } from './constants';
import { getFormattedDataHooks, isClassExists } from '../../test/utils';
import ReactTestUtils from 'react-dom/test-utils';

const fDataHooks = getFormattedDataHooks(dataHooks);

export const baseModalLayoutDriverFactory = ({ element }) => {
  const getButtonDriver = dataHook =>
    buttonDriverFactory({
      element: element.querySelector(`[data-hook="${dataHook}"]`),
    });

  return {
    exists: () => !!element,
    _hasClass: className => isClassExists(element, className),
    _closeButtonExists: () => !!element.querySelector(fDataHooks.closeButton),
    _helpButtonExists: () => !!element.querySelector(fDataHooks.helpButton),
    /** Returns the modal theme */
    getTheme: () => element.getAttribute('data-theme'),

    /** Click the modal close-button */
    clickCloseButton: () =>
      ReactTestUtils.Simulate.click(
        element.querySelector(fDataHooks.closeButton),
      ),
    clickHelpButton: () =>
      ReactTestUtils.Simulate.click(
        element.querySelector(fDataHooks.helpButton),
      ),

    /** Checks that a node with the provided dataHook exists */
    childExists: dataHook =>
      !!element.querySelector(`[data-hook="${dataHook}"]`),

    /** Get the title's text */
    getTitleText: () =>
      element.querySelector(fDataHooks.headerTitle).textContent,

    /** Get the subtitle's text */
    getSubtitleText: () =>
      element.querySelector(fDataHooks.headerSubtitle).textContent,

    /** Return the secondary button driver*/
    getSecondaryButtonDriver: () =>
      getButtonDriver(dataHooks.footerSecondaryButton),

    /** Return the secondary button driver */
    getPrimaryButtonDriver: () =>
      getButtonDriver(dataHooks.footerPrimaryButton),

    getIllustrationSrc: () =>
      element.querySelector(fDataHooks.illustrationSrc).getAttribute('src'),
  };
};
