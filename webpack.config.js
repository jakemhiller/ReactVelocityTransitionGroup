var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'ReactVelocityTransitionGroup.js',
    sourceMapFilename: 'ReactVelocityTransitionGroup.map',
    library: 'ReactVelocityTransitionGroup',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'React',
    'react/addons': 'React'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?optional[]=runtime&cacheDirectory'
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc',
    emitWarning: true,
    emitError: true
  },
  plugins: [
  ]
};
