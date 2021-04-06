import * as React from 'react';
import { IconElement, OmitPolyfill } from '../common';
import { EllipsisCommonProps } from '../common/Ellipsis';

export type ListItemActionWithAsProp<T> =
  | ListItemActionAsButtonProps<T>
  | ListItemActionAsAnchorProps<T>
  | ListItemActionGenericProps<T>
  | ListItemActionAsComponentProps<T>;

type ListItemActionAsButtonProps<
  T
> = React.ButtonHTMLAttributes<HTMLButtonElement> &
  T & {
    as?: 'button';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  };

type ListItemActionAsAnchorProps<
  T
> = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  T & {
    as: 'a';
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  };

type ListItemActionGenericProps<T> = T & {
  as: keyof OmitPolyfill<HTMLElementTagNameMap, 'a' | 'button'>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  [additionalProps: string]: any;
};

type ListItemActionAsComponentProps<T> = T & {
  as: React.ComponentType<any>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  [additionalProps: string]: any;
};

export type ListItemActionProps = ListItemActionWithAsProp<{
  title: string;
  dataHook?: string;
  skin?: ListItemActionSkin;
  size?: ListItemActionSize;
  prefixIcon?: IconElement;
  autoFocus?: boolean;
  ellipsis?: boolean;
  disabled?: boolean;
  tooltipModifiers?: EllipsisCommonProps;
  highlighted?: boolean;
  subtitle?: string;
}>;

export default class ListItemAction extends React.PureComponent<ListItemActionProps> {}

export type ListItemActionSkin = 'standard' | 'dark' | 'destructive';
export type ListItemActionSize = 'small' | 'medium';

export const listItemActionBuilder: <
  T extends Partial<ListItemActionProps>
>(data: {
  title: string;
  id: string | number;
  prefixIcon?: IconElement;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  skin?: ListItemActionSkin;
  size?: ListItemActionSize;
  dataHook?: string;
  as?: any;
  tabIndex?: number;
  autoFocus?: boolean;
  className?: string;
  ellipsis?: boolean;
  subtitle?: string;
}) => {
  id: string | number;
  disabled: boolean | undefined;
  overrideOptionStyle: true;
  value: (props: T) => React.ReactNode;
};
