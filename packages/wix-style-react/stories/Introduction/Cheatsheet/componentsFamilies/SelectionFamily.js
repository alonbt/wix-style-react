import React, { PureComponent, useState } from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
  singleComponentSizes,
} from '../sharedComponents';

import { selectionSymbolsToComponents } from '../../../symbolsComponentsMapping/families/selectionFamily';

import {
  createLinkedSymbolName,
  createLinkedComponentsNames,
} from '../sharedComponents/utils';

import {
  selectionSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';

// Assets
import LockLocked from 'wix-ui-icons-common/LockLocked';
import LockUnlocked from 'wix-ui-icons-common/LockUnlocked';
import { Category } from '../../../storiesHierarchy';

import {
  Dropdown,
  MultiSelectCheckbox,
  CheckToggle,
  Checkbox,
  FacesRatingBar,
  RadioGroup,
  ToggleSwitch,
  SegmentedToggle,
  StarsRatingBar,
  Thumbnail,
  Slider,
  FormField,
  Layout,
  Cell,
  Box,
} from 'wix-style-react';

const groupSymbol = symbolsGroup.selection;

const DropdownExample = () => {
  const symbol = selectionSymbols.dropdown;
  const components = selectionSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  const dropdownOptions = [1, 2, 3].map(val => ({
    id: val,
    value: val,
  }));

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <FormField id="formfieldDropdownId" label="Dropdown">
        <Dropdown id="formfieldDropdownId" options={dropdownOptions} />
      </FormField>
    </SingleComponentSideBySide>
  );
};

class MultiSelectDropdownExample extends PureComponent {
  state = { selectedOptions: [] };

  removeSelectedItem = optionId => {
    let selectedOptions = [...this.state.selectedOptions];
    selectedOptions = selectedOptions.filter(id => id !== optionId);
    this.setState({ selectedOptions });
  };

  addSelectedItem = optionId => {
    const selectedOptions = [...this.state.selectedOptions];
    selectedOptions.push(optionId);
    this.setState({ selectedOptions });
  };

  render() {
    const multiSelectOptions = ['a', 'b', 'c'].map(val => ({
      id: val,
      value: val,
    }));

    const { selectedOptions } = this.state;

    const symbol = selectionSymbols.multiSelectDropdown;
    const components = selectionSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
      size: singleComponentSizes.compact,
    };

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <FormField
          id="formfieldMultiSelectDropdownId"
          label="Multi Select Dropdown"
        >
          <MultiSelectCheckbox
            id="formfieldMultiSelectDropdownId"
            onSelect={optionId => this.addSelectedItem(optionId)}
            onDeselect={optionId => this.removeSelectedItem(optionId)}
            options={multiSelectOptions}
            selectedOptions={selectedOptions}
          />
        </FormField>
      </SingleComponentSideBySide>
    );
  }
}

class CheckboxExample extends PureComponent {
  state = {
    value: false,
  };

  render() {
    const { value } = this.state;

    const symbol = selectionSymbols.checkbox;
    const components = selectionSymbolsToComponents[symbol];

    const checkboxProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
    };

    return (
      <SingleComponentSideBySide {...checkboxProps}>
        <FormField
          id="formfieldCheckboxId"
          infoContent="I help you to fill info"
          label="Checkbox"
          labelPlacement="right"
          stretchContent={false}
          required
        >
          <Checkbox
            id="formfieldCheckboxId"
            checked={value}
            onChange={e => this.setState({ value: e.target.checked })}
          />
        </FormField>
      </SingleComponentSideBySide>
    );
  }
}

class RadioExample extends PureComponent {
  state = { value: 1 };

  render() {
    const { value } = this.state;

    const symbol = selectionSymbols.radio;
    const components = selectionSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
    };

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <FormField id="formfieldRadioGroupId" label="Radio Group">
          <RadioGroup
            id="formfieldRadioGroupId"
            onChange={value => this.setState({ value })}
            size="medium"
            value={value}
          >
            <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
            <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
            <RadioGroup.Radio value={3}>Option 3</RadioGroup.Radio>
          </RadioGroup>
        </FormField>
      </SingleComponentSideBySide>
    );
  }
}

class ToggleExample extends PureComponent {
  state = {
    value: false,
  };

  render() {
    const { value } = this.state;

    const symbol = selectionSymbols.toggle;
    const components = selectionSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
    };

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <FormField
          id="formfieldToggleSwitchId"
          infoContent="I help you to fill info"
          label="Toggle"
          labelPlacement="right"
          stretchContent={false}
          required
        >
          <ToggleSwitch
            id="formfieldToggleSwitchId"
            checked={value}
            onChange={e => this.setState({ value: e.target.checked })}
          />
        </FormField>
      </SingleComponentSideBySide>
    );
  }
}

const SegmentedToggleExample = () => {
  const symbol = selectionSymbols.segmentedToggle;
  const components = selectionSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol: Category.SELECTION, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <FormField id="formfieldSegmentedToggleId" label="Segmented Toggle">
        <Box>
          <SegmentedToggle
            defaultSelected="option 1"
            id="formfieldSegmentedToggleId"
          >
            <SegmentedToggle.Icon value="option" tooltipText="Locked">
              <LockLocked />
            </SegmentedToggle.Icon>
            <SegmentedToggle.Icon value="option2" tooltipText="Unlocked">
              <LockUnlocked />
            </SegmentedToggle.Icon>
          </SegmentedToggle>
        </Box>
      </FormField>
    </SingleComponentSideBySide>
  );
};

class ThumbnailWithTitleExample extends PureComponent {
  state = { selected: 1 };

  render() {
    const { selected } = this.state;

    return (
      <Box marginBottom="30px">
        <Layout gap="12px">
          {[1, 2, 3].map(n => (
            <Cell key={`title-thumbnail-cell-${n}`} span={3}>
              <Thumbnail
                key={`title-thumbnail-${n}`}
                title="Thumbnail"
                selected={selected === n}
                onClick={() => this.setState({ selected: n })}
              />
            </Cell>
          ))}
        </Layout>
      </Box>
    );
  }
}

class ListSmallThumbnailExample extends PureComponent {
  state = { selected: 1 };

  render() {
    const { selected } = this.state;
    return (
      <Box>
        {[1, 2, 3].map(n => (
          <Box key={`list-thumbnail-box-${n}`} marginRight="30px">
            <Thumbnail
              key={`list-thumbnail-${n}`}
              title="Thumbnail Title"
              selected={selected === n}
              description="Description here"
              image="https://static.wixstatic.com/media/c78d05b79ede429fb77c9d8ec4443b93.jpg/v1/fit/w_234,h_72/c78d05b79ede429fb77c9d8ec4443b93.jpg"
              onClick={() => this.setState({ selected: n })}
              width="170px"
            />
          </Box>
        ))}
      </Box>
    );
  }
}

const ThumbnailSelectExamples = () => {
  const symbol = selectionSymbols.thumbnailSelect;
  const components = selectionSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <ThumbnailWithTitleExample />
      <ListSmallThumbnailExample />
    </SingleComponentSideBySide>
  );
};

class SliderExample extends PureComponent {
  state = { value: [2, 4] };

  onSliderChange = value => this.setState({ value });

  render() {
    const { value } = this.state;

    const symbol = selectionSymbols.slider;
    const components = selectionSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: createLinkedSymbolName({ groupSymbol: Category.SELECTION, symbol }),
      componentsNames: createLinkedComponentsNames(components),
      size: singleComponentSizes.compact,
    };

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <FormField id="formfieldSliderId" label="Slider Label">
          <Slider
            id="formfieldSliderId"
            onChange={this.onSliderChange}
            min={1}
            max={10}
            value={value}
            displayMarks
          />
        </FormField>
      </SingleComponentSideBySide>
    );
  }
}

const CheckToggleExample = () => {
  const [checkedMedium, setCheckedMedium] = useState(false);
  const [checkedSuccessMedium, setCheckedSuccessMedium] = useState(true);
  const [checkedStandart, setCheckedStandart] = useState(false);
  const [checkedSuccess, setCheckedSuccess] = useState(true);

  const tooltipContent = checked => (checked ? 'Checked' : 'Unchecked');

  const symbol = selectionSymbols.checkToggle;
  const components = selectionSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout>
        <CheckToggle
          size="medium"
          checked={checkedMedium}
          onChange={() => setCheckedMedium(!checkedMedium)}
          tooltipContent={tooltipContent(checkedMedium)}
        />
        <CheckToggle
          skin="success"
          size="medium"
          checked={checkedSuccessMedium}
          onChange={() => setCheckedSuccessMedium(!checkedSuccessMedium)}
          tooltipContent={tooltipContent(checkedSuccessMedium)}
        />
        <CheckToggle
          checked={checkedStandart}
          onChange={() => setCheckedStandart(!checkedStandart)}
          tooltipContent={tooltipContent(checkedStandart)}
        />
        <CheckToggle
          skin="success"
          checked={checkedSuccess}
          onChange={() => setCheckedSuccess(!checkedSuccess)}
          tooltipContent={tooltipContent(checkedSuccess)}
        />
      </Layout>
    </SingleComponentSideBySide>
  );
};

class StarsRatingBarExample extends PureComponent {
  state = { value: 2 };

  onRatingChange = value => this.setState({ value });

  render() {
    const { value } = this.state;

    const symbol = selectionSymbols.starsRatingBar;
    const components = selectionSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
      size: singleComponentSizes.compact,
    };

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <FormField
          id="formFieldStarsRatingBarId"
          infoContent="Tooltip text"
          label="Stars Rating Bar Label"
          required
        >
          <StarsRatingBar
            value={value}
            descriptionValues={['bad', 'not good', 'ok', 'good', 'excellent']}
            onChange={this.onRatingChange}
          />
        </FormField>
      </SingleComponentSideBySide>
    );
  }
}

class FacesRatingBarExample extends PureComponent {
  state = { value: 2 };

  onRatingChange = value => this.setState({ value });

  render() {
    const { value } = this.state;

    const symbol = selectionSymbols.facesRatingBar;
    const components = selectionSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
      size: singleComponentSizes.compact,
    };

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <FormField
          id="formFieldFacesRatingBarId"
          infoContent="Tooltip text"
          label="Stars Rating Bar Label"
          required
        >
          <FacesRatingBar
            value={value}
            descriptionValues={[
              'Strong Negative',
              'Negative',
              'Neutral',
              'Positive',
              'Strong Positive',
            ]}
            onChange={this.onRatingChange}
          />
        </FormField>
      </SingleComponentSideBySide>
    );
  }
}

const SelectionFamily = () => (
  <FamilyStructure title={groupSymbol} showPreview>
    <DropdownExample />
    <MultiSelectDropdownExample />
    <CheckboxExample />
    <RadioExample />
    <ToggleExample />
    <SegmentedToggleExample />
    <ThumbnailSelectExamples />
    <SliderExample />
    <CheckToggleExample />
    <StarsRatingBarExample />
    <FacesRatingBarExample />
  </FamilyStructure>
);

export default SelectionFamily;
