import React, { useState, useCallback } from 'react';
import { st, classes } from './MessageModalLayout.st.css';

import BaseModalLayout from '../BaseModalLayout';
import PropTypes from 'prop-types';
import Button from '../Button';

/** MessageModalLayout */
const MessageModalLayout = ({ children, className, ...restProps }) => {
  const { illustration } = restProps;
  const [showFooterDivider, setShowFooterDivider] = useState(false);

  const onContentScrollAreaChanged = useCallback(({ area }) => {
    const { y: scrollArea } = area;
    const newShowDivider = scrollArea === 'top' || scrollArea === 'middle';
    setShowFooterDivider(newShowDivider);
  }, []);

  const hasIllustration = !!illustration;

  return (
    <BaseModalLayout
      {...restProps}
      className={st(classes.root, { hasIllustration }, className)}
    >
      <div className={classes.topAreaContainer}>
        <BaseModalLayout.Illustration />
        <div className={classes.contentAreaContainer}>
          <BaseModalLayout.Header />
          <BaseModalLayout.Content
            hideTopScrollDivider={hasIllustration}
            hideBottomScrollDivider={hasIllustration}
            scrollProps={{
              onScrollAreaChanged:
                (hasIllustration && onContentScrollAreaChanged) || null,
            }}
          >
            {children}
          </BaseModalLayout.Content>
        </div>
      </div>
      <BaseModalLayout.Footer
        showFooterDivider={hasIllustration && showFooterDivider}
      />
      <BaseModalLayout.Footnote />
    </BaseModalLayout>
  );
};

MessageModalLayout.displayName = 'MessageModalLayout';

MessageModalLayout.propTypes = {
  /** ...BaseModalLayout.propTypes, */
  /** additional css classes */
  className: PropTypes.string,
  /** data hook for testing */
  dataHook: PropTypes.string,
  /** callback for when the close button is clicked */
  onCloseButtonClick: PropTypes.func,
  /** callback for when the help button is clicked */
  onHelpButtonClick: PropTypes.func,
  /** a global theme for the modal, will be applied as stylable state and will affect footer buttons skin */
  theme: PropTypes.oneOf(['standard', 'premium', 'destructive']),

  /** ...Header.propTypes, */
  /** The modal's title */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** ...Content.propTypes, */
  /** the content you want to render in the modal, children passed directly will be treated as `content` as well */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** ...Footer.propTypes, */
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

  /** ...Footnote.propTypes, */
  /** a footnote node, to be rendered at the very bottom of the modal */
  footnote: PropTypes.node,

  /** ...Illustration.propTypes, */
  /** The illustration src or the illustration node itself */
  illustration: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

MessageModalLayout.defaultProps = {
  theme: 'standard',
  actionsSize: 'small',
};

export default MessageModalLayout;
