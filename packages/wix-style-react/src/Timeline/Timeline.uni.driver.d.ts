import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface TimelineUniDriver extends BaseUniDriver {
  getLabelText(idx: number): Promise<string>;
  getSuffixText(idx: number): Promise<string>;
}
