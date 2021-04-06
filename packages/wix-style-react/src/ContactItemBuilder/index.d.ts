import * as React from 'react';

export type ContactItemBuilderFn = (data: {
  id: string | number;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  disabled?: boolean;
}) => {
  id: string | number;
  disabled: boolean | undefined;
  value: (data: Partial<{ selected: boolean }>) => React.ReactNode;
};

export const contactItemBuilder: ContactItemBuilderFn;
export default contactItemBuilder;
