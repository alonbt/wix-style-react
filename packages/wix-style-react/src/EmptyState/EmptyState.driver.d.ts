import { BaseDriver } from 'wix-ui-test-utils/driver-factory';
import { EmptyStateTheme, EmptyStateAlign } from './index';

export interface EmptyStateDriver extends BaseDriver {
  element: () => HTMLElement;
  getTitleText: () => string;
  getSubtitleText: () => string;
  hasTheme: (themeName: EmptyStateTheme) => boolean;
  getImageUrl: () => string;
  getImageContainerClassName: () => string;
  imageNodeExists: () => boolean;
  childrenContentExists: () => boolean;
  hasAlign: (align: EmptyStateAlign) => boolean;
}
