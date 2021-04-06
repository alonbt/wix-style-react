const path = require('path');

const base_components_meta = require('wix-style-react/.wuf/components.json');

/** manually added theme files */
const business_dashboard_theme_meta = {
  BusinessDashboard_theme: {
    path: 'src/Themes/businessDashboard/perfer-tests/theme',
  },
};

const components_meta = {
  ...base_components_meta,
  ...business_dashboard_theme_meta,
};

const components = Object.keys(components_meta).reduce((accu, comp) => {
  return {
    ...accu,
    [comp]: `${components_meta[comp].path.replace(
      'src/',
      '../../wix-style-react/dist/es/src/',
    )}/index`,
  };
}, {});

module.exports = {
  entry: {
    ...components,
  },
  externals: {
    react: 'react',
    'react-dom': 'reactDOM',
    'prop-types': 'propTypes',
    'react-is': 'react-is',
  },
};
