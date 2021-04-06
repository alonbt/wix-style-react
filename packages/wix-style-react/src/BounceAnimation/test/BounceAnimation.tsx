import * as React from 'react';
import BounceAnimation from '..';
import { bounceAnimationTestkitFactory } from '../../../testkit';
import { bounceAnimationTestkitFactory as bounceAnimationEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { bounceAnimationTestkitFactory as bounceAnimationPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function bounceWithMandatoryProps() {
  return <BounceAnimation children={<div/>} />;
}

function bounceWithAllProps() {
  return (
    <BounceAnimation
      dataHook="dataHook"
      children={<div/>}
      active
      loop
      onStart={()=>{}}
      onEnd={()=>{}}
      delay={200}
    />
  );
}

async function testkits() {
  const testkit = bounceAnimationTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = bounceAnimationEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await bounceAnimationPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
