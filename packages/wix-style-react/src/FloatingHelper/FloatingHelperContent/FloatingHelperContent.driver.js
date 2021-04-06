import { dataHooks } from './constants';

export const floatingHelperContentDriverFactory = ({
  element,
  eventTrigger,
}) => {
  const getElementByDataHook = dataHook =>
    element.querySelector(`[data-hook='${dataHook}']`);

  const title = () => getElementByDataHook(dataHooks.title);
  const body = () => getElementByDataHook(dataHooks.body);
  const image = () => getElementByDataHook(dataHooks.image);
  const actionButton = () => getElementByDataHook(dataHooks.actionButton);
  const footer = () => getElementByDataHook(dataHooks.footer);

  return {
    /** checks if the element exists */
    exists: () => !!element,

    /** checks if title exists */
    hasTitle: () => !!title(),

    /** checks if text content exists */
    hasBody: () => !!body(),

    /** checks if the action button exists */
    hasActionButton: () => !!actionButton(),

    /** checks if the footer exists */
    hasFooter: () => !!footer(),

    /** checks if an image exists */
    hasImage: () => !!image(),

    /** Get image HTML element*/
    getImage: () => image() && image().childNodes[0] /* as HTMLElement*/,

    /** Get footer HTML element*/
    getFooter: () => footer() && footer().childNodes[0] /* as HTMLElement*/,

    /** Get the text content of the title */
    getTitleContent: () => title().textContent,

    /** Get the text content of the helper's text */
    getBodyContent: () => body().textContent,

    /** Get text of action button */
    getActionButtonText: () => actionButton().textContent,

    /** naive way to check for stylable class */
    matchesActionButtonClassName: className =>
      !!Array.from(actionButton().classList).find(c => c.includes(className)),

    /** click on the action button */
    clickActionButton: () => eventTrigger.click(actionButton()),
  };
};
