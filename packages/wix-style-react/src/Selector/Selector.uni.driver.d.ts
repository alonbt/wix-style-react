import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { TextUniDriver } from '../Text/Text.uni.driver';

export interface SelectorUniDriver extends BaseUniDriver {
  isImageTiny: () => Promise<boolean>;
  isImageSmall: () => Promise<boolean>;
  isImagePortrait: () => Promise<boolean>;
  isImageLarge: () => Promise<boolean>;
  isImageCinema: () => Promise<boolean>;
  isImageCircle: () => Promise<boolean>;
  isImageRectangular: () => Promise<boolean>;
  isDisabled: () => Promise<boolean>;
  toggleType: () => Promise<string>;
  isChecked: () => Promise<boolean>;
  hasImage: () => Promise<boolean>;
  getImage: () => Promise<HTMLElement>;
  titleTextDriver: () => TextUniDriver;
  subtitleTextDriver: () => TextUniDriver;
  hasExtraNode: () => Promise<boolean>;
  getExtraNode: () => Promise<HTMLElement>;
  toggle: () => Promise<void>;
}
