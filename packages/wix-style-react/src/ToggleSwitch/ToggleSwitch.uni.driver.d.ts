import { ToggleSwitchUniDriver as ToggleSwitchUniDriverCore } from 'wix-ui-core/drivers/unidriver';

export interface ToggleSwitchUniDriver extends ToggleSwitchUniDriverCore {
  getSize: () => Promise<string>;
  getSkin: () => Promise<string>;
}
