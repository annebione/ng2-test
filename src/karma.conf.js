module.exports = function(config) {
    config.set({
 
        basePath: '.',
 
        frameworks: ['jasmine'],
 
        files: [
            {pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true},
            {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
            {pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true},
            {pattern: 'karma-test-shim.js', included: true, watched: true},
 
            {pattern: 'dist/**/*.js', included: false, watched: true},
 
            {pattern: 'src/**/*.ts', included: false, watched: false},
            {pattern: 'dist/**/*.js.map', included: false, watched: false}
        ],
 

        proxies: {
        
            '/src/': '/base/src/'
        },
 
        port: 9876,
 
        logLevel: config.LOG_INFO,
 
        colors: true,
 
        autoWatch: true,
 
        browsers: ['Chrome'],
 
        // Karma plugins loaded
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher'
        ],
 
        // Coverage reporter generates the coverage
        reporters: ['progress', 'dots', 'coverage'],
 
        // Source files that you wanna generate coverage for.
        // Do not include tests or libraries (these files will be instrumented by Istanbul)
        preprocessors: {
            'app/**/!(*spec).js': ['coverage']
        },
 
        coverageReporter: {
            reporters:[
                {type: 'json', subdir: '.', file: 'coverage-final.json'}
            ]
        },
 
        singleRun: true
    })
};