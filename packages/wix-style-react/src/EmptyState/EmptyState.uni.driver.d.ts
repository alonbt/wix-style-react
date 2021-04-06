import { BaseUniDriver } from 'wix-ui-test-utils/base-driver';
import { EmptyStateAlign, EmptyStateTheme } from './index';

export interface EmptyStateUniDriver extends BaseUniDriver {
  getTitleText: () => Promise<string>;
  getSubtitleText: () => Promise<string>;
  hasTheme: (themeName: EmptyStateTheme) => Promise<boolean>;
  getImageUrl: () => (name: string) => Promise<string>;
  getImageContainerClassName: () => Promise<any>;
  imageNodeExists: () => Promise<boolean>;
  childrenContentExists: () => Promise<boolean>;
  hasAlign: (align: EmptyStateAlign) => Promise<boolean>;
}
