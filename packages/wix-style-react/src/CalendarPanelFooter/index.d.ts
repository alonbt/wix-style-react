import * as React from 'react';
import { SelectedDaysType } from '../CalendarPanel';

export interface CalendarPanelFooterProps {
  dataHook?: string;
  primaryActionLabel: string;
  secondaryActionLabel: string;
  primaryActionDisabled: boolean;
  primaryActionOnClick: React.MouseEventHandler<HTMLButtonElement>;
  secondaryActionOnClick: React.MouseEventHandler<HTMLButtonElement>;
  selectedDays?: SelectedDaysType;
  dateToString: (selectedDays: SelectedDaysType) => string;
}

export default class CalendarPanelFooter extends React.Component<CalendarPanelFooterProps> {}

export interface CalendarPanelFooterItem {
  title?: React.ReactNode;
  icon?: React.ReactNode;
  content?: React.ReactNode;
  expandLabel?: React.ReactNode;
  collapseLabel?: React.ReactNode;
  buttonType?: CalendarPanelFooterItemButtonType;
}

export type CalendarPanelFooterItemButtonType = 'textButton' | 'button';
