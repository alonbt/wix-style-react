import * as React from 'react';
import Dropzone from '..';
import { dropzoneTestkitFactory } from '../../../testkit';
import { dropzoneTestkitFactory as dropzoneEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { dropzoneTestkitFactory as dropzonePuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

type OnDropHandler = (files: File[]) => void;

function dropzoneWithMandatoryProps(onDrop: OnDropHandler) {
  return (
    <Dropzone onDrop={onDrop}>
      <Dropzone.Overlay>
        <span />
      </Dropzone.Overlay>
      <Dropzone.Content>
        <span />
      </Dropzone.Content>
    </Dropzone>
  );
}

function dropzoneWithAllProps(onDrop: OnDropHandler) {
  return <Dropzone dataHook="dataHook" className="className" onDrop={onDrop} />;
}

async function testkits() {
  const testkit = dropzoneTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = dropzoneEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await dropzonePuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
