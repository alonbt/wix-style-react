import * as React from 'react';
import SparklineChart from '..';
import { sparklineChartTestkitFactory } from '../../../testkit';
import { sparklineChartTestkitFactory as sparklineChartEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { sparklineChartTestkitFactory as sparklineChartPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

const data = [
  { label: new Date('Thu Sep 4 2020'), value: 3 },
  { label: new Date('Thu Sep 5 2020'), value: 17 },
  { label: new Date('Thu Sep 6 2020'), value: 18 },
];

function sparklineChartWithMandatoryProps() {
  return <SparklineChart data={data} />;
}

function sparklineChartWithAllProps() {
  return (
    <SparklineChart
      dataHook="dataHook"
      className="className"
      data={data}
      color={'#fff000'}
      width={400}
      height={80}
      highlightedStartingIndex={1}
      getTooltipContent={(index: number): React.ReactNode => (
        <div>tool tip content</div>
      )}
      onHover={index => `Point at index ${index} is hovered!`}
      animationDuration={300}
    />
  );
}

async function testkits() {
  const testkit = sparklineChartTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = sparklineChartEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await sparklineChartPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
