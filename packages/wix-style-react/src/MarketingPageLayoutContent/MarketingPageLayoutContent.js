import React from 'react';
import PropTypes from 'prop-types';

import { st, classes } from './MarketingPageLayoutContent.st.css';
import { dataHooks, size } from './constants';

import Divider from '../Divider';
import Text, { SIZES as TEXT_SIZES } from '../Text';
import Heading, { APPEARANCES } from '../Heading';
import Box from '../Box';
import { isString } from '../utils/StringUtils';

const sizesMap = {
  overline: {
    [size.medium]: TEXT_SIZES.small,
    [size.large]: TEXT_SIZES.medium,
  },
  title: {
    [size.medium]: APPEARANCES.H2,
    [size.large]: APPEARANCES.H1,
  },
  subtitle: {
    [size.medium]: APPEARANCES.H4,
    [size.large]: APPEARANCES.H3,
  },
  content: {
    [size.medium]: TEXT_SIZES.small,
    [size.large]: TEXT_SIZES.medium,
  },
};

/** This component is used in the MarketingPageLayout component. It includes all the content of the page. */
class MarketingPageLayoutContent extends React.PureComponent {
  render() {
    const {
      dataHook,
      className,
      size,
      overline,
      title,
      subtitle,
      content,
      actions,
    } = this.props;

    return (
      <div data-hook={dataHook} className={st(classes.root, className)}>
        {overline && (
          <div data-hook={dataHooks.overlineContainer}>
            <Box color="D20">
              {isString(overline) ? (
                <Text
                  dataHook={dataHooks.overline}
                  size={sizesMap.overline[size]}
                  skin="standard"
                  secondary
                >
                  {overline}
                </Text>
              ) : (
                overline
              )}
            </Box>
            <div className={classes.overlineDividerContainer}>
              <Divider />
            </div>
          </div>
        )}
        {title && (
          <Box dataHook={dataHooks.titleContainer}>
            {isString(title) ? (
              <Heading
                dataHook={dataHooks.title}
                appearance={sizesMap.title[size]}
              >
                {title}
              </Heading>
            ) : (
              title
            )}
          </Box>
        )}
        {subtitle && (
          <Box dataHook={dataHooks.subtitleContainer} marginTop="SP2">
            {isString(subtitle) ? (
              <Heading
                dataHook={dataHooks.subtitle}
                appearance={sizesMap.subtitle[size]}
              >
                {subtitle}
              </Heading>
            ) : (
              subtitle
            )}
          </Box>
        )}
        {content && (
          <Box
            dataHook={dataHooks.contentContainer}
            marginTop="SP4"
            color="D10"
          >
            {isString(content) ? (
              <Text
                dataHook={dataHooks.content}
                size={sizesMap.content[size]}
                skin="standard"
              >
                {content}
              </Text>
            ) : (
              content
            )}
          </Box>
        )}
        {actions && (
          <Box
            dataHook={dataHooks.actions}
            marginTop="SP7"
            children={actions}
          />
        )}
      </div>
    );
  }
}

MarketingPageLayoutContent.displayName = 'MarketingPageLayoutContent';

MarketingPageLayoutContent.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Specifies the size of the marketing page layout content.  The default value is 'large'. */
  size: PropTypes.oneOf(['medium', 'large']),

  /** The overline content. */
  overline: PropTypes.node,

  /** The page's title. */
  title: PropTypes.node,

  /** The page's subtitle. */
  subtitle: PropTypes.node,

  /** The page's content. */
  content: PropTypes.node,

  /** The page's actions - area of buttons. */
  actions: PropTypes.node,
};

MarketingPageLayoutContent.defaultProps = {
  size: 'large',
};

export default MarketingPageLayoutContent;
