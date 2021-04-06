import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface HighlighterUniDriver extends BaseUniDriver {
  html(): Promise<string>;
  getElement(): Promise<any>;
}
