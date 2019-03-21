var BaseSteps = function() {
    this.openHomePage = function() {
        browser.get('/');
    }

    this.getCurrentUrl = function() {
        return browser.getCurrentUrl();
    }

    this.getPageTitle = function() {
        return browser.getTitle();
    }

    this.swithToNewOpenedWindow = function() {
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]);
          });
    }
}

module.exports = new BaseSteps();