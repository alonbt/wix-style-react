import { baseUniDriverFactory, ReactBase } from '../../test/utils/unidriver';
import { DATA_HOOKS, DATA_ATTRIBUTES, SIZES, THEMES } from './constnats';

export const breadcrumbsUniDriverFactory = base => {
  const optionAt = async position =>
    base.$(`[data-hook="${DATA_HOOKS.ITEM_WRAPPER}-${position}"]`);

  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets number of breadcrumbs
     * @return {Promise<number>}
     */
    breadcrumbsLength: async () =>
      await base.$$(`[data-hook^="${DATA_HOOKS.ITEM_WRAPPER}-"]`).count(),

    /**
     * Gets breadcrumb content at position
     * @param {number} position Breadcrumb index
     * @return {Promise<string>}
     */
    breadcrumbContentAt: async position =>
      await (await optionAt(position)).text(),

    /**
     * Clicks on breadcrumb at position
     * @param {number} position Breadcrumb index
     * @return {Promise<void>}
     */
    clickBreadcrumbAt: async position =>
      base
        .$(`[data-hook^="${DATA_HOOKS.BREADCRUMB_CLICKABLE}-${position}"]`)
        .click(),

    /**
     * Gets the active breadcrumb position or null if no breadcrumb is active
     * @return {Promise<number | null>}
     */
    getActiveItemId: async () => {
      const activeItem = await base.$$(
        `[${DATA_ATTRIBUTES.DATA_ACTIVE}="true"]`,
      );
      return (await activeItem.count()) === 1
        ? parseInt(
            await activeItem.get(0).attr(DATA_ATTRIBUTES.DATA_POSITION_ID),
          )
        : null;
    },

    /**
     * Checks whether breadcrumbs are size large
     * @return {Promise<boolean>}
     */
    isLarge: async () =>
      (await base.attr(DATA_ATTRIBUTES.DATA_SIZE)) === SIZES.large,

    /**
     * Checks whether breadcrumbs are size medium
     * @return {Promise<boolean>}
     */
    isMedium: async () =>
      (await base.attr(DATA_ATTRIBUTES.DATA_SIZE)) === SIZES.medium,

    /**
     * Checks whether breadcrumbs are on white background
     * @return {Promise<boolean>}
     */
    isOnWhiteBackground: async () =>
      (await base.attr(DATA_ATTRIBUTES.DATA_THEME)) ===
      THEMES.onWhiteBackground,

    /**
     * Checks whether breadcrumbs are on gray background
     * @return {Promise<boolean>}
     */
    isOnGrayBackground: async () =>
      (await base.attr(DATA_ATTRIBUTES.DATA_THEME)) === THEMES.onGrayBackground,

    /**
     * Checks whether breadcrumbs are on dark background
     * @return {Promise<boolean>}
     */
    isOnDarkBackground: async () =>
      (await base.attr(DATA_ATTRIBUTES.DATA_THEME)) === THEMES.onDarkBackground,

    /**
     * Gets breadcrumb classes at index
     * @param position
     * @param {number} position Breadcrumb index
     * @return {Promise<string>}
     */
    getLabelClassList: async position => {
      const breadcrumbAt = await optionAt(position);
      const breadcrumbItem = breadcrumbAt.$(
        `[data-hook="${DATA_HOOKS.BREADCRUMBS_ITEM}"]`,
      );
      const classList = await ReactBase(
        breadcrumbItem,
      )._DEPRECATED_getClassList();
      return Array.from(classList).join(' ');
    },

    /**
     * Checks whether breadcrumb at index is active
     * @param {number} index Breadcrumb index
     * @return {Promise<boolean>}
     */
    isActiveLinkAt: async index =>
      await (await optionAt(index)).$('a').exists(),
  };
};
