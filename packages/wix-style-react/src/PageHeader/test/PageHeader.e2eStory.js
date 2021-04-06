import React from 'react';
import * as PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';

import { storySettings } from '../docs/storySettings';
import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { RTLWrapper } from '../../../stories/utils/RTLWrapper';

import PageHeader from '..';
import { Button, Dropdown } from 'wix-style-react';

const PageHeaderContainer = ({ children }) => (
  <div style={{ width: '700px', border: '1px solid' }}>
    <RTLWrapper>{children}</RTLWrapper>
  </div>
);

PageHeaderContainer.propTypes = {
  children: PropTypes.any,
};

const kind = getTestStoryKind(storySettings);
const dataHook = 'story-page-header';

const defaultProps = {
  dataHook,
  title: 'PageHeader Title',
  subtitle: 'PageHeader Subtitle',
  actionsBar: <Button>Action</Button>,
  showBackButton: true,
  onBackClicked: () => null,
};

storiesOf(kind, module).add('1. Title with Dropdown', () => (
  <PageHeaderContainer>
    <PageHeader
      {...defaultProps}
      title={
        <Dropdown
          dataHook="title-dropdown"
          options={[
            { id: '1', value: 'option 1' },
            { id: '2', value: 'option 2' },
            { id: '3', value: 'option 3' },
          ]}
        />
      }
    />
  </PageHeaderContainer>
));

storiesOf(kind, module).add('2. Subtitle with Dropdown', () => (
  <PageHeaderContainer>
    <PageHeader
      {...defaultProps}
      subtitle={
        <Dropdown
          dataHook="subtitle-dropdown"
          options={[
            { id: '1', value: 'option 1' },
            { id: '2', value: 'option 2' },
            { id: '3', value: 'option 3' },
          ]}
        />
      }
    />
  </PageHeaderContainer>
));
