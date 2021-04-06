import * as React from 'react';

export interface LabelledElementProps {
  dataHook?: string;
  label?: string;
  value?: string;
}

export default class LabelledElement extends React.Component<LabelledElementProps> {}
