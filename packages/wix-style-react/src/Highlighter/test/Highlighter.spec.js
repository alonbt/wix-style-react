import React from 'react';
import Highlighter from '..';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/unit';
import highlighterDriverFactory from '../Highlighter.driver';
import { highlighterDriverFactory as highlighterUniDriverFactory } from '../Highlighter.uni.driver';
import {
  isTestkitExists,
  isEnzymeTestkitExists,
} from '../../../test/utils/testkit-sanity';
import { highlighterTestkitFactory } from '../../../testkit/index';
import { highlighterTestkitFactory as enzymeHighlighterTestkitFactory } from '../../../testkit/enzyme';
import { mount } from 'enzyme';

describe('Highlighter', () => {
  afterEach(cleanup);

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(highlighterUniDriverFactory));
  });

  describe('[sync]', () => {
    runTests(createRendererWithDriver(highlighterDriverFactory));
  });

  function runTests(render) {
    it('should show highlighted text', async () => {
      const expectedResult =
        '<span><strong>Opt</strong><span>ion 1</span></span>';

      const { driver } = render(
        <Highlighter match="Opt">Option 1</Highlighter>,
      );

      expect(await driver.exists()).toEqual(true);
      expect(await driver.html()).toEqual(expectedResult);
      expect((await driver.getElement()).outerHTML).toEqual(
        '<span><span><strong>Opt</strong><span>ion 1</span></span></span>',
      );
    });

    it('should show highlighted text on first children level', async () => {
      const expectedResult = `<div><span><strong>Opt</strong><span>ion 1</span></span></div>`;

      const { driver } = render(
        <Highlighter match="Opt">
          <div>Option 1</div>
        </Highlighter>,
      );

      expect(await driver.html()).toEqual(expectedResult);
    });

    it('should show highlighted text on second children level', async () => {
      const expectedResult = `<span><span><span><strong>Opt</strong><span>ion</span></span></span></span>`;

      const { driver } = render(
        <Highlighter match="Opt">
          <span>
            <span>Option</span>
          </span>
        </Highlighter>,
      );

      expect(await driver.html()).toEqual(expectedResult);
    });

    it('should show highlighted text on array of children', async () => {
      const expectedResult = `<div><span><span><strong>Opt</strong><span>ion 1</span></span></span></div><div><span><span><strong>Opt</strong><span>ion 2</span></span></span></div>`;

      const { driver } = render(
        <Highlighter match="Opt">
          <div>
            <span>Option 1</span>
          </div>
          <div>
            <span>Option 2</span>
          </div>
        </Highlighter>,
      );

      expect(await driver.html()).toEqual(expectedResult);
    });

    it('should show highlighted text on array of different children type', async () => {
      const expectedResult = `<span><strong>Opt</strong><span>ion 2</span></span><div><span><span><strong>Opt</strong><span>ion 1</span></span></span></div>`;

      const { driver } = render(
        <Highlighter match="Opt">
          Option 2
          <div>
            <span>Option 1</span>
          </div>
        </Highlighter>,
      );

      expect(await driver.html()).toEqual(expectedResult);
    });

    it('should show highlighted text on multiple match occurrences', async () => {
      const expectedResult = `<aside><span><span>O</span><strong>p</strong><span>tion</span><strong>p</strong></span></aside>`;

      const { driver } = render(
        <Highlighter match="p">
          <aside>Optionp</aside>
        </Highlighter>,
      );

      expect(await driver.html()).toEqual(expectedResult);
    });

    it('should not be caseSensitive by default', async () => {
      const expectedResult = `<aside><span><span>O</span><strong>p</strong><span>tion</span><strong>P</strong></span></aside>`;

      const { driver } = render(
        <Highlighter match="p">
          <aside>OptionP</aside>
        </Highlighter>,
      );

      expect(await driver.html()).toEqual(expectedResult);
    });

    it('should save styles of children', async () => {
      const expectedResult = `<div class="option-class"><div><span><span>Arizona</span></span></div><div class="some-class"></div></div>`;

      const { driver } = render(
        <Highlighter match="p">
          <div className="option-class">
            <div>Arizona</div>
            <div className="some-class" />
          </div>
        </Highlighter>,
      );

      expect(await driver.html()).toEqual(expectedResult);
    });

    it('should save dom structure of children', async () => {
      const expectedResult = `<div class="option-class"><div><span><span><span><span>Arizona</span></span></span></span></div><div class="some-class"><div class="some-class-2"></div></div></div>`;

      const { driver } = render(
        <Highlighter match="p">
          <div className="option-class">
            <div>
              <span>
                <span>Arizona</span>
              </span>
            </div>
            <div className="some-class">
              <div className="some-class-2" />
            </div>
          </div>
        </Highlighter>,
      );

      expect(await driver.html()).toEqual(expectedResult);
    });

    describe('testkit', () => {
      it('should exist', () => {
        expect(
          isTestkitExists(<Highlighter />, highlighterTestkitFactory),
        ).toBe(true);
      });
    });

    describe('enzyme testkit', () => {
      it('should exist', () => {
        expect(
          isEnzymeTestkitExists(
            <Highlighter />,
            enzymeHighlighterTestkitFactory,
            mount,
          ),
        ).toBe(true);
      });
    });
  }
});
