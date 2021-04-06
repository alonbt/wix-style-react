import * as React from 'react';

export interface <%= ComponentName %>Props {
  dataHook?: string;
  className?: string;
  id?: string;
  buttonText?: string;
}

export default class <%= ComponentName %> extends React.PureComponent<<%= ComponentName %>Props>{}
