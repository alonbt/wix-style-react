import React, { useState } from 'react';
import { storySettings } from './storySettings';
import { options } from './examples';
import MultiSelectCheckbox from '../MultiSelectCheckbox';

const valueParser = option => (option.label ? option.label : option.value);

const MultiSelectCheckboxTest = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const onSelect = option => setSelectedOptions([...selectedOptions, option]);
  const onDeselect = option =>
    setSelectedOptions(selectedOptions.filter(item => item !== option));

  return (
    <MultiSelectCheckbox
      options={options}
      selectedOptions={selectedOptions}
      onSelect={onSelect}
      onDeselect={onDeselect}
      valueParser={valueParser}
      dataHook={storySettings.dataHook}
    />
  );
};

export default MultiSelectCheckboxTest;
