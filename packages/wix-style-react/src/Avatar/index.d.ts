import * as React from 'react';

export interface CommonAvatarProps {
  ariaLabel?: string;
  color?: 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6';
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  name?: string;
  text?: string;
  onClick?(): void;
  placeholder?: React.ReactNode;
  title?: string;
  dataHook?: string;
}


export interface AvatarProps extends CommonAvatarProps{
  shape?: 'circle' | 'square';
  size?:
    | 'size90'
    | 'size72'
    | 'size60'
    | 'size48'
    | 'size36'
    | 'size30'
    | 'size24'
    | 'size18';
  className?: string;
  presence?: 'online' | 'offline' | 'busy';
  indication?: React.ReactNode;
  customIndication?: React.ReactNode;
  showIndicationOnHover?: boolean;
  onIndicationClick?(): void;
  loading?: boolean;
}

declare const Avatar: React.SFC<AvatarProps>;
export default Avatar;
