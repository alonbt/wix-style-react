import ReactTestUtils from 'react-dom/test-utils';
import { testkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { isClassExists } from '../../test/utils';
import textDriverFactory from '../Text/Text.driver';

const textTestkitFactory = testkitFactoryCreator(textDriverFactory);

const selectorDriverFactory = ({ element }) => {
  const toggleInput = () => element.querySelector('[data-hook="toggle"] input');
  const image = () => element.querySelector('[data-hook="selector-image"]');
  const titleTextDriver = () =>
    textTestkitFactory({ wrapper: element, dataHook: 'selector-title' });
  const subtitleTextDriver = () =>
    textTestkitFactory({ wrapper: element, dataHook: 'selector-subtitle' });
  const extraNode = () =>
    element.querySelector('[data-hook="selector-extra-node"]');

  return {
    exists: () => !!element,
    isImageTiny: () => isClassExists(image(), 'tiny'),
    isImageSmall: () => isClassExists(image(), 'small'),
    isImagePortrait: () => isClassExists(image(), 'portrait'),
    isImageLarge: () => isClassExists(image(), 'large'),
    isImageCinema: () => isClassExists(image(), 'cinema'),
    isImageCircle: () => isClassExists(image(), 'circle'),
    isImageRectangular: () => isClassExists(image(), 'rectangular'),
    isDisabled: () => toggleInput().disabled,
    toggleType: () => toggleInput().type,
    isChecked: () => !!toggleInput().checked,
    hasImage: () => !!image(),
    getImage: () => image().childNodes[0],
    titleTextDriver,
    subtitleTextDriver,
    hasExtraNode: () => !!extraNode(),
    getExtraNode: () => extraNode().childNodes[0],
    toggle: () => ReactTestUtils.Simulate.click(element),
  };
};

export default selectorDriverFactory;
