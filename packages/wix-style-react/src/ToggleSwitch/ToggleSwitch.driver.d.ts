import { toggleSwitchDriverFactory } from 'wix-ui-core/drivers/vanilla';

export interface ToggleSwitchDriver
  extends ReturnType<typeof toggleSwitchDriverFactory> {
  getSize: () => string;
  getSkin: () => string;
}
