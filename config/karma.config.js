const webpackTestConfig = require('./webpack.test');
const config = require('./config');

const karmaConfig = function (karma) {
  karma.set({
    basePath: config.paths.app,
    frameworks: ['jasmine'],
    files: [
      'spec.ts',
      '**/*.spec.ts'
    ],
    preprocessors: { '**/*.ts': ['webpack', 'sourcemap'] },
    webpack: webpackTestConfig,
    webpackServer: { noInfo: true },
    reporters: ['mocha'],
    port: 9876,
    colors: false,
    logLevel: karma.LOG_INFO,
    autoWatch: true,
    autoWatchBatchDelay: 300,
    browsers: ['PhantomJS']
  })
};

module.exports = karmaConfig;