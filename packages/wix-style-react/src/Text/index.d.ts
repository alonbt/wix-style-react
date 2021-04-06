import * as React from 'react';
import { EllipsisCommonProps } from '../common/Ellipsis';
import { OmitPolyfill, TooltipCommonProps } from '../common';

export type TextWithAsProp<T> =
  | TextAsSpanProps<T>
  | TextAsAnchorProps<T>
  | TextGenericProps<T>
  | TextAsComponentProps<T>;

type TextAsSpanProps<T> = React.HTMLAttributes<HTMLSpanElement> &
  T & {
    tagName?: 'span';
    onClick?: React.MouseEventHandler<HTMLElement>;
  };

type TextAsAnchorProps<T> = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  T & {
    tagName: 'a';
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  };

type TextGenericProps<T> = T & {
  tagName: keyof OmitPolyfill<HTMLElementTagNameMap, 'a' | 'span'>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  [additionalProps: string]: any;
};

type TextAsComponentProps<T> = T & {
  tagName: React.ComponentType<any>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  [additionalProps: string]: any;
};

export type TextPropsBase = OmitPolyfill<EllipsisCommonProps, 'size'> & {
  dataHook?: string;
  tagName?: string;
  className?: string;
  size?: TextSize;
  secondary?: boolean;
  skin?: TextSkin;
  light?: boolean;
  weight?: TextWeight;
  listStyle?: ListStyle;
  tooltipProps?: TooltipCommonProps;
};

export type TextProps = TextWithAsProp<TextPropsBase>;

export const Text: React.SFC<TextProps>;
export default Text;

export type TextSize = 'tiny' | 'small' | 'medium';

export type TextSkin =
  | 'standard'
  | 'error'
  | 'success'
  | 'premium'
  | 'disabled'
  | 'primary';

export type TextWeight = 'thin' | 'normal' | 'bold';

export type ListStyle = 'checkmark' | 'circle';
