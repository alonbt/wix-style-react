import * as React from 'react';
import AddressInputItem, { addressInputItemBuilder } from '..';
import { addressInputItemTestkitFactory } from '../../../testkit';
import { addressInputItemTestkitFactory as addressInputItemEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { addressInputItemTestkitFactory as addressInputItemPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function addressInputItemWithMandatoryProps() {
  return <AddressInputItem />;
}

function addressInputItemBuilderWithAllProps() {
  const { disabled, id, overrideOptionStyle, value, label } = addressInputItemBuilder({
    id: '1',
    dataHook: 'data-hook',
    className: 'cls',
    disabled: true,
    prefix: <div />,
    secondaryLabel: 'secondary label',
    suffix: <div />,
    mainLabel: 'main label',
    optionLayout: 'double-line',
    displayLabel: 'display label',
    onClick: ()=>{},
  });
}

function addressInputItemWithAllProps() {
  return (
    <AddressInputItem
      className="some-class"
      dataHook="hi"
      disabled
      onClick={event => {}}
      prefix={<div />}
      secondaryLabel="secondary label"
      suffix={<div />}
      mainLabel="main label"
      optionLayout='double-line'
    />
  );
}

async function testkits() {
  const testkit = addressInputItemTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = addressInputItemEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await addressInputItemPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
