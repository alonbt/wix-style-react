import * as React from 'react';

export type SocialPreviewSkin =  'social' | 'twitter';

export type SocialPreviewSize =  'large' | 'small';

export interface SocialPreviewProps {
  dataHook?: string;
  title?: string;
  description?: string;
  previewUrl?: string;
  media?: React.ReactNode;
  skin?: SocialPreviewSkin;
  size?: SocialPreviewSize;
}

export default class SocialPreview extends React.Component<SocialPreviewProps> {}
