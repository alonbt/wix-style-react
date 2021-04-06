import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';
import Heading from '../Heading';
import Text from '../Text';
import deprecationLog from '../utils/deprecationLog';

const EndorseContentLayout = ({ head, content, primaryCta, secondaryCta }) => {
  deprecationLog(
    '<EndorseContentLayout/> - Component is deprecated and will be removed as part of the next major version.',
  );
  return (
    <div className={styles.root}>
      {head && (
        <Heading className={styles.head} appearance="H1">
          {head}
        </Heading>
      )}
      {content && (
        <Text className={styles.content} size="medium" weight="thin">
          {content}
        </Text>
      )}
      {primaryCta && <div className={styles.primaryCta}>{primaryCta}</div>}
      {secondaryCta && (
        <div className={styles.secondaryCta}>{secondaryCta}</div>
      )}
    </div>
  );
};

EndorseContentLayout.propTypes = {
  head: PropTypes.node,
  content: PropTypes.node,
  primaryCta: PropTypes.node,
  secondaryCta: PropTypes.node,
};

export default EndorseContentLayout;
