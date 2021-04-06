/**
 * A utility function that extracts Ellipsis relevant props and wrapped Component relevant props
 * @returns {{ellipsisProps: *, componentProps: *}}
 */
export const extractEllipsisProps = ({
  appendTo,
  disabled,
  ellipsis,
  enterDelay,
  exitDelay,
  fixed,
  flip,
  maxWidth,
  moveArrowTo,
  onHide,
  onShow,
  placement,
  showTooltip,
  textAlign,
  zIndex,
  maxLines,
  ...componentProps
}) => {
  return {
    ellipsisProps: {
      appendTo,
      disabled,
      ellipsis,
      enterDelay,
      exitDelay,
      fixed,
      flip,
      maxWidth,
      moveArrowTo,
      onHide,
      onShow,
      placement,
      showTooltip,
      textAlign,
      zIndex,
      maxLines,
    },
    componentProps,
  };
};
