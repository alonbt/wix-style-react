# Usage with Create Stylable App

wix-style-react is built with [Stylable](https://stylable.io/), therefore we recommend you build your project using Create Stylable App.

Follow these steps in order to configure your own wix-style-react project:

1. Create a new project:
```bash
npx create-stylable-app my-wsr-app
cd my-wsr-app
```

2. Install wix-style-react
```bash
npm install wix-style-react --save
```

3. Install necessary loaders:
```bash
npm install url-loader style-loader css-loader node-sass resolve-url-loader sass-loader --save-dev
```

4. Use loaders in `webpack.config.js` file:
```diff
  const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
+ const path = require('path');

  module.exports = {
      mode: 'development',
      devtool: 'source-map',
      module: {
          rules: [
              {
                  test: /\.tsx?$/,
                  loader: 'ts-loader',
              },
-             {
-                 test: /\.(png|jpg|jpeg|gif|svg)$/,
-                 loader: 'file-loader',
-             },
+             {
+                 test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
+                 use: [
+                     {
+                         loader: 'url-loader',
+                     }
+                 ]
+             },
+             {
+                 test: /\.scss$/,
+                 include: [
+                     path.join(__dirname, 'node_modules/wix-animations'),
+                     path.join(__dirname, 'node_modules/wix-style-react'),
+                     path.join(__dirname, 'node_modules/bootstrap-sass')
+                 ],
+                 use: [
+                     {
+                         loader: 'style-loader'
+                     },
+                     {
+                         loader: 'css-loader',
+                         options: {
+                             importLoaders: 1,
+                             modules: {
+                                 localIdentName: '[name]__[local]___[hash:base64:5]',
+                                 exportLocalsConvention: 'camelCase',
+                             }
+                         }
+                     },
+                     {
+                         loader: 'resolve-url-loader'
+                     },
+                     {
+                         loader: 'sass-loader',
+                         options: {
+                             sourceMap: true
+                         }
+                     },
+                 ],
+             },
          ],
      },
      resolve: {
          extensions: ['.ts', '.tsx', '.mjs', '.js', '.json'],
      },
      plugins: [new StylableWebpackPlugin(), new HtmlWebpackPlugin({ title: 'Stylable App' })],
  };
```

5. You're good to go, just run your app!
```bash
npm run start
```

### Note:
If you decide not to use a Stylable compatible project template, please read [here](https://stylable.io/docs/getting-started/install-configure) how to add Stylable loader to your project manually.
