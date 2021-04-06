import { Simulate } from 'react-dom/test-utils';
import { reactUniDriver } from 'wix-ui-test-utils/vanilla';
/**
 *Temporary workaround for implementing missing Unidriver methods in React/DOM only.
 *
 * @param {UniDriver} base
 */
export function ReactBase(base) {
  const htmlElement = () => {
    if (base.type !== 'react') {
      throw new Error('Supported only in React/DOM.');
    }
    return base.getNative();
  };

  const pendingUnidriverFeatures = {
    isFocus: async () => {
      return document.activeElement === (await htmlElement());
    },
    paste: async () => Simulate.paste(await htmlElement()),
    select: async selectedIndex => {
      const element = await htmlElement();
      if (!element.disabled) {
        Simulate.change(element, {
          target: { selectedIndex, value: '' },
        });
      }
    },
  };

  const unidriverRejected = {
    // Event Simulation
    focus: async () => {
      const elm = await htmlElement();
      elm.focus();
      Simulate.focus(elm); // TODO: Is this redundant?
    },
    blur: async () => {
      const elm = await htmlElement();
      elm.blur();
      Simulate.blur(elm); // TODO: Is this redundant?
    },
  };

  // Instead of using this methods you should use proper data hooks
  // and data attributes the query the required elements
  const deprecated = {
    _DEPRECATED_getClassList: async () => (await htmlElement()).classList,
    /** @returns {array} array of children unidrivers */
    _DEPRECATED_children: async () => {
      const ch = (await htmlElement()).children;
      const uniChildren = [];
      for (let i = 0; i < ch.length; i++) {
        uniChildren.push(reactUniDriver(ch[i]));
      }
      return uniChildren;
    },
  };

  const shouldBePrivate = {
    wheel: async eventData => Simulate.wheel(await htmlElement(), eventData),
    keyUp: async eventData => Simulate.keyUp(await htmlElement(), eventData),
    keyDown: async eventData =>
      Simulate.keyDown(await htmlElement(), eventData),
    mouseEnter: async eventData =>
      Simulate.mouseEnter(await htmlElement(), eventData),
    mouseLeave: async eventData =>
      Simulate.mouseLeave(await htmlElement(), eventData),
    beforeInput: async eventData =>
      Simulate.beforeInput(await htmlElement(), eventData),
  };

  const _private = {
    mouseDown: async eventData =>
      Simulate.mouseDown(await htmlElement(), eventData),
    mouseOver: async eventData =>
      Simulate.mouseOver(await htmlElement(), eventData),
    mouseOut: async eventData =>
      Simulate.mouseOut(await htmlElement(), eventData),
    compositionStart: async () =>
      Simulate.compositionStart(await htmlElement()),
    compositionEnd: async () => Simulate.compositionEnd(await htmlElement()),
  };

  return {
    ...pendingUnidriverFeatures,
    ...unidriverRejected,
    ...deprecated,
    ...shouldBePrivate,
    _private, // should be used inside private drivers only
  };
}

/*
 Deprecated - still here for backward compatibility.
 No need to use it inside new drivers, because drivers should not expose clickOutside functions.
 Tests should click on the outside container regardless easily without the help of a driver.
  */
ReactBase.clickBody = () =>
  document.body.dispatchEvent(
    new Event('mouseup', { cancelable: true, bubbles: true }),
  );
// TODO: Find out why some tests need clickOutSide to be on document and some on body
ReactBase.clickDocument = () =>
  document.dispatchEvent(
    new Event('mousedown', { cancelable: true, bubbles: true }),
  );
