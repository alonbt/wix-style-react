import * as React from 'react';
import Selector from '..';
import { selectorTestkitFactory } from '../../../testkit';
import { selectorTestkitFactory as selectorEnzymeTestkitFactory } from '../../../testkit/enzyme';
import * as enzyme from 'enzyme';

function SelectorWithMandatoryProps() {
  return <Selector id="1" title="title" />;
}

function SelectorWithAllProps() {
  const ExtraText = <Selector.ExtraText dataHook="hook" text="text" />;

  const Progressbar = <Selector.ProgressBar dataHook="hook" progress={1} />;

  return (
    <Selector
      className="cls"
      dataHook="hook"
      extraNode={<div />}
      id="1"
      image={<div />}
      imageShape="circle"
      imageSize="cinema"
      isDisabled
      isSelected
      onToggle={_id => {}}
      subtitle="text"
      title="title"
      toggleType="checkbox"
      showBelowNodeOnSelect
      belowNode={<div />}
      subtitleNode={<div />}
    />
  );
}

async function testkits() {
  const testkit = selectorTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = selectorEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });
}
