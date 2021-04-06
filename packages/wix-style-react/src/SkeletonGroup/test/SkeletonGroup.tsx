import * as React from 'react';
import SkeletonGroup from '..';
import { skeletonGroupTestkitFactory } from '../../../testkit';
import { skeletonGroupTestkitFactory as skeletonGroupEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { skeletonGroupTestkitFactory as skeletonGroupPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function skeletonGroupWithMandatoryProps() {
  return <SkeletonGroup />;
}

function skeletonGroupWithAllProps() {
  return (
    <SkeletonGroup dataHook="dataHook" className="className" skin="light" />
  );
}

async function testkits() {
  const testkit = skeletonGroupTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = skeletonGroupEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await skeletonGroupPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
