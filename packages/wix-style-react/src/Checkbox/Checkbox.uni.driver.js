import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';
import { Simulate } from 'react-dom/test-utils';
import { textUniDriverFactory } from '../Text/Text.uni.driver';
import { tooltipDriverFactory } from '../Tooltip/Tooltip.uni.driver';
import { dataHooks } from './constants';

import * as DATA_ATTR from './DataAttr';

const getDataCheckType = base => base.attr(DATA_ATTR.DATA_CHECK_TYPE);

export const checkboxUniDriverFactory = (base, body) => {
  const reactBase = ReactBase(base);

  const labelTextDriver = textUniDriverFactory(
    base.$(`[data-hook="${dataHooks.children}"]`),
  );

  const input = () => base.$('input');
  const isChecked = async () =>
    (await getDataCheckType(base)) === DATA_ATTR.CHECK_TYPES.CHECKED;
  const getTooltipDriver = async () =>
    tooltipDriverFactory(base.$(`[data-hook="${dataHooks.boxTooltip}"]`), body);

  const getTooltipMessage = async () => {
    try {
      const tooltipDriver = await getTooltipDriver();
      return tooltipDriver.getTooltipText();
    } catch (e) {
      throw new Error('Failed getting checkbox error message');
    }
  };

  const isTooltipEnabled = async () => {
    const tooltipDriver = await getTooltipDriver();
    await tooltipDriver.mouseEnter();
    return await tooltipDriver.tooltipExists();
  };

  return {
    ...baseUniDriverFactory(base),
    /**
     * Click on the component root element.
     * @returns {Promise<void>}
     */
    click: async () => {
      if (base.type === 'react') {
        // eslint-disable-next-line no-restricted-properties
        Simulate.change(await input().getNative(), {
          target: { checked: !(await isChecked()) },
        });
      } else {
        return base.click();
      }
    },
    /**
     * focuses the component.
     * @returns {Void}
     */
    focus: () => reactBase.focus(),
    /**
     * blurs off the element.
     * @returns {Void}
     */
    blur: () => reactBase.blur(),
    /**
     * Checks whether the checkbox is checked.
     * @returns {Promise<boolean>}
     */
    isChecked,
    /**
     * Checks whether the checkbox is disabled.
     * @returns {Promise<boolean>}
     */
    isDisabled: async () =>
      (await base.attr(DATA_ATTR.DATA_DISABLED)) === 'true',
    /**
     * Checks whether the checkbox's value is indeterminate.
     * @returns {Promise<boolean>}
     */
    isIndeterminate: async () =>
      (await getDataCheckType(base)) === DATA_ATTR.CHECK_TYPES.INDETERMINATE,
    /**
     * Checks whether the checkbox's tooltip is enabled.
     * @returns {Promise<boolean>}
     */
    isTooltipEnabled: isTooltipEnabled,
    /**
     * Checks whether the checkbox hasError prop is true.
     * @returns {Promise<boolean>}
     */
    hasError: async () =>
      (await base.attr(DATA_ATTR.DATA_HAS_ERROR)) === 'true',
    /**
     * Gets the tooltip message.
     * @returns {Promise<string>}
     * @deprecated
     */
    getTooltipContent: getTooltipMessage,
    /**
     * Gets the error message.
     * @returns {Promise<string>}
     * @deprecated
     */
    getErrorMessage: getTooltipMessage,
    /**
     * Gets checkbox's label.
     * @returns {Promise<string>}
     */
    getLabel: labelTextDriver.getText,
    /**
     * Gets the label's size.
     * @returns {Promise<'tiny' | 'small' | 'medium'>}
     */
    getLabelSize: labelTextDriver.getSize,
  };
};
