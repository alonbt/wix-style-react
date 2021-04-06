import * as React from 'react';
import CheckToggle from '..';
import { checkToggleTestkitFactory } from '../../../testkit';
import { checkToggleTestkitFactory as checkToggleEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { checkToggleTestkitFactory as checkTogglePuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';
import { ChangeEvent } from 'react';

function checkToggleWithMandatoryProps() {
  return <CheckToggle />;
}

function checkToggleWithAllProps() {
  return (
    <CheckToggle
      dataHook="dataHook"
      className="className"
      checked
      onChange={(event: ChangeEvent) => {}}
      disabled
      size="small"
      skin="standard"
      tooltipContent="hello"
      tooltipProps={{}}
    />
  );
}

async function testkits() {
  const testkit = checkToggleTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = checkToggleEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await checkTogglePuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
