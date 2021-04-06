import * as React from 'react';
import <%= ComponentName %> from '..';
import { <%= ComponentName %>Testkit } from '../../../testkit';
import { <%= ComponentName %>Testkit as <%= ComponentName %>EnzymeTestkit } from '../../../testkit/enzyme';
import { <%= ComponentName %>Testkit as <%= ComponentName %>PuppeteerTestkit } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function <%= componentName %>WithMandatoryProps() {
  return <<%= ComponentName %> />;
}

function <%= componentName %>WithAllProps() {
  return (
    <<%= ComponentName %>
      dataHook="dataHook"
      className="className"
      id="id"
      buttonText="buttonText"
    />
  );
}

async function testkits() {
  const testkit = <%= ComponentName %>Testkit({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = <%= ComponentName %>EnzymeTestkit({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await <%= ComponentName %>PuppeteerTestkit({
    dataHook: 'hook',
    page,
  });
}
