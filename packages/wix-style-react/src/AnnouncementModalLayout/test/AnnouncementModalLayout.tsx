import * as React from 'react';
import AnnouncementModalLayout from '..';

function baseModalLayoutWithMandatoryProps() {
  return <AnnouncementModalLayout children="" />;
}

function baseModalLayoutWithAllProps() {
  return (
    <AnnouncementModalLayout
      className="cn"
      dataHook="dh"
      theme="standard"
      onCloseButtonClick={() => {}}
      onHelpButtonClick={() => {}}
      illustration={<div />}
      title="title"
      subtitle="subtitle"
      content={<div />}
      children={<div />}
      actionsSize="small"
      primaryButtonText="primaryButtonText"
      primaryButtonProps={{
        as: 'a',
        className: 'cls',
        disabled: true,
        fullWidth: true,
        prefixIcon: <div />,
        priority: 'primary',
        skin: 'dark',
        size: 'small',
        suffixIcon: <div />,
      }}
      primaryButtonOnClick={() => {}}
      secondaryButtonText="secondaryButtonText"
      secondaryButtonProps={{
        as: 'a',
        className: 'cls',
        disabled: true,
        fullWidth: true,
        prefixIcon: <div />,
        skin: 'dark',
        size: 'small',
        suffixIcon: <div />,
      }}
      secondaryButtonOnClick={() => {}}
      sideActions={<div />}
      footnote={<div />}
      linkText="lt"
      linkOnClick={() => {}}
    />
  );
}
