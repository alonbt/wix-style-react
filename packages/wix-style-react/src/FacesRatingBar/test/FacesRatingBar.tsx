import * as React from 'react';
import FacesRatingBar from '..';
import { facesRatingBarTestkitFactory } from '../../../testkit';
import { facesRatingBarTestkitFactory as facesRatingBarEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { facesRatingBarTestkitFactory as facesRatingBarPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function facesRatingBarWithMandatoryProps() {
  return <FacesRatingBar value={2} />;
}

function facesRatingBarWithAllProps() {
  return (
    <FacesRatingBar
      dataHook="dataHook"
      className="className"
      readOnly={false}
      descriptionValues={['Strong Negative', 'Negative', 'Neutral', 'Positive', 'Strong Positive']}
      value={2}
      onChange={() => {}}
    />
  );
}

async function testkits() {
  const testkit = facesRatingBarTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = facesRatingBarEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await facesRatingBarPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
