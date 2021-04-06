import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface LabelledElementUniDriver extends BaseUniDriver {
  getLabelText(): Promise<string>;
  getLabelForAttribute(): Promise<string>;
  isLabelAtTop(): Promise<boolean>;
  getChildrenDriver(): BaseUniDriver;
}
