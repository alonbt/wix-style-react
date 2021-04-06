import * as React from 'react';
import TrendIndicator from '..';
import { trendIndicatorTestkitFactory } from '../../../testkit';
import { trendIndicatorTestkitFactory as trendIndicatorEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { trendIndicatorTestkitFactory as trendIndicatorPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function trendIndicatorWithMandatoryProps() {
  return <TrendIndicator value={10} />;
}

function trendIndicatorWithAllProps() {
  return (
    <TrendIndicator
      dataHook="dataHook"
      className="className"
      value={21}
      inverted
    />
  );
}

async function testkits() {
  const testkit = trendIndicatorTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = trendIndicatorEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await trendIndicatorPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
