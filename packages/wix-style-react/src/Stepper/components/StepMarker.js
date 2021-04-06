import React from 'react';
import Confirm from 'wix-ui-icons-common/Confirm';
import FormFieldErrorSmall from 'wix-ui-icons-common/system/FormFieldErrorSmall';
import StatusAlertFilled from 'wix-ui-icons-common/StatusAlertFilled';

import { Type, StepType } from '../constants';
import { st, classes } from './StepMarker.st.css';

const StepMarker = ({
  number,
  active,
  type,
  styleType,
  hovered,
  disabled,
  className,
  ...otherProps
}) => {
  const renderCompleted = () => <Confirm />;
  const renderNumber = () => `${number}${styleType === Type.Text ? '.' : ''}`;
  const renderError = () =>
    styleType === Type.Text ? (
      <StatusAlertFilled />
    ) : (
      <FormFieldErrorSmall size="12px" />
    );

  return (
    <div
      className={st(
        classes.root,
        {
          type,
          styleType,
          selected: active,
          hovered,
        },
        className,
      )}
    >
      {type === StepType.Error
        ? renderError()
        : type === StepType.Completed
        ? renderCompleted()
        : renderNumber()}
    </div>
  );
};

export default StepMarker;
