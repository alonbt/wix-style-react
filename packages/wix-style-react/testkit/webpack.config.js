const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, './puppeteer.js'),
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve('./dist/testkit'),
    filename: 'puppeteer-testkit-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    // Puppeteer drivers don't use styles, so we want to ignore them
    // by replacing them with empty objects
    new webpack.NormalModuleReplacementPlugin(
      /\.(s?css)$/,
      path.join(__dirname, './fake-style-module.js'),
    ),
  ],
  mode: 'development',
  devtool: false, // the default is `eval` in development mode, which may be harder to debug
};
