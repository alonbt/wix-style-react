import * as React from 'react';
import AtlasAddressInput from '..';
import { addressInputTestkitFactory } from '../../../testkit';
import { addressInputTestkitFactory as addressInputEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { addressInputTestkitFactory as addressInputPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function addressInputWithMandatoryProps() {
  return <AtlasAddressInput />;
}

function addressInputWithAllProps() {
  return (
    <AtlasAddressInput
      dataHook="dataHook"
      className="className"
      clearButton
      initialValue="address"
      value="address"
      disabled
      selectOnSubmit
      onSelect={(option, getAddress) => {}}
      onChange={value => {}}
      onClear={() => {}}
      border="round"
      size="small"
      placeholder="write something"
      noResultsText="nothing to see here"
      baseUrl="http://localhost:9999/"
      token="SOME_AUTH_TOKEN"
      optionLayout="double-line"
      optionPrefix={<div />}
      optionSuffix={<span />}
      debounceFn={(callback, debounceMs) => callback}
      debounceMs={500}
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
