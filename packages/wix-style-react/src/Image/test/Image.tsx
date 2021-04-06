import * as React from 'react';
import { mount } from 'enzyme';

import Image from '..';
import { imageTestkitFactory } from '../../../testkit';
import { imageTestkitFactory as imageEnzymeTestkitFactory } from '../../../testkit/enzyme';

async function testkits() {
  const vanilla = imageTestkitFactory({
    dataHook: 'test',
    wrapper: document.createElement('div'),
  });

  await vanilla.exists();
  await vanilla.element();
  await vanilla.click();

  const enzyme = imageEnzymeTestkitFactory({
    dataHook: 'test',
    wrapper: mount(<div />),
  });

  await enzyme.exists();
  await enzyme.element();
  await enzyme.click();
}

function ImageWithMandatoryProps() {
  return <Image />;
}

function ImageWithAllProps() {
  return (
    <Image
      dataHook="hook"
      className="cn"
      src="source"
      width="100"
      height={100}
      fit="contain"
      position="center"
      showBorder={true}
      borderRadius={'10px 20px 30px 40px'}
    />
  );
}
