import { baseUniDriverFactory } from '../../test/utils/unidriver';

import { mediaOverlayDriverFactory } from '../MediaOverlay/MediaOverlay.uni.driver';
import { DataHook } from './constants';

const byHook = (base, dataHook) => base.$(`[data-hook="${dataHook}"]`);
const getTitle = base => byHook(base, DataHook.Title);
const getBadge = base => byHook(base, DataHook.Badge);
const getSettingsMenu = base => byHook(base, DataHook.SettingsMenu);
const getSubtitle = base => byHook(base, DataHook.Subtitle);
const getContainer = base => byHook(base, DataHook.Container);
const getOverlayDriver = base => {
  const hoverComponent = byHook(base, DataHook.HoverComponent);
  return mediaOverlayDriverFactory(hoverComponent);
};
const hover = async base => getContainer(base).hover();
const getPrimaryAction = async base => {
  await hover(base);
  return byHook(base, DataHook.PrimaryAction);
};
const getSecondaryAction = async base => {
  await hover(base);
  return byHook(base, DataHook.SecondaryAction);
};

const cardGalleryItemDriverFactory = base => ({
  ...baseUniDriverFactory(base),
  /**
   * Gets the cards title.
   * @returns {Promise<string | null>}
   */
  getTitle: async () => {
    const title = getTitle(base);
    return (await title.exists()) ? title.text() : null;
  },
  /**
   * Gets the badge node element.
   * @returns {Promise<any>}
   */
  getBadge: async () => {
    const badge = getBadge(base);
    return (await badge.exists()) ? badge._prop('firstChild') : null;
  },
  /**
   * Gets the cards subtitle.
   * @returns {Promise<string | null>}
   */
  getSubtitle: async () => {
    const subtitle = getSubtitle(base);
    return (await subtitle.exists()) ? subtitle.text() : null;
  },
  /**
   * Gets the background image URL.
   * @returns {Promise<string | null>}
   */
  getBackgroundImageUrl: async () => await getOverlayDriver(base).getMediaUrl(),
  /**
   * Clicks on the primary action.
   * @returns {Promise<void>}
   */
  click: async () => (await getPrimaryAction(base)).click(),
  /**
   * Gets the primary action label.
   * @returns {Promise<string>}
   */
  getPrimaryActionLabel: async () => (await getPrimaryAction(base)).text(),
  /**
   * Checks whether the primary action is clickable.
   * @returns {Promise<boolean>}
   */
  isPrimaryActionDisabled: async () =>
    (await getPrimaryAction(base))._prop('disabled'),
  /**
   * Clicks on the primary action button.
   * @returns {Promise<void>}
   */
  clickOnPrimaryAction: async () => (await getPrimaryAction(base)).click(),
  /**
   * Gets the secondary action label.
   * @returns {Promise<string>}
   */
  getSecondaryActionLabel: async () => (await getSecondaryAction(base)).text(),
  /**
   * Clicks on the secondary action.
   * @returns {Promise<void>}
   */
  clickOnSecondaryAction: async () => (await getSecondaryAction(base)).click(),
  /**
   * Gets the the settingsMenu node.
   * @returns {Promise<node>}
   */
  getSettingsMenu: async () => {
    await hover(base);
    const settingsMenu = getSettingsMenu(base);
    return (await settingsMenu.exists())
      ? settingsMenu._prop('firstChild')
      : null;
  },
  /**
   * Gets the background image element.
   * @returns {Promise<any>}
   */
  getBackgroundImageNode: async () => getOverlayDriver(base).getMediaNode(),
  /**
   * Hovers the component.
   * @returns {Promise<void>}
   */
  hover: async () => hover(base),
});

export default cardGalleryItemDriverFactory;
