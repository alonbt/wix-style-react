import * as React from 'react';
import TagList from '..';
import { tagListTestkitFactory } from '../../../testkit';
import { tagListTestkitFactory as tagListEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { tagListTestkitFactory as tagListPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function tagListWithMandatoryProps() {
  return (
    <TagList
      tags={[
        {
          id: '1',
          children: 'Some Tag',
        },
      ]}
    />
  );
}

function tagListWithAllProps() {
  return (
    <TagList
      dataHook="dataHook"
      tags={[
        {
          id: '1',
          children: 'Some Tag',
        },
      ]}
      size="medium"
      actionButton={{
        label: 'action',
        onClick: () => null,
      }}
      toggleMoreButton={(amountOfHiddenTags, isExpanded) => ({
        label: isExpanded ? 'Show Less' : `+${amountOfHiddenTags} More`,
        tooltipContent: !isExpanded && 'Show More',
      })}
      onTagRemove={() => {}}
    />
  );
}

async function testkits() {
  const testkit = tagListTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = tagListEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await tagListPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
