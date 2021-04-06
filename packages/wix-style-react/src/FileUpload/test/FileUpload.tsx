import * as React from 'react';
import FileUpload from '..';
import { fileUploadTestkitFactory } from '../../../testkit';
import { fileUploadTestkitFactory as fileUploadEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { fileUploadTestkitFactory as fileUploadPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';
import Button from '../../Button';

function fileUploadWithMandatoryProps() {
  return (
    <FileUpload
      onChange={() => {}}
      children={({ openFileUploadDialog }) => (
        <Button onClick={openFileUploadDialog} />
      )}
    />
  );
}
function fileUploadWithAllProps() {
  return (
    <FileUpload
      dataHook="dataHook"
      className="className"
      onChange={() => {}}
      accept="jpg"
      capture="user"
      multiple
      name="name"
      children={({ openFileUploadDialog }) => (
        <Button onClick={openFileUploadDialog} />
      )}
    />
  );
}

async function testkits() {
  const testkit = fileUploadTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = fileUploadEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await fileUploadPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
