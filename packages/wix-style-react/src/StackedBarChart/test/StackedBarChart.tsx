import * as React from 'react';
import StackedBarChart from '..';
import { stackedBarChartTestkitFactory } from '../../../testkit';
import { stackedBarChartTestkitFactory as stackedBarChartEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { stackedBarChartTestkitFactory as stackedBarChartPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function stackedBarChartWithMandatoryProps() {
  return <StackedBarChart />;
}

function stackedBarChartWithAllProps() {
  return (
    <StackedBarChart
      dataHook="dataHook"
      className="className"
      data={[
        {
          label: 'xxx',
          values: [1, 2, 3],
        },
      ]}
      tooltipTemplate={item => 'hello'}
      width={800}
      height={200}
      margin={{ top: 40, bottom: 40, left: 80, right: 10 }}
      yAxisTickFormat={(raw, formatted) => `${formatted} $`}
    />
  );
}

async function testkits() {
  const testkit = stackedBarChartTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = stackedBarChartEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await stackedBarChartPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
