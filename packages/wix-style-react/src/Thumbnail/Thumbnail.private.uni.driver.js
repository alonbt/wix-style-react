import ReactTestUtils from 'react-dom/test-utils';
import { thumbnailDriverFactory as publicDriverFactory } from './Thumbnail.uni.driver';
import { dataHooks } from './constants';

export const thumbnailPrivateDriverFactory = base => {
  const byHook = hook => base.$(`[data-hook*="${hook}"]`);
  const publicDriver = publicDriverFactory(base);

  return {
    ...publicDriver,

    /** Does the title exist */
    titleExists: () => byHook(dataHooks.thumbnailTitle).exists(),

    /** Does bottom title exist */
    bottomTitleExists: () => byHook(dataHooks.thumbnailBottomTitle).exists(),

    /** Does the description exist */
    descriptionExists: () => byHook(dataHooks.thumbnailDescription).exists(),

    /** Does the selected icon exist */
    selectedIconExists: () => !!publicDriver.getSelectedIcon(),

    /** Does the thumbnails image exist */
    imageExists: () => byHook(dataHooks.thumbnailImage).exists(),

    /** Does custom child exist */
    customChildExists: () => byHook('custom-child').exists(),

    keyDown: async keyCode =>
      ReactTestUtils.Simulate.keyDown(await base.getNative(), { keyCode }),
  };
};
