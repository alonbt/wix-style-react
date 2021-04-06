const cssLoaderOptions = {
  sourceMap: false,
  localsConvention: 'camelCase',
  modules: {
    hashPrefix: 'wix-style-react',
    localIdentName: '[path][name]__[local]__[hash:base64:5]',
  },
  importLoaders: 4,
};

module.exports = {
  test: /\.scss$/,
  rules: [
    {
      loader: 'style-loader',
      options: { injectType: 'singletonStyleTag' },
    },
    {
      oneOf: [
        {
          test: /\.global\.[A-z]*$/,
          loader: 'css-loader',
          options: {
            ...cssLoaderOptions,
            modules: false,
          },
          sideEffects: true,
        },
        {
          loader: 'css-loader',
          options: cssLoaderOptions,
        },
      ],
    },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: [
          require('autoprefixer')({
            overrideBrowserslist: [
              '> 0.5%',
              'last 2 versions',
              'Firefox ESR',
              'not dead',
              'ie >= 11',
            ].join(','),
            flexbox: 'no-2009',
          }),
        ],
        sourceMap: true,
      },
    },
    { loader: 'resolve-url-loader' },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        includePaths: ['node_modules', 'node_modules/compass-mixins/lib'],
      },
    },
  ],
};
