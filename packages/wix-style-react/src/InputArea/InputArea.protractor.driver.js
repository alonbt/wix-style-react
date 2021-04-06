import { mouseEnter, isFocused } from 'wix-ui-test-utils/protractor';
import { browser } from 'protractor';

const toggleSwitchDriverFactory = component => ({
  element: () => component,
  hover: () => mouseEnter(component.$('textarea')),
  click: () => component.$('textarea').click(),
  isFocused: () => isFocused(component.$('textarea')),
  isHovered: () => component.$(':hover').isPresent(),
  sendKeys: keys => component.$('textarea').sendKeys(keys),
  getOffsetHeight: () => component.$('textarea').getAttribute('offsetHeight'),
  getScrollHeight: () => component.$('textarea').getAttribute('scrollHeight'),
  getRowCount: () =>
    component
      .$('textarea')
      .getAttribute('rows')
      .then(rowCount => +rowCount),
  setLineHeight: lineHeight =>
    browser.executeScript(
      `document.querySelector('textarea').style.lineHeight = '${lineHeight}'`,
    ),
});

export default toggleSwitchDriverFactory;
