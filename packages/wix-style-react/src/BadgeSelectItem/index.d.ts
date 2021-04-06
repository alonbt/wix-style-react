import * as React from 'react';
import { BadgeSkin } from '../Badge';

export type BadgeSelectItemSizes = 'small' | 'medium';

export type BadgeSelectItemBuilderFn = (data: {
  id: string | number;
  dataHook?: string;
  className?: string;
  text: React.ReactNode;
  subtitle?: string;
  skin: BadgeSelectItemSkin;
  ellipsis?: boolean;
  disabled?: boolean;
  suffix?: React.ReactNode;
  size?: BadgeSelectItemSizes;
}) => {
  disabled: boolean;
  overrideOptionStyle: true;
  id: string | number;
  value: (props?: Partial<BadgeSelectItem>) => React.ReactNode;
};

export type BadgeSelectItemSkin =
  | 'general'
  | 'secondaryText'
  | 'danger'
  | 'standard'
  | 'backgroundSecondary'
  | 'primaryLightText'
  | 'success'
  | 'warning'
  | 'urgent'
  | 'neutral'
  | 'neutralStandard'
  | 'mainMutedHover'
  | 'neutralSuccess'
  | 'successMutedHover'
  | 'neutralDanger'
  | 'dangerMutedHover'
  | 'neutralLight'
  | 'warningLight'
  | 'premium';

export const badgeSelectItemBuilder: BadgeSelectItemBuilderFn;

export interface BadgeSelectOption {
  id: string;
  className?: string;
  dataHook?: string;
  skin: BadgeSkin;
  selected?: boolean;
  disabled?: boolean;
  highlighted?: boolean;
  text: React.ReactNode;
  subtitle?: string;
  ellipsis?: boolean;
  suffix?: React.ReactNode;
  size?: BadgeSelectItemSizes;
}

type BadgeSelectItem = BadgeSelectOption;

export default BadgeSelectItem;
