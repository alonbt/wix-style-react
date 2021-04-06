import * as React from 'react';
import { ReactComponent as ErrorIcon } from '../../assets/icons/Error.svg';
import { TooltipSkin } from '../Tooltip/TooltipEnums';
import { Tooltip } from '../Tooltip';
import { TPAComponentProps } from '../../types';
import { DATA_HOOKS, ICON_SIZE } from './constants';
import { st, classes } from './DropdownError.st.css';
import { Placement } from 'wix-ui-core/popover';

interface DropdownErrorProps extends TPAComponentProps {
  errorMessage: string;
  placement?: Placement;
}

export const DropdownError: React.FC<DropdownErrorProps> = ({
  className,
  errorMessage,
  placement = 'top-end',
}) => {
  return (
    <Tooltip
      className={st(classes.root, className)}
      data-hook={DATA_HOOKS.errorTooltip}
      placement={placement}
      skin={TooltipSkin.Error}
      content={errorMessage}
    >
      <ErrorIcon width={ICON_SIZE} height={ICON_SIZE} />
    </Tooltip>
  );
};
