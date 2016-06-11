  test.it('should show add donor button', function() {
    driver.get('http://localhost:3000');
    driver.isElementPresent(webdriver.By.id('add-donor-button')).then(function(result) {
      assert(result, "Add donor present");
    });
  });

  test.it('should show add donor popup', function() {
    driver.get('http://localhost:3000');
    var addDonor = driver.findElement(webdriver.By.id('add-donor-button'));
    addDonor.click();
    //var searchResultItem = driver.findElement(webdriver.By.className('pac-item'));
    driver.wait(function() {
      return driver.isElementPresent(webdriver.By.className('modal-dialog'));
    }, 20000).then(function(result) {
      driver.isElementPresent(webdriver.By.name('name')).then(function(result) {
        assert(result, "Name input donor present");
      });
      driver.isElementPresent(webdriver.By.name('contactNumber')).then(function(result) {
        assert(result, "contactNumber input donor present");
      });
      driver.isElementPresent(webdriver.By.name('bloodGroup')).then(function(result) {
        assert(result, "bloodGroup input donor present");
      });
      driver.isElementPresent(webdriver.By.xpath('//input[@type="submit" and @value="Register"]')).then(function(result) {
        assert(result, "Register button present");
      });
      var closeButton = driver.findElement(webdriver.By.xpath('//button[@type="button" and @class="close"]'));
      closeButton.click();
      driver.sleep(1000);
    });
  });

  test.it('should add donor', function() {
    var addDonor = driver.findElement(webdriver.By.id('add-donor-button'));
    addDonor.click();
    //var searchResultItem = driver.findElement(webdriver.By.className('pac-item'));
    driver.wait(function() {
      return driver.isElementPresent(webdriver.By.className('modal-dialog'));
    }, 20000).then(function(result) {
      var name = driver.findElement(webdriver.By.xpath('//input[@name="name"]'));
      var email = driver.findElement(webdriver.By.xpath('//input[@name="email"]'));
      var contactNumber = driver.findElement(webdriver.By.xpath('//input[@name="contactNumber"]'));
      var bloodGroup = driver.findElement(webdriver.By.xpath('//input[@name="bloodGroup"]'));
      var registerButton = driver.findElement(webdriver.By.xpath('//input[@type="submit" and @value="Register"]'));
      name.sendKeys("Test ");
      email.sendKeys("test@test.com");
      contactNumber.sendKeys("+91-99934242342");
      bloodGroup.sendKeys("O+");
      registerButton.click();

      driver.wait(function() {
        return driver.isElementPresent(webdriver.By.id('donor-id'));
      }, 20000).then(function(result) {
        var donorId = driver.findElement(webdriver.By.id('donor-id'));
        donorId.getAttribute('innerHTML').then(function(value) {
         assert((value.length == 24), "Got id with length 24");
        });
      });
    });
  });
