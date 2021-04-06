import ReactTestUtils from 'react-dom/test-utils';

const modalDriverFactory = ({ element }) => {
  const getPortal = () => {
    const dataHook = element && element.getAttribute('data-hook');
    return dataHook
      ? document.body.querySelector(`.portal.portal-${dataHook}`)
      : document.body.querySelector('.portal');
  };
  const getOverlay = () => document.body.querySelector('.ReactModal__Overlay');
  const getContent = () => document.body.querySelector('.ReactModal__Content');
  const isOpen = () => !!getContent();
  const getCloseButton = () =>
    document.body.querySelector('[data-hook="modal-close-button"]');
  return {
    /** true if the modal is on the DOM */
    exists: () => !!getPortal(),
    element: () => element,
    /** true when the module is open */
    isOpen,
    getChildBySelector: selector => getPortal().querySelector(selector),
    /** true if the modal is scrollable */
    isScrollable: () => !!getPortal().querySelector('[data-scrollable]'),
    closeButtonExists: () => !!getCloseButton(),
    /** click on the modal overlay (helpful for testing if the modal is dismissed) */
    clickOnOverlay: () => {
      const overlay = getOverlay();
      ReactTestUtils.Simulate.click(overlay);
    },
    clickOnCloseButton: () => {
      const button = getCloseButton();
      ReactTestUtils.Simulate.click(button);
    },
    /** returns the element of the modal content (helpful to initialize a layout testkit) */
    getContent,
    /** returns the style of the modal content */
    getContentStyle: () => getContent().style,
    /** returns the modal aria-label value as given in contentLabel property */
    getContentLabel: () => getContent().getAttribute('aria-label'),
    getZIndex: () => getOverlay().style['z-index'],
  };
};

export default modalDriverFactory;
