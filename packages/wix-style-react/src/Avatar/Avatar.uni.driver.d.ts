import { AvatarDriver as AvatarDriverCore } from 'wix-ui-core/dist/src/components/avatar/avatar.driver';

export interface AvatarUniDriver extends AvatarDriverCore {
  clickIndication: () => Promise<void>;
  clickCustomIndication: () => Promise<void>;
  indicationExists: () => Promise<boolean>;
  isLoading: () => Promise<boolean>;
  customIndicationExists: () => Promise<boolean>;
}
