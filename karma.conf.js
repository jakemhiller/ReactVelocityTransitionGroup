var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'specs/main.js',
      'node_modules/karma-babel-preprocessor/node_modules/babel-core/browser-polyfill.js'
    ],

    exclude: [
    ],

    preprocessors: {
      '**/*.js': ['babel']
    },

    webpack: webpackConfig.module,

    webpackServer: {
      stats: {
    	  colors: true
      }
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['Chrome'],

    singleRun: false,

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-webpack'),
      require('karma-babel-preprocessor')
    ]
  });
};
