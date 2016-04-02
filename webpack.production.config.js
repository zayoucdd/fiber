// Variables used to require webpack modules
var path = require('path');
var webpack = require('webpack');

// Sets up module exports for other files to reference
module.exports = {
  // entry point for the bundle
  entry: {
    / Sets up the app module index file
    app : [
      './lib/index.js'],
  },
  // Options for output, like path directory and filename
  output: {
    path: path.join(__dirname, './public/js/'),
    filename: `app.js`,
    publicPath: '/js/'
  },
  // Specifies plugins used by the app
  plugins: [
    new webpack.DefinePlugin({
      //specifies node plugin environment 
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
    }),
  ],
  // Compile for usage in node environment. FileSystem set to empty for node
  node: {
    fs: "empty"
  },
  // options affecting the resolving of modules
  resolve: {
    // Replace modules with other paths. Allows app to utilize react
    // Replaces react with react path
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    // An array of extensions used to resolve modules. Discovers all js files
    extensions: ['', '.js']
  },
  // Similar to resolve, but for loaders (resolves path for fallback)
  resolveLoader: {
    'fallback': path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
    {
      // A condition that must be met. Use js files
      test: /\.js$/,
      // An array of loaders as string used to load js files
      loaders: ['react-hot', 'babel'],
      // Excludes node_modules
      exclude: /node_modules/,
      // Directory path to include
      include: [path.join(__dirname,'./lib')]
    },
    {
      // Use xml files
      test: /\.xml$/,
      // Raw loader
      loader: "raw"
    },
    {
      // Use json files
      test: /\.json$/,
      // JSON loader
      loaders: ['json-loader']
    },
    {
      // Use CSS fils
      test: /\.css?$/,
      // Array of loaders to load CSS files
      loaders: ['style', 'raw'],
      // Default directory
      include: __dirname
    }]
  }
};
