import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface FloatingHelperContentDriver extends BaseDriver {
  exists(): boolean;
  hasTitle(): boolean;
  hasBody(): boolean;
  hasImage(): boolean;
  hasActionButton(): boolean;
  hasFooter(): boolean;
  getTitleContent(): string;
  getBodyContent(): string;
  getImage(): HTMLElement;
  getFooter(): HTMLElement;
  getActionButtonText(): string;
  matchesActionButtonClassName(className: string): boolean;
  clickActionButton(): void;
}
