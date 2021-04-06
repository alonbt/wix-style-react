import * as React from 'react';
import SkeletonRectangle from '..';
import { skeletonRectangleTestkitFactory } from '../../../testkit';
import { skeletonRectangleTestkitFactory as skeletonRectangleEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { skeletonRectangleTestkitFactory as skeletonRectanglePuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function skeletonRectangleWithMandatoryProps() {
  return <SkeletonRectangle />;
}

function skeletonRectangleWithAllProps() {
  return (
    <SkeletonRectangle
      dataHook="dataHook"
      className="className"
      width="100%"
      height="100%"
      margin="auto"
      marginRight="3px"
      marginLeft="3px"
      marginTop="4px"
      marginBottom="4px"
    />
  );
}

async function testkits() {
  const testkit = skeletonRectangleTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = skeletonRectangleEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await skeletonRectanglePuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
