# Calendar Spec

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| value | Date \| `{from: Date, to: Date}` | | | Day / Range that should appear as selected. Range object may contain `from` only, `to` only, or both. (But not an empty objecty)|
| onChange | func | | Yes | Called when selectedDays changes by user interaction. When `selectionMode=day`, the function receives a Date object. When `selectionMode=range`, the function receives an Range object of the form `{from: Date, to: Date}`.|
| selectionMode | 'day' \| 'range' | 'day' |  | Affects the click behavior and how it selects a day or a range |

## Value Change Behavior

When value (day | range) changes (componentWillReceiveProps) then we need to decide how to change the current month, in order to have the new day|range visible.

The behavior is defined as such:

- Apply the minimal month offset, so that as much of the day|range will be visible.

## Selection

There are the following modes:
- `day` (single day) - a single click selects a day

- `range` (single range)

| `from` | `to` | click |
|------|----|-------|
| -    |  - |  Sets `from` date |
| exists   |  - |  Uses the `from` as anchor, and selects {from: anchor, to: clickedDate} or {from: clickedDate, to: anchor}, so that `from` would be before (or equal to) `to`|
| -   |  exists |  Uses the `to` as anchor, and selects {from: anchor, to: clickedDate} or {from: clickedDate, to: anchor}, so that `from` would be before (or equal to) `to`|
| exists    |  exists |  resets the range and sets the `from` date | 

## Selection Range Preview - Hover (Styling)
| `from` | `to` | hover |
|------|----|-------|
| -    |  - |  Shows a day hover style |
| exists   |  - |  Shows a range hover style, as if the hover-day is the `to` date. If the hover is before `from` date, then it would show styles as if `from` is the `to` date, and the hover-date is the `from` date. |
| -  |  exists |  Shows a range hover style, as if the hover-day is the `from` date. If the hover is after `to` date, then it would show styles as if `to` is the `from` date, and the hover-date is the `to` date. |
| exists    |  exists |  Shows a range hover style |

### Keyboard Navigation
Same preview logic applies to focus-day, when navigating through days via keyboard.
