import * as React from 'react';

export interface AccordionItemProps {
  skin?: 'light' | 'standard';
  hideShadow?: boolean;
}

export type AccordionItemButtonType = 'textButton' | 'button' | 'node';
export type AccordionItemShowLabel = 'hover' | 'always';

export interface AccordionItemCommonProps {
  title?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  expandLabel?: React.ReactNode;
  collapseLabel?: React.ReactNode;
  buttonType?: AccordionItemButtonType;
  showLabel?: AccordionItemShowLabel;
  className?: string;
  open?: boolean;
  initiallyOpen?: boolean;
  disabled?: boolean;
  onToggle?: React.MouseEventHandler<HTMLElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
}

export interface AccordionItemProps {
  skin?: 'light' | 'standard';
  hideShadow?: boolean;
  size?: 'small' | 'large';
}

export default class AccordionItem extends React.Component<
  AccordionItemProps & AccordionItemCommonProps
> {}
