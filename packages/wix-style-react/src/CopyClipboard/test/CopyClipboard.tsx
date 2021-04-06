import * as React from 'react';
import CopyClipboard from '..';
import { copyClipboardTestkitFactory } from '../../../testkit';
import { copyClipboardTestkitFactory as copyClipboardEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { copyClipboardTestkitFactory as copyClipboardPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';
import TextButton from '../../TextButton';

function copyClipboardWithMandatoryProps() {
  return (
    <CopyClipboard
      value="value"
      children={({ copyToClipboard }) => (
        <TextButton onClick={() => copyToClipboard()}>
          Copy to clipboard
        </TextButton>
      )}
    />
  );
}

function copyClipboardWithAllProps() {
  return (
    <CopyClipboard
      dataHook="dataHook"
      className="className"
      value="value"
      children={({ isCopied, copyToClipboard, reset }) => (
        <TextButton onClick={() => (isCopied ? reset() : copyToClipboard())}>
          {isCopied ? 'Copy' : 'Copied!'}
        </TextButton>
      )}
      onCopy={() => {}}
      resetTimeout={0}
    />
  );
}

async function testkits() {
  const testkit = copyClipboardTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = copyClipboardEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await copyClipboardPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
