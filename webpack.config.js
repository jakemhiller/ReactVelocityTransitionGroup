module.exports = {
  entry: './index.js',
  output: {
    path: './dist',
    publicPath: '/dist/',
    filename: 'ReactVelocityTransitionGroup.js',
    sourceMapFilename: 'ReactVelocityTransitionGroup.map',
    library: 'ReactVelocityTransitionGroup',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'React'
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
  }
};
