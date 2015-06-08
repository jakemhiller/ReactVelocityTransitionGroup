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
    'react/addons': 'React'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader?optional[]=runtime&cacheDirectory'
      }
    ]
  }
};
