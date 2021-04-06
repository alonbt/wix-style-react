import React from 'react';
import PropTypes from 'prop-types';

import { dataAttr, featuresMap } from './constants';
import { WixStyleReactContext } from './context';
import FontUpgrade from '../FontUpgrade';

/** Wix Style React Provider */
const WixStyleReactProvider = ({
  dataHook,
  className,
  as,
  children,
  features,
}) => {
  const { reducedSpacingAndImprovedLayout } = features;

  return (
    <WixStyleReactContext.Provider value={features}>
      {React.createElement(
        as,
        {
          'data-hook': dataHook,
          className,
          [dataAttr.layoutSpacing]: reducedSpacingAndImprovedLayout || null,
        },
        <FontUpgrade as={as} active={reducedSpacingAndImprovedLayout}>
          {children}
        </FontUpgrade>,
      )}
    </WixStyleReactContext.Provider>
  );
};

WixStyleReactProvider.displayName = 'WixStyleReactProvider';

WixStyleReactProvider.propTypes = {
  /** Applied as data-hook HTML attribute that can be used to create driver in testing */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** render as some other component or DOM tag */
  as: PropTypes.oneOf(['span', 'div']),

  /** A renderable node */
  children: PropTypes.node,

  /** Object which represent all features you would like to use. The available features are:
   * - `reducedSpacingAndImprovedLayout`: reducing the spacing to improve the application layout.
   * */
  features: PropTypes.object,
};

WixStyleReactProvider.defaultProps = {
  as: 'div',
  features: {},
};

export default WixStyleReactProvider;

export const FEATURES = featuresMap;
