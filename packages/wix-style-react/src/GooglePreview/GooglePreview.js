import React from 'react';
import PropTypes from 'prop-types';
import { st, classes } from './GooglePreview.st.css';

import Text from '../Text';
import Box from '../Box';

/**
 *  A preview of a title, link and description of SEO result as it displayed in Google
 */
const GooglePreview = ({
  dataHook,
  previewUrl,
  title,
  description,
  titleMaxLines,
  descriptionMaxLines,
  skin,
}) => (
  <Box
    className={st(classes.root, {
      transparent: skin === 'transparent',
    })}
    dataHook={dataHook}
    direction="vertical"
  >
    <Text
      weight="thin"
      size="tiny"
      light={false}
      className={classes.googlePreviewUrl}
      dataHook={'googlePreview-previewUrl'}
      ellipsis
    >
      {previewUrl}
    </Text>
    <Text
      className={classes.googlePreviewTitle}
      dataHook={'googlePreview-title'}
      weight="bold"
      size="medium"
      secondary={false}
      light={false}
      ellipsis
      maxLines={titleMaxLines}
    >
      {title}
    </Text>
    <Text
      className={classes.googlePreviewDescription}
      weight="thin"
      size="tiny"
      light={false}
      dataHook="googlePreview-description"
      ellipsis
      maxLines={descriptionMaxLines}
    >
      {description}
    </Text>
  </Box>
);

GooglePreview.displayName = 'GooglePreview';

GooglePreview.propTypes = {
  dataHook: PropTypes.string,

  /** A site title */
  title: PropTypes.string,

  /** truncates text at a specific number of lines. */
  titleMaxLines: PropTypes.number,

  /** A link for the site */
  previewUrl: PropTypes.string,

  /** A short description for the site */
  description: PropTypes.string,

  /** truncates text at a specific number of lines. */
  descriptionMaxLines: PropTypes.number,

  /** Widget background color. `transparent` will hide border as well*/
  skin: PropTypes.oneOf(['light', 'transparent']),
};
GooglePreview.defaultProps = {
  titleMaxLines: 1,
  descriptionMaxLines: 2,
  skin: 'light',
};

export default GooglePreview;
