import * as React from 'react';
import MessageModalLayout from '..';
import { messageModalLayoutTestkitFactory } from '../../../testkit';
import { messageModalLayoutTestkitFactory as messageModalLayoutEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { messageModalLayoutTestkitFactory as messageModalLayoutPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function messageModalLayoutWithMandatoryProps() {
  return <MessageModalLayout />;
}

function messageModalLayoutWithAllProps() {
  return (
    <MessageModalLayout
      className="cn"
      dataHook="dh"
      theme="standard"
      onCloseButtonClick={() => {}}
      onHelpButtonClick={() => {}}
      illustration={<div />}
      title="title"
      content={<div />}
      children={<div />}
      actionsSize="small"
      primaryButtonText="primaryButtonText"
      primaryButtonProps={{
        as: 'a',
        className: 'cls',
        disabled: true,
        fullWidth: true,
        prefixIcon: <div />,
        priority: 'primary',
        skin: 'dark',
        size: 'small',
        suffixIcon: <div />,
      }}
      primaryButtonOnClick={() => {}}
      secondaryButtonText="secondaryButtonText"
      secondaryButtonProps={{
        as: 'a',
        className: 'cls',
        disabled: true,
        fullWidth: true,
        prefixIcon: <div />,
        skin: 'dark',
        size: 'small',
        suffixIcon: <div />,
      }}
      secondaryButtonOnClick={() => {}}
      sideActions={<div />}
      footnote={<div />}
    />
  );
}

async function testkits() {
  const testkit = messageModalLayoutTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = messageModalLayoutEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await messageModalLayoutPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
