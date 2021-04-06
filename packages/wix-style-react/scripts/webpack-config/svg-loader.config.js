module.exports = {
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        svgoConfig: {
          plugins: {
            removeViewBox: false,
          },
        },
      },
    },
    {
      loader: 'svg-url-loader',
      options: {
        iesafe: true,
        noquotes: true,
        limit: 10000,
        name: 'media/[name].[hash:8].[ext]',
      },
    },
  ],
};
