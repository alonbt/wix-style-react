import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface BreadcrumbsUniDriver extends BaseUniDriver {
  breadcrumbsLength: () => Promise<number>;
  breadcrumbContentAt: (position: number) => Promise<string | null>;
  clickBreadcrumbAt: (position: number) => Promise<any>;
  getActiveItemId: () => Promise<number | null>;
  isLarge: () => Promise<boolean>;
  isMedium: () => Promise<boolean>;
  isOnWhiteBackground: () => Promise<boolean>;
  isOnGrayBackground: () => Promise<boolean>;
  isOnDarkBackground: () => Promise<boolean>;
  getLabelClassList: (position: number) => Promise<string>;
  isActiveLinkAt: (index: number) => Promise<boolean>;
}
