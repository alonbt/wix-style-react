import * as React from 'react';
import AvatarGroup from '..';
import { AvatarGroupTestkit } from '../../../testkit';
import { AvatarGroupTestkit as AvatarGroupEnzymeTestkit } from '../../../testkit/enzyme';
import { AvatarGroupTestkit as AvatarGroupPuppeteerTestkit } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function avatarGroupWithMandatoryProps() {
  return <AvatarGroup items={[{name: 'first user'}, {name: 'second user'}, {name: 'third avatar'}]}/>;
}

function avatarGroupWithAllProps() {
  return (
    <AvatarGroup
      items={[{name: 'first user ', color: 'A1'}, {name: 'second user', color: 'A2'}, {name: 'third avatar', color: 'A3'},{name: 'forth avatar', color: 'A4'},{name: 'fifth avatar', color: 'A5'},{name: 'sixth avatar', color: 'A6'}]}
      dataHook="avatar-dataHook"
      className="className"
      type="stretched"
      size="small"
      showDivider={true}
      maxItems={4}
    />
  );
}

async function testkits() {
  const testkit = AvatarGroupTestkit({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = AvatarGroupEnzymeTestkit({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await AvatarGroupPuppeteerTestkit({
    dataHook: 'hook',
    page,
  });
}
