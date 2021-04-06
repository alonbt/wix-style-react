import * as React from 'react';
import WixStyleReactProvider from '..';
import { wixStyleReactProviderTestkitFactory } from '../../../testkit';
import { wixStyleReactProviderTestkitFactory as wixStyleReactProviderEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { wixStyleReactProviderTestkitFactory as wixStyleReactProviderPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function wixStyleReactProviderWithMandatoryProps() {
  return <WixStyleReactProvider />;
}

function wixStyleReactProviderWithAllProps() {
  return (
    <WixStyleReactProvider
      dataHook="dataHook"
      className="className"
      as='span'
      children={<div/>}
      features={{ layoutSpacing: true}}
    />
  );
}

async function testkits() {
  const testkit = wixStyleReactProviderTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = wixStyleReactProviderEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await wixStyleReactProviderPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
