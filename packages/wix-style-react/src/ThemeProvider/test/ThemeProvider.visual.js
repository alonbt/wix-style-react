import React from 'react';
import { storiesOf } from '@storybook/react';
import ThemeProvider from '../ThemeProvider';
import Button from '../../Button';
import ToggleSwitch from '../../ToggleSwitch';
import { Cell, Layout } from '../../Layout';
import Input from '../../Input';
import Checkbox from '../../Checkbox';
import TextButton from '../../TextButton';
import ToggleButton from '../../ToggleButton';
import { CropRotate, More } from 'wix-ui-icons-common';
import SegmentedToggle from '../../SegmentedToggle';
import Box from '../../Box';
import { theme } from '../../Themes/floatingPanels';
import Slider from '../../Slider';
import Tabs from '../../Tabs';
import RadioGroup from '../../RadioGroup';
import FormField from '../../FormField';
import IconButton from '../../IconButton';

const tests = [
  {
    describe: '',
    its: [
      {
        it: 'Floating Panels',
        props: {
          theme: theme({
            mainColor: '#ff0000',
            textColorPrimary: '#009000',
            textColorPrimaryLight: '#00ff00',
            textColorSecondary: '#009000',
            textColorSecondaryLight: '#00d000',
          }),
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${ThemeProvider.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => (
      <ThemeProvider {...props}>
        <Box width="250px">
          <Layout>
            <Cell>
              <Button>Hello!</Button>
            </Cell>
            <Cell>
              <ToggleSwitch checked />
              <ToggleSwitch />
            </Cell>
            <Cell>
              <FormField required infoContent="Hello!">
                <Input placeholder="Hello!" />
              </FormField>
            </Cell>
            <Cell>
              <Checkbox>Hello!</Checkbox>
            </Cell>
            <Cell>
              <TextButton>Hello!</TextButton>
            </Cell>
            <Cell>
              <IconButton>
                <More />
              </IconButton>
            </Cell>
            <Cell>
              <ToggleButton selected>
                <CropRotate />
              </ToggleButton>
            </Cell>
            <Cell>
              <SegmentedToggle defaultSelected="1">
                <SegmentedToggle.Button value="1">
                  Hello!
                </SegmentedToggle.Button>
                <SegmentedToggle.Button value="2">
                  Hello!
                </SegmentedToggle.Button>
              </SegmentedToggle>
            </Cell>
            <Cell>
              <Tabs
                activeId={1}
                items={[
                  { id: 1, title: 'item 1' },
                  { id: 2, title: 'item 2' },
                  { id: 3, title: 'item 3' },
                ]}
              />
            </Cell>
            <Cell>
              <Slider min={1} max={10} onChange={() => {}} />
            </Cell>
            <Cell>
              <RadioGroup value={1}>
                <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
                <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
              </RadioGroup>
            </Cell>
          </Layout>
        </Box>
      </ThemeProvider>
    ));
  });
});
