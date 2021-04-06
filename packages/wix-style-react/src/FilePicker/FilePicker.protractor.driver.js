const filePickerDriverFactory = component => ({
  click: () => component.click(),
  uploadFile: async file => {
    // since the element is not displayed, protractor cant query it before its visible
    await browser.executeScript(
      `document.querySelector(['[data-hook="file-upload-input"]']).style.display = 'block'`,
    );
    await browser.$('[data-hook="file-upload-input"]').sendKeys(file);
    await browser.executeScript(
      `document.querySelector(['[data-hook="file-upload-input"]']).style.display = 'none'`,
    );
  },
  getSubLabel: () => component.$(`[data-hook="sub-label"]`).getText(),
  getMainLabel: () => component.$(`[data-hook="main-label"]`).getText(),
  hasError: () => !!component.$(`[data-hook="filePicker-error"]`),
  errorMessage: () => component.$(`[data-hook="filePicker-error"]`).getText(),
  element: () => component,
});

export default filePickerDriverFactory;
