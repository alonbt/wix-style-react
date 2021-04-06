import * as React from 'react';
import Skeleton from '..';
import { skeletonTestkitFactory } from '../../../testkit';
import { skeletonTestkitFactory as skeletonEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { skeletonTestkitFactory as skeletonPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function SkeletonWithMandatoryProps() {
  return <Skeleton content={[{ type: 'line', size: 'small' }]} />;
}

function SkeletonWithAllProps() {
  return (
    <Skeleton
      dataHook="hook"
      className="class"
      content={[{ size: 'full', type: 'line' }]}
      alignment="middle"
      spacing="large"
    />
  );
}

async function testkits() {
  const testkit = skeletonTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = skeletonEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await skeletonPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
