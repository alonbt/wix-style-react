/* eslint-disable no-console */
import React from 'react';
import { SingleComponentStacked, Preview } from '../../../sharedComponents';
import {
  createLinkedSymbolName,
  createLinkedComponentsNames,
} from '../../../sharedComponents/utils';

import { layoutSymbolsToComponents } from '../../../../../symbolsComponentsMapping/families/layoutFamily';
import { layoutSymbols } from '../../../../../symbolsComponentsMapping/symbols';

import Add from 'wix-ui-icons-common/Add';
import { Category } from '../../../../../storiesHierarchy';

import { Card, Box, TextButton } from 'wix-style-react';

const CardExamples = () => {
  const symbol = layoutSymbols.cardLayout;
  const components = layoutSymbolsToComponents[symbol];

  const singleComponentProps = {
    name: createLinkedSymbolName({ groupSymbol: Category.LAYOUT, symbol }),
    componentsNames: createLinkedComponentsNames(components),
  };

  return (
    <SingleComponentStacked {...singleComponentProps}>
      <Preview stretch>
        <Card>
          <Card.Header
            title="Card title"
            subtitle="This is how a subtitle looks like"
            suffix={
              <TextButton
                onClick={() => console.log('TextButton clicked!')}
                size="medium"
                prefixIcon={<Add />}
                children="Text Button"
              />
            }
          />
          <Card.Content>
            <Box minHeight="200px" />
          </Card.Content>
        </Card>
      </Preview>
    </SingleComponentStacked>
  );
};

export default CardExamples;
