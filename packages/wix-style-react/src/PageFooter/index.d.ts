import * as React from 'react';
import Center from './Center';
import End from './End';
import Start from './Start';

export interface PageFooterProps {
  dataHook?: string;
  className?: string;
  divider?: boolean;
}

declare const PageFooter: React.FunctionComponent<PageFooterProps> & {
  Start: typeof Start;
  Center: typeof Center;
  End: typeof End;
};

export default PageFooter;
