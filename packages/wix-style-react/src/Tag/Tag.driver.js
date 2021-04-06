import ReactTestUtils from 'react-dom/test-utils';
import { dataAttr, dataHooks } from './Tag.helpers';

const tagDriverFactory = ({ element }) => {
  const getRemoveButton = () =>
    element.querySelector(`[data-hook="${dataHooks.removeButton}"]`);
  const getThumb = () =>
    element.querySelector(`[data-hook="${dataHooks.thumb}"]`);
  const removeTag = () => {
    const removeButton = getRemoveButton();
    if (removeButton) {
      ReactTestUtils.Simulate.click(removeButton);
    }
  };

  return {
    exists: () => !!element,
    isTiny: () => element.getAttribute(dataAttr.SIZE) === 'tiny',
    isSmall: () => element.getAttribute(dataAttr.SIZE) === 'small',
    isMedium: () => element.getAttribute(dataAttr.SIZE) === 'medium',
    isLarge: () => element.getAttribute(dataAttr.SIZE) === 'large',
    isStandardTheme: () => element.getAttribute(dataAttr.THEME) === 'standard',
    isWarningTheme: () => element.getAttribute(dataAttr.THEME) === 'warning',
    isErrorTheme: () => element.getAttribute(dataAttr.THEME) === 'error',
    isDarkTheme: () => element.getAttribute(dataAttr.THEME) === 'dark',
    isRemovable: () => !!getRemoveButton(),
    removeTag,
    click: () => ReactTestUtils.Simulate.click(element),
    isThumbExists: () => !!getThumb(),
    isDisabled: () => element.getAttribute(dataAttr.DISABLED) === 'true',
    getLabel: () => element.textContent,
  };
};

export default tagDriverFactory;
