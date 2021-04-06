import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface CounterBadgeUniDriver extends BaseUniDriver {
  getContent(): Promise<HTMLElement>;
}
