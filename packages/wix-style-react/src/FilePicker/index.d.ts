import * as React from 'react';

export interface FilePickerProps {
  dataHook?: string;
  header?: string;
  onChange?: (file: File) => void;
  mainLabel?: string;
  subLabel?: string;
  supportedFormats?: string;
  maxSize?: number;
  error?: boolean;
  errorMessage?: string;
  id?: string | number;
  name?: string;
}

export default class FilePicker extends React.PureComponent<FilePickerProps> {}
