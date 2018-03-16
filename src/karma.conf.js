// Karma configuration
// Generated on Mon Jan 22 2018 09:45:44 GMT-0500 (Eastern Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs', 'karma-typescript'],
    plugins: [
        require('karma-requirejs'),
        require('karma-jasmine'),
        require('karma-jasmine-html-reporter'),
        require('karma-chrome-launcher'),
        require('karma-coverage-istanbul-reporter'),
        require('@angular/cli/plugins/karma'),
        require('karma-typescript')
    ],
    // list of files / patterns to load in the browser
    files: [
      {pattern: './*.spec.ts', included: true},
      {pattern: './**/graph-donut.ts', included: true}
    ],
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    // list of files / patterns to exclude
    exclude: [
    ],
    preprocessors: {
      "**/*.ts":"karma-typescript"
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'kjhtml', "karma-typescript"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
