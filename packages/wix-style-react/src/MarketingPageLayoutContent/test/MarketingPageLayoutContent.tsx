import * as React from 'react';
import MarketingPageLayoutContent from '..';
import { marketingPageLayoutContentTestkitFactory } from '../../../testkit';
import { marketingPageLayoutContentTestkitFactory as marketingPageLayoutContentEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { marketingPageLayoutContentTestkitFactory as marketingPageLayoutContentPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function marketingPageLayoutContentWithMandatoryProps() {
  return <MarketingPageLayoutContent />;
}

function marketingPageLayoutContentWithAllProps() {
  return (
    <MarketingPageLayoutContent
      dataHook="dataHook"
      className="className"
      overline={<div>overline</div>}
      title={<div>title</div>}
      subtitle={<div>subtitle</div>}
      content={<div>content</div>}
      actions={<div>actions</div>}
    />
  );
}

async function testkits() {
  const testkit = marketingPageLayoutContentTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = marketingPageLayoutContentEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await marketingPageLayoutContentPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
