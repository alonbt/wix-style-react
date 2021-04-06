import * as React from 'react';
import FeatureList from '..';
import { featureListTestkitFactory } from '../../../testkit';
import { featureListTestkitFactory as featureListEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { featureListTestkitFactory as featureListPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function featureListWithMandatoryProps() {
  return <FeatureList />;
}

function featureListWithAllProps() {
  return (
    <FeatureList
      dataHook="dataHook"
      className="className"
      cols={3}
      features={[
      {
        image: <img alt="alt" />,
        title: 'Remove Wix Ads',
        text: "Enjoy a website that's completely your own brand by removing Wix ads.",
      },
      {
        image: <img alt="alt" />,
        title: 'Connect a Custom Domain',
        text: "Get your business found with a custom domain.",
      },
      {
        image: <img alt="alt" />,
        title: 'Accept Online Payment',
        text: "Let your customers and clients pay you online at checkout.",
      },
    ]}
    />
  );
}

async function testkits() {
  const testkit = featureListTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = featureListEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await featureListPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
