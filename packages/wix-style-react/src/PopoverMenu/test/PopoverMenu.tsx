import * as React from 'react';
import PopoverMenu from '..';
import { popoverMenuTestkitFactory } from '../../../testkit';
import { popoverMenuTestkitFactory as popoverMenuEnzymeTestkitFactory } from '../../../testkit/enzyme';
import * as enzyme from 'enzyme';
import {Edit} from 'wix-ui-icons-common';

function PopoverMenuWithMandatoryProps() {
  return <PopoverMenu triggerElement={<span />} />;
}

function PopoverMenuWithAllProps() {
  return (
    <PopoverMenu
      triggerElement={<span />}
      maxWidth={1}
      minWidth={1}
      maxHeight="500px"
      zIndex={1}
      moveBy={{ x: 1, y: 1 }}
      placement="right-start"
      textSize="small"
      appendTo="parent"
      flip
      fixed
      showArrow
      ellipsis
      dataHook="hook"
      className="hello"
    />
  );
}

function PopoverMenuWithMoveByX() {
  return <PopoverMenu triggerElement={<span />} moveBy={{ x: 1 }} />;
}

function PopoverMenuWithMoveByY() {
  return <PopoverMenu triggerElement={<span />} moveBy={{ y: 1 }} />;


  function PopoverMenuMenuItemWithAllProps() {
    return (
      <PopoverMenu.MenuItem
      text="title"
      onClick={() => (alert("menuItem clicked"))}
      skin="dark"
      prefixIcon={<Edit />}
      dataHook="menu-item-hook"
      disabled={false}
      subtitle="subtitle"
      />
    );
  }}

async function testkits() {
  const testkit = popoverMenuTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = popoverMenuEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });
}
