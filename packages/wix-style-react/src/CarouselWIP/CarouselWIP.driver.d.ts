import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface CarouselWIPDriver extends BaseDriver {
  isLoading: () => boolean;
  getChildren: () => NodeListOf<HTMLElement>;
  getImages: () => string[];
  clickNext: () => Promise<void>;
  clickPrevious: () => Promise<void>;
}
