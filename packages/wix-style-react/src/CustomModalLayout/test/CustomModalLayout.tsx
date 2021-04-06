import * as React from 'react';
import CustomModalLayout from '..';
import { customModalLayoutTestkitFactory } from '../../../testkit';
import { customModalLayoutTestkitFactory as customModalLayoutEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { customModalLayoutTestkitFactory as customModalLayoutPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function customModalLayoutWithMandatoryProps() {
  return <CustomModalLayout />;
}

function customModalLayoutWithAllProps() {
  return (
    <CustomModalLayout
      className="cn"
      dataHook="dh"
      theme="standard"
      onCloseButtonClick={() => {}}
      title="title"
      subtitle="subtitle"
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
      width="3px"
      height="50%"
      maxHeight={500}
      showHeaderDivider
      showFooterDivider
      hideContentDividers
    />
  );
}

function customModalLayoutWithCustomTitle() {
  return (
    <CustomModalLayout
      title={<CustomModalLayout.Title>Hello</CustomModalLayout.Title>}
    />
  );
}

async function testkits() {
  const testkit = customModalLayoutTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = customModalLayoutEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await customModalLayoutPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
