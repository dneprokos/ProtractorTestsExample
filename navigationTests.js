var navigationMenu = require('./PageObjects/navigationMenu.js');
var baseSteps = require('./PageObjects/baseSteps.js');

// spec.js
describe('Protractor with non-Angular app demo', function() {

    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        baseSteps.openHomePage();
    });

    it('should have a title', function() {  
      expect(browser.getTitle()).toEqual('Automatic Coupons, Huge Sales, and Cash back! - Piggy');
    });

    it('should navigate to Chrome Extension App', function() {
      navigationMenu.clickAppNavigationLink();
      baseSteps.swithToNewOpenedWindow();
      expect(baseSteps.getCurrentUrl()).toEqual('https://chrome.google.com/webstore/detail/piggy-automatic-coupons-c/hfapbcheiepjppjbnkphkmegjlipojba?hl=en');              
    });
   
    it('should navigate to Coupons page', function() {
        navigationMenu.clickCouponLink();
        expect(baseSteps.getCurrentUrl()).toEqual('https://www.joinpiggy.com/coupons');
    });

    it('should navigate to Cashback-stores page', function() {
        navigationMenu.clickStoresLink();
        expect(baseSteps.getCurrentUrl()).toEqual('https://www.joinpiggy.com/cashback-stores');
    });
  });