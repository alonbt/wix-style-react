import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { StatusIndicatorState } from './index';

export interface StatusIndicatorUniDriver extends BaseUniDriver {
  getStatus(): Promise<StatusIndicatorState>;
  hasMessage(): Promise<boolean>;
  getMessage(): Promise<string>;
}
