import * as React from 'react';
import SelectableAccordion from '..';
import { selectableAccordionTestkitFactory } from '../../../testkit';
import { selectableAccordionTestkitFactory as selectableAccordionEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { selectableAccordionTestkitFactory as selectableAccordionPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function selectableAccordionWithMandatoryProps() {
  return <SelectableAccordion />;
}

function selectableAccordionWithAllProps() {
  return (
    <SelectableAccordion
      dataHook="dataHook"
      className="className"
      items={[
        {
          title: <div>hello</div>,
          subtitle: <div>hello</div>,
          content: <div>content</div>,
          initiallyOpen: true,
        },
      ]}
      type="checkbox"
      verticalPadding='small'
      onSelectionChanged={(ids: number[]) => {}}
    />
  );
}

async function testkits() {
  const testkit = selectableAccordionTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = selectableAccordionEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await selectableAccordionPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
