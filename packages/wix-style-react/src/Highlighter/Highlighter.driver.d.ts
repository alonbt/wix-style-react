import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface HighlighterDriver<T> extends BaseDriver {
  getElement: () => T;
  html: () => string;
}
