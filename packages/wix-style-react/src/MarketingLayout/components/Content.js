import React from 'react';
import PropTypes from 'prop-types';

import Description from './Description';
import Title from './Title';
import { SIZES } from '../constants';
import { APPEARANCES } from '../../Heading';
import { SIZES as TEXT_SIZES } from '../../Text';
import { classes } from '../MarketingLayout.st.css';

const titleAppearanceBySize = {
  [SIZES.tiny]: SIZES.tiny,
  [SIZES.small]: APPEARANCES.H3,
  [SIZES.medium]: APPEARANCES.H2,
  [SIZES.large]: APPEARANCES.H2,
};

const descriptionSizeBySize = {
  [SIZES.tiny]: TEXT_SIZES.small,
  [SIZES.small]: TEXT_SIZES.small,
  [SIZES.medium]: TEXT_SIZES.medium,
  [SIZES.large]: TEXT_SIZES.medium,
};

const Content = ({ size, actions, title, description }) => (
  <div className={classes.contentContainer}>
    <div>
      <Title appearance={titleAppearanceBySize[size]}>{title}</Title>
      <Description size={descriptionSizeBySize[size]}>
        {description}
      </Description>
    </div>
    {actions}
  </div>
);

Content.propTypes = {
  size: PropTypes.string,
  actions: PropTypes.node,
  title: PropTypes.node,
  description: PropTypes.node,
};

export default Content;
