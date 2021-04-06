import * as React from 'react';

export interface EditableSelectorProps {
  dataHook?: string;
  styles?: string;
  title?: string;
  toggleType?: 'checkbox' | 'radio';
  newRowLabel?: string;
  editButtonText?: string;
  onOptionAdded?: (title: string) => void;
  onOptionEdit?: (title: string, id: number) => void;
  onOptionDelete?: (id: number) => void;
  onOptionToggle?: (id: number) => void;
  options?: EditableSelectorOption[];
}

export type EditableSelectorOption = {
  title: string;
  isSelected?: boolean;
};

export default class EditableSelector extends React.Component<EditableSelectorProps> {}
