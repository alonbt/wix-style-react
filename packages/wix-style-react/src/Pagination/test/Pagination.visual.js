import React from 'react';
import Pagination from '../Pagination';
import { storyOfAllPermutations } from '../../../test/utils/visual/utils';

const ShortStory = props => <Pagination {...props} />;

const shortOptions = {
  props: [
    { name: 'totalPages', values: [2] },
    { name: 'currentPage', values: [1, 2] },
  ],
  skipUndefinedValue: true,
  storyName: 'Few options',
};

storyOfAllPermutations(ShortStory, Pagination, shortOptions);

const LongStory = props => <Pagination {...props} />;

const longOptions = {
  props: [
    { name: 'totalPages', values: [15] },
    { name: 'currentPage', values: [1, 2, 7, 14, 15] },
  ],
  skipUndefinedValue: true,
  storyName: 'Many options',
};

storyOfAllPermutations(LongStory, Pagination, longOptions);
