import React from 'react';
import eventually from 'wix-eventually';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import CarouselWIP from '../CarouselWIP';
import { carouselWIPPrivateDriverFactory } from './CarouselWIP.private.uni.driver';

const img1 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADICAYAAABS39xVAAAAAXNSR0IArs4c6QAAAHxlWElmTU0AKgAAAAgAAwESAAMAAAABAAEAAAExAAIAAAAgAAAAModpAAQAAAABAAAAUgAAAABBZG9iZSBQaG90b3Nob3AgQ1M1LjEgTWFjaW50b3NoAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAEsoAMABAAAAAEAAADIAAAAAG/WlU8AAAQTaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPnhtcC5kaWQ6OTUyNENCRDU2QkRDMTFFMUFGMTE5OUFERDA4MkE2MTA8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6OTUyNENCRDQ2QkRDMTFFMUFGMTE5OUFERDA4MkE2MTA8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEZXJpdmVkRnJvbSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgIDxzdFJlZjppbnN0YW5jZUlEPnhtcC5paWQ6OTUyNENCRDI2QkRDMTFFMUFGMTE5OUFERDA4MkE2MTA8L3N0UmVmOmluc3RhbmNlSUQ+CiAgICAgICAgICAgIDxzdFJlZjpkb2N1bWVudElEPnhtcC5kaWQ6OTUyNENCRDM2QkRDMTFFMUFGMTE5OUFERDA4MkE2MTA8L3N0UmVmOmRvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaDwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KkLyPjAAABddJREFUeAHt1IEJACAMA0F1GPffsIJbPFwnCJeSPXfNcgQIEAgInEBGEQkQIPAFDJZHIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIGyw8QIJARMFiZqgQlQMBg+QECBDICBitTlaAECBgsP0CAQEbAYGWqEpQAAYPlBwgQyAgYrExVghIgYLD8AAECGQGDlalKUAIEDJYfIEAgI2CwMlUJSoCAwfIDBAhkBAxWpipBCRAwWH6AAIGMgMHKVCUoAQIP0DgDtDuVLIgAAAAASUVORK5CYII=';
const img2 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADICAYAAABS39xVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAfGVYSWZNTQAqAAAACAADARIAAwAAAAEAAQAAATEAAgAAACAAAAAyh2kABAAAAAEAAABSAAAAAEFkb2JlIFBob3Rvc2hvcCBDUzUuMSBNYWNpbnRvc2gAAAOgAQADAAAAAQABAACgAgAEAAAAAQAAASygAwAEAAAAAQAAAMgAAAAAb9aVTwAABOxpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yMDA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MzAwPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDx4bXBNTTpE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';
const img3 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAADICAYAAABS39xVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAfGVYSWZNTQAqAAAACAADARIAAwAAAAEAAQAAATEAAgAAACAAAAAyh2kABAAAAAEAAABSAAAAAEFkb2JlIFBob3Rvc2hvcCBDUzUuMSBNYWNpbnRvc2gAAAOgAQADAAAAAQABAACgAgAEAAAAAQAAASygAwAEAAAAAQAAAMgAAAAAb9aVTwAABOxpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yMDA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MzAwPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDx4bXBNTTpE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';
const IMAGES = [{ src: img1 }, { src: img2 }, { src: img3 }];

describe(CarouselWIP.displayName, () => {
  const render = createRendererWithUniDriver(carouselWIPPrivateDriverFactory);

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(<CarouselWIP />);

    expect(await driver.exists()).toBe(true);
  });

  it('should not render the images when child nodes are supplied', async () => {
    const childText = 'An inner child';
    const { driver } = render(
      <CarouselWIP images={IMAGES}>
        <div>{childText}</div>
        <div>{childText}</div>
      </CarouselWIP>,
    );

    const renderedImages = await driver.getImages();
    const renderedChildren = await driver.getChildren();

    expect(renderedImages.length).toBe(0);
    expect(renderedChildren.length).toBe(2);
    expect(await driver.getChildText(renderedChildren[0])).toBe(childText);
  });

  describe('loader', () => {
    it('should show only the loader when loading', async () => {
      const { driver } = render(<CarouselWIP images={IMAGES} />);
      expect(await driver.isLoading()).toBe(true);
    });

    it.skip('should hide the loader when images are loaded', async () => {
      const { driver } = render(<CarouselWIP images={IMAGES} />);

      await driver.loadImages();

      await eventually(async () => {
        await expect(await driver.isLoading()).toBe(false);
        await expect(await driver.getImages().length).toEqual(2);
      });
    });
  });

  describe('basic behaviour', () => {
    it.skip('should show the first image', async () => {
      const { driver } = render(<CarouselWIP images={IMAGES} />);
      expect(await driver.getCurrentImageIndex()).toBe(0);
    });

    it.skip('should switch to the next image when clicking next', async () => {
      const { driver } = render(<CarouselWIP images={IMAGES} />);
      await driver.clickNext();
      expect(await driver.getCurrentImageIndex()).toBe(1);
    });

    it.skip('should switch to the previous image when clicking prev', async () => {
      const { driver } = render(<CarouselWIP images={IMAGES} />);

      await driver.clickNext();
      expect(await driver.getCurrentImageIndex()).toBe(1);
      setTimeout(async () => {
        await driver.clickPrevious();
        expect(await driver.getCurrentImageIndex()).toBe(0);
      }, 0);
    });

    it.skip('should trigger beforeChange and afterChange when switching to the next image', async () => {
      const afterChange = jest.fn();
      const beforeChange = jest.fn();
      const { driver, debug } = render(
        <CarouselWIP
          images={IMAGES}
          beforeChange={beforeChange}
          afterChange={afterChange}
        />,
      );
      await eventually(async () => {
        await driver.clickNext();
      });
      // await eventually(async () => {
      //   await expect(beforeChange).toHaveBeenCalled();
      //   await expect(afterChange).toHaveBeenCalled();
      // });
    });

    it.skip('should pass the class name', async () => {
      const expectedClassName = 'some-selector';
      const { driver } = render(<CarouselWIP className={expectedClassName} />);

      expect(await driver.hasClass(expectedClassName)).toBe(true);
    });
  });

  describe('infinite functionality', () => {
    describe('default behaviour', () => {
      it.skip('should show the last image when clicking `prev`', async () => {
        const { driver } = render(<CarouselWIP images={IMAGES} />);
        await driver.clickPrevious();
        expect(await driver.getCurrentImageIndex()).toBe(2);
      });

      it.skip('should show the first image when clicking `next` on the last image', async () => {
        const { driver } = render(<CarouselWIP images={IMAGES} />);
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
      it.skip('should stay on the same image when clicking `prev`', async () => {
        const { driver } = render(
          <CarouselWIP images={IMAGES} infinite={false} />,
        );
        await driver.clickPrevious();
        expect(await driver.getCurrentImageIndex()).toBe(0);
        // TODO: Figure out why eventually does not work
        setTimeout(async () => {
          expect(await driver.isPrevButtonDisabled()).toBe(true);
        });
      });

      it.skip('should stay on the last image when clicking `next` on the last image', async () => {
        const { driver } = render(
          <CarouselWIP images={IMAGES} infinite={false} />,
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
    it.skip('should not change images when disabled', async () => {
      const { driver } = render(<CarouselWIP images={IMAGES} />);
      expect(await driver.getCurrentImageIndex()).toBe(0);
      jest.runOnlyPendingTimers();
      expect(await driver.getCurrentImageIndex()).toBe(0);
    });

    it.skip('should automatically change images when enabled', async () => {
      const { driver } = render(
        <CarouselWIP autoplay autoplaySpeed={100} images={IMAGES} />,
      );

      expect(await driver.getCurrentImageIndex()).toBe(0);
      setTimeout(async () => {
        expect(await driver.getCurrentImageIndex()).toBe(1);
      }, 1500);
    });

    it.skip('should stop playing when mouse is on the image', async () => {
      const { driver } = render(<CarouselWIP autoplay images={IMAGES} />);

      expect(await driver.getCurrentImageIndex()).toBe(0);
      await driver.mouseOver();
      jest.runOnlyPendingTimers();

      setTimeout(async () => {
        expect(await driver.getCurrentImageIndex()).toBe(0);
      });
    });

    it.skip('should continue playing when mouse leaves the image', async () => {
      const { driver } = render(<CarouselWIP autoplay images={IMAGES} />);

      expect(await driver.getCurrentImageIndex()).toBe(0);
      await driver.mouseOver();
      setTimeout(async () => {
        await driver.mouseOut();
        expect(await driver.getCurrentImageIndex()).toBe(1);
      }, 0);
    });
  });
  describe('dots pagination functionality', () => {
    it.skip('should not navigate to other image when clicking on the current dot', async () => {
      const { driver } = render(<CarouselWIP images={IMAGES} />);
      await driver.clickPageNavigationDot(0);
      expect(await driver.getCurrentImageIndex()).toBe(0);
    });

    it.skip('should show the initial image when clicking the second dots and then the first one', async () => {
      const { driver } = render(<CarouselWIP images={IMAGES} />);
      await driver.clickPageNavigationDot(1);
      setTimeout(async () => {
        expect(await driver.getCurrentImageIndex()).toBe(1);
      }, 0);
      setTimeout(async () => {
        await driver.clickPageNavigationDot(0);
        expect(await driver.getCurrentImageIndex()).toBe(0);
      }, 0);
    });

    it.skip('should switch to the last image when clicking last dot', async () => {
      const { driver } = render(<CarouselWIP images={IMAGES} />);
      await driver.clickPageNavigationDot(2);

      setTimeout(async () => {
        expect(await driver.getCurrentImageIndex()).toBe(2);
      }, 0);
    });

    it.skip('dots should NOT be rendered when disabled', async () => {
      const { driver } = render(<CarouselWIP hideDots images={IMAGES} />);

      expect(await driver.isPageNavigationDotExists()).toBe(false);
    });
  });
  describe('initial slide functionality', () => {
    it.skip('should start the slider at the second image and therefore show the second image', async () => {
      const { driver } = render(
        <CarouselWIP initialSlideIndex={1} images={IMAGES} />,
      );

      expect(await driver.getCurrentImageIndex()).toBe(1);
    });
  });
});
