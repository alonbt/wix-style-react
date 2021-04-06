import React from 'react';
import Tag from '../Tag';
import tagPrivateDriverFactory from '../Tag.private.driver';
import { tagPrivateUniDriverFactory } from '../Tag.private.uni.driver';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
} from '../../../test/utils/unit';

describe('Tag', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(tagPrivateDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(tagPrivateUniDriverFactory));
  });

  function runTests(render) {
    const createDriver = jsx => render(jsx).driver;
    const id = 'myId';
    const label = 'Hey';

    it('should have a label', async () => {
      const driver = createDriver(<Tag id={id}>{label}</Tag>);
      expect(await driver.getLabel()).toBe(label);
    });

    it('should be removable by default', async () => {
      const driver = createDriver(<Tag id={id}>{label}</Tag>);
      expect(await driver.isRemovable()).toBe(true);
    });

    it('should not be removable', async () => {
      const driver = createDriver(
        <Tag id={id} removable={false}>
          {label}
        </Tag>,
      );
      expect(await driver.isRemovable()).toBe(false);
    });

    it('should have remove button if disabled is true', async () => {
      const driver = createDriver(
        <Tag id={id} disabled>
          {label}
        </Tag>,
      );
      expect(await driver.isRemovable()).toBe(true);
    });

    it('should have disabled class if disabled is true', async () => {
      const driver = createDriver(
        <Tag id={id} disabled>
          {label}
        </Tag>,
      );
      expect(await driver.isDisabled()).toBe(true);
    });

    it('should call onRemove function on remove', async () => {
      const onRemove = jest.fn();
      const onClick = jest.fn();

      const driver = createDriver(
        <Tag id={id} onRemove={onRemove} onClick={onClick}>
          {label}
        </Tag>,
      );
      await driver.removeTag();
      expect(onRemove).toBeCalledWith(id);
      expect(onClick).not.toBeCalled();
    });

    it('should call onClick function on click', async () => {
      const expectedMouseEvent = expect.any(Object);
      const onClick = jest.fn();
      const driver = createDriver(
        <Tag id={id} onClick={onClick}>
          {label}
        </Tag>,
      );

      await driver.click();
      expect(onClick).toBeCalledWith(id, expectedMouseEvent);
    });

    it('should not have pointer cursor when not passed onClick', async () => {
      const driver = createDriver(<Tag id={id}>{label}</Tag>);
      expect(await driver.isClickable()).toBe(false);
    });

    it('should have pointer cursor when passed onClick', async () => {
      const driver = createDriver(
        <Tag id={id} onClick={jest.fn()}>
          {label}
        </Tag>,
      );
      expect(await driver.isClickable()).toBe(true);
    });

    it('should change color on hover when not disable and have onClick handler', async () => {
      const driver = createDriver(
        <Tag id={id} onClick={() => void 0}>
          {label}
        </Tag>,
      );

      expect(await driver.isHoverable()).toBe(true);
    });

    it('should not change color on hover when disabled', async () => {
      const driver = createDriver(
        <Tag id={id} onClick={() => void 0} disabled>
          {label}
        </Tag>,
      );

      expect(await driver.isHoverable()).toBe(false);
    });

    it('should not change color on hover when there is no onClick handler', async () => {
      const driver = createDriver(<Tag id={id}>{label}</Tag>);

      expect(await driver.isHoverable()).toBe(false);
    });

    it('should not display thumb by default', async () => {
      const driver = createDriver(<Tag id={id}>{label}</Tag>);
      expect(await driver.isThumbExists()).toBe(false);
    });

    it('should display thumb', async () => {
      const driver = createDriver(
        <Tag id={id} thumb={<span>Ho</span>}>
          {label}
        </Tag>,
      );
      expect(await driver.isThumbExists()).toBe(true);
    });

    describe('theme attribute', () => {
      it('should have standard theme by default', async () => {
        const driver = createDriver(<Tag id={id}>a</Tag>);
        expect(await driver.isStandardTheme()).toBe(true);
      });

      it('should have warning theme', async () => {
        const driver = createDriver(
          <Tag id={id} theme="warning">
            a
          </Tag>,
        );
        expect(await driver.isWarningTheme()).toBe(true);
      });

      it('should have error theme', async () => {
        const driver = createDriver(
          <Tag id={id} theme="error">
            a
          </Tag>,
        );
        expect(await driver.isErrorTheme()).toBe(true);
      });

      it('should have dark theme', async () => {
        const driver = createDriver(
          <Tag id={id} theme="dark">
            a
          </Tag>,
        );
        expect(await driver.isDarkTheme()).toBe(true);
      });
    });
  }
});
