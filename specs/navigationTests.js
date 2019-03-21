var navigationMenu = require('../PageObjects/navigationMenu.js');
var baseSteps = require('../PageObjects/baseSteps.js');

// spec.js
describe('Protractor with non-Angular app demo', function() {

    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        baseSteps.openHomePage();
    });

    describe('Data driven test for navigation menu', function() {
      var menuItems =  [
        { menuItem: 'Coupons', pageTitle: 'Coupons & Sales' }, 
        { menuItem: 'Stores', pageTitle: 'Browse by Store' }
      ];

      menuItems.forEach((obj) => {
        var title = obj.pageTitle;
        var menuName = obj.menuItem;

        it(`should have ${ title } when navigate to ${ menuName }`, function() {
          navigationMenu.clickNavigationMenuItem(menuName);
          expect(title).toEqual(baseSteps.getPageTitle());              
        }); 
      })

      it(`should have 'Piggy - Coupons and Cash Back - Apps on Google Play' when navigate to Get the App!`, function() {
        navigationMenu.clickNavigationMenuItem('Get the App!');
        baseSteps.swithToNewOpenedWindow();
        expect('Piggy - Automatic Coupons & Cash Back - Chrome Web Store').toEqual(baseSteps.getPageTitle());              
      });

    })

    
  });