import * as React from 'react';

export interface GooglePreviewProps {
  dataHook?: string;
  description?: string;
  descriptionMaxLines?: number;
  previewUrl?: string;
  skin?: 'light' | 'transparent';
  title?: string;
  titleMaxLines?: number;
}

export default class GooglePreview extends React.PureComponent<GooglePreviewProps> {}
