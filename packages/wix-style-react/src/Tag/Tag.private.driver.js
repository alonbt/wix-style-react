import { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { dataAttr, dataHooks } from './Tag.helpers';
import textDriverFactory from '../Text/Text.driver';
import tagDriverFactory from './Tag.driver';

const textTestkitFactory = testkitFactoryCreator(textDriverFactory);

const getTextDriver = element => {
  return textTestkitFactory({
    wrapper: element,
    dataHook: dataHooks.text,
  });
};

const tagPrivateDriverFactory = ({ element }) => {
  const isCloseButtonLarge = () =>
    element
      .querySelector(`[data-hook="${dataHooks.removeButton}"]`)
      .getAttribute('data-size') === 'medium';

  return {
    ...tagDriverFactory({ element }),
    isCloseButtonSmall: () => !isCloseButtonLarge(),
    isCloseButtonLarge,
    getTextSize: () => getTextDriver(element).getSize(),
    getTextWeight: () => getTextDriver(element).getWeight(),
    isClickable: () => element.getAttribute(dataAttr.CLICKABLE) === 'true',
    isHoverable: () => element.getAttribute(dataAttr.HOVERABLE) === 'true',
  };
};

export default tagPrivateDriverFactory;
