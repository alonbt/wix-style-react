import React from 'react';
import { snap, story, visualize } from 'storybook-snapper';
import PageSection from '../PageSection';
import { RTLWrapper } from '../../../stories/utils/RTLWrapper';
import { Button } from 'wix-style-react';

const PageSectionContainer = ({ rtl = false, children, maxWidth = false }) => (
  <div style={{ width: maxWidth ? '100%' : '700px' }}>
    <RTLWrapper rtl={rtl}>{children}</RTLWrapper>
  </div>
);

const commonProps = {
  title: 'title',
};

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'title',
        props: { title: 'page section title' },
      },
      {
        it: 'subtitle',
        props: { subtitle: 'subtitle' },
      },
      {
        it: 'actionsBar',
        props: { actionsBar: <Button>Action</Button> },
      },
      {
        it: 'showDivider',
        props: { showDivider: true },
      },
      {
        it: 'ellipsis',
        props: {
          title:
            'PageSection title - very very long very very long very very long very very long very very long',
          subtitle:
            'PageSection subtitle - very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long',
        },
      },
      {
        it: 'all props',
        props: {
          actionsBar: <Button>Action</Button>,
          showDivider: true,
          title:
            'PageSection title - very very long very very long very very long very very long very very long',
          subtitle:
            'PageSection subtitle - very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long very very long',
        },
      },
    ],
  },
];

export const runTests = () => {
  visualize(PageSection.displayName, () => {
    tests.forEach(({ describe, its }) => {
      story(describe, () => {
        its.map(({ it, props }) =>
          snap(it, () => (
            <div>
              <PageSectionContainer>
                <PageSection {...commonProps} {...props} />
              </PageSectionContainer>
              <PageSectionContainer rtl>
                <PageSection {...commonProps} {...props} />
              </PageSectionContainer>
            </div>
          )),
        );
      });
    });
  });
};
