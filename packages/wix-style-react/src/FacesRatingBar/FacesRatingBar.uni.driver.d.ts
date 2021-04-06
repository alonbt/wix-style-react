import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface FacesRatingBarUniDriver extends BaseUniDriver {
  selectRating(): Promise<void>;
  getSelectedRating(): Promise<number>;
}
