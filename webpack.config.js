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
  externals: [
    {
      'react/addons': {
        root: 'React',
        commonjs2: 'react/addons',
        commonjs: 'react/addons',
        amd: 'react/addons'
      },
      'velocity-animate': {
        root: 'Velocity',
        commonjs2: 'react/addons',
        commonjs: 'react/addons',
        amd: 'react/addons'
      },
      'velocity-animate/velocity.ui': {
        root: 'Velocity',
        commonjs2: 'velocity-animate/velocity.ui',
        commonjs: 'velocity-animate/velocity.ui',
        amd: 'velocity-animate/velocity.ui'
      },
      'lodash': {
        root: '_',
        commonjs2: 'lodash',
        commonjs: 'lodash',
        amd: 'lodash'
      }
    }
  ],
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
