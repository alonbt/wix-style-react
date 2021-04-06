import React from 'react';
import { storySettings } from './storySettings';
import DropdownLayout from '..';

const style = {
  display: 'inline-block',
  padding: '0 5px',
  width: '140px',
  lineHeight: '22px',
};

const nodeStyle = {
  background: 'azure',
  paddingLeft: '25px',
};

const options = Array.from(new Array(30), (_, id) => ({
  id,
  value: `Option ${id + 1}`,
}));

export default () => (
  <div>
    <div style={style}>
      30 options
      <br />
      <DropdownLayout
        visible
        options={options}
        fixedFooter={<div style={nodeStyle}>I am a footer</div>}
        dataHook={storySettings.dataHook}
        closeOnSelect={false}
        onSelect={() => {}}
      />
    </div>
  </div>
);
