import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface ModalDriver<T> extends BaseDriver {
  element: () => T;
  isOpen: () => boolean;
  getChildBySelector: (selector: string) => HTMLElement | null;
  isScrollable: () => boolean;
  closeButtonExists: () => boolean;
  clickOnOverlay: () => boolean;
  clickOnCloseButton: () => boolean;
  getContent: () => Element;
  getContentStyle: () => CSSStyleDeclaration;
  getContentLabel: () => string | null;
  getZIndex: () => string | null;
}
