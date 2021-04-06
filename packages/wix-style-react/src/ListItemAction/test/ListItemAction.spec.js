import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import ListItemAction from '..';
import { ListItemActionPrivateDriverFactory } from './ListItemAction.private.uni.driver';
import { Edit } from 'wix-ui-icons-common/dist/src';

describe('ListItemAction', () => {
  const render = createRendererWithUniDriver(
    ListItemActionPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<ListItemAction title={'aaa'} />);

    expect(await driver.exists()).toBe(true);
  });

  it('should show title', async () => {
    const title = 'some title';
    const { driver } = render(<ListItemAction title={title} />);

    expect(await driver.isTitleExists()).toBe(true);
    expect(await driver.getTitleText()).toBe(title);
  });

  it('should not show icon prefix when not given', async () => {
    const { driver } = render(<ListItemAction title={'title'} />);
    expect(await driver.isPrefixIconExists()).toBe(false);
  });

  it('should show icon prefix when given', async () => {
    const { driver } = render(
      <ListItemAction title={'title'} prefixIcon={<Edit />} />,
    );
    expect(await driver.isPrefixIconExists()).toBe(true);
  });

  describe('skin prop', () => {
    it(`should be 'standard' by default`, async () => {
      const { driver } = render(
        <ListItemAction title={'title'} prefixIcon={<Edit />} />,
      );
      expect(await driver.getSkin()).toBe('standard');
    });

    it(`should be 'dark'`, async () => {
      const { driver } = render(
        <ListItemAction title={'title'} skin="dark" prefixIcon={<Edit />} />,
      );
      expect(await driver.getSkin()).toBe('dark');
    });

    it(`should be 'destructive'`, async () => {
      const { driver } = render(
        <ListItemAction
          title={'title'}
          skin="destructive"
          prefixIcon={<Edit />}
        />,
      );
      expect(await driver.getSkin()).toBe('destructive');
    });
  });

  describe('disabled', () => {
    it('should not be disabled by default', async () => {
      const { driver } = render(
        <ListItemAction title={'title'} prefixIcon={<Edit />} />,
      );
      expect(await driver.isDisabled()).toBe(false);
    });

    it('should be disabled', async () => {
      const { driver } = render(
        <ListItemAction disabled title={'title'} prefixIcon={<Edit />} />,
      );
      expect(await driver.isDisabled()).toBe(true);
    });
  });

  describe('on click', () => {
    it('should trigger the function', async () => {
      const onClick = jest.fn();
      const { driver } = render(
        <ListItemAction onClick={onClick} title={'title'} />,
      );

      await driver.click();

      expect(onClick).toBeCalled();
    });

    it('should not trigger the function when disabled', async () => {
      const onClick = jest.fn();
      const { driver } = render(
        <ListItemAction disabled onClick={onClick} title={'title'} />,
      );

      await driver.click();

      expect(onClick).not.toBeCalled();
    });
  });

  describe('subtitle', () => {
    it('should have subtitle', async () => {
      const subtitleText = 'subtitle';
      const { driver } = render(
        <ListItemAction title={'title'} subtitle={subtitleText} />,
      );

      expect(await driver.isSubtitleExists()).toBe(true);
      expect(await driver.getSubtitleText()).toBe(subtitleText);
    });
  });
});
