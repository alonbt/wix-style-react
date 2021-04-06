import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface StarsRatingBarUniDriver extends BaseUniDriver {
  selectRating(): Promise<void>;
  getSelectedRating(): Promise<number>;
}
