import React from 'react';
import eventually from 'wix-eventually';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../../test/utils/react/index';
import TableActionCell from '../TableActionCell';
import { tableActionCellPrivateDriverFactory } from './TableActionCell.private.driver';
import { tableActionCellPrivateUniDriverFactory } from './TableActionCell.private.uni.driver';
import { Edit } from 'wix-ui-icons-common/dist/src';

const primaryActionProps = (actionTrigger = () => {}, {disabled = false, prefixIcon, suffixIcon} = {}) => ({
  primaryAction: {
    text: 'primary action',
    skin: 'standard',
    onClick: actionTrigger,
    disabled,
    prefixIcon,
    suffixIcon,
  },
});

const secondaryActionsProps = ({
  actionTriggers,
  actionDataHooks,
  numOfSecondaryActions = 4,
  numOfVisibleSecondaryActions = 2,
} = {}) => {
  const createAction = n => ({
    text: `Action ${n}`,
    dataHook: actionDataHooks && actionDataHooks[n],
    icon: <span>{`Icon ${n}`}</span>, // simulate the icon as <span> elements
    onClick: (actionTriggers && actionTriggers[n]) || (() => {}),
  });

  return {
    secondaryActions: Array(numOfSecondaryActions)
      .fill(undefined)
      .map((val, idx) => createAction(idx)),
    numOfVisibleSecondaryActions,
  };
};

describe('Table Action Cell', () => {
  describe('[sync]', () => {
    runTests(createRendererWithDriver(tableActionCellPrivateDriverFactory));
  });

  describe('[async]', () => {
    runTests(
      createRendererWithUniDriver(tableActionCellPrivateUniDriverFactory),
    );
  });

  function runTests(render) {
    afterEach(cleanup);

    it("should have a placeholder when there's only a primary action", async () => {
      const { driver } = render(<TableActionCell {...primaryActionProps()} />);
      expect(await driver.primaryActionPlaceholderExists()).toBe(true);
    });

    it("should have a placeholder when there's only a primary action without secondaryActions and numOfVisibleSecondaryActions > 0", async () => {
      const { driver } = render(
        <TableActionCell
          {...primaryActionProps()}
          {...secondaryActionsProps({
            numOfSecondaryActions: 0,
            numOfVisibleSecondaryActions: 2,
          })}
        />,
      );
      expect(await driver.primaryActionPlaceholderExists()).toBe(true);
    });

    it("should have a placeholder when there's a primary action and only visible secondary actions", async () => {
      const { driver } = render(
        <TableActionCell
          {...primaryActionProps()}
          {...secondaryActionsProps({
            numOfSecondaryActions: 2,
            numOfVisibleSecondaryActions: 2,
          })}
        />,
      );
      expect(await driver.primaryActionPlaceholderExists()).toBe(true);
    });

    it('should display the primary action button', async () => {
      const onPrimaryActionTrigger = jest.fn();

      const { driver } = render(
        <TableActionCell {...primaryActionProps(onPrimaryActionTrigger)} />,
      );

      expect(await driver.getPrimaryActionButtonDriver().exists()).toBe(true);
      expect(
        await driver.getPrimaryActionButtonDriver().getButtonTextContent(),
      ).toEqual('primary action');
    });

    it('should trigger the primary action on primary button click', async () => {
      const onPrimaryActionTrigger = jest.fn();

      const { driver } = render(
        <TableActionCell {...primaryActionProps(onPrimaryActionTrigger)} />,
      );

      await driver.clickPrimaryActionButton();
      expect(onPrimaryActionTrigger).toHaveBeenCalledTimes(1);
    });

    it('should not have a primary action placeholder when there are also secondary actions', async () => {
      const { driver } = render(
        <TableActionCell
          {...primaryActionProps()}
          {...secondaryActionsProps()}
        />,
      );

      expect(await driver.primaryActionPlaceholderExists()).toBe(false);
    });

    it('should put visible secondary actions in the cell', async () => {
      const { driver } = render(
        <TableActionCell
          {...primaryActionProps()}
          {...secondaryActionsProps({
            actionDataHooks: [undefined, 'data-hook-for-1'],
          })}
        />,
      );

      expect(await driver.getVisibleActionsCount()).toEqual(2);

      expect(
        await driver.getVisibleActionButtonDriver(0).getButtonTextContent(),
      ).toEqual('Icon 0');
      expect(
        await driver
          .getVisibleActionByDataHookButtonDriver('data-hook-for-1')
          .getButtonTextContent(),
      ).toEqual('Icon 1');

      const tooltipDriver1 = await driver.getVisibleActionTooltipDriver(0);
      await tooltipDriver1.mouseEnter();

      expect(await tooltipDriver1.getTooltipText()).toEqual('Action 0');

      const tooltipDriver2 = await driver.getVisibleActionByDataHookTooltipDriver(
        'data-hook-for-1',
      );
      await tooltipDriver2.mouseEnter();
      expect(await tooltipDriver2.getTooltipText()).toEqual('Action 1');
    });

    it('should put hidden secondary action in a PopoverMenu', async () => {
      const { driver } = render(
        <TableActionCell
          {...primaryActionProps()}
          {...secondaryActionsProps()}
        />,
      );

      expect(await driver.getHiddenActionsPopoverMenuDriver().exists()).toEqual(
        true,
      );

      await driver.clickPopoverMenu();
      await eventually(async () =>
        expect(await driver.getHiddenActionsCount()).toEqual(2),
      );
    });

    it('should trigger secondary action on click', async () => {
      const actionTriggers = Array(4)
        .fill(undefined)
        .map(() => jest.fn());

      const { driver } = render(
        <TableActionCell
          {...primaryActionProps()}
          {...secondaryActionsProps({
            actionTriggers,
            actionDataHooks: [
              undefined,
              'data-hook-for-1',
              undefined,
              'data-hook-for-3',
            ],
          })}
        />,
      );

      await driver.clickVisibleAction(0);
      await driver.clickVisibleActionByDataHook('data-hook-for-1');

      await driver.clickPopoverMenu();
      await eventually(() => driver.clickHiddenAction(0));

      await driver.clickPopoverMenu();
      await eventually(
        async () => await driver.clickHiddenActionByDataHook('data-hook-for-3'),
      );

      await eventually(() =>
        actionTriggers.forEach(async actionTrigger => {
          await expect(actionTrigger).toHaveBeenCalledTimes(1);
        }),
      );
    });

    it('should render disabled hidden actions', async () => {
      const actionTrigger = jest.fn();
      const disabledAction = {
        text: `Disabled Action`,
        icon: <span>Icon</span>,
        onClick: actionTrigger,
        disabled: true,
      };
      const { driver } = render(
        <TableActionCell
          {...primaryActionProps()}
          secondaryActions={[disabledAction]}
          numOfVisibleSecondaryActions={0}
        />,
      );

      await driver.clickPopoverMenu();

      await eventually(async () => await driver.clickHiddenAction(0));

      expect(actionTrigger).not.toHaveBeenCalled();
    });

    it('should allow to change the number of visible secondary actions', async () => {
      const { driver } = render(
        <TableActionCell
          {...primaryActionProps()}
          {...secondaryActionsProps()}
          numOfVisibleSecondaryActions={3}
        />,
      );

      expect(await driver.getVisibleActionsCount()).toEqual(3);

      await driver.clickPopoverMenu();
      await eventually(async () =>
        expect(await driver.getHiddenActionsCount()).toEqual(1),
      );
    });

    it('should allow to have no visible secondary actions', async () => {
      const { driver } = render(
        <TableActionCell
          {...primaryActionProps()}
          {...secondaryActionsProps()}
          numOfVisibleSecondaryActions={0}
        />,
      );

      expect(await driver.getVisibleActionsCount()).toEqual(0);

      await driver.clickPopoverMenu();
      await eventually(async () =>
        expect(await driver.getHiddenActionsCount()).toEqual(4),
      );
    });

    it('should mark the primary action as disabled', async () => {
      const { driver } = render(
        <TableActionCell {...primaryActionProps(() => {}, { disabled: true })} />,
      );

      expect(await driver.getIsPrimaryActionButtonDisabled()).toBe(true);
    });

    it('should not add prefix icon to primary action', async () => {
      const { driver } = render(
        <TableActionCell {...primaryActionProps(() => {})} />,
      );

      expect(await driver.primaryActionButtonPrefixIconExists()).toBe(false);
    });

    it('should add prefix icon to primary action', async () => {
      const { driver } = render(
        <TableActionCell {...primaryActionProps(() => {}, { prefixIcon: <Edit /> })} />,
      );

      expect(await driver.primaryActionButtonPrefixIconExists()).toBe(true);
    });

    it('should not add suffix icon to primary action', async () => {
      const { driver } = render(
        <TableActionCell {...primaryActionProps(() => {})} />,
      );

      expect(await driver.primaryActionButtonSuffixIconExists()).toBe(false);
    });

    it('should add suffix icon to primary action', async () => {
      const { driver } = render(
        <TableActionCell {...primaryActionProps(() => {}, { suffixIcon: <Edit /> })} />,
      );

      expect(await driver.primaryActionButtonSuffixIconExists()).toBe(true);
    });

    describe('when a secondary action is disabled', () => {
      it('should mark the a visible secondary actions as disabled', async () => {
        const actionTrigger = jest.fn();

        const disabledAction = {
          text: `Disabled Action`,
          icon: <span>Icon</span>,
          onClick: actionTrigger,
          disabled: true,
        };

        const { driver } = render(
          <TableActionCell
            {...primaryActionProps()}
            secondaryActions={[disabledAction]}
            numOfVisibleSecondaryActions={1}
          />,
        );

        const firstVisibleActionButton = driver.getVisibleActionButtonDriver(0);
        expect(await firstVisibleActionButton.isButtonDisabled()).toBe(true);

        await firstVisibleActionButton.click();
        expect(actionTrigger).not.toHaveBeenCalled();
      });

      describe('when action is disabled', () => {
        describe('when disabledDescription is supplied', () => {
          const disabledDescription = 'disabled item description';
          it('should show the supplied description as tooltip', async () => {
            const secondaryActions = [
              {
                text: `Disabled Action`,
                icon: <span>Icon</span>,
                onClick: () => {},
                disabled: true,
                disabledDescription,
              },
            ];

            const { driver } = render(
              <TableActionCell
                {...primaryActionProps()}
                secondaryActions={secondaryActions}
                numOfVisibleSecondaryActions={1}
              />,
            );

            const tooltipDriver = await driver.getVisibleActionTooltipDriver(0);
            await tooltipDriver.mouseEnter();

            expect(await tooltipDriver.getTooltipText()).toEqual(
              disabledDescription,
            );
          });

          describe('when overriding tooltip content with tooltipProps', () => {
            it('should show the supplied content as tooltip', async () => {
              const tooltipContent = 'Some custom tooltip content';
              const secondaryActions = [
                {
                  text: `Disabled Action`,
                  icon: <span>Icon</span>,
                  onClick: () => {},
                  disabled: true,
                  disabledDescription,
                  tooltipProps: { content: tooltipContent },
                },
              ];

              const { driver } = render(
                <TableActionCell
                  {...primaryActionProps()}
                  secondaryActions={secondaryActions}
                  numOfVisibleSecondaryActions={1}
                />,
              );

              const tooltipDriver = await driver.getVisibleActionTooltipDriver(
                0,
              );
              await tooltipDriver.mouseEnter();
              expect(await tooltipDriver.getTooltipText()).toEqual(
                tooltipContent,
              );
            });
          });
        });

        describe('when disabledDescription is not supplied', () => {
          it('should show action text as tooltip', async () => {
            const actionText = `Disabled Action`;
            const secondaryActions = [
              {
                text: actionText,
                icon: <span>Icon</span>,
                onClick: () => {},
                disabled: true,
              },
            ];

            const { driver } = render(
              <TableActionCell
                {...primaryActionProps()}
                secondaryActions={secondaryActions}
                numOfVisibleSecondaryActions={1}
              />,
            );

            const tooltipDriver = await driver.getVisibleActionTooltipDriver(0);
            await tooltipDriver.mouseEnter();

            expect(await tooltipDriver.getTooltipText()).toEqual(actionText);
          });
        });
      });
    });
  }
});
