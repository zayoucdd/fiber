var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    app : [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './lib/index.js'],
  },
  output: {
    path: path.join(__dirname, './public/js/'),
    filename: `app.js`,
    publicPath: '/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  node: {
    fs: "empty"
  },
  resolve: {
    alias: {
      // 'redux-devtools/lib': path.join(__dirname, '..', '..', 'src'),
      // 'redux-devtools': path.join(__dirname, '..', '..', 'src'),
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js']
  },
  resolveLoader: {
    'fallback': path.join(__dirname, 'node_modules')
  },
  module: {
    noParse: [/acorn\/dist/],   // supress Critical dependencies: acorn/dist/walk.js
    loaders: [
    {
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
      include: [path.join(__dirname,'./lib')]
    },
    {
      test: /\.xml$/,
      loader: "raw"
    },
    {
      test: /\.json$/,
      loaders: ['json-loader']
    },
    {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: __dirname
    }]
  }
};
