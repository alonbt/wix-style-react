import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { tooltipDriverFactory } from 'wix-ui-core/dist/src/components/tooltip/Tooltip.driver';
import { PopoverMenuUniDriver } from '../PopoverMenu/PopoverMenu.uni.driver';
import { buttonDriverFactory } from '../Button/Button.uni.driver';

export interface TableActionCellUniDriver extends BaseUniDriver {
  getPrimaryActionButtonDriver: () => Promise<
    ReturnType<typeof buttonDriverFactory>
  >;
  clickPrimaryActionButton: () => Promise<void>;
  getIsPrimaryActionButtonDisabled: () => Promise<boolean>;
  primaryActionButtonPrefixIconExists: () => Promise<boolean>;
  primaryActionButtonSuffixIconExists: () => Promise<boolean>;
  getVisibleActionsCount: () => Promise<number>;
  getHiddenActionsCount: () => Promise<number>;
  getVisibleActionTooltipDriver: (
    action: number,
  ) => Promise<ReturnType<typeof tooltipDriverFactory>>;
  getVisibleActionByDataHookTooltipDriver: (
    dataHook: string,
  ) => Promise<ReturnType<typeof tooltipDriverFactory>>;
  getHiddenActionsPopoverMenuDriver: () => Promise<PopoverMenuUniDriver>;
  clickVisibleAction: (actionIndex: number) => Promise<void>;
  clickVisibleActionByDataHook: (actionDataHook: string) => Promise<void>;
  clickPopoverMenu: () => Promise<void>;
  clickHiddenAction: (actionIndex: number) => Promise<void>;
  clickHiddenActionByDataHook: (actionDataHook: string) => Promise<void>;
}
