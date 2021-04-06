import * as React from 'react';
import { TextArea } from '../TextArea';

export const TextAreaPerf = () => {
  return <TextArea value={'Text'} ariaLabel={'Test'} onChange={() => {}} />;
};
