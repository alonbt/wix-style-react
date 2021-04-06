import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './Header.st.css';
import ModalHeading from './ModalHeading';
import { dataHooks } from '../../constants';
import Text from '../../../Text';
import Divider from '../../../Divider';
import { useBaseModalLayoutContext } from '../../BaseModalLayoutContext';

export const Header = ({
  dataHook,
  className,
  titleAppearance,
  showHeaderDivider,
}) => {
  const { headerClassName, title, subtitle } = useBaseModalLayoutContext();

  return (
    ((title || subtitle) && (
      <div
        data-hook={dataHook}
        className={st(classes.root, headerClassName, className)}
      >
        <div className={classes.innerContent}>
          {typeof title === 'string' ? (
            <Header.Title headingAppearance={titleAppearance}>
              {title}
            </Header.Title>
          ) : (
            title
          )}
          {subtitle && (
            <Text
              className={classes.subtitle}
              secondary
              dataHook={dataHooks.headerSubtitle}
            >
              {subtitle}
            </Text>
          )}
        </div>
        {showHeaderDivider && <Divider />}
      </div>
    )) ||
    null
  );
};

Header.Title = ({ headingAppearance = 'custom', children }) => (
  <ModalHeading
    headingAppearance={headingAppearance}
    children={children}
    className={classes.title}
    dataHook={dataHooks.headerTitle}
  />
);

Header.displayName = 'BaseModalLayout.Header';

Header.propTypes = {
  /** additional css classes */
  className: PropTypes.string,

  /** data hook for testing */
  dataHook: PropTypes.string,

  /** The modal's title */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** The modal's title appearance */
  titleAppearance: ModalHeading.propTypes.headingAppearance,

  /** The modal's subtitle */
  subtitle: PropTypes.string,

  /** Shows a divider at the bottom of the Header*/
  showHeaderDivider: PropTypes.bool,
};

Header.defaultProps = {
  titleAppearance: 'custom',
  showHeaderDivider: false,
};
