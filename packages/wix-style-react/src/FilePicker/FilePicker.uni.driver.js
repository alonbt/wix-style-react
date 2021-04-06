import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const filePickerUniDriverFactory = base => {
  const error = base.$(`[data-hook=filePicker-error]`);
  const input = base.$('[data-hook="file-upload-input"]');
  const subLabel = base.$(`[data-hook="sub-label"]`);
  const mainLabel = base.$(`[data-hook="main-label"]`);

  return {
    ...baseUniDriverFactory(base),

    /**
     * Checks whether there's a visible error icon
     * @return {Promise<boolean>}
     */
    hasError: () => error.exists(),

    /**
     * Gets error message text
     * @return {Promise<string>}
     */
    errorMessage: () => error.text(),

    /**
     * Gets sub label text
     * @return {Promise<string>}
     */
    getSubLabel: () => subLabel.text(),

    /**
     * Gets main label text
     * @return {Promise<string>}
     */
    getMainLabel: () => mainLabel.text(),

    /**
     * Gets FilePicker input name
     * @return {Promise<string>}
     */
    getName: () => input._prop('name'),
  };
};
