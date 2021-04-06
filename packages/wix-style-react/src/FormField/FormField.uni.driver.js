import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { tooltipDriverFactory } from '../Tooltip/Tooltip.uni.driver';
import { dataHooks } from './constants';

export const formFieldUniDriverFactory = (base, body, { dataHook }) => {
  const charactersCounter = () => base.$(`[data-hook*="${dataHooks.counter}"]`);

  return {
    ...baseUniDriverFactory(base),
    /** get children */
    getChildren: async () => {
      const baseUniDriverElement = base.$(
        `[data-hook*="${dataHooks.children}"]`,
      );
      return (await baseUniDriverElement.exists())
        ? baseUniDriverElement.getNative() // eslint-disable-line no-restricted-properties
        : null;
    },
    /** get label */
    getLabel: async () => {
      const baseUniDriverElement = base.$(`[data-hook*="${dataHooks.label}"]`);
      return (await baseUniDriverElement.exists())
        ? baseUniDriverElement.getNative() // eslint-disable-line no-restricted-properties
        : null;
    },
    /** returns true whether form field is required */
    isRequired: async () =>
      base.$(`[data-hook*="${dataHooks.asterisk}"]`).exists(),
    /** returns the length left */
    getLengthLeft: async () => {
      const counter = charactersCounter();
      return (await counter.exists())
        ? parseInt(await counter._prop('innerHTML'), 10)
        : null;
    },
    /** returns whether the form field length is exceeded */
    isLengthExceeded: async () => {
      const counter = charactersCounter();
      if (await counter.exists()) {
        const length = parseInt(await counter._prop('innerHTML'), 10);
        return length < 0;
      }
      return false;
    },
    /** returns true whether form field has tooltip */
    hasTooltip: async () => {
      const testkit = tooltipDriverFactory(
        base.$(`[data-hook="${dataHook}-formfield-infoicon-tooltip"]`),
        body,
      );
      return await testkit.exists();
    },
    /** returns tooltip text of the info content */
    getInfoContent: async () => {
      const testkit = tooltipDriverFactory(
        base.$(`[data-hook="${dataHook}-formfield-infoicon-tooltip"]`),
        body,
      );
      return await testkit.getTooltipText();
    },
    /** get form field suffix */
    getSuffix: async () => {
      const suffixElement = base.$(`[data-hook="${dataHooks.suffix}"]`);

      return (await suffixElement.exists())
        ? suffixElement.getNative() // eslint-disable-line no-restricted-properties
        : null;
    },
  };
};
