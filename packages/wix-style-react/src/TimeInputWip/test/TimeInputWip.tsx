import * as React from 'react';
import TimeInputWip from '..';
import { TimeInputWipTestkit } from '../../../testkit';
import { TimeInputWipTestkit as TimeInputWipEnzymeTestkit } from '../../../testkit/enzyme';
import { TimeInputWipTestkit as TimeInputWipPuppeteerTestkit } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function timeInputWipWithMandatoryProps() {
  return <TimeInputWip />;
}

function timeInputWipWithAllProps() {
  return (
    <TimeInputWip
      dataHook="dataHook"
      className="className"
      hour12
      border="round"
      numberingSystem="latn"
      disabled
      onChange={() => {}}
      placeholder="Placeholder"
      prefix={<div>Prefix</div>}
      size="medium"
      status="warning"
      statusMessage="status message"
      suffix={<div>suffix</div>}
      step={20}
      timeStyle="full"
      timeZone="Asia/Shanghai"
      value={new Date(1999, 12, 12, 20, 20, 0)}
      width="auto"
    />
  );
}

async function testkits() {
  const testkit = TimeInputWipTestkit({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = TimeInputWipEnzymeTestkit({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await TimeInputWipPuppeteerTestkit({
    dataHook: 'hook',
    page,
  });
}
