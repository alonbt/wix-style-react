import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import ComposerHeader from '../ComposerHeader';
import { composerHeaderPrivateDriverFactory } from './ComposerHeader.private.uni.driver';

const generateComposer = props => <ComposerHeader {...props} />;

const generateActions = props => <ComposerHeader.Actions {...props} />;

const generateMainActions = props => <ComposerHeader.MainActions {...props} />;

const generateSaveStatus = props => <ComposerHeader.SaveStatus {...props} />;

describe('ComposerHeader', () => {
  const render = createRendererWithUniDriver(
    composerHeaderPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(generateComposer());
    expect(await driver.exists()).toBe(true);
  });

  describe('Composer.Actions', () => {
    it('should render [when] given Composer.Actions', async () => {
      const children = generateActions({
        dataHook: 'random',
        children: 'random',
      });
      const { driver } = render(generateComposer({ children }));
      expect(await driver.actionsExists('random')).toBe(true);
    });

    it('should render [when] given multiple Composer.Actions', async () => {
      const children = [
        generateActions({ dataHook: 'random', children: 'random', key: 1 }),
        generateActions({ dataHook: 'random2', children: 'random2', key: 2 }),
      ];
      const { driver } = render(generateComposer({ children }));
      expect(await driver.actionsExists('random')).toBe(true);
      expect(await driver.actionsExists('random2')).toBe(true);
    });
  });

  describe('Composer.MainActions', () => {
    it('should render [when] given Composer.MainActions', async () => {
      const children = generateMainActions({});
      const { driver } = render(generateComposer({ children }));
      expect(await driver.mainActionsExists()).toBe(true);
    });

    it('should render only first in the list [when] given multiple Composer.MainActions', async () => {
      const children = [
        generateMainActions({ dataHook: 'random1', key: 1 }),
        generateMainActions({ key: 2 }),
      ];

      const { driver } = render(generateComposer({ children }));
      expect(await driver.mainActionsExists('random1')).toBe(true);
    });
  });

  describe('Composer.SaveStatus', () => {
    it('should render [when] given Composer.SaveStatus ', async () => {
      const children = generateActions({
        children: generateSaveStatus({
          dataHook: 'random',
          saveStatusValue: 'back',
        }),
      });
      const { driver } = render(generateComposer({ children }));

      expect(await driver.saveStatusExists('random')).toBe(true);
    });

    it('should render status [when] given saveStatusValue ', async () => {
      const children = generateActions({
        children: generateSaveStatus({
          dataHook: 'random',
          saveStatusValue: 'back',
        }),
      });

      const { driver } = render(generateComposer({ children }));

      expect(await driver.getSaveStatusValue('random')).toBe('back');
    });
  });

  describe('Back Button', () => {
    it('should render [when] given `backButtonValue`', async () => {
      const { driver } = render(generateComposer({ backButtonValue: 'back' }));
      expect(await driver.backButtonExists()).toBe(true);
    });

    it('should render text value [when] given `backButtonValue`', async () => {
      const { driver } = render(generateComposer({ backButtonValue: 'back' }));
      expect(await driver.getBackButtonText()).toEqual('back');
    });

    it('should trigger onBackClick [when] given back button clicked ', async () => {
      const onBackClick = jest.fn();
      const { driver } = render(
        generateComposer({ backButtonValue: 'back', onBackClick }),
      );
      await driver.clickBack();
      expect(onBackClick).toHaveBeenCalled();
    });
  });

  describe('Left Divider', () => {
    it('should render [when] back button && first item with justifyContent=flex-start', async () => {
      const children = generateActions({ justifyContent: 'flex-start' });
      const backButtonValue = 'back';
      const { driver } = render(
        generateComposer({ backButtonValue, children }),
      );
      expect(await driver.isLeftDividerExists()).toBe(true);
    });

    it('should render [when] back button && multiple items Composer.Actions', async () => {
      const children = [
        generateActions({ justifyContent: 'flex-start', key: 0 }),
        generateActions({ justifyContent: 'flex-end', key: 1 }),
      ];

      const backButtonValue = 'back';
      const { driver } = render(
        generateComposer({ backButtonValue, children }),
      );

      expect(await driver.isLeftDividerExists()).toBe(true);
    });

    it('should not render [when] back button && first item with justifyContent=flex-end', async () => {
      const children = generateActions({ justifyContent: 'flex-end' });
      const backButtonValue = 'back';
      const { driver } = render(
        generateComposer({ backButtonValue, children }),
      );
      expect(await driver.isLeftDividerExists()).toBe(false);
    });

    it('is hidden [when] back button is disabled', async () => {
      const children = generateActions({ justifyContent: 'flex-start' });
      const { driver } = render(generateComposer({ children }));
      expect(await driver.isLeftDividerExists()).toBe(false);
    });

    it('is hidden [when] no Composer.Actions', async () => {
      const { driver } = render(generateComposer());
      expect(await driver.isLeftDividerExists()).toBe(false);
    });
  });

  describe('Right Divider', () => {
    it('should render [when] mainActions && last item with justifyContent=flex-end', async () => {
      const children = [
        generateActions({ justifyContent: 'flex-end', key: 1 }),
        generateMainActions({ key: 2 }),
      ];

      const { driver } = render(generateComposer({ children }));
      expect(await driver.isRightDividerExists()).toBe(true);
    });

    it('should render [when] mainActions && multiple items Composer.Actions', async () => {
      const children = [
        generateActions({ justifyContent: 'flex-start', key: 0 }),
        generateActions({ justifyContent: 'flex-end', key: 1 }),
        generateMainActions({ key: 2 }),
      ];

      const { driver } = render(generateComposer({ children }));

      expect(await driver.isRightDividerExists()).toBe(true);
    });

    it('should not render [when] mainActions && last item with justifyContent=flex-start', async () => {
      const children = [
        generateActions({ justifyContent: 'flex-start', key: 0 }),
        generateMainActions({ key: 1 }),
      ];

      const { driver } = render(generateComposer({ children }));
      expect(await driver.isRightDividerExists()).toBe(false);
    });

    it('is hidden [when] mainActions are not given ', async () => {
      const children = generateActions({ justifyContent: 'flex-end' });

      const { driver } = render(generateComposer({ children }));

      expect(await driver.isRightDividerExists()).toBe(false);
    });

    it('is hidden [when] no Composer.Actions', async () => {
      const { driver } = render(generateComposer());
      expect(await driver.isRightDividerExists()).toBe(false);
    });
  });
});
