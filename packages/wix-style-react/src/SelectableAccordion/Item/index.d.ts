import * as React from 'react';

export interface SelectableAccordionItemCommonProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  content?: React.ReactNode;
  disabled?: boolean;
}

export interface SelectableAccordionItemProps
  extends SelectableAccordionItemCommonProps {
  type?: 'radio' | 'checkbox' | 'toggle';
  open?: boolean;
  onChange?(idx: number, open: boolean): void;
}

export default class SelectableAccordionItem extends React.Component<SelectableAccordionItemProps> {}
