# MultiSelectCheckbox component

> General input container.

## MultiSelectCheckbox TestKit API

### Exposed Drivers
The `<MultiSelectCheckbox/>` TestKit is exposing the following drivers:
* Its own driver (see examples below).
* `inputDriver` -  [&lt;Input>](/?path=/story/components-api-components--input) testkit
* `dropdownLayoutDriver` - [&lt;DropdownLayout>](/?path=/story/components-api-components--dropdownlayout) testkit


### Enzyme / ReactTestUtils
| method | returned value | description |
|--------|----------------|-------------|
| getNumOfLabels | number | returns the number of displayed labels in the readonly input field |
| getLabels(delimiter?:string = ', ') | array | returns an array of the labels that displayed in the readonly input field |
| getLabelAt(index:number, delimiter?:string = ', ') | string | returns a label from the displayed labels - by index |
| setProps(props: object) | element | returns a clone of this element with the new props from the json |

## Usage Example

> Unit testing example

```javascript
  import React from 'react';
  import {MultiSelectCheckboxTestkit} from 'wix-style-react/dist/testkit';
  import {MultiSelectCheckboxTestkit as EnzymeMultiSelectCheckboxTestkit} from 'wix-style-react/dist/testkit/enzyme';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const selectedOptions = ['Alabama'];
  const wrapper = mount(<MultiSelectCheckbox selectedOptions={selectedOptions} dataHook={dataHook}/>);
  const multiSelectCheckboxTestkit = EnzymeMultiSelectCheckboxTestkit({wrapper, dataHook});


  //Do tests
  expect(multiSelectCheckboxTestkit.driver.exists()).toBeTruthy();
  expect(multiSelectCheckboxTestkit.inputDriver.exists()).toBeTruthy();
  expect(multiSelectCheckboxTestkit.dropdownLayoutDriver.exists()).toBeTruthy();
```
