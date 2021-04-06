import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { UniDriverList } from '@unidriver/core';

export interface CarouselUniDriver extends BaseUniDriver {
  isLoading: () => Promise<boolean>;
  getChildren: () => UniDriverList;
  getImages: () => Promise<string | null>[];
  clickNext: () => Promise<void>;
  clickPrevious: () => Promise<void>;
}
