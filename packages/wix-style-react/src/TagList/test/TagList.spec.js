import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import TagList from '../TagList';
import { tagListPrivateDriverFactory } from './TagList.private.uni.driver';

describe(TagList.displayName, () => {
  const render = createRendererWithUniDriver(tagListPrivateDriverFactory);

  afterEach(cleanup);

  it('should render', async () => {
    const { driver } = render(
      <TagList
        tags={[
          {
            id: '1',
            children: 'Some Tag',
          },
        ]}
      />,
    );

    expect(await driver.exists()).toBe(true);
  });

  it('should not show toggle more button', async () => {
    const { driver } = render(
      <TagList
        tags={[
          {
            id: '1',
            children: 'Some Tag',
          },
        ]}
      />,
    );

    expect(await driver.toggleMoreButtonExists()).toBe(false);
  });

  it('should show toggle more button when prop is passed', async () => {
    const { driver } = render(
      <TagList
        tags={[
          {
            id: '1',
            children: 'Some Tag',
          },
          {
            id: '2',
            children: 'Tag 2',
          },
          {
            id: '3',
            children: 'Tag 3',
          },
          {
            id: '4',
            children: 'Tag 4',
          },
        ]}
        toggleMoreButton={(amountOfHiddenTags, isExpanded) => ({
          label: isExpanded ? 'Show Less' : `+${amountOfHiddenTags} More`,
          tooltipContent: !isExpanded && 'Show More',
        })}
      />,
    );

    expect(await driver.toggleMoreButtonExists()).toBe(true);
  });

  it('should click toggle more button', async () => {
    const { driver } = render(
      <TagList
        tags={[
          {
            id: '1',
            children: 'Some Tag',
          },
          {
            id: '2',
            children: 'Tag 2',
          },
          {
            id: '3',
            children: 'Tag 3',
          },
          {
            id: '4',
            children: 'Tag 4',
          },
        ]}
        toggleMoreButton={(amountOfHiddenTags, isExpanded) => ({
          label: isExpanded ? 'Show Less' : `+${amountOfHiddenTags} More`,
          tooltipContent: !isExpanded && 'Show More',
        })}
      />,
    );
    expect(await driver.toggleMoreButtonLabel()).toEqual('+1 More');
    await driver.clickToggleMoreButton();
    expect(await driver.toggleMoreButtonLabel()).toEqual('Show Less');
  });

  it('should not show action button', async () => {
    const { driver } = render(
      <TagList
        tags={[
          {
            id: '1',
            children: 'Some Tag',
          },
        ]}
      />,
    );

    expect(await driver.actionButtonExists()).toBe(false);
  });

  it('should show action button', async () => {
    const actionButtonLabel = 'Do Action';
    const { driver } = render(
      <TagList
        tags={[
          {
            id: '1',
            children: 'Some Tag',
          },
        ]}
        actionButton={{
          label: actionButtonLabel,
        }}
      />,
    );

    expect(await driver.actionButtonExists()).toBe(true);
    expect(await driver.actionButtonLabel()).toBe(actionButtonLabel);
  });

  it('should click action button', async () => {
    const onActionButtonClickFn = jest.fn();
    const { driver } = render(
      <TagList
        tags={[
          {
            id: '1',
            children: 'Some Tag',
          },
        ]}
        actionButton={{
          onClick: onActionButtonClickFn,
        }}
      />,
    );
    await driver.clickActionButton();
    expect(onActionButtonClickFn).toHaveBeenCalled();
  });

  it('should trigger onRemove when removing a tag', async () => {
    const onTagRemove = jest.fn();
    const id = 'one';
    const { driver } = render(
      <TagList
        onTagRemove={onTagRemove}
        tags={[
          {
            id,
            children: 'Some Tag',
          },
        ]}
      />,
    );
    await driver.removeTag(id);
    expect(onTagRemove).toHaveBeenCalledWith(id);
  });
});
