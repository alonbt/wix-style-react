import { baseUniDriverFactory } from '../../test/utils/unidriver';

export const modalUniDriverFactory = (base, body) => {
  const getPortal = async () => {
    if (await base.exists()) {
      const dataHook = !!base.attr && (await base.attr('data-hook'));
      return dataHook
        ? body.$(`.portal.portal-${dataHook}`)
        : body.$('.portal');
    }
  };
  const getOverlay = () => body.$('.ReactModal__Overlay');
  const getContent = () => body.$('.ReactModal__Content');
  const getCloseButton = () => body.$('[data-hook="modal-close-button"]');
  const isOpen = () => getContent().exists();

  return {
    ...baseUniDriverFactory(base),

    /** true if the modal is on the DOM */
    exists: async () => !!(await getPortal()),

    /** true when the module is open */
    isOpen,
    getChildBySelector: async selector => {
      const portal = await getPortal();
      return (await portal.$(selector).exists()) ? portal.$(selector) : null;
    },
    /** true if the modal is scrollable */
    isScrollable: async () => {
      const content = await getPortal();
      return !!(await content.$('[data-scrollable]').exists());
    },
    closeButtonExists: () => getCloseButton().exists(),
    /** click on the modal overlay (helpful for testing if the modal is dismissed) */
    clickOnOverlay: () => getOverlay().click(),
    clickOnCloseButton: () => getCloseButton().click(),
    /** returns the element of the modal content (helpful to initialize a layout testkit) */
    // eslint-disable-next-line no-restricted-properties
    getContent: async () => await getContent().getNative(),
    /** returns the style of the modal content */
    getContentStyle: async () => await getContent()._prop('style'),
    /** returns the modal aria-label value as given in contentLabel property */
    getContentLabel: () => getContent().attr('aria-label'),
    getZIndex: async () => {
      const style = await getOverlay()._prop('style');

      return style['z-index'];
    },
  };
};
