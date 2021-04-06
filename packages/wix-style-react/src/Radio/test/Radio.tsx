import * as React from 'react';
import Radio from '..';
import { radioTestkitFactory } from '../../../testkit';
import { radioTestkitFactory as radioEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { radioTestkitFactory as radioPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function radioWithMandatoryProps() {
  return <Radio />;
}

function radioWithAllProps() {
  return (
    <Radio
      dataHook="dataHook"
      className="className"
      checked={true}
      disabled={false}
      label="Radio label"
      name="Radio name"
      alignItems="center"
      onChange={() => {}}
    />
  );
}

async function testkits() {
  const testkit = radioTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = radioEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await radioPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
