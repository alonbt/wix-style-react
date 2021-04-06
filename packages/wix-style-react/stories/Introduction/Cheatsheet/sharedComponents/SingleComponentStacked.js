import React from 'react';
import PropTypes from 'prop-types';
import ComponentNaming from './ComponentNaming';

import Preview from './Preview';
import singleComponentSizes from './constants';

import { Layout, Cell } from 'wix-style-react';

const SingleComponentStacked = ({
  name,
  componentsNames,
  children,
  size = singleComponentSizes.fullWidth,
}) => (
  <Cell>
    <Layout>
      <Cell>
        <ComponentNaming name={name} componentsNames={componentsNames} />
      </Cell>
      <Cell span={size}>{children}</Cell>
    </Layout>
  </Cell>
);

SingleComponentStacked.displayName = 'SingleComponentStacked';

SingleComponentStacked.defaultProps = {
  size: 12,
};

SingleComponentStacked.propTypes = {
  /** storybook name */
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** names of the used components */
  componentsNames: PropTypes.array,
  /** any node to render inside */
  children: PropTypes.node,
  /** size of the children column. Can be one of "singleComponentSizes" constant */
  size: PropTypes.number,
};

SingleComponentStacked.Preview = Preview;

export default SingleComponentStacked;
