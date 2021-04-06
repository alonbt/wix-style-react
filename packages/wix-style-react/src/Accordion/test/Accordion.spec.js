import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import Accordion, { accordionItemBuilder } from '../Accordion';
import { accordionPrivateDriverFactory } from '../Accordion.private.uni.driver';
import { buttonTypes } from '../constants';
import { createRendererWithUniDriver } from '../../../test/utils/react';
import { eventually } from '../../../test/utils/unit';

describe('Accordion', () => {
  const FakeIcon = () => <div>fake icon</div>;
  const createDriver = createUniDriverFactory(accordionPrivateDriverFactory);

  describe('items', () => {
    it('should render a list of items', async () => {
      const items = [
        {
          title: 'first item',
        },
      ];
      const driver = createDriver(<Accordion items={items} />);
      expect(await driver.getItemTitleAt(0)).toEqual('first item');
    });

    it('should not render any items', async () => {
      const driver = createDriver(<Accordion />);
      expect(await driver.getAmountOfItems()).toEqual(0);
    });

    it('should render item with icon', async () => {
      const items = [
        {
          title: 'first item',
          icon: <FakeIcon />,
          children: 'first item content',
        },
      ];
      const driver = createDriver(<Accordion items={items} />);
      expect(await driver.isIconExistsAt(0)).toBe(true);
    });

    it('should render item without an icon', async () => {
      const items = [
        {
          title: 'first item',
          children: 'first item content',
        },
      ];
      const driver = createDriver(<Accordion items={items} />);
      expect(await driver.isIconExistsAt(0)).toBe(false);
    });
  });

  describe('expand and collapse behavior', () => {
    const collapsedSingleItem = [
      {
        title: 'first item',
        icon: <FakeIcon />,
        children: 'first item content',
        expandLabel: 'see more',
        collapseLabel: 'see less',
        buttonType: buttonTypes.button,
        onMouseEnter: jest.fn(),
      },
    ];

    const collapsedDisabledSingleItem = [
      {
        title: 'first item',
        icon: <FakeIcon />,
        children: 'first item content',
        expandLabel: 'see more',
        collapseLabel: 'see less',
        buttonType: buttonTypes.button,
        disabled: true,
        onMouseEnter: jest.fn(),
      },
    ];

    const expandedSingleItemProps = {
      title: 'First Row',
      children: 'first row',
      open: true,
    };

    const initiallyExpandedSingleItemProps = {
      title: 'First Row',
      children: 'first row',
      initiallyOpen: true,
    };

    const singleItemWithTextButton = [
      {
        title: 'first item',
        icon: <FakeIcon />,
        children: 'first item content',
        expandLabel: 'see more',
        collapseLabel: 'see less',
        buttonType: buttonTypes.textButton,
      },
    ];

    const multipleItems = [
      {
        title: 'first item',
        icon: <FakeIcon />,
        children: 'first item content',
        expandLabel: 'see more',
        collapseLabel: 'see less',
        buttonType: buttonTypes.button,
      },
      {
        title: 'second item',
        icon: <FakeIcon />,
        children: 'second item content',
        expandLabel: 'see more',
        collapseLabel: 'see less',
        buttonType: buttonTypes.button,
      },
    ];

    it('should display a collapsed item by default', async () => {
      const driver = createDriver(<Accordion items={collapsedSingleItem} />);
      expect(await driver.isItemExpandedAt(0)).toBe(false);
    });

    it('should display an expanded item when open prop is true', async () => {
      const driver = createDriver(
        <Accordion items={[expandedSingleItemProps]} />,
      );
      expect(await driver.isItemExpandedAt(0)).toBe(true);
    });

    it('should expand an item on click', async () => {
      const driver = createDriver(<Accordion items={collapsedSingleItem} />);
      await driver.clickItemAt(0);
      expect(await driver.isItemExpandedAt(0)).toBe(true);
    });

    it('should collapse an expanded item on click', async () => {
      const driver = createDriver(<Accordion items={collapsedSingleItem} />);
      await driver.clickItemAt(0);
      expect(await driver.isItemExpandedAt(0)).toBe(true);
      await driver.clickItemAt(0);
      expect(await driver.isItemExpandedAt(0)).toBe(false);
    });

    it('should collapse an initially expanded item on click', async () => {
      const driver = createDriver(
        <Accordion items={[initiallyExpandedSingleItemProps]} />,
      );
      expect(await driver.isItemExpandedAt(0)).toBe(true);
      await driver.clickItemAt(0);
      expect(await driver.isItemExpandedAt(0)).toBe(false);
    });

    it('should accept an expand and collapse button labels', async () => {
      const driver = createDriver(<Accordion items={collapsedSingleItem} />);
      await driver.hoverOnItem(0);
      expect(await driver.getToggleButtonLabelAt(0)).toEqual('see more');
      await driver.clickToggleButtonAt(0);
      expect(await driver.getToggleButtonLabelAt(0)).toEqual('see less');
    });

    it('should accept an expand and collapse button labels when using textButton', async () => {
      const driver = createDriver(
        <Accordion items={singleItemWithTextButton} />,
      );
      await driver.hoverOnItem(0);
      expect(await driver.getToggleButtonLabelAt(0)).toEqual('see more');
      await driver.clickToggleButtonAt(0);
      expect(await driver.getToggleButtonLabelAt(0)).toEqual('see less');
    });

    it('should notify when hovering an item', async () => {
      const driver = createDriver(<Accordion items={collapsedSingleItem} />);
      await driver.hoverOnItem(0);
      expect(collapsedSingleItem[0].onMouseEnter).toHaveBeenCalled();
    });

    it('should not notify hovering an item when item is disabled', async () => {
      const driver = createDriver(
        <Accordion items={collapsedDisabledSingleItem} />,
      );
      await driver.hoverOnItem(0);
      expect(
        collapsedDisabledSingleItem[0].onMouseEnter,
      ).not.toHaveBeenCalled();
    });

    it('should allow only a single item to be expanded by default', async () => {
      const driver = createDriver(<Accordion items={multipleItems} />);

      await driver.clickToggleButtonAt(0);
      await driver.clickToggleButtonAt(1);
      expect(await driver.isItemExpandedAt(0)).toBe(false);
      expect(await driver.isItemExpandedAt(1)).toBe(true);
    });

    it('should update AccordionItems open prop dynamically', async () => {
      const render = createRendererWithUniDriver(accordionPrivateDriverFactory);
      const { driver, rerender } = render(
        <Accordion
          items={[
            {
              ...expandedSingleItemProps,
              open: false,
            },
          ]}
        />,
      );
      expect(await driver.isItemExpandedAt(0)).toBe(false);
      rerender(<Accordion items={[expandedSingleItemProps]} />);
      expect(await driver.isItemExpandedAt(0)).toBe(true);
      rerender(
        <Accordion
          items={[
            {
              ...expandedSingleItemProps,
              open: false,
            },
          ]}
        />,
      );

      await eventually(async () => {
        expect(await driver.isItemExpandedAt(0)).toBe(false);
      });
    });
  });

  // TODO - remove other tests once the old API is obsolete
  describe('builders', () => {
    it('should get title at first item', async () => {
      const title = 'hello!';
      const driver = createDriver(
        <Accordion items={[accordionItemBuilder({ title })]} />,
      );

      expect(await driver.getItemTitleAt(0)).toBe(title);
      expect(await driver.isIconExistsAt(0)).toBe(false);
      expect(await driver.isItemExpandedAt(0)).toBe(false);
    });

    it('should render an icon', async () => {
      const driver = createDriver(
        <Accordion items={[accordionItemBuilder({ icon: <FakeIcon /> })]} />,
      );

      expect(await driver.isIconExistsAt(0)).toBe(true);
    });

    it('should expand first item (uncontrolled)', async () => {
      const driver = createDriver(
        <Accordion
          items={[
            accordionItemBuilder({
              initiallyOpen: true,
            }),
          ]}
        />,
      );

      expect(await driver.isItemExpandedAt(0)).toBe(true);
    });

    it('should expand first item (controlled)', async () => {
      const driver = createDriver(
        <Accordion
          items={[
            accordionItemBuilder({
              open: true,
            }),
          ]}
        />,
      );

      expect(await driver.isItemExpandedAt(0)).toBe(true);
    });

    it('should toggle first item (click button)', async () => {
      const driver = createDriver(
        <Accordion
          items={[accordionItemBuilder({}), accordionItemBuilder({})]}
        />,
      );

      expect(await driver.isItemExpandedAt(0)).toBe(false);
      expect(await driver.isItemExpandedAt(1)).toBe(false);

      await driver.clickToggleButtonAt(0);

      expect(await driver.isItemExpandedAt(0)).toBe(true);
      expect(await driver.isItemExpandedAt(1)).toBe(false);

      await driver.clickToggleButtonAt(1);

      expect(await driver.isItemExpandedAt(0)).toBe(false);
      expect(await driver.isItemExpandedAt(1)).toBe(true);
    });

    it('should toggle first item (click body)', async () => {
      const driver = createDriver(
        <Accordion
          items={[accordionItemBuilder({}), accordionItemBuilder({})]}
        />,
      );

      expect(await driver.isItemExpandedAt(0)).toBe(false);
      expect(await driver.isItemExpandedAt(1)).toBe(false);

      await driver.clickItemAt(0);

      expect(await driver.isItemExpandedAt(0)).toBe(true);
      expect(await driver.isItemExpandedAt(1)).toBe(false);

      await driver.clickItemAt(1);

      expect(await driver.isItemExpandedAt(0)).toBe(false);
      expect(await driver.isItemExpandedAt(1)).toBe(true);
    });
  });
});
