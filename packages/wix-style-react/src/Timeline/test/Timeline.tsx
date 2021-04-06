import * as React from 'react';
import Timeline from '..';
import { timelineTestkitFactory } from '../../../testkit';
import { timelineTestkitFactory as timelineEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { timelineTestkitFactory as timelinePuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function timelineWithMandatoryProps() {
  return <Timeline items={[]} />;
}

function timelineWithAllProps() {
  return (
    <Timeline
      dataHook="dataHook"
      className="className"
      gap="30px"
      items={[
        {
          label: <div>label</div>,
          labelAction: <div>labelAction</div>,
          customPrefix: <div>customPrefix</div>,
          suffix: <div>suffix</div>,
        }
      ]}
    />
  )
}

async function testkits() {
  const testkit = timelineTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = timelineEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await timelinePuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
