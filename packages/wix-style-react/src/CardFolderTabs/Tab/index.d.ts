import * as React from 'react';

export interface CardFolderTabProps {
  id: string;
  children: React.ReactNode;
  name: React.ReactNode;
  disabled?: boolean;
}

export default class CardFolderTab extends React.PureComponent<CardFolderTabProps> {}
