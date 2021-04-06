import React from 'react';
import selectorDriverFactory from './Selector.driver';

import Selector from './Selector';
import { ASSET_PREFIX } from '../../test/utils';

import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../test/utils/unit';
import { selectorUniDriverFactory } from './Selector.uni.driver';

describe('Selector', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(selectorDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(selectorUniDriverFactory));
  });

  function runTests(render) {
    afterEach(() => cleanup());

    const defaultProps = {
      id: 1,
      title: 'title',
    };

    it('should be unchecked by default', async () => {
      const { driver } = render(<Selector {...defaultProps} />);
      expect(await driver.isChecked()).toBe(false);
    });

    it('should not render the subtitle by default', async () => {
      const { driver } = render(<Selector {...defaultProps} />);
      expect(await driver.subtitleTextDriver().exists()).toBe(false);
    });

    it('should not render the extra node', async () => {
      const { driver } = render(<Selector {...defaultProps} />);
      expect(await driver.hasExtraNode()).toBe(false);
    });

    it('should render the title', async () => {
      const { driver } = render(<Selector {...defaultProps} />);
      expect(await driver.titleTextDriver().getText()).toBe(defaultProps.title);
    });

    it('should render the subtitle', async () => {
      const props = { ...defaultProps, ...{ subtitle: 'sub title' } };
      const { driver } = render(<Selector {...props} />);
      expect(await driver.subtitleTextDriver().getText()).toBe('sub title');
    });

    it('should render the extra node', async () => {
      const props = { ...defaultProps, ...{ extraNode: 'extra text' } };
      const { driver } = render(<Selector {...props} />);
      expect(await driver.hasExtraNode()).toBe(true);
      expect((await driver.getExtraNode()).textContent).toBe('extra text');
    });

    it('should not render the image by default', async () => {
      const { driver } = render(<Selector {...defaultProps} />);
      expect(await driver.hasImage()).toBe(false);
    });

    it('should render the image', async () => {
      const { driver } = render(
        <Selector {...defaultProps} image={<img src="img.png" />} />,
      );
      expect(await driver.hasImage()).toBe(true);
      expect(await driver.getImage()).toBeInstanceOf(HTMLImageElement);
      expect((await driver.getImage()).src).toBe(`${ASSET_PREFIX}img.png`);
    });

    it('should render a radio toggle by default', async () => {
      const { driver } = render(<Selector {...defaultProps} />);
      expect(await driver.toggleType()).toBe('radio');
    });

    it('should render a checkbox toggle', async () => {
      const toggleType = 'checkbox';
      const props = { ...defaultProps, ...{ toggleType } };
      const { driver } = render(<Selector {...props} />);
      expect(await driver.toggleType()).toBe(toggleType);
    });

    it('should render a radio toggle', async () => {
      const toggleType = 'radio';
      const props = { ...defaultProps, ...{ toggleType } };
      const { driver } = render(<Selector {...props} />);
      expect(await driver.toggleType()).toBe(toggleType);
    });

    it('should not propagate when selecting a disabled selector', async () => {
      const onToggle = jest.fn();
      const toggleType = 'radio';
      const props = { ...defaultProps, ...{ toggleType } };
      const { driver } = render(
        <Selector onToggle={onToggle} {...props} isDisabled />,
      );

      await driver.toggle();

      expect(onToggle).not.toHaveBeenCalled();
    });

    describe('given image size', () => {
      const sizesAndTestkitMethods = [
        ['tiny', 'isImageTiny'],
        ['small', 'isImageSmall'],
        ['portrait', 'isImagePortrait'],
        ['large', 'isImageLarge'],
        ['cinema', 'isImageCinema'],
      ];

      sizesAndTestkitMethods.forEach(([size, method]) => {
        it(`should set correct className for "${size}"`, async () => {
          const { driver } = render(
            <Selector
              {...{
                ...defaultProps,
                imageSize: size,
                image: <img src="img.png" />,
              }}
            />,
          );

          expect(await driver[method](size)).toBe(true);
        });
      });
    });
  }
});
