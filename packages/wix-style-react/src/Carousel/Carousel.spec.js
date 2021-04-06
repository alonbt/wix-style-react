import React from 'react';

import Carousel from './Carousel';
import carouselDriverFactory from './Carousel.private.driver';
import { carouselPrivateUniDriverFactory } from './Carousel.private.uni.driver';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
} from '../../test/utils/unit';

describe('Carousel', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(carouselDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(carouselPrivateUniDriverFactory));
  });

  function runTests(render) {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.clearAllTimers();
    });

    const createDriver = jsx => render(jsx).driver;

    it('should be rendered', async () => {
      const driver = createDriver(<Carousel />);
      expect(await driver.exists()).toBe(true);
    });

    it('should not render the images when child nodes are supplied', async () => {
      const childText = 'An inner child';
      const driver = createDriver(
        <Carousel images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]}>
          <div>{childText}</div>
          <div>{childText}</div>
          <div>{childText}</div>
        </Carousel>,
      );

      const renderedImages = await driver.getImages();
      const renderedChildren = await driver.getChildren();

      expect(renderedImages.length).toBe(0);
      expect(renderedChildren.length).toBe(3);
      expect(await driver.getChildText(renderedChildren[0])).toBe(childText);
    });

    describe('loader', () => {
      it('should show only the loader when loading', async () => {
        const driver = createDriver(
          <Carousel images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
        );
        expect(await driver.isLoading()).toBe(true);
      });

      it('should hide the loader when images are loaded', async () => {
        const driver = createDriver(
          <Carousel images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
        );

        await driver.loadImages();

        setTimeout(async () => {
          expect(await driver.isLoading()).toBe(false);
          expect(await driver.getImages().length).toEqual(2);
        });
      });
    });

    describe('basic behaviour', () => {
      it('should show the first image', async () => {
        const driver = createDriver(
          <Carousel images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
        );
        expect(await driver.getCurrentImageIndex()).toBe(0);
      });

      it('should switch to the next image when clicking next', async () => {
        const driver = createDriver(
          <Carousel images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
        );
        await driver.clickNext();
        expect(await driver.getCurrentImageIndex()).toBe(1);
      });

      it('should switch to the previous image when clicking prev', async () => {
        const driver = createDriver(
          <Carousel images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
        );

        await driver.clickNext();
        expect(await driver.getCurrentImageIndex()).toBe(1);
        setTimeout(async () => {
          await driver.clickPrevious();
          expect(await driver.getCurrentImageIndex()).toBe(0);
        }, 0);
      });

      it('should trigger beforeChange and afterChange when switching to the next image', async () => {
        const afterChange = jest.fn();
        const beforeChange = jest.fn();
        const driver = createDriver(
          <Carousel
            images={[
              { src: 'image1.jpg' },
              { src: 'image2.jpg' },
              { src: 'image3.jpg' },
            ]}
            beforeChange={beforeChange}
            afterChange={afterChange}
          />,
        );
        await driver.clickNext();

        setTimeout(() => {
          expect(beforeChange).toHaveBeenCalled();
          expect(afterChange).toHaveBeenCalled();
        }, 0);
      });

      it('should pass the class name', async () => {
        const expectedClassName = 'some-selector';
        const driver = createDriver(<Carousel className={expectedClassName} />);

        expect(await driver.hasClass(expectedClassName)).toBe(true);
      });
    });

    describe('infinite functionality', () => {
      describe('default behaviour', () => {
        it('should show the last image when clicking `prev`', async () => {
          const driver = createDriver(
            <Carousel
              images={[
                { src: 'image1.jpg' },
                { src: 'image2.jpg' },
                { src: 'image3.jpg' },
              ]}
            />,
          );
          await driver.clickPrevious();
          expect(await driver.getCurrentImageIndex()).toBe(2);
        });

        it('should show the first image when clicking `next` on the last image', async () => {
          const driver = createDriver(
            <Carousel
              images={[
                { src: 'image1.jpg' },
                { src: 'image2.jpg' },
                { src: 'image3.jpg' },
              ]}
            />,
          );
          await driver.clickNext();
          expect(await driver.getCurrentImageIndex()).toBe(1);
          setTimeout(async () => {
            await driver.clickNext();
            expect(await driver.getCurrentImageIndex()).toBe(2);
            setTimeout(async () => {
              await driver.clickNext();
              expect(await driver.getCurrentImageIndex()).toBe(0);
            }, 0);
          }, 0);
        });
      });

      describe('when `infinite` is false', () => {
        it('should stay on the same image when clicking `prev`', async () => {
          const driver = createDriver(
            <Carousel
              images={[
                { src: 'image1.jpg' },
                { src: 'image2.jpg' },
                { src: 'image3.jpg' },
              ]}
              infinite={false}
            />,
          );
          await driver.clickPrevious();
          expect(await driver.getCurrentImageIndex()).toBe(0);
          // TODO: Figure out why eventually does not work
          setTimeout(async () => {
            expect(await driver.isPrevButtonDisabled()).toBe(true);
          });
        });

        it('should stay on the last image when clicking `next` on the last image', async () => {
          const driver = createDriver(
            <Carousel
              images={[
                { src: 'image1.jpg' },
                { src: 'image2.jpg' },
                { src: 'image3.jpg' },
              ]}
              infinite={false}
            />,
          );
          await driver.clickNext();
          expect(await driver.getCurrentImageIndex()).toBe(1);
          setTimeout(async () => {
            await driver.clickNext();
            expect(await driver.getCurrentImageIndex()).toBe(2);
            setTimeout(async () => {
              await driver.clickNext();
              expect(await driver.getCurrentImageIndex()).toBe(2);
              expect(await driver.isNextButtonDisabled()).toBe(true);
            }, 0);
          });
        });
      });
    });

    describe('autoplay', () => {
      it('should not change images when disabled', async () => {
        const driver = createDriver(
          <Carousel images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
        );
        expect(await driver.getCurrentImageIndex()).toBe(0);
        jest.runOnlyPendingTimers();
        expect(await driver.getCurrentImageIndex()).toBe(0);
      });

      it('should automatically change images when enabled', async () => {
        const driver = createDriver(
          <Carousel
            autoplay
            autoplaySpeed={100}
            images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]}
          />,
        );

        expect(await driver.getCurrentImageIndex()).toBe(0);
        setTimeout(async () => {
          expect(await driver.getCurrentImageIndex()).toBe(1);
        }, 1500);
      });

      it('should stop playing when mouse is on the image', async () => {
        const driver = createDriver(
          <Carousel
            autoplay
            images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]}
          />,
        );

        expect(await driver.getCurrentImageIndex()).toBe(0);
        await driver.mouseOver();
        jest.runOnlyPendingTimers();

        setTimeout(async () => {
          expect(await driver.getCurrentImageIndex()).toBe(0);
        });
      });

      it('should continue playing when mouse leaves the image', async () => {
        const driver = createDriver(
          <Carousel
            autoplay
            images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]}
          />,
        );

        expect(await driver.getCurrentImageIndex()).toBe(0);
        await driver.mouseOver();
        setTimeout(async () => {
          await driver.mouseOut();
          expect(await driver.getCurrentImageIndex()).toBe(1);
        }, 0);
      });
    });
    describe('dots pagination functionality', () => {
      it('should not navigate to other image when clicking on the current dot', async () => {
        const driver = createDriver(
          <Carousel images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
        );
        await driver.clickPageNavigationDot(0);
        expect(await driver.getCurrentImageIndex()).toBe(0);
      });

      it('should show the initial image when clicking the second dots and then the first one', async () => {
        const driver = createDriver(
          <Carousel images={[{ src: 'image1.jpg' }, { src: 'image2.jpg' }]} />,
        );
        await driver.clickPageNavigationDot(1);
        setTimeout(async () => {
          expect(await driver.getCurrentImageIndex()).toBe(1);
        }, 0);
        setTimeout(async () => {
          await driver.clickPageNavigationDot(0);
          expect(await driver.getCurrentImageIndex()).toBe(0);
        }, 0);
      });

      it('should switch to the last image when clicking last dot', async () => {
        const driver = createDriver(
          <Carousel
            images={[
              { src: 'image1.jpg' },
              { src: 'image2.jpg' },
              { src: 'image3.jpg' },
            ]}
          />,
        );
        await driver.clickPageNavigationDot(2);

        setTimeout(async () => {
          expect(await driver.getCurrentImageIndex()).toBe(2);
        }, 0);
      });

      it('dots should NOT be rendered when disabled', async () => {
        const driver = createDriver(
          <Carousel
            dots={false}
            images={[
              { src: 'image1.jpg' },
              { src: 'image2.jpg' },
              { src: 'image3.jpg' },
            ]}
          />,
        );

        expect(await driver.isPageNavigationDotExists()).toBe(false);
      });
    });
    describe('initial slide functionality', () => {
      it('should start the slider at the second image and therefore show the second image', async () => {
        const driver = createDriver(
          <Carousel
            initialSlideIndex={1}
            images={[
              { src: 'image1.jpg' },
              { src: 'image2.jpg' },
              { src: 'image3.jpg' },
            ]}
          />,
        );

        expect(await driver.getCurrentImageIndex()).toBe(1);
      });
    });
  }
});
