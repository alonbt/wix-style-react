import * as React from 'react';
import TestimonialList from '..';
import { testimonialListTestkitFactory } from '../../../testkit';
import { testimonialListTestkitFactory as testimonialListEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { testimonialListTestkitFactory as testimonialListPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function testimonialListWithMandatoryProps() {
  return <TestimonialList />;
}

function testimonialListWithAllProps() {
  return (
    <TestimonialList
      dataHook="dataHook"
      className="className"
      cols={3}
      testimonials={[
        {
          avatar: <div />,
          text: 'I love it! This product is exactly what I needed.',
          authorName: 'Guy in glasses'
        },
        {
          avatar: <div />,
          text: 'Amazing! It helped me to solve my problems.',
          authorName: 'Person with a hat'
        },
        {
          avatar: <div />,
          text: 'A perfect tool for my every day tasks.',
          authorName: 'Smiling lady'
        },
    ]}
    />
  );
}

async function testkits() {
  const testkit = testimonialListTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = testimonialListEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await testimonialListPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
