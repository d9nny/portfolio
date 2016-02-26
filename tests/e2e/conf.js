exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['aboutUsFeature.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }]
}


