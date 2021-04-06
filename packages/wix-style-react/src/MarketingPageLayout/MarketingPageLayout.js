import React from 'react';
import PropTypes from 'prop-types';

import { st, classes } from './MarketingPageLayout.st.css';
import { dataHooks } from './constants';

import { Layout, Cell } from '../Layout';
import Divider from '../Divider';

/** Marketing Page Layout */
class MarketingPageLayout extends React.PureComponent {
  render() {
    const {
      dataHook,
      className,
      horizontalSize,
      verticalSize,
      removeImageHorizontalPadding,
      removeImageVerticalPadding,
      content,
      image,
      footer,
    } = this.props;

    return (
      <div
        data-hook={dataHook}
        className={st(
          classes.root,
          {
            horizontalSize,
            verticalSize,
            removeImageHorizontalPadding,
            removeImageVerticalPadding,
          },
          className,
        )}
      >
        <Layout gap={0}>
          {content && (
            <Cell span={6}>
              <div
                data-hook={dataHooks.contentContainer}
                className={classes.contentContainer}
              >
                {content}
              </div>
            </Cell>
          )}
          {image && (
            <Cell span={6}>
              <div
                data-hook={dataHooks.imageContainer}
                className={classes.imageContainer}
              >
                {image}
              </div>
            </Cell>
          )}
          {footer && (
            <Cell span={12}>
              <Divider />
              <div
                data-hook={dataHooks.footerContainer}
                className={classes.footerContainer}
              >
                {footer}
              </div>
            </Cell>
          )}
        </Layout>
      </div>
    );
  }
}

MarketingPageLayout.displayName = 'MarketingPageLayout';

MarketingPageLayout.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Specifies the horizontal padding size. The default value is 'large'. */
  horizontalSize: PropTypes.oneOf(['medium', 'large']),

  /** Specifies the vertical padding size. The default value is 'large'. */
  verticalSize: PropTypes.oneOf(['medium', 'large']),

  /** Determine if to remove the image side padding. The padding is added only on the right side. */
  removeImageHorizontalPadding: PropTypes.bool,

  /** Determine if to remove the image vertical padding. */
  removeImageVerticalPadding: PropTypes.bool,

  /** The page's content. Use: <MarketingPageLayoutContent/> */
  content: PropTypes.node,

  /** The page's image */
  image: PropTypes.node,

  /** The page's footer. Use <TestimonialList/> or <FeatureList/> */
  footer: PropTypes.node,
};

MarketingPageLayout.defaultProps = {
  horizontalSize: 'large',
  verticalSize: 'large',
  removeImageHorizontalPadding: false,
  removeImageVerticalPadding: false,
};

export default MarketingPageLayout;
