/* eslint-disable no-console */
import React, { PureComponent } from 'react';

import {
  NotDefined,
  FamilyStructure,
  SingleComponentSideBySide,
  Preview,
} from '../sharedComponents';

import { pickerSymbolsToComponents } from '../../../symbolsComponentsMapping/families/pickerFamily';

import { createLinkedComponentsNames } from '../sharedComponents/utils';

import {
  pickerSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';

import times from '../../../../src/utils/operators/times';

import singleComponentSizes from '../sharedComponents/constants';

import {
  EditableSelector,
  ModalSelectorLayout,
  ColorPicker,
  Calendar,
  CalendarPanel,
  CalendarPanelFooter,
  Swatches,
  Layout,
  SelectorList,
  CustomModalLayout,
} from 'wix-style-react';

const colors = ['#EE5951', '#FDB10C', '#60BC57'];

const groupSymbol = symbolsGroup.pickers;

const DropdownLayoutExamples = () => (
  <SingleComponentSideBySide name="10.1 Should be re-indexed">
    <NotDefined />
  </SingleComponentSideBySide>
);

const editableSelectorTypes = {
  radio: 'radio',
  checkbox: 'checkbox',
};

class EditableSelectorExample extends PureComponent {
  state = {
    options: [1, 2].map(val => {
      return { title: `Option ${val}`, isSelected: false };
    }),
  };

  onOptionAdded = ({ newTitle }) => {
    const { options } = this.state;
    this.setState({
      options: [...options, { title: newTitle }],
    });
  };

  onOptionEdit = ({ newTitle, index }) => {
    const { options } = this.state;
    this.setState({
      options: options.map((option, i) =>
        index === i ? { title: newTitle } : option,
      ),
    });
  };

  onOptionDelete = ({ index }) => {
    const { options } = this.state;

    this.setState({
      options: options.filter((option, i) => index !== i),
    });
  };

  onRadioOptionToggle = index => {
    const { options } = this.state;

    const resetOptions = option => {
      option.isSelected = false;
      return option;
    };

    const newOptions = [...options].map(resetOptions);
    newOptions[index].isSelected = true;

    this.setState({ options: newOptions });
  };

  onCheckboxOptionToggle = index => {
    const { options } = this.state;
    const toggleOption = (option, i) => {
      if (index === i) {
        option.isSelected = !option.isSelected;
      }

      return option;
    };

    this.setState({
      options: options.map(toggleOption),
    });
  };

  onOptionToggle = index => {
    const { toggleType } = this.props;

    toggleType === editableSelectorTypes.radio
      ? this.onRadioOptionToggle(index)
      : this.onCheckboxOptionToggle(index);
  };

  render() {
    const { toggleType, title } = this.props;
    const { options } = this.state;

    return (
      <Preview wrapWithCardContent>
        <EditableSelector
          onOptionAdded={this.onOptionAdded}
          onOptionEdit={this.onOptionEdit}
          onOptionDelete={this.onOptionDelete}
          onOptionToggle={this.onOptionToggle}
          toggleType={toggleType}
          title={title}
          options={options}
        />
      </Preview>
    );
  }
}

const EditableSelectorExamples = () => {
  const checkboxEditableSelectorProps = {
    title: 'Multiple Select',
    toggleType: editableSelectorTypes.checkbox,
  };

  const radioEditableSelectorProps = {
    title: 'Single Select',
    toggleType: editableSelectorTypes.radio,
  };

  const symbol = pickerSymbols.editableSelector;
  const components = pickerSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout cols={2}>
        <EditableSelectorExample {...radioEditableSelectorProps} />
        <EditableSelectorExample {...checkboxEditableSelectorProps} />
      </Layout>
    </SingleComponentSideBySide>
  );
};

const ModalSelectorExample = () => {
  const symbol = pickerSymbols.modalSelector;
  const components = pickerSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  const DATA_SOURCE = (searchQuery, offset, limit) =>
    new Promise(resolve =>
      setTimeout(() => {
        const items = Array(50)
          .fill(0)
          .map((_, i) => ({
            id: i,
            title: `Title ${i}`,
            subtitle: `Subtitle ${i}`,
            extraText: `Extra Text ${i}`,
            disabled: !(i % 2),
            image: (
              <img
                width="100%"
                height="100%"
                src="http://via.placeholder.com/100x100"
              />
            ),
          }));

        const filtered = items.filter(({ title }) =>
          title.toLowerCase().includes(searchQuery.toLowerCase()),
        );

        resolve({
          items: filtered.slice(offset, offset + limit),
          totalCount: filtered.length,
        });
      }, 2000),
    );

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <SelectorList
        multiple
        itemsPerPage={8}
        searchDebounceMs={150}
        dataSource={DATA_SOURCE}
      >
        {({ renderList, renderToggleAllCheckbox, selectedItems }) => (
          <CustomModalLayout
            width="600px"
            height="540px"
            title="Choose Your Items"
            primaryButtonText="Select"
            primaryButtonProps={{
              disabled: !selectedItems.length,
            }}
            secondaryButtonText="Cancel"
            onCloseButtonClick={() => {}}
            sideActions={renderToggleAllCheckbox()}
            removeContentPadding
            showHeaderDivider
          >
            {renderList()}
          </CustomModalLayout>
        )}
      </SelectorList>
    </SingleComponentSideBySide>
  );
};

class ColorPickerExample extends PureComponent {
  state = { color: colors[0] };

  onColorChange = color => this.setState({ color });

  render() {
    const { color } = this.state;

    const symbol = pickerSymbols.colorPicker;
    const components = pickerSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
    };

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <Preview>
          <ColorPicker
            onCancel={() => console.log('Cancelled')}
            onChange={this.onColorChange}
            onConfirm={() => console.log('Confirmed')}
            value={color}
          >
            <Swatches
              showClear
              selected={color}
              onClick={this.onColorChange}
              colors={colors}
            />
          </ColorPicker>
        </Preview>
      </SingleComponentSideBySide>
    );
  }
}

class CalendarExample extends PureComponent {
  state = {
    value: new Date('2018/11/14'),
  };

  changeSelectedDate = value => this.setState({ value });

  render() {
    const { value } = this.state;

    const symbol = pickerSymbols.calendar;
    const components = pickerSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
    };

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <Preview>
          <Calendar
            autoFocus={false}
            onChange={this.changeSelectedDate}
            value={value}
            selectionMode="day"
          />
        </Preview>
      </SingleComponentSideBySide>
    );
  }
}

class CalendarPanelExample extends PureComponent {
  state = {
    value: {
      from: new Date('2018-01-09T22:00:00.000Z'),
      to: new Date('2018-01-15T22:00:00.000Z'),
    },
  };

  calendarPanelFooterExample = () => {
    const defaultDateToStringOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };

    const { value } = this.state;

    return (
      <CalendarPanelFooter
        dateToString={date =>
          date.toLocaleDateString('en-US', defaultDateToStringOptions)
        }
        primaryActionDisabled={false}
        primaryActionLabel="submit"
        primaryActionOnClick={() => console.log('primaryActionOnClick')}
        secondaryActionLabel="cancel"
        secondaryActionOnClick={() => console.log('secondaryActionOnClick')}
        selectedDays={value}
      />
    );
  };

  onDateChange = value => this.setState({ value });

  render() {
    const calendarPresets = [
      {
        id: 1,
        selectedDays: {
          from: new Date('2018-01-09T22:00:00.000Z'),
          to: new Date('2018-01-15T22:00:00.000Z'),
        },
        value: 'Next 7 Days',
      },
      {
        id: 2,
        selectedDays: {
          from: new Date('2018-01-03T22:00:00.000Z'),
          to: new Date('2018-01-09T22:00:00.000Z'),
        },
        value: 'Last 7 Days',
      },
      {
        id: 3,
        selectedDays: {
          from: new Date('2017-12-31T22:00:00.000Z'),
          to: new Date('2018-01-31T21:59:59.999Z'),
        },
        value: 'Full Month',
      },
      {
        id: 4,
        selectedDays: {
          from: new Date('2017-12-31T22:00:00.000Z'),
          to: new Date('2018-02-28T21:59:59.999Z'),
        },
        value: '2 Full Month',
      },
      {
        id: 5,
        selectedDays: {
          from: new Date('2018-01-09T22:00:00.000Z'),
          to: new Date('2018-02-09T22:00:00.000Z'),
        },
        value: 'Partial Month',
      },
      {
        id: 6,
        selectedDays: {
          from: new Date('2017-09-30T21:00:00.000Z'),
          to: new Date('2017-10-31T21:59:59.999Z'),
        },
        value: 'Month In Past',
      },
      {
        id: 7,
        selectedDays: {
          from: new Date('2018-01-09T22:00:00.000Z'),
          to: new Date('2018-01-09T22:00:00.000Z'),
        },
        value: 'Next 1 days',
      },
      {
        id: 8,
        selectedDays: {
          from: new Date('2018-01-09T22:00:00.000Z'),
          to: new Date('2018-01-10T22:00:00.000Z'),
        },
        value: 'Next 2 days',
      },
      {
        id: 9,
        selectedDays: {
          from: new Date('2018-01-09T22:00:00.000Z'),
          to: new Date('2018-01-11T22:00:00.000Z'),
        },
        value: 'Next 3 days',
      },
      {
        id: 10,
        selectedDays: {
          from: new Date('2018-01-09T22:00:00.000Z'),
          to: new Date('2018-01-12T22:00:00.000Z'),
        },
        value: 'Next 4 days',
      },
      {
        id: 11,
        selectedDays: {
          from: new Date('2018-01-09T22:00:00.000Z'),
          to: new Date('2018-01-13T22:00:00.000Z'),
        },
        value: 'Next 5 days',
      },
      {
        id: 12,
        selectedDays: {
          from: new Date('2018-01-09T22:00:00.000Z'),
          to: new Date('2018-01-14T22:00:00.000Z'),
        },
        value: 'Next 6 days',
      },
      {
        id: 14,
        selectedDays: {
          from: new Date('2018-01-09T22:00:00.000Z'),
          to: new Date('2018-01-16T22:00:00.000Z'),
        },
        value: 'Next 8 days',
      },
      {
        id: 15,
        selectedDays: {
          from: new Date('2018-01-09T22:00:00.000Z'),
          to: new Date('2018-01-17T22:00:00.000Z'),
        },
        value: 'Next 9 days',
      },
    ];

    const { value } = this.state;

    const symbol = pickerSymbols.calendarPanel;
    const components = pickerSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
    };

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <Preview stretch>
          <CalendarPanel
            autoFocus={false}
            footer={this.calendarPanelFooterExample}
            onChange={this.onDateChange}
            presets={calendarPresets}
            selectionMode="range"
            value={value}
          />
        </Preview>
      </SingleComponentSideBySide>
    );
  }
}

class SwatchesExample extends PureComponent {
  state = { color: colors[0] };

  onColorChange = color => this.setState({ color });

  render() {
    const { color } = this.state;

    const symbol = pickerSymbols.swatches;
    const components = pickerSymbolsToComponents[symbol];

    const singleComponentProps = {
      name: symbol,
      componentsNames: createLinkedComponentsNames(components),
      size: singleComponentSizes.tiny,
    };

    return (
      <SingleComponentSideBySide {...singleComponentProps}>
        <Swatches
          showClear
          selected={color}
          onClick={this.onColorChange}
          colors={colors}
        />
      </SingleComponentSideBySide>
    );
  }
}

const PickerFamily = () => (
  <FamilyStructure title={groupSymbol} showPreview>
    <DropdownLayoutExamples />
    <EditableSelectorExamples />
    <ModalSelectorExample />
    <ColorPickerExample />
    <CalendarExample />
    <CalendarPanelExample />
    <SwatchesExample />
  </FamilyStructure>
);

export default PickerFamily;
