import * as React from 'react';
import { HeadingProps } from '../../../../Heading';

export type headingAppearance = 'H2' | 'custom';

export interface ModalHeadingProps extends HeadingProps {
  headingAppearance?: headingAppearance;
}

declare const ModalHeading: React.FunctionComponent<ModalHeadingProps>;
export default ModalHeading;
