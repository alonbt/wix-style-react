const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');

const styleLoaderConfig = require('./style-loader.config');
const svgLoaderConfig = require('./svg-loader.config');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
      },

      styleLoaderConfig,
      svgLoaderConfig,

      {
        test: /\.md$/,
        loader: 'raw-loader',
      },

      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|otf|eot|wav|mp3|webm|mp4)$/,
        loader: 'url-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [new StylableWebpackPlugin()],
  node: { fs: 'empty', tls: 'empty', __dirname: true },
};
