import { popoverMenuTestkitFactory } from '../../testkit';
import { tooltipDriverFactory } from 'wix-ui-core/dist/src/components/tooltip/Tooltip.driver';
import { dataHooks } from './constants';
import buttonDriverFactory from '../Button/Button.legacy.driver';

const tableActionCellDriverFactory = ({ element, wrapper, eventTrigger }) => {
  const visibleActions = () =>
    element.querySelectorAll(`[data-hook="${dataHooks.visibleAction}"]`);

  const getPrimaryActionButtonDriver = () =>
    buttonDriverFactory({
      element: element.querySelector(
        `[data-hook="${dataHooks.primaryAction}"]`,
      ),
    });

  const getVisibleActionTooltipDriver = actionIndex =>
    tooltipDriverFactory({
      element: element.querySelectorAll(
        `[data-hook="${dataHooks.visibleActionTooltip}"]`,
      )[actionIndex],
      eventTrigger,
    });

  const getVisibleActionByDataHookTooltipDriver = dataHook =>
    tooltipDriverFactory({
      element: element.querySelector(`[data-hook="${dataHook}"]`),
      eventTrigger,
    });

  const getVisibleActionButtonDriver = actionIndex =>
    buttonDriverFactory({
      element: visibleActions()[actionIndex],
    });

  const getVisibleActionByDataHookButtonDriver = dataHook =>
    buttonDriverFactory({
      element: element.querySelector(`[data-hook="${dataHook}"]`),
    });

  const getHiddenActionsPopoverMenuDriver = () =>
    popoverMenuTestkitFactory({
      wrapper,
      dataHook: dataHooks.popoverMenu,
    });

  return {
    /** Get the element */
    element: () => element,
    /** Whether the element exists */
    exists: () => !!element,
    /** Get the driver of the primary action <Button/> from the action column */
    getPrimaryActionButtonDriver,
    /** Click the primary action button from the action column */
    clickPrimaryActionButton: () => getPrimaryActionButtonDriver().click(),
    /** Get whether the primary action button is disabled */
    getIsPrimaryActionButtonDisabled: () =>
      getPrimaryActionButtonDriver().isButtonDisabled(),
    /** Get whether the primary action button prefix icon exists */
    primaryActionButtonPrefixIconExists: () =>
      getPrimaryActionButtonDriver().isPrefixIconExists(),
    /** Get whether the primary action button suffix icon exists */
    primaryActionButtonSuffixIconExists: () =>
      getPrimaryActionButtonDriver().isSuffixIconExists(),
    /** Get the number of the visible secondary actions */
    getVisibleActionsCount: () => visibleActions().length,
    /** Get the number of hidden secondary actions (in the <PopoverMenu/>, requires it to be open) */
    getHiddenActionsCount: () =>
      getHiddenActionsPopoverMenuDriver().childrenCount(),
    /** Get the driver of a specific visible secondary action <Tooltip/> */
    getVisibleActionTooltipDriver,
    /** Get the driver of a specific visible secondary action <Tooltip/> by its specified dataHook */
    getVisibleActionByDataHookTooltipDriver,
    /** Get the driver of a specific visible secondary action <Button/> */
    getVisibleActionButtonDriver,
    /** Get the driver of a specific visible secondary action <Button/> by its specified dataHook */
    getVisibleActionByDataHookButtonDriver,
    /** Get the driver of the hidden secondary action <PopoverMenu/> */
    getHiddenActionsPopoverMenuDriver,
    /** Click an a visible secondary action */
    clickVisibleAction: actionIndex =>
      getVisibleActionButtonDriver(actionIndex).click(),
    /** Click an a visible secondary action by its specified dataHook  */
    clickVisibleActionByDataHook: actionDataHook =>
      getVisibleActionByDataHookButtonDriver(actionDataHook).click(),
    /** Click on the hidden secondary actions <PopoverMenu/> */
    clickPopoverMenu: () =>
      getHiddenActionsPopoverMenuDriver()
        .getTriggerElement(dataHooks.triggerElement)
        .click(),
    /** Click on a hidden secondary action (requires the <PopoverMenu/> to be open) */
    clickHiddenAction: actionIndex =>
      getHiddenActionsPopoverMenuDriver().clickAtChild(actionIndex),
    clickHiddenActionByDataHook: actionDataHook =>
      getHiddenActionsPopoverMenuDriver().clickAtChildByDataHook(
        actionDataHook,
      ),
  };
};

export default tableActionCellDriverFactory;
