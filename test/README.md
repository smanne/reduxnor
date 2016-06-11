Automation testing for this done using selenium, mocha.

[_**Selenium webdriver**_](https://www.npmjs.com/package/selenium-webdriver) is used for automating interaction with the browser.

[_**Mocha**_](https://mochajs.org/) is used as testing framework.

###Installaton

To run this project we need nodejs. To install nodejs on mac we use homebrew

1. Install [brew](http://brew.sh/)
2. Install [nodejs using brew](http://shapeshed.com/setting-up-nodejs-and-npm-on-mac-osx/)
3. Install mocha globally `npm install -g mocha`
4. Go to project directory & install dependecies using `npm install`
5. Run tests using `npm test`

###Test folder setup

Folder structure contains index.js which is root file for test. All module files are there in modules folder.

For ex: login.js contains all login related test cases. You can create new module test case and include by using `importTest("ModuleName", './modules/modulefilename');`
