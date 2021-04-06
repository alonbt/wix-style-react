import * as React from 'react';
import PageFooter from '..';
import { pageFooterTestkitFactory } from '../../../testkit';
import { pageFooterTestkitFactory as pageFooterEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { pageFooterTestkitFactory as pageFooterPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function pageFooterWithMandatoryProps() {
  return <PageFooter />;
}

function pageFooterWithAllProps() {
  return (
    <PageFooter dataHook="dataHook" className="className" divider={false}>
      <PageFooter.Start />
      <PageFooter.Center />
      <PageFooter.End />
    </PageFooter>
  );
}

async function testkits() {
  const testkit = pageFooterTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = pageFooterEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await pageFooterPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
