var NavigationObjects = function() {
    //Selectors
    const couponsNavigationLink = element(by.xpath(`//li[@class="coupons-store"]/a[.='Coupons']`));

    const storesNavigationLink = element.all(by.css('li.coupons-store>a'))
        .filter(function(elem) {
            return elem.getText().then(function(text) {
              return text === 'Stores';
            });
        }).first();
    
    const getTheAppNavigationLink = element(by.css('li#get-the-app>a'));

    const loginPopupWindow = element(by.xpath(`//div[@class='modal fade form-modal login-modal in']`));

    const createAccountPopupWindow = element(by.xpath(`//div[@class='modal fade form-modal join-modal in']`));

    //Methods    
    this.clickCouponLink = function() {
        couponsNavigationLink.click();
    }

    this.clickStoresLink = function() {
        storesNavigationLink.click();
    }

    this.clickAppNavigationLink = function() {
        getTheAppNavigationLink.click();
    }

    this.clickNavigationMenuItem = function(menuName) {
        element(by.xpath(`//div[@class='drawer']//ul[1]//a[.='${ menuName }']`)).click();
    }
}

    

module.exports = new NavigationObjects();