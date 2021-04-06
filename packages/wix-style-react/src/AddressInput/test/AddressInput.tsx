import * as React from 'react';
import AddressInput from '..';
import { addressInputTestkitFactory } from '../../../testkit';
import { addressInputTestkitFactory as addressInputEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { addressInputTestkitFactory as addressInputPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function addressInputWithMandatoryProps() {
  return <AddressInput />;
}

function addressInputWithAllProps() {
  return (
    <AddressInput
      dataHook="dataHook"
      className="className"
      clearButton
      initialValue="address"
      value="address"
      disabled
      onSelect={option => {}}
      onManuallyInput={(inputValue, suggestedOption) => {}}
      onChange={value => {}}
      options={[{ id: 0, value: 'value' }]}
      onClear={() => {}}
      onBlur={() => {}}
      status="loading"
      statusMessage="error!"
      border="round"
      size="small"
      placeholder="write something"
      noResultsText="nothing to see here"
    />
  );
}

async function testkits() {
  const testkit = addressInputTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = addressInputEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await addressInputPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
