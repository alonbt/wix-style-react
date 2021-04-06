import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';

export class PageHeaderPrivateDriver {
  constructor({ element, eventTrigger }) {
    this.element = element;
    this.eventTrigger = eventTrigger;
  }

  static fromJsxElement(jsxElement) {
    const driverFactory = ({ element, eventTrigger }) =>
      new PageHeaderPrivateDriver({ element, eventTrigger });
    return createDriverFactory(driverFactory)(jsxElement);
  }

  byDataHook(dataHook) {
    return this.element.querySelector(`[data-hook="${dataHook}"]`);
  }

  existsByDataHook = dataHook => !!this.byDataHook(dataHook);

  propExists(dataHook, prop) {
    return !!this.byDataHook(dataHook).getAttribute(prop);
  }
}
