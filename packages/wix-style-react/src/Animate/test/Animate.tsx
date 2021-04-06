import * as React from 'react';
import Animate from '..';
import { animateTestkitFactory } from '../../../testkit';
import { animateTestkitFactory as animateEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { animateTestkitFactory as animatePuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function animateWithMandatoryProps() {
  return <Animate children={<div/>} />;
}

function animateWithAllProps() {
  return (
    <Animate
      dataHook="dataHook"
      children={<div/>}
      onStart={() => {}}
      onEnd={() => {}}
      delay={500}
      animateInlineStyle={{}}
      animateClasses='some-class'
    />
  );
}

async function testkits() {
  const testkit = animateTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = animateEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await animatePuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
