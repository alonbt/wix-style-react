import * as React from 'react';

export interface TimelineItem {
  label: React.ReactNode;
  labelAction?: React.ReactNode;
  customPrefix?: React.ReactNode;
  suffix?: React.ReactNode | string;
}

export interface TimelineProps {
  className?: string;
  dataHook?: string;
  items: TimelineItem[];
  gap?: string;
}

export default class Timeline extends React.PureComponent<TimelineProps> {}
