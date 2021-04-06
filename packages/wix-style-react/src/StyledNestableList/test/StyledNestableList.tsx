import * as React from 'react';
import StyledNestableList from '..';
import { styledNestableListTestkitFactory } from '../../../testkit';
import { styledNestableListTestkitFactory as styledNestableListEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { styledNestableListTestkitFactory as styledNestableListPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function styledNestableListWithMandatoryProps() {
  return (
    <StyledNestableList
      items={[
        {
          id: 1,
          options: [],
        },
      ]}
    />
  );
}

function styledNestableListWithAllProps() {
  return (
    <StyledNestableList
      items={[
        {
          id: 12,
          options: [],
        },
      ]}
      dataHook={'test'}
      preventChangeDepth={false}
      maxDepth={2}
      addItemLabel={'Add item'}
      onChange={data => {
        // eslint-disable-next-line no-console
        console.log(data);
      }}
      onAddItem={data => {
        // eslint-disable-next-line no-console
        console.log(data);
      }}
    />
  );
}

async function testkits() {
  const testkit = styledNestableListTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = styledNestableListEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await styledNestableListPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
