import * as React from 'react';
import PageSection from '..';
import { PageSectionTestkit } from '../../../testkit';
import { PageSectionTestkit as PageSectionEnzymeTestkit } from '../../../testkit/enzyme';
import { PageSectionTestkit as PageSectionPuppeteerTestkit } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function pageSectionWithMandatoryProps() {
  return <PageSection title='title'/>;
}

function pageSectionWithAllProps() {
  return (
    <PageSection
      dataHook="dataHook"
      className="className"
      title="title"
      subtitle="subtitle"
      actionsBar={<div/>}
      showDivider
    />
  );
}

async function testkits() {
  const testkit = PageSectionTestkit({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = PageSectionEnzymeTestkit({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await PageSectionPuppeteerTestkit({
    dataHook: 'hook',
    page,
  });
}
