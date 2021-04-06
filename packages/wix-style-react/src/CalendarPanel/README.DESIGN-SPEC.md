# `<CalendarPanel/>` Design Specification

## Intro

CalendarPanel, is a basically `<Calendar/>` component with "peripherals" of:

- a sidebar with presets
- footer with "Cancel", "Submit" buttons

It may appear as a standalone component (probably in a Modal), a generic popover content, or as part of the `<DatePicker/>` or `<DateRangePicker/>`.

## Usage Example

```js
import React from 'react';

import CalendarPanel, {CalendarPanelFooter} from CalendarPanel;
import Card from '../../src/Card';

import {TODAY, YESTERDAY, NEXT_WEEK, A_WEEK_AGO, ONE_MONTH_AGO, TWO_MONTH_AGO} from './dateUtils';

function translate(text) {
  return text; // TODO: Use real translation
}

const presets = [
  {id: 1, value: 'Today', selectedDays: {from: TODAY, to: TODAY}},
  {id: 2, value: 'Yesterday', selectedDays: {from: YESTERDAY, to: YESTERDAY}},
  {id: 3, value: 'Last 7 days', selectedDays: {from: A_WEEK_AGO, to: TODAY}},
  {id: 4, value: 'Next 7 days', selectedDays: {from: TODAY, to: NEXT_WEEK}},
  {id: 5, value: 'A month (2 month ago)', selectedDays: {from: TWO_MONTH_AGO, to: ONE_MONTH_AGO}},
];

export default class CalendarPanelCustomExample extends React.Component {

  state = {
    selectedDays: {from: TODAY, to: TODAY},
  }

  handleChange = (selectedDays) => {
    this.setState({selectedDays})
  }

  const renderFooter = ({selectedDays, submitEnabled}) => {
    return (
      <CalendarPanelFooter
        selectedDays={selectedDays}
        submitEnabled={submitEnabled}
        dateToString={Date.toLocaleDateString}
        cancelButtonProps={{
          onCancel: () => alert('Cancel was clicked'),
          children: translate('Cancel'),
        }}
        submitButtonProps={{
          onCancel: () => alert(`submit - ${this.state.selectedDays}`),
          children: translate('Cancel'),
        }}
        />
    )
  }

  render() {
    return (
      <Card>
        <CalendarPanel
          selectionMode: 'range',
          selectedDays: this.state.selectedDays,
          onSelectedDaysChange={this.handleChange}
          presets={presets}
          footer={renderFooter}
          />
      </Card>
    );
  }
}
```

## `<CalendarPanel/>` Props

| propName          | propType | defaultValue | isRequired | description |
| ---               | ---      | ---          | ---        | ---         |
| *All Calendar Props* | | | | All `<Calendar/>` props. |
| presets           | array    | -            | -          | Array of calendar preset, as Dropdown option objects. Each item (which is not a divider) must have `selectedDays` props. |
| footer            | ()=>node | | | A renderProp for the footer. Receives `selectedDays` and `submitDisabled` as arguments. |

## Behavior

It is controlled component.

- Presets:
  - When a preset is clicked, the `<Calendar/>` selected changes.
  - If many options exists then a vertical scrollbar is enabled.
- Calendar:
  - When the Calendar is clicked (selection) then the current selected preset is updated.
- Footer:
  - The Submit button is disabled if selectionMode = 'range' and there is no range selected (from and to).

### Things to notice about `<CalendarPanel/>` in the example

- It has no border styling (it is wrapped in a `<Card/>` in this example).
- `selectionMode` is used internally in order to decide the value of the footer's renderProp argument, `submitEnabled`.

### presets

- `presets` is an options array that matches the options of a `<DropdownLayout/>`.
- It may include dividers according to `<DropdownLayout/>` props definitions.

### footer - `<CalendarPanelFooter/>`

The footer is a renderProp, so the consumer can render anything.
The recommended footer is achieved by using the optional sub-component `<CalendarPanelFooter/>`.

#### `<CalendarPanelFooter/>` Props

| propName          | propType | defaultValue | isRequired | description |
| ---               | ---      | ---          | ---        | ---         |
| submitEnabled     | boolean  | false        | -          | Whether the submit button should be enabled. |
| selectedDays      | Date |  Range | | | SelecteDays will be used to dispaly a text representation of the current selected date or range (AKA status) |
| dateToString      | Date=> String | | | Function that turns a date into a string. Should be a localized string. This is used in for the text status.
| cancelButtonProps | object (ButtonProps) | | | Props of a `<Button/>` for the cancel button.|
| submitButtonProps | object (ButtonProps) | | | Props of a `<Button/>` for the submit button. The `disabled` prop will be set according to the `submitEnabled` prop.|

- `Range` is of the form `{from?: Date, to?: Date}`.
