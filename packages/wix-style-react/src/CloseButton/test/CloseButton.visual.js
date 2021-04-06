import React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import CloseButton from '..';
import Help from 'wix-ui-icons-common/Help';

import {
  getSkinBackground,
  renderButtonBlock,
} from '../../utils/ButtonHelpers';
import { SKINS, SIZES } from '../constants';

const skins = Object.values(SKINS).reduce((output, skin) => {
  return [...output, { skin, background: getSkinBackground(skin) }];
}, []);

const tests = [
  {
    describe: 'Sizes',
    its: Object.values(SIZES).map(size => ({
      it: size,
      props: { size, children: <Help /> },
    })),
  },
];

const blockOfTests = [
  {
    it: 'Skins',
    render: () =>
      renderButtonBlock({
        Component: CloseButton,
        props: { children: <Help /> },
        skins,
      }),
  },
];

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  visualize(`${themeName ? `${themeName}|` : ''}CloseButton`, () => {
    blockOfTests.forEach(({ it, render }) => {
      snap(it, () => testWithTheme(render()));
    });

    tests.forEach(({ describe, its }) => {
      story(describe, () => {
        its.map(({ it, props }) =>
          snap(it, () => testWithTheme(<CloseButton {...props} />)),
        );
      });
    });
  });
};
