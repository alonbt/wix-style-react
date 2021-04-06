import * as React from 'react';

export type SocialButtonIcons =
  | 'facebook'
  | 'instagram'
  | 'twitter'
  | 'pinterest'
  | 'youtube'
  | 'linkedin';

export interface SocialButtonProps {
  text?: React.ReactNode;
  icon?: SocialButtonIcons;
  dataHook?: string;
  disabled?: boolean;
  onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
}

declare const SocialButton: React.SFC<SocialButtonProps>;

export default SocialButton;
