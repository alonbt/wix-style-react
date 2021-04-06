# Code examples for using testkits on different platforms
## ReactTestUtils Example

```javascript
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { Button } from 'wix-style-react';
import { ButtonTestkit } from 'wix-style-react/dist/testkit';

const div = document.createElement('div');
const dataHook = 'myDataHook';

const component = (
  <div>
    <Button dataHook={dataHook} />
  </div>
);

const wrapper = div.appendChild(
  ReactTestUtils.renderIntoDocument(component, { dataHook })
);

const testkit = ButtonTestkit({ wrapper, dataHook });

//Do tests
describe('App', () => {
  it('Element should exist', async () => {
    expect(await testkit.exists()).toBeTruthy();
  });
});
```

## Enzyme Example

```javascript
import React from 'react';
import { mount } from 'enzyme';
import { Button } from 'wix-style-react';
import { ButtonTestkit } from 'wix-style-react/dist/testkit/enzyme';

const dataHook = 'myDataHook';
const wrapper = mount(
  <div>
    <Button dataHook={dataHook} />
  </div>
);

const testkit = ButtonTestkit({ wrapper, dataHook });

//Do tests
describe('App', () => {
  it('Element should exist', async () => {
    expect(await testkit.exists()).toBeTruthy();
  });
});
```

## Puppeteer Example

> Element should be rendered with a data-hook into the DOM `<Button dataHook="myDataHook" />`

```javascript
import puppeteer from 'puppeteer';
import { ButtonTestkit } from 'wix-style-react/dist/testkit/puppeteer';

//puppeteer setup
const browser = await puppeteer.launch();
const page = await browser.newPage();

//Create an element testkit via the data-hook attribute
const testkit = await ButtonTestkit({
  dataHook: 'myDataHook',
  page,
});
await page.goto('/page-where-button-appears'); //Your application url

//Do tests
describe('App', () => {
  it('Element should exist', async () => {
    expect(await testkit.exists()).toBeTruthy();
  });
});
```

## Protractor Example

> Element should be rendered with a data-hook into the DOM `<Button dataHook="myDataHook" />`

```javascript
import { ButtonTestkit } from 'wix-style-react/dist/testkit/protractor';

//Create an element testkit via the data-hook attribute
const testkit = ButtonTestkit({ dataHook: 'myDataHook' });

await browser.get('/page-where-button-appears'); //Your application url

//Do tests
describe('App', () => {
  it('Element should exist', async () => {
    expect(await testkit.exists()).toBeTruthy();
  });
});
```
