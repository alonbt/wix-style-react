import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';
import { testkit as inputUniDriverFactory } from '../Input/Input.uni.driver';
import { iconButtonDriverFactory as iconButtonUniDriver } from '../IconButton/IconButton.uni.driver';
import { tooltipDriverFactory as tooltipUniDriver } from '../Tooltip/Tooltip.uni.driver';

export const listItemEditableDriverFactory = (base, body) => {
  const inputSelector = `[data-hook="${dataHooks.input}"]`;
  const approveButtonSelector = `[data-hook="${dataHooks.approveButton}"]`;
  const cancelButtonSelector = `[data-hook="${dataHooks.cancelButton}"]`;
  const cancelButtonTooltipSelector = `[data-hook="${dataHooks.cancelButtonTooltip}"]`;
  const approveButtonTooltipSelector = `[data-hook="${dataHooks.approveButtonTooltip}"]`;

  const inputDriver = inputUniDriverFactory(base.$(inputSelector), body);
  const approveButtonDriver = iconButtonUniDriver(
    base.$(approveButtonSelector),
  );
  const cancelButtonDriver = iconButtonUniDriver(base.$(cancelButtonSelector));
  const cancelButtonTooltipDriver = tooltipUniDriver(
    base.$(cancelButtonTooltipSelector),
    body,
  );
  const approveButtonTooltipDriver = tooltipUniDriver(
    base.$(approveButtonTooltipSelector),
    body,
  );

  return {
    ...baseUniDriverFactory(base, body),

    /** A getter for the placeholder */
    getPlaceholder: () => inputDriver.getPlaceholder(),

    /** Returns true it the approve button is disabled */
    isApproveButtonDisabled: () => approveButtonDriver.isButtonDisabled(),

    /** Simulated writing text in the input */
    enterText: text => inputDriver.enterText(text),

    /** Simulates clicking the approve button */
    clickApprove: () => approveButtonDriver.click(),

    /** Simulates clicking the cancel button */
    clickCancel: () => cancelButtonDriver.click(),

    /** Returns cancel button tooltip text */
    getCancelButtonTooltipText: async () => {
      await cancelButtonTooltipDriver.mouseEnter();
      if (await cancelButtonTooltipDriver.tooltipExists()) {
        return cancelButtonTooltipDriver.getTooltipText();
      }

      return null;
    },

    /** Returns approve button tooltip text */
    getApproveButtonTooltipText: async () => {
      await approveButtonTooltipDriver.mouseEnter();
      if (await approveButtonTooltipDriver.tooltipExists()) {
        return approveButtonTooltipDriver.getTooltipText();
      }

      return null;
    },

    // Status
    /** Return true if the given status is displayed */
    hasStatus: status => inputDriver.hasStatus(status),

    /** If there's a status message, returns its text value */
    getStatusMessage: () => inputDriver.getStatusMessage(),
  };
};
