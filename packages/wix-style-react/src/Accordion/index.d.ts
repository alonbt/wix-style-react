import * as React from 'react';
import { AccordionItemCommonProps, AccordionItemProps } from './AccordionItem';
import {
  AccordionSectionItemCommonProps,
  AccordionSectionItemProps,
} from './AccordionSectionItem';

export type AccordionRenderOptionFn = (
  options: AccordionItemProps | AccordionSectionItemProps,
) => React.ReactNode;

export interface AccordionProps {
  dataHook?: string;
  multiple?: boolean;
  items?: (AccordionItemCommonProps | AccordionRenderOptionFn)[];
  skin?: AccordionItemProps['skin'];
  hideShadow?: AccordionItemProps['hideShadow'];
  size?: AccordionItemProps['size'];
}

export default class Accordion extends React.Component<AccordionProps> {}

export const accordionItemBuilder: (
  props: AccordionItemCommonProps,
) => (internalProps?: AccordionItemProps) => { render(): React.ReactNode };

export const accordionSectionItemBuilder: (
  props: AccordionSectionItemCommonProps,
) => (
  internalProps?: AccordionSectionItemProps,
) => { render(): React.ReactNode };
