import { otherSymbols } from '../symbols';
import {
  otherComponentsNames as componentsNames,
  sharedComponentsNames,
  selectionComponentsNames,
} from '../components';

/**
 * Symbol => Component 11
 */
export const otherSymbolsToComponents = {
  [otherSymbols.avatar]: [componentsNames.Avatar],
  [otherSymbols.avatarGroup]: [componentsNames.AvatarGroup],

  [otherSymbols.badge]: [componentsNames.Badge, sharedComponentsNames.Icon],

  [otherSymbols.badgeSelect]: [componentsNames.BadgeSelect],

  [otherSymbols.counterBadge]: [
    componentsNames.CounterBadge,
    sharedComponentsNames.Icon,
  ],

  [otherSymbols.tag]: [sharedComponentsNames.Tag],

  [otherSymbols.loader]: [componentsNames.Loader],

  [otherSymbols.linearProgressBar]: [componentsNames.LinearProgressBar],

  [otherSymbols.circularProgressBar]: [componentsNames.CircularProgressBar],

  [otherSymbols.image]: [componentsNames.Image],

  [otherSymbols.palette]: [
    componentsNames.Palette,
    sharedComponentsNames.FormField,
    selectionComponentsNames.Thumbnail,
  ],

  [otherSymbols.skeleton]: [componentsNames.Skeleton],
};
