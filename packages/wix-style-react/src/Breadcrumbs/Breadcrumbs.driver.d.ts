import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface BreadcrumbsDriver extends BaseDriver {
  breadcrumbsLength: () => number;
  breadcrumbContentAt: (position: number) => string | null;
  clickBreadcrumbAt: (position: number) => any;
  getActiveItemId: () => number | null;
  isLarge: () => boolean;
  isMedium: () => boolean;
  isOnWhiteBackground: () => boolean;
  isOnGrayBackground: () => boolean;
  isOnDarkBackground: () => boolean;
  getLabelClassList: (position: number) => string;
  isActiveLinkAt: (index: number) => boolean;
}
