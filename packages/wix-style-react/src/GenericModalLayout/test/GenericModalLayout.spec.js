import React from 'react';

import GenericModalLayout from '..';
import genericModalLayoutPrivateDriverFactory from '../GenericModalLayout.private.driver';
import { genericModalLayoutPrivateUniDriverFactory } from '../GenericModalLayout.private.uni.driver';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
} from '../../../test/utils/unit';

const renderWithProps = (properties = {}) => (
  <GenericModalLayout {...properties} />
);

describe('GenericModalLayout', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(genericModalLayoutPrivateDriverFactory));
  });

  describe('[async]', () => {
    runTests(
      createRendererWithUniDriver(genericModalLayoutPrivateUniDriverFactory),
    );
  });

  function runTests(render) {
    const createPrivateDriver = jsx => render(jsx).driver;

    it('should render header', async () => {
      const driver = createPrivateDriver(
        renderWithProps({
          header: <div data-hook="generic-modal-layout-header">Header</div>,
        }),
      );

      expect(await driver.getHeaderTextContent()).toEqual('Header');
    });

    it('should render content', async () => {
      const driver = createPrivateDriver(
        renderWithProps({
          content: <div data-hook="generic-modal-layout-content">Content</div>,
        }),
      );

      expect(await driver.getContentTextContent()).toEqual('Content');
    });

    it('should render footer', async () => {
      const driver = createPrivateDriver(
        renderWithProps({
          footer: <div data-hook="generic-modal-layout-footer">Footer</div>,
        }),
      );

      expect(await driver.getFooterTextContent()).toEqual('Footer');
    });

    describe('fullscreen', () => {
      it('should render not fullscreen as default', async () => {
        const driver = createPrivateDriver(renderWithProps());

        expect(await driver.isFullscreen()).toBe(false);
      });

      it('should render fullscreen layout', async () => {
        const driver = createPrivateDriver(
          renderWithProps({
            fullscreen: true,
          }),
        );

        expect(await driver.isFullscreen()).toBe(true);
      });

      it('should render not fullscreen layout', async () => {
        const driver = createPrivateDriver(
          renderWithProps({
            fullscreen: false,
          }),
        );

        expect(await driver.isFullscreen()).toBe(false);
      });
    });
  }
});
