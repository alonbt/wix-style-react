import * as React from 'react';
import AnalyticsSummaryCard from '..';
import { analyticsSummaryCardTestkitFactory } from '../../../testkit';
import { analyticsSummaryCardTestkitFactory as analyticsSummaryCardEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { analyticsSummaryCardTestkitFactory as analyticsSummaryCardPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';
import IconButton from '../../IconButton';

const chartData = [
  { label: new Date('Thu Sep 4 2020'), value: 3 },
  { label: new Date('Thu Sep 5 2020'), value: 17 },
  { label: new Date('Thu Sep 6 2020'), value: 18 },
];
// dummy
const props = {
  title: 'Sessions',
  titleTooltip: 'tooltip',
  value: '1,9K',
  valueTooltip: '1,943',
  trend: 12,
  invertedTrend: false,
  isLoading: false,
  isTrendVisible: true,
  ctaButton:
    <IconButton size="tiny">
      Icon
    </IconButton>
  ,
  onCTAClick: () => console.log('refresh click'),
  onClick: () => console.log('general click'),
  onChartHover: () => console.log('on chart hover'),
  chartWidth: 169,
  chartData,
  chartColorHex: '#3899ec',
  footer: <div> This is footer</div>,
}

function analyticsSummaryCardWithMandatoryProps() {
  return <AnalyticsSummaryCard {...props}
  />;
}

function analyticsSummaryCardWithAllProps() {
  return (
    <AnalyticsSummaryCard {...props}
    />
  );
}

async function testkits() {
  const testkit = analyticsSummaryCardTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = analyticsSummaryCardEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await analyticsSummaryCardPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
