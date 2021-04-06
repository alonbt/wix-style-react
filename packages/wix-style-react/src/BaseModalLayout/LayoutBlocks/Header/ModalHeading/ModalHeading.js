import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../../Heading';
import { st, classes } from './ModalHeading.st.css';
import { WixStyleReactContext } from '../../../../WixStyleReactProvider/context';

const ModalHeading = ({ className, headingAppearance, ...restProps }) => (
  <WixStyleReactContext.Consumer>
    {({ reducedSpacingAndImprovedLayout }) => {
      const appearance =
        headingAppearance !== 'custom'
          ? headingAppearance
          : reducedSpacingAndImprovedLayout
          ? 'H2'
          : 'H3';

      return (
        <Heading
          {...restProps}
          className={st(
            classes.root,
            {
              custom:
                headingAppearance === 'custom' &&
                !reducedSpacingAndImprovedLayout,
            },
            className,
          )}
          appearance={appearance}
        />
      );
    }}
  </WixStyleReactContext.Consumer>
);

ModalHeading.propTypes = {
  ...Heading.propTypes,
  headingAppearance: PropTypes.oneOf(['H2', 'custom']),
};

ModalHeading.defaultProps = {
  headingAppearance: 'custom',
};

export default ModalHeading;
