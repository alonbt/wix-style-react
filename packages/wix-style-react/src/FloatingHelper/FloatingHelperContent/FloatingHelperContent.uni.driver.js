import {
  baseUniDriverFactory,
  findByHook,
} from '../../../test/utils/unidriver';
import { dataHooks } from './constants';

export const floatingHelperContentUniDriverFactory = (base, body) => {
  const title = findByHook(body, dataHooks.title);
  const floatingHelperBody = findByHook(body, dataHooks.body);
  const image = findByHook(body, dataHooks.image);
  const actionButton = findByHook(body, dataHooks.actionButton);
  const footer = findByHook(body, dataHooks.footer);

  return {
    ...baseUniDriverFactory(base, body),

    /** checks if title exists */
    hasTitle: () => title.exists(),

    /** checks if text content exists */
    hasBody: () => floatingHelperBody.exists(),

    /** checks if the action button exists */
    hasActionButton: () => actionButton.exists(),

    /** checks if the footer exists */
    hasFooter: () => footer.exists(),

    /** checks if an image exists */
    hasImage: () => image.exists(),

    /** Get image HTML element*/
    getImage: async () =>
      (await image.exists()) && (await image.getNative()).children[0], // eslint-disable-line no-restricted-properties

    /** Get footer HTML element*/
    getFooter: async () =>
      (await footer.exists()) && (await footer.getNative()).children[0], // eslint-disable-line no-restricted-properties

    /** Get the text content of the title */
    getTitleContent: () => title.text(),

    /** Get the text content of the helper's text */
    getBodyContent: () => floatingHelperBody.text(),

    /** Get text of action button */
    getActionButtonText: () => actionButton.text(),

    /** click on the action button */
    clickActionButton: () => actionButton.click(),
  };
};
