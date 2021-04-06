import * as React from 'react';
import ListItemEditable, {
  ListItemEditableMargins,
  ListItemEditableSize,
  listItemEditableBuilder,
} from '..';
import { listItemEditableTestkitFactory } from '../../../testkit';
import { listItemEditableTestkitFactory as listItemEditableEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { listItemEditableTestkitFactory as listItemEditablePuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function ListItemEditableWithMandatoryProps() {
  return <ListItemEditable onApprove={() => null} onCancel={() => null} />;
}

function ListItemEditableWithAllProps() {
  return (
    <ListItemEditable
      dataHook="dataHook"
      className="className"
      onCancel={() => null}
      onApprove={() => null}
      approveButtonTooltipContent={<div>approve</div>}
      cancelButtonTooltipContent={<div>cancel</div>}
      placeholder="placeholder"
      size={ListItemEditableSize.SMALL}
      status="error"
      statusMessage={<div>message</div>}
      margins={ListItemEditableMargins.LIST_ITEM}
    />
  );
}

function listItemEditableBuilderWithMandatoryProps() {
  listItemEditableBuilder({
    id: '1',
    onApprove: () => null,
    onCancel: () => null,
  });
}

function listItemEditableBuilderWithAllProps() {
  const {id , disabled, overrideOptionStyle, value } = listItemEditableBuilder({
    id: '1',
    onApprove: () => null,
    onCancel: () => null,
    dataHook: 'some-data-hook',
    className: 'cls',
    placeholder: 'some placeholder',
    cancelButtonTooltipContent: <div>Cancel</div>,
    cancelButtonTooltipProps: {},
    approveButtonTooltipContent: <div>Approve</div>,
    approveButtonTooltipProps: {},
    size: ListItemEditableSize.MEDIUM,
    status: 'error',
    statusMessage: <div>has an error</div>,
    margins: ListItemEditableMargins.LIST_ITEM,
  });
}

async function testkits() {
  const testkit = listItemEditableTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = listItemEditableEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await listItemEditablePuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
