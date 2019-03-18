// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['navigationTests.js'],
    baseUrl: 'https://www.joinpiggy.com',
    multiCapabilities: [ {
        browserName: 'chrome',
        chromeOptions: { args: [ "--headless", "--disable-gpu", "--window-size=1920,1080"] } 
    }],
    jasmineNodeOpts: {
        showColors: true
    }
  }