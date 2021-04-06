import * as React from 'react';

export interface HighlighterProps {
  dataHook?: string;
  match?: string;
}

export default class Highlighter extends React.PureComponent<HighlighterProps> {}
