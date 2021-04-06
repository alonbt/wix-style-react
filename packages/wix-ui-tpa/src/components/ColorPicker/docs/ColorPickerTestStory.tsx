import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ColorPicker } from '..';
import { StoryCategory } from '../../../../stories/storyHierarchy';

function ColorPickerTest(props?: any) {
  const [selectedColorName, setSelectedColorName] = React.useState('white');
  const _onChange = (value) => setSelectedColorName(value);

  const PRODUCT_COLORS = {
    1: 'white',
    2: 'lightblue',
    3: '#ffcc66',
    4: '#00cc66',
  };

  return (
    <>
      <div tabIndex={0} id="initial-focus">
        Element to Focus on
      </div>
      <ColorPicker aria-label="Color Picker" onChange={_onChange} withFocusRing>
        <ColorPicker.Item
          key={1}
          aria-label="white color"
          value={PRODUCT_COLORS[1]}
          checked={selectedColorName === PRODUCT_COLORS[1]}
        />
        <ColorPicker.Item
          key={2}
          aria-label="light blue color"
          value={PRODUCT_COLORS[2]}
          checked={selectedColorName === PRODUCT_COLORS[2]}
        />
        <ColorPicker.Item
          key={3}
          aria-label="orange color"
          value={PRODUCT_COLORS[3]}
          checked={selectedColorName === PRODUCT_COLORS[3]}
        />
        <ColorPicker.Item
          key={4}
          aria-label="green color"
          value={PRODUCT_COLORS[4]}
          checked={selectedColorName === PRODUCT_COLORS[4]}
        />
      </ColorPicker>
    </>
  );
}

storiesOf(StoryCategory.TESTS, module).add('ColorPicker', ColorPickerTest);
