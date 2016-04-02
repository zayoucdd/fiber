// Variables used to require webpack modules
var path = require('path');
var webpack = require('webpack');

// Sets up module exports for other files to reference
module.exports = {
  // Developer tool to enhance debugging
  devtool: 'eval',
  // entry point for the bundle
  entry: {
    // Sets up the app module, including server, client, and index file
    app : [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
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
    new webpack.HotModuleReplacementPlugin()
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
  // Similar to resolve, but for loaders (resolves path)
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
      // Json loader
      loaders: ['json-loader']
    },
    {
      // Use CSS files
      test: /\.css?$/,
      // Array of loaders to load CSS files
      loaders: ['style', 'raw'],
      // Default directory
      include: __dirname
    }]
  }
};
