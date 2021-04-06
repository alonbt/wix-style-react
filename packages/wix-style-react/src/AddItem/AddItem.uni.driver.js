import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { textUniDriverFactory } from '../Text/Text.uni.driver';
import { tooltipDriverFactory } from '../Tooltip/Tooltip.uni.driver';
import { dataHooks } from './constants';

export const addItemUniDriverFactory = (base, body) => {
  const tooltipDriver = tooltipDriverFactory(base, body);
  const textDriver = textUniDriverFactory(
    findByHook(base, dataHooks.itemText),
    body,
  );
  const subtitleTextDriver = textUniDriverFactory(
    findByHook(base, dataHooks.itemSubtitle),
    body,
  );

  return {
    ...baseUniDriverFactory(findByHook(base, dataHooks.addItem), body),

    /**
     * Gets AddItem text
     * @return {Promise<string>}
     */
    getText: () => textDriver.getText(),

    /**
     * Checks whether AddItem text exist
     * @returns {Promise<boolean>}
     */
    textExists: () => textDriver.exists(),

    /**
     * Gets tooltip text
     * @return {Promise<string>}
     */
    getTooltipContent: () => tooltipDriver.getTooltipText(),

    /**
     * Gets AddItem subtitle
     * @return {Promise<string>}
     */
    getSubtitle: () => subtitleTextDriver.getText(),
  };
};
