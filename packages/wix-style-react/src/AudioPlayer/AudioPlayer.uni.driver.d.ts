import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface AudioPlayerUniDriver extends BaseUniDriver {
  clickOnPlayPauseButton(): Promise<void>;
  timeIndicatorText(): Promise<string>;
}
