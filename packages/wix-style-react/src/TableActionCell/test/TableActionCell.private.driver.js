import tableActionCellDriverFactory from '../TableActionCell.driver';
import { dataHooks } from '../constants';

export const tableActionCellPrivateDriverFactory = ({
  element,
  wrapper,
  eventTrigger,
}) => {
  const getPrimaryActionPlaceholder = () =>
    element.querySelector(`[data-hook="${dataHooks.placeholder}"]`);

  return {
    ...tableActionCellDriverFactory({ element, wrapper, eventTrigger }),
    /** Whether the primary action placeholder exists */
    primaryActionPlaceholderExists: () => !!getPrimaryActionPlaceholder(),
  };
};
