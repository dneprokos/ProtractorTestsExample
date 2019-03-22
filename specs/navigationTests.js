var navigationObjects = require('../PageObjects/navigationObjects.js');
var globalObjects = require('../PageObjects/globalObjects.js');

// spec.js
describe('Navigation menu tests', function() {
  beforeEach(function() {
    browser.waitForAngularEnabled(false);
    globalObjects.openHomePage();
  });

  var menuItems =  [
    { menuItem: 'Coupons', pageTitle: 'Coupons & Sales' }, 
    { menuItem: 'Stores', pageTitle: 'Browse by Store' }
  ];

  menuItems.forEach((obj) => {
    var title = obj.pageTitle;
    var menuName = obj.menuItem;

    it(`Title should have "${ title }" when navigate to "${ menuName }" menu`, function() {
      navigationObjects.clickNavigationMenuItem(menuName);
      expect(title).toEqual(globalObjects.getPageTitle());              
    }); 
  });

  it(`Title should have "Piggy - Coupons and Cash Back - Apps on Google Play" when navigate to "Get the App!" menu`, function() {
    navigationObjects.clickNavigationMenuItem('Get the App!');
    globalObjects.swithToNewOpenedWindow();
    expect('Piggy - Automatic Coupons & Cash Back - Chrome Web Store').toEqual(globalObjects.getPageTitle());              
  });
});