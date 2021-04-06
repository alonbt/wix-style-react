import * as React from 'react';

type FileUploadChildrenProps = {
  openFileUploadDialog: React.MouseEventHandler<HTMLElement>;
};

export interface FileUploadProps {
  dataHook?: string;
  className?: string;
  children(params: FileUploadChildrenProps): React.ClassicElement<any>;
  multiple?: boolean;
  accept?: string;
  capture?: 'user' | 'environment';
  name?: string;
  onChange(fileList: FileList): void;
}
export default class FileUpload extends React.PureComponent<FileUploadProps> {}
