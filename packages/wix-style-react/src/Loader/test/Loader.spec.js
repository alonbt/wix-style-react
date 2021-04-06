import React from 'react';
import Loader from '../Loader';
import loaderDriverFactory from '../Loader.driver';
import { loaderUniDriverFactory } from '../Loader.uni.driver';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
} from '../../../test/utils/react';

describe('Loader', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(loaderDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(loaderUniDriverFactory));
  });

  function runTests(render) {
    describe('size property', () => {
      it('should create a component with default medium size', async () => {
        const { driver } = render(<Loader />);
        expect(await driver.isMedium()).toEqual(true);
      });

      it('should allow creating a tiny loader', async () => {
        const { driver } = render(<Loader size="tiny" />);
        expect(await driver.isTiny()).toEqual(true);
      });

      it('should allow creating a small loader', async () => {
        const { driver } = render(<Loader size="small" />);
        expect(await driver.isSmall()).toEqual(true);
      });

      it('should allow creating a medium loader', async () => {
        const { driver } = render(<Loader size="medium" />);
        expect(await driver.isMedium()).toEqual(true);
      });

      it('should allow creating a large loader', async () => {
        const { driver } = render(<Loader size="large" />);
        expect(await driver.isLarge()).toEqual(true);
      });
    });

    describe('text property', () => {
      it('should create a component with no text by default', async () => {
        const { driver } = render(<Loader />);
        expect(await driver.hasText()).toEqual(false);
      });

      it('should create a component with text', async () => {
        const text = 'All computers wait at the same speed';
        const { driver } = render(<Loader text={text} />);
        expect(await driver.hasText()).toEqual(true);
        expect(await driver.getText()).toEqual(text);
      });

      it('should create a component with text element', async () => {
        const text = 'All computers wait at the same speed';
        const textElement = <div>{text}</div>;
        const { driver } = render(<Loader text={textElement} />);
        expect(await driver.hasText()).toEqual(true);
        expect(await driver.getText()).toMatch(text);
      });

      it('should not show text next to tiny loader', async () => {
        const size = 'tiny';
        const text = 'All computers wait at the same speed';
        const { driver } = render(<Loader size={size} text={text} />);
        expect(await driver.hasText()).toEqual(false);
      });
    });

    describe('color property', () => {
      it('should be blue by default', async () => {
        const { driver } = render(<Loader />);
        expect(await driver.getColor()).toEqual('blue');
      });

      it('should get the given color', async () => {
        const { driver } = render(<Loader color="white" />);
        expect(await driver.getColor()).toEqual('white');
      });
    });

    describe('status property', () => {
      it('should be loading by default', async () => {
        const { driver } = render(<Loader />);
        expect(await driver.isLoading()).toEqual(true);
      });

      it('should allow setting error status', async () => {
        const { driver } = render(<Loader status="error" />);
        expect(await driver.isError()).toEqual(true);
      });

      it('should allow setting success status', async () => {
        const { driver } = render(<Loader status="success" />);
        expect(await driver.isSuccess()).toEqual(true);
      });

      describe('tooltip message when hovered', () => {
        afterEach(() => {
          document.body.innerHTML = ''; // required for tooltip element to be removed and not to leak in consecutive tests
        });

        it('should show tooltip when hovered', async () => {
          const statusMessage = 'this is a some message';
          const { driver } = render(
            <Loader status="success" statusMessage={statusMessage} />,
          );
          expect(await driver.getStatusMessage()).toBe(statusMessage);
        });
      });
    });
  }
  it(`shouldn't throw when the Loader does not exist`, async () => {
    expect(() => loaderDriverFactory({})).not.toThrow();
  });
});
