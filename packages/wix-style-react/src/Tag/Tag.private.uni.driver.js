import { tagUniDriverFactory } from './Tag.uni.driver';
import { dataAttr, dataHooks } from './Tag.helpers';
import { textUniDriverFactory } from '../Text/Text.uni.driver';

export const tagPrivateUniDriverFactory = base => {
  const removeButton = base.$(`[data-hook="${dataHooks.removeButton}"]`);
  const text = base.$(`[data-hook="${dataHooks.text}"]`);
  const textDriver = textUniDriverFactory(text);
  const isCloseButtonLarge = async () =>
    (await removeButton.attr('data-size')) === 'medium';

  return {
    ...tagUniDriverFactory(base),
    isCloseButtonSmall: async () => !(await isCloseButtonLarge()),
    isCloseButtonLarge,
    getTextSize: () => textDriver.getSize(),
    getTextWeight: () => textDriver.getWeight(),
    isClickable: async () => (await base.attr(dataAttr.CLICKABLE)) === 'true',
    isHoverable: async () => (await base.attr(dataAttr.HOVERABLE)) === 'true',
  };
};
