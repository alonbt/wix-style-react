import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import { UniDriverList } from '@unidriver/core';

export interface CarouselWIPUniDriver extends BaseUniDriver {
  isLoading: () => Promise<boolean>;
  getChildren: () => UniDriverList;
  getImages: () => Promise<string | null>[];
  clickNext: () => Promise<void>;
  clickPrevious: () => Promise<void>;
}
