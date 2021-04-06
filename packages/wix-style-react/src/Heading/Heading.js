import React from 'react';
import PropTypes from 'prop-types';
import Ellipsis, { extractEllipsisProps } from '../common/Ellipsis';
import { st, classes } from './Heading.st.css';
import { EllipsisCommonProps } from '../common/PropTypes/EllipsisCommon';
import { WixStyleReactContext } from '../WixStyleReactProvider/context';

export const APPEARANCES = {
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  H4: 'H4',
  H5: 'H5',
  H6: 'H6',
};

const Heading = props => {
  const { ellipsisProps, componentProps } = extractEllipsisProps(props);
  const {
    light,
    appearance,
    children,
    dataHook,
    ...headingProps
  } = componentProps;

  return (
    <WixStyleReactContext.Consumer>
      {({ reducedSpacingAndImprovedLayout }) => (
        <Ellipsis
          {...ellipsisProps}
          wrapperClassName={st(classes.root, { appearance })}
          render={({ ref, ellipsisClasses }) =>
            React.createElement(
              appearance.toLowerCase(),
              {
                ...headingProps,
                ref,
                'data-hook': dataHook,
                className: st(
                  classes.root,
                  { light, appearance, reducedSpacingAndImprovedLayout },
                  ellipsisClasses(props.className),
                ),
                'data-appearance': appearance,
                'data-light': light,
              },
              children,
            )
          }
        />
      )}
    </WixStyleReactContext.Consumer>
  );
};

Heading.displayName = 'Heading';

Heading.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** Any nodes to be rendered (usually text nodes) */
  children: PropTypes.any,

  /** Has dark or light skin */
  light: PropTypes.bool,

  /** Typography of the heading */
  appearance: PropTypes.oneOf(Object.keys(APPEARANCES)),

  ...EllipsisCommonProps,
};

Heading.defaultProps = {
  appearance: APPEARANCES.H1,
  light: false,
  ...Ellipsis.defaultProps,
};

export default Heading;
