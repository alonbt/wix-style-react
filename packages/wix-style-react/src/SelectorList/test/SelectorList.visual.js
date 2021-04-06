import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { uniTestkitFactoryCreator } from 'wix-ui-test-utils/vanilla';
import { selectorListUniDriverFactory } from '../SelectorList.uni.driver';
import SelectorList from '../index';
import { IMAGE_SHAPE, IMAGE_SIZE } from '../constants';

const dataHook = 'selector-list';

const selectorListUniTestkitFactory = uniTestkitFactoryCreator(
  selectorListUniDriverFactory,
);
const createDriver = () =>
  selectorListUniTestkitFactory({
    wrapper: document.body,
    dataHook,
  });

const imageShapes = Object.values(IMAGE_SHAPE);
const imageSizes = Object.values(IMAGE_SIZE);

const isEven = number => number % 2 === 0;

const ITEMS = Array.from({ length: 50 }, (_, index) => {
  return {
    id: index,
    title: `Title ${index}`,
    subtitle: `Subtitle ${index}`,
    extraText: `Extra Text ${index}`,
    disabled: isEven(index),
    image: (
      <div style={{ width: '100%', height: '100%', background: '#bada55' }} />
    ),
  };
});

const Example = props => (
  <SelectorList
    dataHook={dataHook}
    height="540px"
    itemsPerPage={8}
    dataSource={() =>
      Promise.resolve({
        items: ITEMS,
        totalCount: ITEMS.length,
      })
    }
    {...props}
  />
);

const InteractiveExample = ({ componentDidMount, ...props }) => {
  useEffect(() => {
    componentDidMount();
  }, [componentDidMount]);

  return <Example {...props} />;
};

const interactiveTests = [
  {
    describe: 'select item',
    its: [
      {
        it: 'should select item',
        props: { multiple: true },
        componentDidMount: async () => {
          await createDriver().toggleSelectorAt(1);
        },
      },
      {
        it: 'should not select item when disabled',
        props: { multiple: true },
        componentDidMount: async () => {
          const DISABLED_INDEX = 0;
          await createDriver().toggleSelectorAt(DISABLED_INDEX);
        },
      },
      {
        it: 'should allow to select multiple items',
        props: { multiple: true },
        componentDidMount: async () => {
          await createDriver().toggleSelectorAt(1);
          await createDriver().toggleSelectorAt(3);
        },
      },
    ],
  },
];

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'sanity',
        props: {},
      },
    ],
  },
  {
    describe: 'selection',
    its: [
      {
        it: 'single',
        props: {},
      },
      {
        it: 'multiple',
        props: { multiple: true },
      },
    ],
  },
  {
    describe: 'empty state',
    its: [
      {
        it: 'empty state',
        props: {
          dataSource: () =>
            Promise.resolve({
              items: [],
              totalCount: 0,
            }),
          emptyState: 'no items to select',
        },
      },
    ],
  },
  {
    describe: 'search bar',
    its: [
      {
        it: 'should render selector list without search bar',
        props: { withSearch: false },
      },
    ],
  },
  {
    describe: 'image shape',
    its: imageShapes.map(shape => ({
      it: shape,
      props: { imageShape: shape },
    })),
  },
  {
    describe: 'image size',
    its: imageSizes.map(size => ({
      it: size,
      props: { imageSize: size },
    })),
  },
  {
    describe: 'subtitle',
    its: [
      {
        it: 'should display subtitle',
        props: { subtitle: 'selector list subtitle' },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`SelectorList${describe ? '/' + describe : ''}`, module).add(
      it,
      () => <Example {...props} />,
    );
  });
});

interactiveTests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, componentDidMount }) => {
    storiesOf(`SelectorList${describe ? '/' + describe : ''}`, module).add(
      it,
      () => (
        <InteractiveExample {...props} componentDidMount={componentDidMount} />
      ),
    );
  });
});
