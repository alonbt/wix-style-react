import { buttonNextDriverFactory } from 'wix-ui-core/dist/src/components/button-next/button-next.uni.driver';
import { tooltipDriverFactory } from '../Tooltip/Tooltip.uni.driver';
import { findByHook, getDataAttributeValue } from '../../test/utils/unidriver';
import { dataHooks, dataAttr } from './constants';

export const toggleButtonDriverFactory = (base, body) => {
  const tooltipBaseElement = findByHook(base, dataHooks.tooltip);
  const tooltipDriver = tooltipDriverFactory(tooltipBaseElement, body);
  const buttonDriver = buttonNextDriverFactory(base);

  async function getLabelPlacement() {
    return getDataAttributeValue(base, dataAttr.placement);
  }

  function getTooltipText() {
    return tooltipDriver.getTooltipText();
  }

  // Not using Omit so that AutoDocs will generate properly
  return {
    /**
     * Checks whether ToggleButton exist
     * @returns {Promise<boolean>}
     */
    exists: buttonDriver.exists,
    /**
     * Gets the ToggleButton element
     * @returns {Promise<any>}
     */
    element: buttonDriver.element,
    /**
     * Clicks on the element
     * @returns {Promise<void>}
     */
    click: buttonDriver.click,
    /**
     * Checks whether ToggleButton is disabled
     * @returns {Promise<boolean>}
     */
    isButtonDisabled: buttonDriver.isButtonDisabled,
    /**
     * Gets the ToggleButton skin
     * @returns {Promise<string | null>}
     */
    getSkin: async () => await getDataAttributeValue(base, dataAttr.skin),
    /**
     * Checks whether ToggleButton is selected
     * @returns {Promise<boolean>}
     */
    isButtonSelected: async () =>
      (await getDataAttributeValue(base, dataAttr.selected)) === 'true',
    /**
     * Gets the ToggleButton label placement
     * @returns {Promise<string>}
     */
    getLabelPlacement,
    /**
     * Gets the ToggleButton label placement value
     * @returns {Promise<string>}
     */
    getLabelValue: async () => {
      const placement = await getLabelPlacement();

      if (placement === 'tooltip') {
        return getTooltipText();
      }

      return findByHook(base, dataHooks.label).text();
    },
  };
};
