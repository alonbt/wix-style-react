import React from 'react';
import { storiesOf } from '@storybook/react';
import PageHeader from '..';
import { RTLWrapper } from '../../../stories/utils/RTLWrapper';
import { Button } from 'wix-style-react';

const PageHeaderContainer = ({ rtl = false, children }) => (
  <div style={{ width: '700px', border: '1px solid' }}>
    <RTLWrapper rtl={rtl}>{children}</RTLWrapper>
  </div>
);

const dataHook = 'story-page-header';
const defaultProps = {
  dataHook,
  title: 'PageHeader Title',
  subtitle: 'PageHeader Subtitle',
  actionsBar: <Button>Action</Button>,
  showBackButton: true,
  onBackClicked: () => null,
};

const tests = [
  {
    describe: 'PageHeader',
    its: [
      {
        it: 'should display standard header',
        story: () => (
          <PageHeaderContainer>
            <PageHeader {...defaultProps} />
          </PageHeaderContainer>
        ),
      },
      {
        it: 'should display title and subtitle with ellipsis',
        story: () => (
          <PageHeaderContainer>
            <PageHeader
              {...defaultProps}
              title="PageHeader title - very very long very very long very very long very very long very very long"
              subtitle="PageHeader subtitle - very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long"
            />
          </PageHeaderContainer>
        ),
      },
      {
        it: 'should display standard header RTL',
        story: () => (
          <PageHeaderContainer rtl>
            <PageHeader {...defaultProps} />
          </PageHeaderContainer>
        ),
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, story }) => {
    storiesOf(describe, module).add(it, story);
  });
});
