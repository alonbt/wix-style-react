import * as React from 'react';
import SelectorList from '..';
import { selectorListTestkitFactory } from '../../../testkit';

function SelectorListWithMandatoryProps() {
  return (
    <SelectorList
      dataSource={(_searchQuery, _number, _limit) =>
        Promise.resolve({ items: [], totalCount: 0 })
      }
    />
  );
}

function SelectorListWithAllProps() {
  return (
    <SelectorList
      dataSource={(_searchQuery, _number, _limit) =>
        Promise.resolve({
          items: [
            {
              id: 1,
              title: <div />,
              subtitle: 'test',
              subtitleNode: <div />,
              extraText: 'test',
              extraNode: <div />,
              disabled: true,
              selected: true,
              image: <div />,
              belowNode: <div />,
              showBelowNodeOnSelect: true,
            },
          ],
          totalCount: 0,
        })
      }
      emptyState={<div />}
      dataHook="hook"
      height="10px"
      imageShape="circle"
      imageSize="cinema"
      itemsPerPage={10}
      maxHeight="15px"
      multiple
      renderNoResults={_searchValue => <div />}
      searchDebounceMs={1000}
      searchPlaceholder="placeholder"
      withSearch
      onSelect={_item => {}}
    />
  );
}

function ShouldSupportMultipleItemsSelection() {
  return (
    <SelectorList
      dataSource={(_searchQuery, _number, _limit) =>
        Promise.resolve({ items: [], totalCount: 0 })
      }
      emptyState={<div />}
      multiple
    />
  );
}

function ShouldSupportSingleSelection() {
  return (
    <SelectorList
      dataSource={(_searchQuery, _number, _limit) =>
        Promise.resolve({ items: [], totalCount: 0 })
      }
      emptyState={<div />}
      multiple={false}
    />
  );
}

async function testkits() {
  const testkit = selectorListTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });
}
