import { baseUniDriverFactory } from '../../test/utils/unidriver';
import inputUniDriverFactory from '../Input/Input.uni.driver.js';
import { colorPickerUniDriverFactory } from '../ColorPicker/ColorPicker.uni.driver.js';
import DATA_HOOKS from './DataHooks';

export const colorInputDriverFactory = (base, body) => {
  const inputTestkit = inputUniDriverFactory(base, body);
  const colorPickerTestkit = colorPickerUniDriverFactory(
    base.$(`[data-hook="${DATA_HOOKS.COLOR_INPUT_COLOR_PICKER}"]`),
  );

  return {
    ...baseUniDriverFactory(base),
    /**
     * Cancels color selection
     * @returns {Promise<Void>}
     * */
    cancel: () => colorPickerTestkit.cancel(),
    /**
     * Confirms color selection
     * @returns {Promise<Void>}
     * */
    confirm: () => colorPickerTestkit.confirm(),
    /**
     * Clicks on color viewer box
     * @returns {Promise<Void>}
     */
    clickColorViewer: async () =>
      base.$(`[data-hook="${DATA_HOOKS.COLOR_INPUT_VIEWER}"]`).click(),
    /**
     * Enters text to color input
     * @returns {Promise<Void>}
     * */
    enterText: async text => {
      await inputTestkit.click();
      await inputTestkit.enterText(text);
    },
    /**
     * Gets the input value
     * @returns {Promise<string>}
     * */
    getValue: () => inputTestkit.getValue(),

    /**
     * Gets the placeholder of the input
     * @returns {Promise<string | null>}
     * */
    getPlaceholder: () => inputTestkit.getPlaceholder(),

    /**
     * Gets the input size
     * @returns {Promise<string>}
     * */
    getSize: () => inputTestkit.getSize(),

    /**
     * Checks whether the input is disabled
     * @returns {Promise<boolean>}
     * */
    isDisabled: () => inputTestkit.isDisabled(),

    /**
     * Checks whether the color picker is visible
     * @returns {Promise<boolean>}
     * */
    colorPickerVisible: () => colorPickerTestkit.exists(),
    /**
     * Clicks on input
     * @returns {Promise<Void>}
     * */
    click: () => inputTestkit.click(),
    /**
     * Checks whether the given status is displayed
     * @returns {Promise<boolean>}
     * */
    hasStatus: inputTestkit.hasStatus,
    /**
     * Gets the status message
     * @returns {Promise<(string|null)>}
     * */
    getStatusMessage: inputTestkit.getStatusMessage,
  };
};

export default colorInputDriverFactory;
