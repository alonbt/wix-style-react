import * as React from 'react';
import Accordion, {
  accordionItemBuilder,
  accordionSectionItemBuilder,
} from '..';
import { accordionTestkitFactory } from '../../../testkit';
import { accordionTestkitFactory as accordionEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { accordionTestkitFactory as accordionPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function AccordionWithMandatoryProps() {
  return <Accordion />;
}

function AccordionWithAllProps() {
  return (
    <Accordion
      dataHook="hook"
      multiple
      skin="light"
      hideShadow
      size="small"
      items={[
        {
          buttonType: 'button',
          collapseLabel: <div />,
          children: <div />,
          expandLabel: <div />,
          icon: <div />,
          title: <div />,
          disabled: true,
          onToggle: () => {},
          onMouseEnter: () => {},
          onMouseLeave: () => {},
          open: true,
          initiallyOpen: true,
          className: 'class',
        },
      ]}
    />
  );
}

function AccordionWithBuilders() {
  return (
    <Accordion
      items={[
        accordionItemBuilder({
          buttonType: 'button',
          collapseLabel: <div />,
          children: <div />,
          expandLabel: <div />,
          icon: <div />,
          title: <div />,
          disabled: true,
          onToggle: () => {},
          onMouseEnter: () => {},
          onMouseLeave: () => {},
          open: true,
          initiallyOpen: true,
          className: 'class',
        }),
        accordionSectionItemBuilder({
          title: 'hello!',
        }),
      ]}
    />
  );
}

async function testkits() {
  const testkit = accordionTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = accordionEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await accordionPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
