import * as React from 'react';

export interface AccordionSectionItemCommonProps {
  title: string;
}

export interface AccordionSectionItemProps {
  size?: 'small' | 'large';
}

export default class AccordionSectionItem extends React.Component<
  AccordionSectionItemProps & AccordionSectionItemCommonProps
> {}
