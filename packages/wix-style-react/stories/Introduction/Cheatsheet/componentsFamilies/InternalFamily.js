import React from 'react';
import {
  FamilyStructure,
  SingleComponentSideBySide,
  singleComponentSizes,
  Preview,
} from '../sharedComponents';
import {
  internalComponentsSymbols,
  symbolsGroup,
} from '../../../symbolsComponentsMapping/symbols';
import { internalComponentsSymbolsToComponents } from '../../../symbolsComponentsMapping/families/internalComponentsFamily';
import { createLinkedComponentsNames } from '../sharedComponents/utils';
import {
  TagList,
  Layout,
  Box,
  Badge,
  Cell,
  Avatar,
  ListItemAction,
  ListItemEditable,
  ListItemSection,
  ListItemSelect,
  DropdownLayout,
  listItemSelectBuilder,
  CardFolderTabs,
  EmptyState,
  Card,
  TextButton,
  FillButton,
  FillPreview,
  Radio,
} from 'wix-style-react';
import Edit from 'wix-ui-icons-common/Edit';
import Add from 'wix-ui-icons-common/Add';

const groupSymbol = symbolsGroup.internalComponents;

const DropdownLayoutExample = () => {
  const symbol = internalComponentsSymbols.dropdownLayout;
  const components = internalComponentsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Box height="230px">
        <DropdownLayout
          visible
          selectedId={2}
          options={[
            listItemSelectBuilder({
              id: 0,
              checkbox: true,
              prefix: <Avatar size="size30" />,
              title: 'Carmel Lloyd',
              subtitle: 'Kaplan 41',
            }),
            listItemSelectBuilder({
              id: 1,
              checkbox: true,
              prefix: <Avatar size="size30" />,
              title: 'Gracie-May Marsden',
              subtitle: 'Sderot Ben Gurion 75',
            }),
            listItemSelectBuilder({
              id: 2,
              checkbox: true,
              prefix: <Avatar size="size30" />,
              title: 'Keisha Decker',
              subtitle: 'Aminadav 18',
            }),
            listItemSelectBuilder({
              id: 3,
              checkbox: true,
              prefix: <Avatar size="size30" />,
              title: 'Ruairidh Fitzgerald',
              subtitle: 'HaYarkon 228',
              disabled: true,
            }),
            listItemSelectBuilder({
              id: 4,
              checkbox: true,
              prefix: <Avatar size="size30" />,
              title: 'Sheldon Chavez',
              subtitle: 'Pinkas 2',
            }),
            listItemSelectBuilder({
              id: 5,
              checkbox: true,
              prefix: <Avatar size="size30" />,
              title: 'Brandan Gibbs',
              subtitle: 'Frishman 38',
            }),
            listItemSelectBuilder({
              id: 6,
              checkbox: true,
              prefix: <Avatar size="size30" />,
              title: 'Gordon Holmes',
              subtitle: 'HaShalom road 66',
            }),
            listItemSelectBuilder({
              id: 7,
              checkbox: true,
              prefix: <Avatar size="size30" />,
              title: 'Aaisha Rios',
              subtitle: 'Arlozorov 101',
            }),
          ]}
        />
      </Box>
    </SingleComponentSideBySide>
  );
};

const TagListExample = () => {
  const thumbTags = [
    {
      id: '1',
      children: 'Green',
      thumb: <Box height="100%" backgroundColor="G10" />,
    },
    {
      id: '2',
      children: 'Red',
      thumb: <Box height="100%" backgroundColor="R10" />,
    },
    {
      id: '3',
      children: 'Yellow',
      thumb: <Box height="100%" backgroundColor="Y10" />,
    },
    {
      id: '4',
      children: 'Avatar',
      thumb: (
        <Avatar
          imgProps={{
            src: 'https://randomuser.me/api/portraits/women/39.jpg',
          }}
          size="size18"
        />
      ),
    },
  ];

  const themeTags = [
    { id: '1', children: 'Default' },
    { id: '2', children: 'Error', theme: 'error' },
    { id: '3', children: 'Warning', theme: 'warning' },
    { id: '4', children: 'Dark', theme: 'dark' },
  ];

  const renderTagsLayout = tagsArr => (
    <Cell>
      <TagList
        tags={tagsArr}
        maxVisibleTags={3}
        toggleMoreButton={(amountOfHiddenTags, isExpanded) => ({
          label: isExpanded ? 'Show Less' : `+${amountOfHiddenTags} More`,
          tooltipContent: !isExpanded && 'Show More',
        })}
      />
    </Cell>
  );

  const symbol = internalComponentsSymbols.tagList;
  const components = internalComponentsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Layout>
        {renderTagsLayout(thumbTags)}
        {renderTagsLayout(themeTags)}
      </Layout>
    </SingleComponentSideBySide>
  );
};

const ListItemActionExample = () => {
  const symbol = internalComponentsSymbols.listItemAction;
  const components = internalComponentsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Preview stretch>
        <ListItemAction as="button" title="Option 1" prefixIcon={<Edit />} />
      </Preview>
    </SingleComponentSideBySide>
  );
};

const ListItemEditableExample = () => {
  const symbol = internalComponentsSymbols.listItemEditable;
  const components = internalComponentsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Preview stretch>
        <ListItemEditable
          onApprove={() => {}}
          onCancel={() => {}}
          placeholder="Value"
          cancelButtonTooltipContent="Cancel"
          approveButtonTooltipContent="Approve"
          size="small"
        />
      </Preview>
    </SingleComponentSideBySide>
  );
};

const ListItemSectionExample = () => {
  const symbol = internalComponentsSymbols.listItemSection;
  const components = internalComponentsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Preview stretch>
        <ListItemSection title="Title area" suffix="Suffix Action" />
      </Preview>
    </SingleComponentSideBySide>
  );
};

const ListItemSelectExample = () => {
  const symbol = internalComponentsSymbols.listItemSelect;
  const components = internalComponentsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
    size: singleComponentSizes.compact,
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Preview stretch>
        <ListItemSelect
          prefix={<Avatar size="size24" />}
          title="Title area"
          suffix={<Badge size="small" skin="success" children="Badge" />}
        />
      </Preview>
    </SingleComponentSideBySide>
  );
};

const CardFolderTabsExample = () => {
  const symbol = internalComponentsSymbols.cardFolderTabs;
  const components = internalComponentsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  const [activeTabId, setActiveTabId] = React.useState('1');

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Preview stretch>
        <CardFolderTabs
          activeId={activeTabId}
          onTabChange={activeTabId => setActiveTabId(activeTabId)}
        >
          <CardFolderTabs.Tab id="1" name="Selected Tab">
            <Card>
              <Card.Content>
                <EmptyState
                  title="This is a nice tab"
                  subtitle="Create your own tabs and try them!"
                  theme="section"
                >
                  <TextButton prefixIcon={<Add />}>Pointless button</TextButton>
                </EmptyState>
              </Card.Content>
            </Card>
          </CardFolderTabs.Tab>
          <CardFolderTabs.Tab id="2" name="Second Tab">
            <Card>
              <Card.Content>
                <EmptyState
                  title="This is a nice tab"
                  subtitle="Create your own tabs and try them!"
                  theme="section"
                >
                  <TextButton prefixIcon={<Add />}>Pointless button</TextButton>
                </EmptyState>
              </Card.Content>
            </Card>
          </CardFolderTabs.Tab>
          <CardFolderTabs.Tab id="3" name="Disabled tab" disabled>
            <div>This tab has no real content, it's disabled anyway</div>
          </CardFolderTabs.Tab>
          <CardFolderTabs.Tab id="4" name="Fourth Tab">
            <Card>
              <Card.Content>
                <EmptyState
                  title="This is a nice tab"
                  subtitle="Create your own tabs and try them!"
                  theme="section"
                >
                  <TextButton prefixIcon={<Add />}>Pointless button</TextButton>
                </EmptyState>
              </Card.Content>
            </Card>
          </CardFolderTabs.Tab>
        </CardFolderTabs>
      </Preview>
    </SingleComponentSideBySide>
  );
};

const FillPreviewExample = () => {
  const symbol = internalComponentsSymbols.fillPreview;
  const components = internalComponentsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Preview>
        <FillPreview fill="#3399ff" selected />
      </Preview>
    </SingleComponentSideBySide>
  );
};

const FillButtonExample = () => {
  const symbol = internalComponentsSymbols.fillButton;
  const components = internalComponentsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Preview>
        <FillButton tooltipContent="hello there" />
      </Preview>
    </SingleComponentSideBySide>
  );
};

const RadioExample = () => {
  const [state, setState] = React.useState({ selectedId: null });
  const toggleSelection = selectedId => setState({ selectedId });

  const symbol = internalComponentsSymbols.radio;
  const components = internalComponentsSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentSideBySide {...singleComponentProps}>
      <Radio
        label="Radio Label"
        checked={state.selectedId === 1}
        onChange={() => toggleSelection(1)}
      />
    </SingleComponentSideBySide>
  );
};

const InternalFamily = () => (
  <FamilyStructure title={groupSymbol} showPreview>
    <DropdownLayoutExample />
    <ListItemActionExample />
    <ListItemEditableExample />
    <ListItemSectionExample />
    <ListItemSelectExample />
    <TagListExample />
    <CardFolderTabsExample />
    <FillPreviewExample />
    <FillButtonExample />
    <RadioExample />
  </FamilyStructure>
);

export default InternalFamily;
