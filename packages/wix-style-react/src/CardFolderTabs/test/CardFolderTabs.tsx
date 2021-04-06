import * as React from 'react';
import CardFolderTabs from '..';
import { CardFolderTabsTestkit } from '../../../testkit';
import { CardFolderTabsTestkit as CardFolderTabsEnzymeTestkit } from '../../../testkit/enzyme';
import { CardFolderTabsTestkit as CardFolderTabsPuppeteerTestkit } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function CardFolderTabsWithMandatoryProps() {
  return (
    <CardFolderTabs activeId="1">
      <CardFolderTabs.Tab id="1" name="name" children={<div />} />
    </CardFolderTabs>
  );
}

function CardFolderTabsWithAllProps() {
  return (
    <CardFolderTabs
      dataHook="dataHook"
      activeId="1"
      maxTabWidth="120px"
      onTabChange={(tab: string) => {}}
    >
      <CardFolderTabs.Tab id="1" name="name" disabled>
        <div />
      </CardFolderTabs.Tab>
    </CardFolderTabs>
  );
}

async function testkits() {
  const testkit = CardFolderTabsTestkit({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = CardFolderTabsEnzymeTestkit({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await CardFolderTabsPuppeteerTestkit({
    dataHook: 'hook',
    page,
  });
}
