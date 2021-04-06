import * as React from 'react';

export interface DropzoneProps {
  dataHook?: string;
  className?: string;
  onDrop(files: File[]): void;
}

export default class Dropzone extends React.PureComponent<DropzoneProps> {
  static Overlay: React.FC;
  static Content: React.FC;
}
