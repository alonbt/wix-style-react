import * as React from 'react';
import ComposerSidebar, { ComposerSidebarItem } from '..';
import { composerSidebarTestkitFactory } from '../../../testkit';
import { composerSidebarTestkitFactory as composerSidebarEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { composerSidebarTestkitFactory as composerSidebarPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';
import {
  Rename,
  CropRotate,
  MagicWand,
  Adjust,
  CutOut,
} from 'wix-ui-icons-common';

const items: ComposerSidebarItem[] = [
  {
    id: 0,
    label: 'Crop & Rotate',
    icon: <CropRotate />,
  },
  {
    id: 1,
    label: 'Enhance',
    icon: <MagicWand />,
  },
  {
    id: 2,
    label: 'Adjust',
    icon: <Adjust />,
  },
  {
    id: 3,
    label: 'Cut Out',
    icon: <CutOut />,
  },
  {
    id: 4,
    label: 'Text',
    icon: <Rename />,
  },
];

function composerSidebarWithMandatoryProps() {
  return <ComposerSidebar />;
}

function composerSidebarWithAllProps() {
  return (
    <ComposerSidebar
      items={items}
      selectedId={2}
      className="className"
      onClick={() => 'Clicked!'}
      size="medium"
      labelPlacement="bottom"
    />
  );
}

async function testkits() {
  const testkit = composerSidebarTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = composerSidebarEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await composerSidebarPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
