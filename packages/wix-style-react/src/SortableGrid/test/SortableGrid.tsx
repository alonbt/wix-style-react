import * as React from 'react';
import SortableGrid from '..';
import { sortableGridTestkitFactory } from '../../../testkit';
import { sortableGridTestkitFactory as sortableGridEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { sortableGridTestkitFactory as sortableGridPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function sortableGridWithMandatoryProps() {
  return <SortableGrid />;
}

function sortableGridWithAllProps() {
  return (
    <SortableGrid
      dataHook="dataHook"
      className="className"
      contentClassName="cls"
      dragPreview
      items={[{ id: '1', text: 'text' }]}
      usePortal
      animationDuration={10}
      animationTiming="aa"
      canDrag={_params => {}}
      containerId="aa"
      delay={10}
      droppable
      groupName="name"
      hasDragged
      id="1"
      index={1}
      item={{}}
      listOfPropsThatAffectItems={[]}
      onDragEnd={_params => {}}
      onDragStart={_params => {}}
      onDrop={() => {}}
      onHover={_params => {}}
      onMoveOut={_params => {}}
      renderItem={_params => <span />}
      setWrapperNode={(_node, _index, _item) => {}}
      shift={[10]}
      withHandle
      startFixedElement={<span />}
      endFixedElement={<span />}
    />
  );
}

async function testkits() {
  const testkit = sortableGridTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = sortableGridEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await sortableGridPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
