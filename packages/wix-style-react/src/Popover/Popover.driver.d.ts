import { popoverDriverFactory } from 'wix-ui-core/drivers/vanilla';

export interface PopoverDriver
  extends ReturnType<typeof popoverDriverFactory> {}
