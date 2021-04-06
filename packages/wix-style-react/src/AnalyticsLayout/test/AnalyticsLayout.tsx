import * as React from 'react';
import AnalyticsLayout from '..';
import { AnalyticsLayoutTestkit } from '../../../testkit';
import { analyticsLayoutTestkitFactory as layouterEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { analyticsLayoutTestkitFactory as layouterPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function layouterWithMandatoryProps() {
  return (
    <AnalyticsLayout items={[1, 2, 3, 4, 5, 6, 7, 8]}>
      {item => (
        <AnalyticsLayout.Cell>
          <div style={{ padding: 20 }}>item {item}</div>
        </AnalyticsLayout.Cell>
      )}
    </AnalyticsLayout>
  );
}

function layouterWithAllProps() {
  return (
    <AnalyticsLayout
      dataHook="dataHook"
      className="className"
      items={[1, 2, 3, 4, 5, 6, 7, 8]}
    >
      {item => (
        <AnalyticsLayout.Cell dataHook="dh" disableHighlight>
          <div style={{ padding: 20 }}>item {item}</div>
        </AnalyticsLayout.Cell>
      )}
    </AnalyticsLayout>
  );
}

async function testkits() {
  const testkit = AnalyticsLayoutTestkit({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = layouterEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await layouterPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
