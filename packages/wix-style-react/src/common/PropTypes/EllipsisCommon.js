import Ellipsis from '../Ellipsis';
import { TooltipCommonProps } from './TooltipCommon';

export const EllipsisCommonProps = {
  ellipsis: Ellipsis.propTypes['ellipsis'],
  showTooltip: Ellipsis.propTypes['showTooltip'],
  ...TooltipCommonProps,
};
