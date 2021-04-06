import * as React from 'react';
import BaseModalLayout from '..';

function baseModalLayoutWithMandatoryProps() {
  return <BaseModalLayout />;
}

function baseModalLayoutWithAllProps() {
  return (
    <BaseModalLayout
      className={'cls'}
      dataHook={'BML-dh'}
      onCloseButtonClick={() => {}}
      onHelpButtonClick={() => {}}
      theme={'standard'}
    >
      <BaseModalLayout.Illustration
        className={'cls-illustration'}
        dataHook={'dh-illustration'}
        illustration={'illustration-src'}
      />
      <BaseModalLayout.Header
        className={'cls-header'}
        dataHook={'dh-header'}
        title={'title-header'}
        subtitle={'subtitle-header'}
        titleAppearance={'H2'}
        showHeaderDivider
      />
      <BaseModalLayout.Content
        className={'cls-content'}
        dataHook={'fh-content'}
        content={'content'}
        hideTopScrollDivider={false}
        hideBottomScrollDivider={false}
        scrollProps={{
          onScrollChanged: () => {},
          onScrollAreaChanged: () => {},
        }}
      />
      <BaseModalLayout.Footer
        className={'cls-footer'}
        dataHook={'dh-footer'}
        primaryButtonText={'pb-text'}
        primaryButtonProps={{}}
        primaryButtonOnClick={() => {}}
        secondaryButtonText={'sb-text'}
        secondaryButtonProps={{}}
        secondaryButtonOnClick={() => {}}
        actionsSize={'large'}
        sideActions={<div />}
        theme={'standard'}
        showFooterDivider
      />
      <BaseModalLayout.Footnote
        className={'cls-footnote'}
        dataHook={'dh-footnote'}
        footnote={<div />}
      />
    </BaseModalLayout>
  );
}

function baseModalLayoutWithCustomHeader() {
  return (
    <BaseModalLayout>
      <BaseModalLayout.Header
        title={
          <BaseModalLayout.Header.Title>Hello</BaseModalLayout.Header.Title>
        }
      />
    </BaseModalLayout>
  );
}
