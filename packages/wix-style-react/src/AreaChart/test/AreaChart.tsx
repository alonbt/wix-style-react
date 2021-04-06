import * as React from 'react';
import AreaChart from '..';
import { areaChartTestkitFactory } from '../../../testkit';
import { areaChartTestkitFactory as areaChartEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { areaChartTestkitFactory as areaChartPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function areaChartWithMandatoryProps() {
  return (
    <AreaChart
      data={[
        {
          value: 5698,
          label: '12/9',
        },
        {
          value: 1170,
          label: '13/9',
        },
      ]}
    />
  );
}

function areaChartWithAllProps() {
  return (
    <AreaChart
      data={[
        {
          value: 5698,
          label: '12/9',
        },
        {
          value: 1170,
          label: '13/9',
        },
      ]}
      tooltipContent={(item, index) => {
        return [`${item.label}`, `${item.value}$ from your orders`];
      }}
      onTooltipShow={() => console.log('showing tooltip')}
      maxYTicksLimit={6}
      dataHook="dataHook"
      className="className"
    />
  );
}

async function testkits() {
  const testkit = areaChartTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = areaChartEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await areaChartPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
