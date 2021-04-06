# MessageBox testkits

> MessageBoxFunctionalLayout

## MessageBoxFunctionalLayout TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| exists | - | bool | fulfilled if element in the DOM |
| getConfirmationButton | - | element | returns the confirmation button element |
| getConfirmationButtonText | - | string | returns the confirmation button text |
| getCancellationButton | - | element | returns the cancellation button element |
| getCancellationButtonText | - | string | returns the cancellation button text |
| getHeaderCloseButton | - | element | returns the close button element |
| isCancelEnable | - | boolean | Whether cancel button is enabled    |
| isConfirmationEnable | - | boolean | Whether confirmation button is enabled |
| clickOnCancellationButton | - | - | clicks on the cancellation button |
| clickOnConfirmationButton | - | - | clicks on the confirmation button |
| clickOnHeaderCloseButton | - | - | clicks on the close button |
| isThemeExist | (blue , red, purple) | bool | fulfilled if theme applied |
| getFooter | - | element | returns the footer element |
| getTitle | - | string | returns the  title of the Message Box |
| getChildBySelector | selector | child element | return the element inside the Message box content |

## Usage Example

```javascript
  import React from 'react';
  import {MessageBoxFunctionalLayoutTestkit} from 'wix-style-react/dist/testkit';
  import {MessageBoxFunctionalLayoutTestkit as EnzymeMessageBoxFunctionalLayoutTestkit} from 'wix-style-react/dist/testkit/enzyme';

  /**************
   enzyme example
  ***************/

  const component = mount(<div/><MessageBoxFunctionalLayout dataHook='messageBox'/></div>);
  enzymeMessageBoxFunctionalLayoutTestKit = EnzymeMessageBoxFunctionalLayoutTestkit({wrapper: component, dataHook: 'messageBox'})

  expect(enzymeMessageBoxFunctionalLayoutTestKit.getConfirmationButtonText()).toBe('OK');

  /***********************
   ReactTestUtils example
  ***********************/

  const div = document.createElement('div');
  const dataHook = 'messageBox';
  const elementToRender = React.cloneElement(Element, {dataHook});
  const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div>{elementToRender}</div>));
  const testkit = MessageBoxFunctionalLayoutTestkit({wrapper, dataHook});

  expect(messageBoxFunctionalLayoutTestKit.getConfirmationButtonText()).toBe('OK');
```

> MessageBoxMarketerialLayout

## MessageBoxMarketerialLayout TestKit API

| method | arguments | returned value | description |
|--------|-----------|----------------|-------------|
| exists | - | bool | fulfilled if element in the DOM |
| getPrimaryButton | - | element | returns the primary button element |
| getPrimaryButtonText | - | string | returns the primary button text |
| getSecondaryButton | - | element | returns the secondary button element |
| getSecondaryButtonText | - | string | returns the secondary button text |
| clickOnPrimaryButton | - | - | clicks on the primary button |
| clickOnSecondaryButton | - | - | clicks on the secondary button |
| closeMessageBox | - | - | closes the message box |
| getTitle | - | string | returns the title of the Message Box |
| getImageSrc | - | string | returns the image src string url of Message Box image |
| getContentBySelector | selector | content element | return the content element inside the Message box |

## Usage Example

```javascript
  import React from 'react';
  import {MessageBoxMarketerialLayoutTestkit} from 'wix-style-react/dist/testkit';
  import {MessageBoxMarketerialLayoutTestkit as EnzymeMessageBoxMarketerialLayoutTestkit} from 'wix-style-react/dist/testkit/enzyme';

  /**************
   enzyme example
  ***************/

  const component = mount(<div/><MessageBoxMarketerialLayout dataHook='messageBox'/></div>);
  enzymeMessageBoxMarketerialLayoutTestKit = EnzymeMessageBoxMarketerialLayoutTestkit({wrapper: this.component, dataHook: 'messageBox'})

  expect(enzymeMessageBoxMarketerialLayoutTestKit.getPrimaryButtonText()).toBe('OK');

  /***********************
   ReactTestUtils example
  ***********************/

  const div = document.createElement('div');
  const dataHook = 'messageBox';
  const elementToRender = React.cloneElement(Element, {dataHook});
  const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div>{elementToRender}</div>));
  const testkit = MessageBoxMarketerialLayoutTestkit({wrapper, dataHook});

  expect(messageBoxMarketerialLayoutTestKit.getPrimaryButtonText()).toBe('OK');
```
