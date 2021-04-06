import * as React from 'react';

interface IllustrationProps {
  className?: string;
  dataHook?: string;
  illustration?: string | React.ReactNode;
}

export const Illustration: React.FunctionComponent<IllustrationProps>;
