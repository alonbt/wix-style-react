import React from 'react';
import { storiesOf } from '@storybook/react';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import BadgeSelect from '..';
import { badgeSelectPrivateUniDriverFactory } from '../BadgeSelect.private.uni.driver';
import Box from '../../Box';
import { snap, story, visualize } from 'storybook-snapper';

const interactiveDataHook = 'interactive-badgeselect';

const baseProps = {
  options: [
    { id: '0', skin: 'general', text: 'general' },
    { id: '1', skin: 'standard', text: 'standard' },
    { id: '2', skin: 'danger', text: 'danger' },
    { id: '3', skin: 'success', text: 'success' },
    { id: '4', skin: 'neutral', text: 'neutral' },
    { id: '5', skin: 'neutralLight', text: 'neutralLight' },
    { id: '6', skin: 'warning', text: 'warning' },
    { id: '7', skin: 'warningLight', text: 'warningLight' },
    { id: '8', skin: 'urgent', text: 'urgent' },
    { id: '9', skin: 'neutralStandard', text: 'neutralStandard' },
    { id: '10', skin: 'neutralSuccess', text: 'neutralSuccess' },
    { id: '11', skin: 'neutralDanger', text: 'neutralDanger' },
    { id: '12', skin: 'premium', text: 'premium' },
  ],
};

const badgeSelectTestkitFactory = uniTestkitFactoryCreator(
  badgeSelectPrivateUniDriverFactory,
);

const createDriver = dataHook =>
  badgeSelectTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

class InteractiveEyeTest extends React.Component {
  componentDidMount() {
    const { done } = this.props;
    const { badgeDriver } = createDriver(interactiveDataHook);

    document.fonts.ready.then(async () => {
      await badgeDriver.click();
      await done();
    });
  }

  render() {
    const { componentDidMount, ...restProps } = this.props;

    return (
      <Box margin={3} align="center">
        <BadgeSelect dataHook={interactiveDataHook} {...restProps} />
      </Box>
    );
  }
}

const tests = [
  {
    describe: 'Basic',
    its: [
      {
        it: `Should render the selected id`,
        props: {
          ...baseProps,
          selectedId: '3',
        },
      },
    ],
  },
];

const interactiveTests = [
  {
    describe: 'Dropdown',
    its: [
      {
        it: 'Should open the dropdown on click',
        props: {
          ...baseProps,
        },
      },
      {
        it: 'Should not wrap between whitespaces',
        props: {
          options: ['general', 'standard', 'danger'].map((skin, id) => ({
            id: id.toString(),
            skin,
            text: `${skin} ${skin}`,
          })),
        },
      },
      {
        it: 'Should render the option subtitle',
        props: {
          options: [
            {
              id: '0',
              skin: 'general',
              text: `general`,
              subtitle: `subtitle - general general`,
            },
            {
              id: '1',
              skin: 'standard',
              text: `standard`,
            },
          ],
        },
      },
      {
        it: 'Should render ellipsis',
        props: {
          options: [
            {
              id: '0',
              skin: 'general',
              text: `Very long title that will eventually break into two lines`,
              subtitle: `Very long subtitle that will eventually break into two lines`,
              ellipsis: false,
            },
            {
              id: '1',
              skin: 'general',
              text: `Very long title that will be truncated by ellipsis`,
              subtitle: `Very long subtitle that will be truncated by ellipsis`,
              ellipsis: true,
            },
          ],
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`BadgeSelect${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <Box margin={3} align="center">
          <BadgeSelect {...props} />
        </Box>
      ),
    );
  });
});

visualize('BadgeSelect', () => {
  interactiveTests.forEach(({ describe, its }) => {
    its.forEach(({ it, props }) => {
      story(describe, () => {
        snap(it, done => <InteractiveEyeTest {...props} done={done} />);
      });
    });
  });
});
