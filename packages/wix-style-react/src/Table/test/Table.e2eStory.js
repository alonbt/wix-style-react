/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { ActionCellExample } from './testExamples';
import Table from '..';
import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { storySettings } from '../docs/storySettings';

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(storySettings.testStoryNames.actionCell, () => (
  <ActionCellExample />
));

const data = [
  { firstName: 'Meghan', lastName: 'Bishop' },
  { firstName: 'Sara', lastName: 'Porter' },
  { firstName: 'Deborah', lastName: 'Rhodes' },
  { firstName: 'Walter', lastName: 'Jenning' },
];

const columnsOption1 = [
  { title: 'First', width: '30%', render: row => row.firstName },
  { title: 'Last', width: '30%', render: row => row.lastName },
];

const defaultProps = {
  dataHook: storySettings.dataHook,
  id: 'id',
  data,
  columns: columnsOption1,
  showSelection: true,
};

storiesOf(kind, module).add(storySettings.testStoryNames.table, () => (
  <Table {...defaultProps} />
));
