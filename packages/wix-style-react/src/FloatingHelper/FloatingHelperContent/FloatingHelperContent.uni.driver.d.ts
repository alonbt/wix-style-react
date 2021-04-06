import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface FloatingHelperContentUniDriver extends BaseUniDriver {
  hasTitle(): Promise<boolean>;
  hasBody(): Promise<boolean>;
  hasActionButton(): Promise<boolean>;
  hasFooter(): Promise<boolean>;
  hasImage(): Promise<boolean>;
  getImage(): Promise<HTMLElement>;
  getFooter(): Promise<HTMLElement>;
  getTitleContent(): Promise<string>;
  getBodyContent(): Promise<string>;
  getActionButtonText(): Promise<string>;
  clickActionButton(): Promise<void>;
}
