import ReactTestUtils from 'react-dom/test-utils';
import { DataHooks } from './constants';

export const colorPickerDriverFactory = ({ element }) => {
  return {
    exists: () => !!element,
    confirm: () =>
      ReactTestUtils.Simulate.click(
        element.querySelector(`[data-hook="${DataHooks.confirmButton}"]`),
      ),
    cancel: () =>
      ReactTestUtils.Simulate.click(
        element.querySelector(`[data-hook="${DataHooks.cancelButton}"]`),
      ),
    clickOnPreviousColor: () =>
      ReactTestUtils.Simulate.click(
        element.querySelector(`[data-hook="${DataHooks.historyPrevious}"]`),
      ),
    historyPanelExists: () =>
      !!element.querySelector(`[data-hook="${DataHooks.history}"]`),
    historyCurrentColor: () =>
      element.querySelector(`[data-hook="${DataHooks.historyCurrent}"]`).style
        .background,
    historyPreviousColor: () =>
      element.querySelector(`[data-hook="${DataHooks.historyPrevious}"]`).style
        .background,
  };
};
