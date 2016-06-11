
  test.it('should search for place and return 5 results', function() {
    driver.get('http://localhost:3000');
    var searchBox = driver.findElement(webdriver.By.id('home-search-box'));
    searchBox.sendKeys('Guntur');
    //var searchResultItem = driver.findElement(webdriver.By.className('pac-item'));
    driver.wait(function() {
      return driver.isElementPresent(webdriver.By.className('pac-item'));
    }, 20000).then(function(result) {
      driver.findElements(webdriver.By.className('pac-item')).then(function(elements){
        assert(elements.length, 5, "5 elements are shown");
      });
    });
  });
