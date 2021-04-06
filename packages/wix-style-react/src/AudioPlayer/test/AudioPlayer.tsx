import * as React from 'react';
import AudioPlayer from '..';
import { audioPlayerTestkitFactory } from '../../../testkit';
import { audioPlayerTestkitFactory as audioPlayerEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { audioPlayerTestkitFactory as audioPlayerPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function audioPlayerWithMandatoryProps() {
  return <AudioPlayer src="example.mp3" />;
}

function audioPlayerWithAllProps() {
  return (
    <AudioPlayer
      dataHook="dataHook"
      className="className"
      src="example.mp3"
      format="mp3"
      webAudioAPI={false}
      preload="metadata"
      onLoad={() => {}}
      onLoadError={(_msg: string) => {}}
      onEnd={() => {}}
      onPause={() => {}}
      onPlay={() => {}}
      onSeek={() => {}}
    />
  );
}

async function testkits() {
  const testkit = audioPlayerTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = audioPlayerEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await audioPlayerPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
