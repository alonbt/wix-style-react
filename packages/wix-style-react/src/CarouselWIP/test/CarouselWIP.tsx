import * as React from 'react';
import CarouselWIP from '..';
import { CarouselWIPTestkit } from '../../../testkit';
import { CarouselWIPTestkit as CarouselWIPEnzymeTestkit } from '../../../testkit/enzyme';
import { CarouselWIPTestkit as CarouselWIPPuppeteerTestkit } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function carouselWIPWithMandatoryProps() {
  return <CarouselWIP />;
}

function carouselWIPWithAllProps() {
  return (
    <CarouselWIP
      dataHook="dataHook"
      className="className"
      images={[
        {
          src: 'xxx',
        },
      ]}
      imagesPosition="50%"
      imagesFit="cover"
      buttonSkin="inverted"
      infinite
      autoplay
      dots
      variableWidth
      initialSlideIndex={1}
      afterChange={(currentSlide: number) => {}}
      beforeChange={(currentSlide: number, nextSlide: number) => {}}
      controlsPosition="bottom"
      controlsSize="medium"
      controlsStartEnd="disabled"
      showControlsShadow
      slidingType="align-to-start"
      startEndOffset={8}
    />
  );
}

async function testkits() {
  const testkit = CarouselWIPTestkit({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = CarouselWIPEnzymeTestkit({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await CarouselWIPPuppeteerTestkit({
    dataHook: 'hook',
    page,
  });
}
