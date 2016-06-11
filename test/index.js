global.assert = require('assert'),
global.test = require('selenium-webdriver/testing'),
global.webdriver = require('selenium-webdriver');
global.driver = new webdriver.Builder().
    usingServer('http://localhost:9515').
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}

test.describe('Load', function() {
  test.it('should load map with search box', function() {
    driver.get('http://localhost:3000');
    driver.wait(function() {
      return driver.isElementPresent(webdriver.By.id('home-search-box'));
    }, 20000).then(function(result) {
      assert(result, "Search box present");
      driver.isElementPresent(webdriver.By.className('gm-style')).then(function(result) {
        assert(result, "Map component present");
      });
    });
  });
  importTest("Home", './modules/home');
  importTest("Add donor", './modules/addDonor');
});

test.after(function() {
  //driver.quit();
});
