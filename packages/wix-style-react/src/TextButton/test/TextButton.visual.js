import React from 'react';
import AddChannel from 'wix-ui-icons-common/AddChannel';
import TextButton from '../TextButton';
import Box from '../../Box';
import Text from '../../Text';

import { visualize, story, snap } from 'storybook-snapper';

import {
  getSkinBackground,
  renderButtonBlock,
} from '../../utils/ButtonHelpers';
import { SKINS, SIZES, WEIGHT } from '../constants';

const skins = Object.values(SKINS).reduce((output, skin) => {
  return [...output, { skin, background: getSkinBackground(skin) }];
}, []);

const tests = [
  {
    describe: 'Sizes',
    its: Object.values(SIZES).map(size => ({
      it: size,
      props: { size, children: size },
    })),
  },
  {
    describe: 'Weight',
    its: Object.values(WEIGHT).map(wg => ({
      it: wg,
      props: { wg, children: wg },
    })),
  },
  {
    describe: 'Affixes',
    its: Object.values(SIZES).map(size => ({
      it: size,
      props: {
        children: size,
        size,
        prefixIcon: <AddChannel />,
        suffixIcon: <AddChannel />,
      },
    })),
  },
];

const blockOfTests = [
  {
    it: 'Underline: none',
    render: () => renderButtonBlock({ Component: TextButton, skins }),
  },
  {
    it: 'Underline: onHover',
    render: () =>
      renderButtonBlock({
        Component: TextButton,
        props: { underline: 'onHover' },
        skins,
      }),
  },
  {
    it: 'Underline: always',
    render: () =>
      renderButtonBlock({
        Component: TextButton,
        props: { underline: 'always' },
        skins,
      }),
  },
];

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  visualize(`${themeName ? `${themeName}|` : ''}TextButton`, () => {
    blockOfTests.forEach(({ it, render }) => {
      snap(it, render);
    });

    tests.forEach(({ describe, its }) => {
      story(describe, () => {
        its.map(({ it, props }) =>
          snap(it, () => testWithTheme(<TextButton {...props} />)),
        );
      });
    });

    story('ellipsis', () => {
      snap('Using Text', () => (
        <Box width="150px">
          {testWithTheme(
            <TextButton ellipsis>TextButton that gets shrinked</TextButton>,
          )}
        </Box>
      ));
    });
  });
};
