/* eslint-disable no-console */
import React from 'react';

import {
  createLinkedComponentsNames,
  createLinkedSymbolName,
} from '../../../sharedComponents/utils';

import { layoutSymbolsToComponents } from '../../../../../symbolsComponentsMapping/families/layoutFamily';
import { layoutSymbols } from '../../../../../symbolsComponentsMapping/symbols';
import { SingleComponentStacked, Preview } from '../../../sharedComponents';

import Toolbox from 'wix-ui-icons-common/Toolbox';

import {
  SidePanel,
  Tabs,
  Accordion,
  RadioGroup,
  DatePicker,
  Search,
  ListItemSelect,
  Box,
  Button,
} from 'wix-style-react';

const AdvancedSidePanelExample = () => (
  <Preview>
    <SidePanel
      title="Filters Panel"
      onCloseButtonClick={() => console.log('on close button')}
    >
      <SidePanel.Header title="Title" infoTooltipContent="Tooltip">
        <Tabs
          items={[
            { id: 1, title: 'Selected Tab' },
            { id: 2, title: 'Second Tab' },
          ]}
          activeId={1}
          type="uniformSide"
          width="174px"
        />
      </SidePanel.Header>
      <Accordion
        items={[
          {
            title: 'Payment Status',
            children: (
              <RadioGroup value={1}>
                <RadioGroup.Radio value={1}>Option 1</RadioGroup.Radio>
                <RadioGroup.Radio value={2}>Option 2</RadioGroup.Radio>
                <RadioGroup.Radio value={3}>Option 3</RadioGroup.Radio>
              </RadioGroup>
            ),
          },
          {
            title: 'Dates',
            children: (
              <Box>
                <DatePicker onChange={e => e} placeholderText="Select Date" />
              </Box>
            ),
          },
          {
            title: 'Product',
            children: (
              <>
                <Box direction="vertical" marginBottom={2}>
                  <Search
                    value=""
                    options={[]}
                    placeholder="Search for products by name"
                  />
                </Box>
                <ListItemSelect
                  prefix={
                    <Box>
                      <Toolbox />
                    </Box>
                  }
                  title="Product 1"
                  subtitle="Subtitle"
                />{' '}
                <ListItemSelect
                  prefix={
                    <Box>
                      <Toolbox />
                    </Box>
                  }
                  title="Product 2"
                  subtitle="Subtitle"
                />
                <ListItemSelect
                  prefix={
                    <Box>
                      <Toolbox />
                    </Box>
                  }
                  title="Product 3"
                  subtitle="Subtitle"
                />
              </>
            ),
          },
        ]}
      />
      <SidePanel.Footer>
        <Box align="right">
          <Box marginRight={1}>
            <Button onClick={() => console.log('cancel')} priority="secondary">
              Cancel
            </Button>
          </Box>
          <Box>
            <Button onClick={() => console.log('apply')}>Apply</Button>
          </Box>
        </Box>
      </SidePanel.Footer>
    </SidePanel>
  </Preview>
);

const SidePanelExamples = () => {
  const symbol = layoutSymbols.sidePanel;
  const components = layoutSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: symbol,
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <AdvancedSidePanelExample />
    </SingleComponentStacked>
  );
};

export default SidePanelExamples;
