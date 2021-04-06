import * as React from 'react';
import RadioGroup from '..';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';
import { radioGroupTestkitFactory } from '../../../testkit';
import { radioGroupTestkitFactory as radioGroupEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { radioGroupTestkitFactory as radioGroupPuppeteerTestkitFactory } from '../../../testkit/puppeteer';

function RadioGroupWithMandatoryProps() {
  return <RadioGroup />;
}

function RadioGroupWithAllProps() {
  return (
    <RadioGroup
      dataHook="hook"
      disabled
      disabledRadios={[1, '2']}
      display="horizontal"
      lineHeight="10px"
      onChange={_value => {}}
      selectionArea="always"
      selectionAreaSkin="filled"
      selectionAreaPadding= "10px"
      spacing="20px"
      type="button"
      vAlign="center"
      value={1}
      name="radioGroup"
    >
      <RadioGroup.Radio
        checked
        content={<div />}
        dataHook="hook"
        disabled
        lineHeight="20px"
        name="name"
        onChange={_value => {}}
        selectionArea="always"
        selectionAreaSkin="filled"
        selectionAreaPadding= "10px"
        style={{ paddingTop: '10px' }}
        tabIndex={1}
        type="button"
        vAlign="center"
        value="val"
      />
    </RadioGroup>
  );
}

async function testkits() {
  const testkit = radioGroupTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = radioGroupEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await radioGroupPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
