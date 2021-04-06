import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './Footer.st.css';
import Button from '../../../Button';
import { dataHooks } from '../../constants';
import Divider from '../../../Divider';
import { useBaseModalLayoutContext } from '../../BaseModalLayoutContext';

export const Footer = ({ dataHook, className, showFooterDivider }) => {
  const {
    footerClassName,
    theme,
    actionsSize,
    sideActions,
    secondaryButtonText,
    secondaryButtonOnClick,
    secondaryButtonProps,
    primaryButtonText,
    primaryButtonOnClick,
    primaryButtonProps,
  } = useBaseModalLayoutContext();
  const hasPrimaryButton =
    primaryButtonText || primaryButtonOnClick || primaryButtonProps;
  const hasSecondaryButton =
    secondaryButtonText || secondaryButtonOnClick || secondaryButtonProps;
  const hasFooter = hasPrimaryButton || hasSecondaryButton || sideActions;
  return (
    (hasFooter && (
      <div
        data-hook={dataHook}
        data-divider={showFooterDivider}
        className={st(
          classes.root,
          { showDivider: showFooterDivider },
          footerClassName,
          className,
        )}
      >
        <Divider
          className={classes.divider}
          dataHook={dataHooks.footerDivider}
        />
        <div className={classes.innerContent}>
          {sideActions && (
            <div
              data-hook={dataHooks.footerSideActions}
              className={classes.sideActions}
            >
              {sideActions}
            </div>
          )}
          {(hasPrimaryButton || hasSecondaryButton) && (
            <div className={classes.actions}>
              {hasSecondaryButton && (
                <Button
                  skin={theme}
                  size={actionsSize}
                  onClick={secondaryButtonOnClick}
                  priority="secondary"
                  {...secondaryButtonProps}
                  dataHook={dataHooks.footerSecondaryButton}
                >
                  {secondaryButtonText ||
                    (secondaryButtonProps && secondaryButtonProps.children)}
                </Button>
              )}
              {hasPrimaryButton && (
                <Button
                  skin={theme}
                  size={actionsSize}
                  onClick={primaryButtonOnClick}
                  {...primaryButtonProps}
                  dataHook={dataHooks.footerPrimaryButton}
                >
                  {primaryButtonText ||
                    (primaryButtonProps && primaryButtonProps.children)}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    )) ||
    null
  );
};

Footer.displayName = 'BaseModalLayout.Footer';

Footer.propTypes = {
  /** additional css classes */
  className: PropTypes.string,

  /** data hook for testing */
  dataHook: PropTypes.string,

  /** a theme for the Footer, will affect footer action buttons skin */
  theme: PropTypes.oneOf(['standard', 'premium', 'destructive']),

  /** will determine the action buttons size*/
  actionsSize: Button.propTypes.size,

  /** a text for the primary action button */
  primaryButtonText: PropTypes.string,

  /** a callback for when the primary action button is clicked */
  primaryButtonOnClick: PropTypes.func,

  /** Passed to the primary action button as props without any filter / mutation */
  primaryButtonProps: (() => {
    const { dataHook, ...buttonProps } = Button.propTypes;
    return PropTypes.shape(buttonProps);
  })(),

  /** a text for the secondary action button */
  secondaryButtonText: PropTypes.string,

  /** callback for when the secondary action button is clicked */
  secondaryButtonOnClick: PropTypes.func,

  /** Passed to the secondary button as props without any filter / mutation */
  secondaryButtonProps: (() => {
    const { dataHook, ...buttonProps } = Button.propTypes;
    return PropTypes.shape(buttonProps);
  })(),

  /** side actions node, to be rendered as the first element on the same row as the action buttons */
  sideActions: PropTypes.node,

  /** shows the footer divider */
  showFooterDivider: PropTypes.bool,
};

Footer.defaultProps = {
  showFooterDivider: false,
};
