import * as React from 'react';
import MarketingPageLayout from '..';
import { marketingPageLayoutTestkitFactory } from '../../../testkit';
import { marketingPageLayoutTestkitFactory as marketingPageLayoutEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { marketingPageLayoutTestkitFactory as marketingPageLayoutPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function marketingPageLayoutWithMandatoryProps() {
  return <MarketingPageLayout />;
}

function marketingPageLayoutWithAllProps() {
  return (
    <MarketingPageLayout
      dataHook="dataHook"
      className="className"
      horizontalSize="large"
      verticalSize="large"
      removeImageHorizontalPadding={false}
      removeImageVerticalPadding={false}
      content={<div>content</div>}
      image={<div>image</div>}
      footer={<div>footer</div>}
    />
  );
}

async function testkits() {
  const testkit = marketingPageLayoutTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = marketingPageLayoutEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await marketingPageLayoutPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
