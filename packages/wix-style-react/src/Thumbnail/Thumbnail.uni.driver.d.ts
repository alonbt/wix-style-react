import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface ThumbnailUniDriver extends BaseUniDriver {
  getTitle: () => Promise<string>;
  getDescription: () => Promise<string>;
  getSelectedIcon: () => UniDriver;
  getBackgroundImage: () => UniDriver;
  isSelected: () => Promise<boolean>;
  isDisabled: () => Promise<boolean>;
  getImage: () => UniDriver;
  getWidth: () => Promise<string>;
  getHeight: () => Promise<string>;
}
