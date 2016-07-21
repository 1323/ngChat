const webpackTestConfig = require('./webpack.test');
const config = require('./config');

const karmaConfig = function (karma) {
  karma.set({
    basePath: config.paths.app,
    frameworks: ['jasmine'],
    files: [
        '**/*.spec.ts'
    ],
    preprocessors: {
        '**/*.ts': ['coverage', 'webpack', 'sourcemap']
    },
    webpack: webpackTestConfig,
    webpackServer: { noInfo: true },
    reporters: ['mocha', 'coverage'],
    port: 9876,
    colors: false,
    logLevel: karma.LOG_INFO,
    autoWatch: false,
    autoWatchBatchDelay: 300,
    browsers: ['PhantomJS'],
    coverageReporter: {
        reporters: [{
            type: 'text-summary'
        }]
    },
    plugins: [
        require('karma-sourcemap-loader'),
        require('karma-phantomjs-launcher'),
        require('karma-chrome-launcher'),
        require('karma-firefox-launcher'),
        require('karma-safari-launcher'),
        require('karma-webpack'),
        require('karma-jasmine'),
        require('karma-mocha-reporter'),
        require('karma-coverage')
    ]
  })
};

module.exports = karmaConfig;