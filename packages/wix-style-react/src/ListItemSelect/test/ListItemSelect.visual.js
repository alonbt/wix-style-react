import React from 'react';
import { storiesOf } from '@storybook/react';
import Favorite from 'wix-ui-icons-common/Favorite';
import ListItemSelect, { listItemSelectBuilder } from '../ListItemSelect';
import DropdownLayout from '../../DropdownLayout';
import Box from '../../Box';
import HighlightContext from '../../InputWithOptions/HighlightContext';

const componentProps = {
  title: ['List item select'],
  size: ['small', 'medium'],
  prefix: [
    null,
    <Box>
      <Favorite />
    </Box>,
  ],
  suffix: [null, 'Suffix'],
};

let permutations = [];
Object.keys(componentProps).forEach(key => {
  if (permutations.length === 0) {
    componentProps[key].forEach(value => permutations.push({ [key]: value }));
  } else {
    const arr = [];
    componentProps[key].forEach(value =>
      permutations.forEach(group => arr.push({ ...group, [key]: value })),
    );
    permutations = arr;
  }
});

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'default',
      },
      {
        it: 'with subtitle',
        props: {
          subtitle: 'This is a nice subtitle',
        },
      },
      {
        it: 'selected',
        props: { selected: true },
      },
      {
        it: 'highlighted',
        props: { highlighted: true },
      },
      {
        it: 'selected and highlighted',
        props: { selected: true, highlighted: true },
      },

      {
        it: 'selected with subtitle',
        props: {
          selected: true,
          subtitle: 'This is a nice subtitle',
        },
      },
    ],
  },
  {
    describe: 'disabled',
    its: [
      {
        it: 'default',
        props: { disabled: true },
      },
      {
        it: 'with subtitle',
        props: { disabled: true, subtitle: 'This is a nice subtitle' },
      },
    ],
  },
  {
    describe: 'long text',
    its: [
      {
        it: 'without ellipsis',
        props: {
          title:
            'this is a long text that will eventually have an ellipsis at some point',
        },
      },
      {
        it: 'with ellipsis',
        props: {
          title:
            'this is a long text that will eventually have an ellipsis at some point',
          ellipsis: true,
        },
      },
      {
        it: 'long subtitle without ellipsis',
        props: {
          title:
            'this is a long text that will eventually have an ellipsis at some point',
          subtitle:
            'this is a long text that will eventually have an ellipsis at some point',
        },
      },
      {
        it: 'long subtitle with ellipsis',
        props: {
          title:
            'this is a long text that will eventually have an ellipsis at some point',
          subtitle:
            'this is a long text that will eventually have an ellipsis at some point',
          ellipsis: true,
        },
      },
    ],
  },
];

export const runTests = (
  { themeName, testWithTheme } = { testWithTheme: i => i },
) => {
  tests.forEach(({ describe, its }) => {
    its.forEach(({ it, props }) => {
      storiesOf(
        `${themeName ? `${themeName}|` : ''}ListItemSelect${
          describe ? '/' + describe : ''
        }`,
        module,
      ).add(it, () =>
        testWithTheme(
          <React.Fragment>
            {permutations.map(_props => (
              <Box backgroundColor="#eee">
                <Box width="400px" margin={1}>
                  <ListItemSelect {..._props} {...props} />
                </Box>
                <Box width="400px" margin={1}>
                  <ListItemSelect checkbox {..._props} {...props} />
                </Box>
              </Box>
            ))}
          </React.Fragment>,
        ),
      );
    });
  });

  storiesOf(`${themeName ? `${themeName}|` : ''}ListItemSelect`, module)
    .add('builder', () =>
      testWithTheme(
        <DropdownLayout
          visible
          selectedId={1}
          options={[
            listItemSelectBuilder({
              id: 0,
              title: 'option 1',
              subtitle: 'subtitle 1',
              checkbox: true,
            }),
            listItemSelectBuilder({
              id: 1,
              title: 'option 2',
              subtitle: 'subtitle 2',
              checkbox: true,
            }),
            listItemSelectBuilder({
              id: 2,
              title: 'option 3',
              subtitle: 'subtitle 3',
              checkbox: true,
            }),
          ]}
        />,
      ),
    )
    .add('with highlighting', () =>
      testWithTheme(
        <HighlightContext.Provider value={{ highlight: true, match: 'tion' }}>
          <DropdownLayout
            visible
            selectedId={1}
            options={[
              listItemSelectBuilder({
                id: 0,
                title: 'option 1',
                subtitle: 'subtitle 1',
                checkbox: true,
              }),
              listItemSelectBuilder({
                id: 1,
                title: 'option 2',
                subtitle: 'subtitle 2',
                checkbox: true,
              }),
              listItemSelectBuilder({
                id: 2,
                title: 'option 3',
                subtitle: 'subtitle 3',
                checkbox: true,
              }),
            ]}
          />
        </HighlightContext.Provider>,
      ),
    );
};
