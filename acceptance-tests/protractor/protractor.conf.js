exports.config = {
    seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.43.1.jar',
    specs: ['spec/login.spec.js'],
    capabilities: {
        'browserName': ['chrome', 'firefox']
    }
};