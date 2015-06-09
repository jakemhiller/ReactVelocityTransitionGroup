var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'specs/main.js'
    ],

    exclude: [
    ],

    preprocessors: {
      'specs/main.js': ['webpack', 'sourcemap']
    },

    webpack: {
      module: webpackConfig.module
    },

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

    browsers: ['PhantomJS'],

    singleRun: false
  });
};
