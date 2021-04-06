import React from 'react';
import Avatar from '..';
import { createRendererWithUniDriver } from '../../../test/utils/unit';
import { avatarUniDriverFactory } from '../Avatar.uni.driver';
import PhotoCamera from 'wix-ui-icons-common/PhotoCamera';

describe('Avatar', () => {
  const createDriver = createRendererWithUniDriver(avatarUniDriverFactory);

  it('should have correct displayName', async () => {
    expect(Avatar.displayName).toEqual('Avatar');
  });

  it('should invoke onIndicationClick prop', async () => {
    const onClick = jest.fn();
    const { driver } = createDriver(
      <Avatar
        onIndicationClick={onClick}
        indication={<PhotoCamera size={24} />}
      />,
    );

    await driver.clickIndication();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should invoke onIndicationClick prop with custom indication', async () => {
    const onClick = jest.fn();
    const { driver } = createDriver(
      <Avatar
        onIndicationClick={onClick}
        customIndication={<PhotoCamera size={24} />}
      />,
    );

    await driver.clickCustomIndication();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should invoke onClick prop', async () => {
    const onClick = jest.fn();
    const { driver } = createDriver(<Avatar onClick={onClick} />);

    await driver.click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render indication', async () => {
    const { driver } = createDriver(
      <Avatar indication={<PhotoCamera size={24} />} />,
    );

    expect(await driver.indicationExists()).toBe(true);
  });

  it('should render custom indication', async () => {
    const { driver } = createDriver(
      <Avatar customIndication={<PhotoCamera size={24} />} />,
    );

    expect(await driver.customIndicationExists()).toBe(true);
  });

  it('should render indication onHover', async () => {
    const { driver } = createDriver(
      <Avatar showIndicationOnHover indication={<PhotoCamera size={24} />} />,
    );

    expect(await driver.indicationExists()).toBe(false);

    await driver.hover();

    expect(await driver.indicationExists()).toBe(true);
  });

  it('should render custom indication onHover', async () => {
    const { driver } = createDriver(
      <Avatar
        showIndicationOnHover
        customIndication={<PhotoCamera size={24} />}
      />,
    );

    expect(await driver.customIndicationExists()).toBe(false);

    await driver.hover();

    expect(await driver.customIndicationExists()).toBe(true);
  });

  it('should render only custom indication if given both', async () => {
    const { driver } = createDriver(
      <Avatar
        indication={<PhotoCamera size={24} />}
        customIndication={<PhotoCamera size={24} />}
      />,
    );

    expect(await driver.indicationExists()).toBe(false);
    expect(await driver.customIndicationExists()).toBe(true);
  });

  it('For size < 30, using name prop, text content should be 1 character', async () => {
    const { driver: driver24 } = createDriver(
      <Avatar size="size24" name="John Doe" />,
    );
    const { driver: driver18 } = createDriver(
      <Avatar size="size18" name="John Doe" />,
    );
    expect(await driver24.getTextContent()).toBe('J');
    expect(await driver18.getTextContent()).toBe('J');
  });

  it('For size >= 30, using name prop with space, text content should be 2 characters', async () => {
    const { driver: driver30 } = createDriver(
      <Avatar size="size30" name="John Doe" />,
    );
    const { driver: driver48 } = createDriver(
      <Avatar size="size48" name="John Doe" />,
    );
    expect(await driver30.getTextContent()).toBe('JD');
    expect(await driver48.getTextContent()).toBe('JD');
  });

  it('For size < 48, with loading should not show loader', async () => {
    const { driver: driver30 } = createDriver(<Avatar loading size="size30" />);
    expect(await driver30.isLoading()).toBe(false);
  });

  it('For size >= 48, with loading should show loader', async () => {
    const { driver: driver48 } = createDriver(<Avatar loading size="size48" />);
    expect(await driver48.isLoading()).toBe(true);
  });
});
