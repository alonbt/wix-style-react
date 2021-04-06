import * as React from 'react';
import BadgeSelect  from '..';
import BadgeSelectItem from '../../BadgeSelectItem';
import { badgeSelectTestkitFactory } from '../../../testkit';
import { badgeTestkitFactory as badgeSelectEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { mount } from 'enzyme';

function testkits() {
  const vanilla = badgeSelectTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  vanilla.exists();
  vanilla.clickAtOption(4);

  const enzyme = badgeSelectEnzymeTestkitFactory({
    dataHook: 'shbem',
    wrapper: mount(<div />),
  });
}

function BadgeSelectWithMandatoryProps() {
  return <BadgeSelect options={[{id: '0', skin: 'general', text:'general'},]} />;
}

function BadgeSelectWithAllProps() {
  return (
    <BadgeSelect
      type="outlined"
      dataHook="hook"
      onSelect={o => undefined}
      options={[{ id: '1', skin: 'danger', text: 'text', subtitle: 'subtitle', ellipsis: false }]}
      selectedId="1"
      size="medium"
      uppercase
      popoverProps={{placement: 'left'}}
    />
  );
}

function testInstanceMethods() {
  const instance = new BadgeSelect({
    options: [{ id: '1', skin: 'danger', text: 'text', subtitle: 'subtitle', ellipsis: false  }],
  });
  instance.hideDropdown();
  instance.showDropdown();
  instance.toggleDropdown();
  const option: BadgeSelectItem = instance.getSelectedOption({});
}
