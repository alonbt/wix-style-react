import React from 'react';
import PropTypes from 'prop-types';

import { st, classes } from './AnnouncementModalLayout.st.css';
import TextButton from '../TextButton';
import { dataHooks } from './constants';

import BaseModalLayout from '../BaseModalLayout';
import Button from '../Button';

/** A layout for announcement modals, to be used inside a &lt;Modal /&gt; */
const AnnouncementModalLayout = ({ children, className, ...restProps }) => (
  <BaseModalLayout
    className={st(classes.announcementModalLayout, className)}
    {...restProps}
  >
    <BaseModalLayout.Illustration />
    <BaseModalLayout.Header titleAppearance={'H2'} />
    <BaseModalLayout.Content hideTopScrollDivider hideBottomScrollDivider>
      {children}
    </BaseModalLayout.Content>
    <BaseModalLayout.Footer />
    <Link {...restProps} />
    <div className={classes.bottomSpacing} />
    <BaseModalLayout.Footnote />
  </BaseModalLayout>
);

const Link = ({ linkText, linkOnClick, theme }) =>
  ((linkText || linkOnClick) && (
    <div className={classes.link}>
      <TextButton
        size="small"
        weight="normal"
        dataHook={dataHooks.link}
        onClick={linkOnClick}
        skin={theme}
      >
        {linkText}
      </TextButton>
    </div>
  )) ||
  null;

AnnouncementModalLayout.displayName = 'AnnouncementModalLayout';

AnnouncementModalLayout.propTypes = {
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
  theme: PropTypes.oneOf(['standard', 'premium']),

  /** ...Header.propTypes, */
  /** The modal's title */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** The modal's subtitle */
  subtitle: PropTypes.string,

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

  /** AnnouncementModalLayout */
  /** When not provided, the primary link will not be rendered */
  linkText: PropTypes.string,
  /** callback for when the link is clicked */
  linkOnClick: PropTypes.func,
};

AnnouncementModalLayout.defaultProps = {
  theme: 'standard',
  actionsSize: 'medium',
};

export default AnnouncementModalLayout;
