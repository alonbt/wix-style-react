import { baseUniDriverFactory, findByHook } from '../../test/utils/unidriver';
import { dataHooks } from './constants';
import { iconButtonDriverFactory } from '../IconButton/IconButton.uni.driver';
import { loaderUniDriverFactory } from '../Loader/Loader.uni.driver';

export const avatarUniDriverFactory = base => {
  const getIndication = () =>
    iconButtonDriverFactory(findByHook(base, dataHooks.indication));
  const getLoader = () =>
    loaderUniDriverFactory(findByHook(base, dataHooks.loader));
  const getCustomIndication = () =>
    iconButtonDriverFactory(findByHook(base, dataHooks.customIndication));

  return {
    ...baseUniDriverFactory(base),

    /**
     * Clicks on the Avatar element
     * @return {Promise<void>}
     */
    click: () => findByHook(base, dataHooks.avatarCore).click(),

    /**
     * Gets the content type
     * @returns {Promise<'text' | 'placeholder' | 'image'>}
     */
    getContentType: () => base.attr('data-content-type'),

    /**
     * Gets the text content
     * @returns {Promise<string>}
     */
    getTextContent: async () =>
      await findByHook(base, dataHooks.textContainer).text(),

    /**
     * Checks whether the image is loaded
     * @returns {Promise<boolean>}
     */
    isImageLoaded: async () => (await base.attr('data-img-loaded')) === 'true',

    /**
     * Hovers the component
     * @returns {Promise<void>}
     */
    hover: async () => await findByHook(base, dataHooks.avatarWSR).hover(),

    /**
     * Checks whether the Avatar indication exists
     * @returns {Promise<boolean>}
     */
    indicationExists: () => getIndication().exists(),

    /**
     * Clicks the Avatar indication
     * @returns {Promise<void>}
     */
    clickIndication: () => getIndication().click(),

    /**
     * Checks whether the Avatar custom indication exists
     * @returns {Promise<boolean>}
     */
    customIndicationExists: () => getCustomIndication().exists(),

    /**
     * Clicks the Avatar custom indication
     * @returns {Promise<void>}
     */
    clickCustomIndication: () => getCustomIndication().click(),

    /**
     * Checks whether the Avatar is loading
     * @returns {Promise<boolean>}
     */
    isLoading: () => getLoader().exists(),
  };
};
