import * as React from 'react';
import FunnelChart from '..';
import { funnelChartTestkitFactory } from '../../../testkit';
import { funnelChartTestkitFactory as funnelChartEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { funnelChartTestkitFactory as funnelChartPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

const data = [
  { value: 1000, label: 'visits' },
  { value: 800, label: 'views' },
];

function funnelChartWithMandatoryProps() {
  return <FunnelChart data={data}/>;
}

function funnelChartWithAllProps() {
  return (
    <FunnelChart
      dataHook="dataHook"
      className="className"
      data={data}
      hideDifferenceBadge
      differenceBadgeTooltipContent={({currentIndex, difference}) =>
        `${difference} from ${data[currentIndex].label} moved to ${data[currentIndex + 1].label}`
      }
      onDifferenceBadgeTooltipShow={({currentIndex, difference}) =>
        console.log(`${difference} from ${data[currentIndex].label} moved to ${data[currentIndex + 1].label}`)
      }
    />
  );
}

async function testkits() {
  const testkit = funnelChartTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = funnelChartEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await funnelChartPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
