import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import Button from '../../Button';
import PageSection from '../PageSection';
import { pageSectionPrivateDriverFactory } from './PageSection.private.uni.driver';

describe(PageSection.displayName, () => {
  const render = createRendererWithUniDriver(pageSectionPrivateDriverFactory);

  afterEach(cleanup);

  const requiredProps = { title: 'title' };
  it('should render', async () => {
    const { driver } = render(<PageSection {...requiredProps} />);

    expect(await driver.exists()).toBe(true);
  });

  it('should render title', async () => {
    const title = 'page section title';
    const { driver } = render(<PageSection {...requiredProps} title={title} />);

    expect(await driver.isTitleExists()).toBe(true);
    expect(await driver.getTitleText()).toBe(title);
  });

  it('should render subtitle', async () => {
    const subtitle = 'page section title';
    const { driver } = render(
      <PageSection {...requiredProps} subtitle={subtitle} />,
    );

    expect(await driver.isSubtitleExists()).toBe(true);
    expect(await driver.getSubtitleText()).toBe(subtitle);
  });

  it('should render actions bar', async () => {
    const ActionBar = props => props.children;

    const actionsBar = (
      <ActionBar>
        <Button>Action</Button>
      </ActionBar>
    );
    const { driver } = render(
      <PageSection {...requiredProps} actionsBar={actionsBar} />,
    );

    expect(await driver.isActionsBarExists()).toBe(true);
  });
});
