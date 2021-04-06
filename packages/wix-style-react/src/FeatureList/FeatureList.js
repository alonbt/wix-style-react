import React from 'react';
import PropTypes from 'prop-types';

import { st, classes } from './FeatureList.st.css';
import { dataHooks } from './constants';

import FluidColumns from '../common/FluidColumns';
import Text from '../Text';

/** FeatureList is a group of layouts that displays image, description and title. It's used in a footer of a marketing page to list product features. */
class FeatureList extends React.Component {
  render() {
    const { dataHook, className, features, cols } = this.props;
    return (
      <div className={st(classes.root, className)} data-hook={dataHook}>
        <FluidColumns cols={cols}>
          {features.map((feature, index) => {
            return (
              <FeatureItem
                dataHook={dataHooks.feature}
                key={index}
                index={index}
                image={feature.image}
                title={feature.title}
                text={feature.text}
              />
            );
          })}
        </FluidColumns>
      </div>
    );
  }
}

const FeatureItem = ({ dataHook, index, image, title, text }) => (
  <div className={classes.featureItem} data-hook={dataHook}>
    {image && (
      <div
        className={classes.featureItemImageContainer}
        data-hook={`${dataHooks.featureImage}${index}`}
        children={image}
      />
    )}
    <div className={classes.featureItemTextContainer}>
      {title && (
        <div className={classes.featureItemTitleContainer}>
          <Text
            dataHook={`${dataHooks.featureTitle}${index}`}
            size="medium"
            weight="bold"
          >
            {title}
          </Text>
        </div>
      )}
      {text && (
        <Text dataHook={`${dataHooks.featureText}${index}`} size="small">
          {text}
        </Text>
      )}
    </div>
  </div>
);

FeatureList.displayName = 'FeatureList';

FeatureList.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Define the number of columns. It is used for the grid in order to define how many features will be displayed in a row. The default value is 3. */
  cols: PropTypes.number,

  /**
   * Array of features
   *  * `image` - the feature image.
   *  * `title` - the feature title.
   *  * `text` - the feature content.
   */
  features: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.node,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
};

FeatureList.defaultProps = {
  cols: 3,
  features: [],
};

export default FeatureList;
