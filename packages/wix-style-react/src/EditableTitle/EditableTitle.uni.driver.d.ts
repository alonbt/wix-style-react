import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { InputUniDriver } from '../Input/Input.uni.driver';

export interface EditableTitleUniDriver extends BaseUniDriver {
  getInput: () => InputUniDriver;
  getHeadingText: (idx: number) => Promise<string>;
  clickHeading: (idx: number) => Promise<void>;
}
