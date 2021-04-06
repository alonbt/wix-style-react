import * as React from 'react';

export interface EditableTitleProps {
  dataHook?: string;
  initialValue?: string;
  defaultValue?: string;
  onSubmit?: (value: string) => void;
  maxLength?: number;
  autoFocus?: boolean;
}

export default class EditableTitle extends React.Component<EditableTitleProps> {}
