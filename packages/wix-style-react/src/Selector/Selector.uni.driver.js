import { textUniDriverFactory } from '../Text/Text.uni.driver';
import {
  baseUniDriverFactory,
  getDataAttributeValue,
} from '../../test/utils/unidriver';
import { dataAttr, sizes, shapes } from './constants';

export const selectorUniDriverFactory = base => {
  const toggleInput = () => base.$('[data-hook="toggle"] input');
  const image = () => base.$('[data-hook="selector-image"]');
  const titleTextDriver = () =>
    textUniDriverFactory(base.$('[data-hook="selector-title"]'));
  const subtitleTextDriver = () =>
    textUniDriverFactory(base.$('[data-hook="selector-subtitle"]'));
  const extraNode = () => base.$('[data-hook="selector-extra-node"]');

  return {
    ...baseUniDriverFactory(base),

    isImageTiny: async () =>
      (await getDataAttributeValue(base, dataAttr.SIZE)) === sizes.TINY,
    isImageSmall: async () =>
      (await getDataAttributeValue(base, dataAttr.SIZE)) === sizes.SMALL,
    isImagePortrait: async () =>
      (await getDataAttributeValue(base, dataAttr.SIZE)) === sizes.PORTRAIT,
    isImageLarge: async () =>
      (await getDataAttributeValue(base, dataAttr.SIZE)) === sizes.LARGE,
    isImageCinema: async () =>
      (await getDataAttributeValue(base, dataAttr.SIZE)) === sizes.CINEMA,
    isImageCircle: async () =>
      (await getDataAttributeValue(base, dataAttr.SHAPE)) === shapes.CIRCLE,
    isImageRectangular: async () =>
      (await getDataAttributeValue(base, dataAttr.SHAPE)) ===
      shapes.RECTANGULAR,
    isDisabled: () => toggleInput()._prop('disabled'),
    toggleType: () => toggleInput()._prop('type'),
    isChecked: async () =>
      (await toggleInput().exists()) && toggleInput()._prop('checked'),
    hasImage: () => image().exists(),
    getImage: async () => image()._prop('firstChild'),
    titleTextDriver,
    subtitleTextDriver,
    hasExtraNode: () => extraNode().exists(),
    getExtraNode: () => extraNode()._prop('firstChild'),
    toggle: () => base.click(),
  };
};
