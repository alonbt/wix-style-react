import React from 'react';
import { storiesOf } from '@storybook/react';
import Markdown from 'wix-storybook-utils/Markdown';

import SortableListReadme from '../../SortableList/README.md';
import SortableListReadmeAPI from '../../SortableList/API.md';
import {
  ListWithDelay,
  MultiAreaList,
  MultiAreaListPreventOfDropping,
  MultiAreaListWithInsertionRules,
  MultiAreaListWithSortableColumns,
  MultiAreaListWithSortableColumnsWithAnimations,
  NestableListExample,
  SingleAreaList,
  SingleAreaListWithAnimation,
  Styles as SortableListStyles,
} from './SortableList';

import { SingleAreaGrid, Styles as SortableGridStyles } from './SortableGrid';

import { Introduction } from './Introduction';
import Styles from './Styles';
import DragDropContextProvider from './DragDropContextProvider';

import { Category } from '../../../stories/storiesHierarchy';

import SortableGridReadme from '../../SortableGrid/README.md';
import SortableGridReadmeAPI from '../../SortableGrid/API.md';

storiesOf(`${Category.COMPONENTS}/Drag And Drop`, module)
  .add('Introduction', () => <Introduction />)
  .add('Styles', () => <Styles />)
  .add('DragDropContextProvider', () => <DragDropContextProvider />)
  .add('NestableList', () => <NestableListExample />);

storiesOf(`${Category.COMPONENTS}/Drag And Drop/SortableList`, module)
  .add('API', () => (
    <div>
      <Markdown source={SortableListReadme} />
      <Markdown source={SortableListReadmeAPI} />
    </div>
  ))
  .add('Styles', () => <SortableListStyles />)
  .add('Single Area List', () => <SingleAreaList />)
  .add('Single Area List with animations', () => (
    <SingleAreaListWithAnimation />
  ))
  .add('List With Delay', () => <ListWithDelay />)
  .add('Multi Area List', () => <MultiAreaList />)
  .add('Multi Area List Prevent Of Dropping', () => (
    <MultiAreaListPreventOfDropping />
  ))
  .add('Multi Area List with sortable columns', () => (
    <MultiAreaListWithSortableColumns />
  ))
  .add('Multi Area List with insertion rules', () => (
    <MultiAreaListWithInsertionRules />
  ))
  .add('Multi Area List with sortable columns with animations', () => (
    <MultiAreaListWithSortableColumnsWithAnimations />
  ));

storiesOf(`${Category.COMPONENTS}/Drag And Drop/SortableGrid`, module)
  .add('API', () => (
    <div>
      <Markdown source={SortableGridReadme} />
      <Markdown source={SortableGridReadmeAPI} />
    </div>
  ))
  .add('Styles', () => <SortableGridStyles />)
  .add('Single Area Grid', () => <SingleAreaGrid />);
