import * as React from 'react';

export interface TestimonialListProps {
  dataHook?: string;
  className?: string;
  cols?: number;
  testimonials?: TestimonialType[];
}

export default class TestimonialList extends React.Component<TestimonialListProps> {}

export type TestimonialType = {
  avatar: React.ReactNode;
  text: string;
  authorName: string;
};
