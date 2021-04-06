import * as React from 'react';
import SkeletonCircle from '..';
import { skeletonCircleTestkitFactory } from '../../../testkit';
import { skeletonCircleTestkitFactory as skeletonCircleEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { skeletonCircleTestkitFactory as skeletonCirclePuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function skeletonCircleWithMandatoryProps() {
  return <SkeletonCircle />;
}

function skeletonCircleWithAllProps() {
  return (
    <SkeletonCircle
      dataHook="dataHook"
      className="className"
      diameter="100%"
      margin="auto"
      marginBottom="3px"
      marginTop="3px"
      marginLeft="4px"
      marginRight="4px"
    />
  );
}

async function testkits() {
  const testkit = skeletonCircleTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = skeletonCircleEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await skeletonCirclePuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
