import * as React from 'react';
import SortableList from '..';
import { sortableListTestkitFactory } from '../../../testkit';
import { sortableListTestkitFactory as sortableListEnzymeTestkitFactory } from '../../../testkit/enzyme';
import * as enzyme from 'enzyme';

function SortableListWithMandatoryProps() {
  return <SortableList />;
}

function SortableListWithAllProps() {
  return (
    <SortableList
      dataHook="hook"
      className="cls"
      contentClassName="cls"
      dragPreview
      insertPosition="any"
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
    />
  );
}

async function testkits() {
  const testkit = sortableListTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = sortableListEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });
}
