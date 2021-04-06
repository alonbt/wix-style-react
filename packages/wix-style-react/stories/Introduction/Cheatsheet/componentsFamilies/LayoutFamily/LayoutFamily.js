import React from 'react';
import { FamilyStructure } from '../../sharedComponents';
import PageExamples from './examples/PageExamples';
import MarketingPageLayoutExample from './examples/MarketingPageLayoutExample';
import CardExamples from './examples/CardExamples';
import TableExamples from './examples/TableExamples';
import SidePanelExamples from './examples/SidePanelExamples';

import { symbolsGroup } from '../../../../symbolsComponentsMapping/symbols';

const LayoutFamily = () => (
  <FamilyStructure title={symbolsGroup.layout}>
    <PageExamples />
    <MarketingPageLayoutExample />
    <CardExamples />
    <TableExamples />
    <SidePanelExamples />
  </FamilyStructure>
);

export default LayoutFamily;
