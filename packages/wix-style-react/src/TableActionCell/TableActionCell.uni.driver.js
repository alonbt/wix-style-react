import {
  baseUniDriverFactory,
  findByHook,
  findByHookAtIndex,
  countByHook,
} from '../../test/utils/unidriver';
import { dataHooks } from './constants';
import { buttonDriverFactory } from '../Button/Button.uni.driver';
import { tooltipDriverFactory } from '../Tooltip/Tooltip.uni.driver';
import { PopoverMenuDriver } from '../PopoverMenu/PopoverMenu.uni.driver';

export const tableActionCellUniDriverFactory = (base, body) => {
  const getPrimaryActionButtonDriver = () =>
    buttonDriverFactory(findByHook(base, dataHooks.primaryAction));

  const getVisibleActionTooltipDriver = actionIndex =>
    tooltipDriverFactory(
      findByHookAtIndex(base, dataHooks.visibleActionTooltip, actionIndex),
      body,
    );

  const getVisibleActionByDataHookTooltipDriver = dataHook =>
    tooltipDriverFactory(findByHook(base, dataHook), body);

  const getVisibleActionButtonDriver = actionIndex =>
    buttonDriverFactory(
      findByHookAtIndex(base, dataHooks.visibleAction, actionIndex),
    );

  const getVisibleActionByDataHookButtonDriver = dataHook =>
    buttonDriverFactory(findByHook(base, dataHook));

  const getHiddenActionsPopoverMenuDriver = () =>
    PopoverMenuDriver(findByHook(base, dataHooks.popoverMenu), body);

  return {
    ...baseUniDriverFactory(base, body),

    /**
     * Get the driver of the primary action <Button/> from the action column
     * @returns {Promise<buttonDriverFactory>}
     */
    getPrimaryActionButtonDriver,

    /**
     * Clicks the primary action button of the action column
     * @returns {Promise<void>}
     */
    clickPrimaryActionButton: async () =>
      await getPrimaryActionButtonDriver().click(),

    /**
     * Checks whether the primary action button is disabled
     * @returns {Promise<boolean>}
     */
    getIsPrimaryActionButtonDisabled: async () =>
      await getPrimaryActionButtonDriver().isButtonDisabled(),

    /**
     * Checks whether the primary action button has an prefix icon
     * @returns {Promise<boolean>}
     */
    primaryActionButtonPrefixIconExists: async () =>
    await getPrimaryActionButtonDriver().isPrefixIconExists(),

    /**
     * Checks whether the primary action button has an suffix icon
     * @returns {Promise<boolean>}
     */
    primaryActionButtonSuffixIconExists: async () =>
    await getPrimaryActionButtonDriver().isSuffixIconExists(),

    /**
     * Get the number of the visible secondary actions
     * @returns {Promise<number>} number of visible secondary actions
     */
    getVisibleActionsCount: () => countByHook(base, dataHooks.visibleAction),

    /**
     * Get the number of hidden secondary actions (in the <PopoverMenu/>, requires it to be open)
     * @returns {Promise<number>} number of hidden secondary actions
     */
    getHiddenActionsCount: () =>
      getHiddenActionsPopoverMenuDriver().childrenCount(),

    /**
     * Gets a specific visible secondary action <Tooltip/> driver
     * @param {actionIndex} actionIndex
     * @returns {Promise<tooltipDriverFactory>}
     */
    getVisibleActionTooltipDriver,

    /**
     * Get the driver of a specific visible secondary action <Tooltip/> by its specified dataHook
     * @param {dataHook} tooltip dataHook
     * @returns {Promise<tooltipDriverFactory>}
     */
    getVisibleActionByDataHookTooltipDriver,

    /**
     * Get the driver of a specific visible secondary action <Button/>
     * @param {actionIndex} actionIndex
     * @returns {Promise<buttonDriverFactory>}
     */
    getVisibleActionButtonDriver,

    /**
     * Gets a specific visible secondary action <Button/> driver by its specified dataHook
     * @param {dataHook} button dataHook
     * @returns {Promise<buttonDriverFactory>} visible action button driver
     */
    getVisibleActionByDataHookButtonDriver,

    /**
     * Gets the hidden secondary action <PopoverMenu/> driver
     * @returns {Promise<PopoverMenuUniDriver>}
     */
    getHiddenActionsPopoverMenuDriver,

    /**
     * Clicks on a visible secondary action
     * @param {actionIndex} actionIndex
     * @returns {Promise<void>}
     */
    clickVisibleAction: actionIndex =>
      getVisibleActionButtonDriver(actionIndex).click(),

    /**
     * Clicks on a visible secondary action by its specified dataHook
     * @param {actionDataHook} actionDataHook
     * @returns {Promise<void>}
     */
    clickVisibleActionByDataHook: actionDataHook =>
      getVisibleActionByDataHookButtonDriver(actionDataHook).click(),

    /**
     * Clicks on the hidden secondary actions <PopoverMenu/>
     * @returns {Promise<void>}
     */
    clickPopoverMenu: () =>
      getHiddenActionsPopoverMenuDriver()
        .getTriggerElement(dataHooks.triggerElement)
        .click(),

    /**
     * Clicks on a hidden secondary action (requires the <PopoverMenu/> to be open)
     * @param {actionIndex} actionIndex
     * @returns {Promise<void>}
     */
    clickHiddenAction: actionIndex =>
      getHiddenActionsPopoverMenuDriver().clickAtChild(actionIndex),

    /**
     * Clicks hidden action by data hook
     * @param {actionDataHook} actionDataHook
     * @returns {Promise<void>}
     */
    clickHiddenActionByDataHook: actionDataHook =>
      getHiddenActionsPopoverMenuDriver().clickAtChildByDataHook(
        actionDataHook,
      ),
  };
};
